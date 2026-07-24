/* NYUAD Compass — app logic: navigation, search, persistent checklists,
   and the professor comparison tool. No external dependencies; all data
   stays in this browser via localStorage. */

(function () {
  "use strict";

  var LS_CHECKS = "nyuad-compass-checks";
  var LS_PROFS = "nyuad-compass-profs";
  var LS_THEME = "nyuad-compass-theme";

  var sections = window.APP_SECTIONS || {};
  var order = window.APP_ORDER || [];

  /* ---------- Theme toggle (dark is the default identity) ---------- */

  var themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    var root = document.documentElement;

    function effectiveTheme() {
      return root.getAttribute("data-theme") === "light" ? "light" : "dark";
    }

    function paintIcon() {
      themeBtn.textContent = effectiveTheme() === "dark" ? "☀️" : "🌙";
    }

    themeBtn.addEventListener("click", function () {
      var next = effectiveTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem(LS_THEME, next); } catch (e) { /* private mode */ }
      paintIcon();
    });

    paintIcon();
  }

  /* ---------- Render sections + grouped nav ---------- */

  var NAV_GROUPS = [
    { label: "Start Here", ids: ["home", "packing", "first-semester", "schedule-builder"] },
    { label: "Academics", ids: ["four-year", "core-curriculum", "jterm-summer", "professors", "advising"] },
    { label: "Go Global", ids: ["study-away", "travel", "languages"] },
    { label: "Ambition", ids: ["career-mission", "mubadala", "adia", "pmo", "ministries", "careers", "rhodes", "research-capstone", "leadership", "writing-lab", "quant-toolkit"] },
    { label: "Campus & City", ids: ["campus-life", "abu-dhabi", "community", "money"] },
    { label: "Wellbeing", ids: ["support", "wellbeing", "safety", "habits"] },
    { label: "Toolkit", ids: ["gpa-tools", "checklists", "glossary"] }
  ];

  var main = document.getElementById("main-content");
  var nav = document.getElementById("sidenav");

  order.forEach(function (id) {
    var s = sections[id];
    if (!s) return;
    var sec = document.createElement("section");
    sec.className = "app-section";
    sec.id = "section-" + id;
    sec.innerHTML = s.html;
    main.appendChild(sec);
  });

  var grouped = {};
  NAV_GROUPS.forEach(function (g) {
    g.ids.forEach(function (id) { grouped[id] = true; });
  });
  var leftovers = order.filter(function (id) { return !grouped[id]; });
  var navPlan = NAV_GROUPS.slice();
  if (leftovers.length) navPlan.push({ label: "More", ids: leftovers });

  navPlan.forEach(function (g) {
    var hasAny = g.ids.some(function (id) { return sections[id]; });
    if (!hasAny) return;
    var label = document.createElement("div");
    label.className = "nav-group-label";
    label.textContent = g.label;
    nav.appendChild(label);
    g.ids.forEach(function (id) {
      var s = sections[id];
      if (!s) return;
      var btn = document.createElement("button");
      btn.innerHTML = '<span class="nav-icon">' + s.icon + "</span><span>" + s.title + "</span>";
      btn.dataset.target = id;
      btn.addEventListener("click", function () { show(id); });
      nav.appendChild(btn);
    });
  });

  function show(id) {
    order.forEach(function (other) {
      var sec = document.getElementById("section-" + other);
      if (sec) sec.classList.toggle("visible", other === id);
    });
    Array.prototype.forEach.call(nav.querySelectorAll("button"), function (b) {
      b.classList.toggle("active", b.dataset.target === id);
    });
    if (location.hash !== "#" + id) {
      try { history.replaceState(null, "", "#" + id); } catch (e) { /* file:// quirks */ }
    }
    window.scrollTo({ top: 0 });
    try { window.dispatchEvent(new CustomEvent("sectionshown", { detail: { id: id } })); } catch (e) { /* old browsers */ }
  }

  var initial = location.hash.replace("#", "");
  show(order.indexOf(initial) >= 0 ? initial : order[0]);

  /* ---------- Persistent checklists ---------- */

  function loadJSON(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  }
  function saveJSON(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* private mode */ }
  }

  var checks = loadJSON(LS_CHECKS, {});
  Array.prototype.forEach.call(document.querySelectorAll("input[data-ck]"), function (box) {
    var id = box.dataset.ck;
    box.checked = !!checks[id];
    box.closest("label").classList.toggle("done", box.checked);
    box.addEventListener("change", function () {
      checks[id] = box.checked;
      saveJSON(LS_CHECKS, checks);
      box.closest("label").classList.toggle("done", box.checked);
    });
  });

  /* ---------- Professor comparison tool ---------- */

  var CRITERIA = ["clarity", "fairness", "workload", "feedback", "office", "fit"];

  var SAMPLES = [
    {
      id: "sample-1", sample: true,
      name: "Sample: Prof. A (fictional)", course: "Calculus",
      source: "Multiple upperclassmen",
      clarity: 5, fairness: 4, workload: 3, feedback: 4, office: 5, fit: 4,
      notes: "Example entry — replace with your own research. Works full examples on the board; heavy weekly psets; generous office hours."
    },
    {
      id: "sample-2", sample: true,
      name: "Sample: Prof. B (fictional)", course: "FYWS / Writing",
      source: "Syllabus",
      clarity: 4, fairness: 5, workload: 4, feedback: 5, office: 3, fit: 5,
      notes: "Example entry — dense margin feedback, allows post-grade revision; strong future reference potential."
    }
  ];

  var profs = loadJSON(LS_PROFS, null);
  if (!profs) { profs = SAMPLES.slice(); saveJSON(LS_PROFS, profs); }

  var tbody = document.getElementById("prof-tbody");
  if (tbody) {
    // live slider value labels
    CRITERIA.forEach(function (c) {
      var slider = document.getElementById("pf-" + c);
      var label = document.getElementById("pv-" + c);
      if (slider && label) {
        slider.addEventListener("input", function () { label.textContent = slider.value; });
      }
    });

    var editingId = null;

    function score(p) {
      // fit and clarity weighted 1.5x
      var total = p.clarity * 1.5 + p.fit * 1.5 + p.fairness + p.workload + p.feedback + p.office;
      return (total / 8).toFixed(2);
    }

    function stars(n) {
      return "★★★★★".slice(0, n) + "☆☆☆☆☆".slice(0, 5 - n);
    }

    function esc(s) {
      var d = document.createElement("div");
      d.textContent = s == null ? "" : String(s);
      return d.innerHTML;
    }

    function render() {
      var sorted = profs.slice().sort(function (a, b) { return score(b) - score(a); });
      tbody.innerHTML = sorted.map(function (p) {
        return "<tr>" +
          "<td><strong>" + esc(p.name) + "</strong>" +
            (p.sample ? ' <span class="badge sample">sample</span>' : "") +
            (p.notes ? '<br><span style="font-size:0.82rem;color:var(--ink-soft)">' + esc(p.notes) + "</span>" : "") +
          "</td>" +
          "<td>" + esc(p.course) + "</td>" +
          "<td>" + p.clarity + "</td><td>" + p.fairness + "</td><td>" + p.workload + "</td>" +
          "<td>" + p.feedback + "</td><td>" + p.office + "</td>" +
          '<td><span class="stars">' + stars(p.fit) + "</span></td>" +
          "<td><strong>" + score(p) + "</strong></td>" +
          "<td style=\"font-size:0.8rem\">" + esc(p.source) + "</td>" +
          '<td style="white-space:nowrap">' +
            '<button class="btn secondary small" data-edit="' + p.id + '">Edit</button> ' +
            '<button class="btn danger small" data-del="' + p.id + '">✕</button>' +
          "</td></tr>";
      }).join("");
      var count = document.getElementById("pf-count");
      if (count) count.textContent = profs.length + " entr" + (profs.length === 1 ? "y" : "ies");
    }

    function readForm() {
      var get = function (id) { return document.getElementById(id); };
      var entry = {
        id: editingId || ("p-" + Date.now()),
        name: get("pf-name").value.trim(),
        course: get("pf-course").value,
        source: get("pf-source").value,
        notes: get("pf-notes").value.trim()
      };
      CRITERIA.forEach(function (c) { entry[c] = parseInt(get("pf-" + c).value, 10); });
      return entry;
    }

    function fillForm(p) {
      document.getElementById("pf-name").value = p.name;
      document.getElementById("pf-course").value = p.course;
      document.getElementById("pf-source").value = p.source;
      document.getElementById("pf-notes").value = p.notes || "";
      CRITERIA.forEach(function (c) {
        document.getElementById("pf-" + c).value = p[c];
        document.getElementById("pv-" + c).textContent = p[c];
      });
    }

    function clearForm() {
      editingId = null;
      document.getElementById("pf-name").value = "";
      document.getElementById("pf-notes").value = "";
      CRITERIA.forEach(function (c) {
        document.getElementById("pf-" + c).value = 3;
        document.getElementById("pv-" + c).textContent = "3";
      });
      document.getElementById("pf-save").textContent = "Save entry";
    }

    document.getElementById("pf-save").addEventListener("click", function () {
      var entry = readForm();
      if (!entry.name) { document.getElementById("pf-name").focus(); return; }
      var idx = profs.findIndex(function (p) { return p.id === entry.id; });
      if (idx >= 0) profs[idx] = entry; else profs.push(entry);
      saveJSON(LS_PROFS, profs);
      clearForm();
      render();
    });

    document.getElementById("pf-clear").addEventListener("click", clearForm);

    tbody.addEventListener("click", function (e) {
      var t = e.target;
      if (t.dataset.edit) {
        var p = profs.find(function (x) { return x.id === t.dataset.edit; });
        if (p) {
          editingId = p.id;
          fillForm(p);
          document.getElementById("pf-save").textContent = "Update entry";
          document.getElementById("pf-name").scrollIntoView({ behavior: "smooth", block: "center" });
        }
      } else if (t.dataset.del) {
        profs = profs.filter(function (x) { return x.id !== t.dataset.del; });
        saveJSON(LS_PROFS, profs);
        render();
      }
    });

    document.getElementById("pf-reset").addEventListener("click", function () {
      if (confirm("Delete ALL professor entries (including samples)? This cannot be undone.")) {
        profs = [];
        saveJSON(LS_PROFS, profs);
        render();
      }
    });

    document.getElementById("pf-export").addEventListener("click", function () {
      var text = profs.map(function (p) {
        return p.name + " | " + p.course + " | clarity " + p.clarity + "/5, fairness " + p.fairness +
          "/5, workload " + p.workload + "/5, feedback " + p.feedback + "/5, office hrs " + p.office +
          "/5, fit " + p.fit + "/5 | score " + score(p) + " | source: " + p.source +
          (p.notes ? " | notes: " + p.notes : "");
      }).join("\n");
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text);
      } else {
        window.prompt("Copy your entries:", text);
      }
    });

    render();
  }

  /* ---------- Schedule builder ---------- */

  var LS_SCHED = "nyuad-compass-sched";
  var DAY_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  var DAY_START = 8 * 60, DAY_END = 19 * 60; // grid: 08:00–19:00
  var PX_PER_MIN = 0.9;

  var schedGrid = document.getElementById("s-grid");
  if (schedGrid) {
    var sched = loadJSON(LS_SCHED, []);

    // populate time selects (07:00–18:45 starts, 15-min steps)
    (function () {
      var startSel = document.getElementById("s-start");
      var endSel = document.getElementById("s-end");
      for (var m = 7 * 60; m <= 19 * 60; m += 15) {
        var label = fmtTime(m);
        startSel.add(new Option(label, m));
        endSel.add(new Option(label, m));
      }
      startSel.value = 9 * 60;
      endSel.value = 9 * 60 + 75;
    })();

    function fmtTime(mins) {
      var h = Math.floor(mins / 60), m = mins % 60;
      return (h < 10 ? "0" : "") + h + ":" + (m < 10 ? "0" : "") + m;
    }

    function kindClass(kind) {
      if (kind === "Recitation/Lab") return "kind-rec";
      if (kind === "Office hours") return "kind-oh";
      if (kind === "Study block") return "kind-study";
      if (kind === "SIG / activity") return "kind-sig";
      if (kind === "Class") return "";
      return "kind-other";
    }

    function escS(s) {
      var d = document.createElement("div");
      d.textContent = s == null ? "" : String(s);
      return d.innerHTML;
    }

    function renderSched() {
      // grid
      var html = '<div class="sg-head"></div>';
      DAY_NAMES.forEach(function (d) { html += '<div class="sg-head">' + d + "</div>"; });
      var colH = (DAY_END - DAY_START) * PX_PER_MIN;
      html += '<div class="sg-times" style="height:' + colH + 'px">';
      for (var t = DAY_START; t <= DAY_END; t += 60) {
        html += "<div style=\"top:" + ((t - DAY_START) * PX_PER_MIN) + "px\">" + fmtTime(t) + "</div>";
      }
      html += "</div>";
      for (var day = 0; day < 5; day++) {
        html += '<div class="sg-day" style="height:' + colH + 'px">';
        for (var h = DAY_START + 60; h < DAY_END; h += 60) {
          html += '<div class="sg-hourline" style="top:' + ((h - DAY_START) * PX_PER_MIN) + 'px"></div>';
        }
        sched.forEach(function (b) {
          if (b.days.indexOf(day) < 0) return;
          var top = (Math.max(b.start, DAY_START) - DAY_START) * PX_PER_MIN;
          var height = (Math.min(b.end, DAY_END) - Math.max(b.start, DAY_START)) * PX_PER_MIN;
          if (height <= 0) return;
          var late = b.kind === "Class" && b.start >= 16 * 60;
          html += '<div class="sched-block ' + (late ? "late" : kindClass(b.kind)) + '" style="top:' + top +
            "px;height:" + Math.max(height - 2, 14) + 'px" title="' + escS(b.name) + '">' +
            escS(b.name) + '<span class="sb-time">' + fmtTime(b.start) + "–" + fmtTime(b.end) + "</span></div>";
        });
        html += "</div>";
      }
      schedGrid.innerHTML = html;

      // list with delete buttons
      var list = document.getElementById("s-list");
      list.innerHTML = sched.length
        ? sched.map(function (b, i) {
            return '<span style="display:inline-block;margin:3px 6px 3px 0;font-size:0.85rem">' +
              escS(b.name) + " (" + b.days.map(function (d) { return DAY_NAMES[d]; }).join("") + " " +
              fmtTime(b.start) + "–" + fmtTime(b.end) + ") " +
              '<button class="btn danger small" data-sdel="' + i + '">✕</button></span>';
          }).join("")
        : '<span style="color:var(--ink-soft);font-size:0.9rem">No blocks yet — add your candidate sections above.</span>';

      renderVerdict();
    }

    function renderVerdict() {
      var warnings = [];
      var classes = sched.filter(function (b) { return b.kind === "Class" || b.kind === "Recitation/Lab"; });

      // conflicts (any block kind)
      for (var i = 0; i < sched.length; i++) {
        for (var j = i + 1; j < sched.length; j++) {
          var shared = sched[i].days.filter(function (d) { return sched[j].days.indexOf(d) >= 0; });
          if (shared.length && sched[i].start < sched[j].end && sched[j].start < sched[i].end) {
            warnings.push({ level: "red", msg: "Conflict: " + sched[i].name + " overlaps " + sched[j].name +
              " on " + shared.map(function (d) { return DAY_NAMES[d]; }).join(", ") + "." });
          }
        }
      }

      var late = classes.filter(function (b) { return b.start >= 16 * 60; });
      late.forEach(function (b) {
        warnings.push({ level: "red", msg: b.name + " starts at " + fmtTime(b.start) +
          " — violates your no-late-classes rule." });
      });

      var morning = classes.some(function (b) { return b.start < 12 * 60; });
      var earlyAft = classes.some(function (b) { return b.start >= 12 * 60 + 30 && b.start < 15 * 60; });
      var ideal = classes.some(function (b) { return b.start >= 13 * 60 && b.start <= 15 * 60; });

      if (classes.length) {
        if (!morning) warnings.push({ level: "amber", msg: "No morning class yet — your preferred pattern has one." });
        if (!earlyAft) warnings.push({ level: "amber", msg: "No early-afternoon class yet — you wanted one around 13:00–15:00." });
        else if (!ideal) warnings.push({ level: "amber", msg: "Afternoon class is outside the ideal 13:00–15:00 start window (workable, off-pattern)." });
      }

      var verdictEl = document.getElementById("s-verdict");
      var box = document.getElementById("s-warnings");
      var hasRed = warnings.some(function (w) { return w.level === "red"; });
      var verdict = !classes.length ? "no classes yet" : hasRed ? "needs fixes" : warnings.length ? "workable, off-pattern" : "fits your preference";
      verdictEl.textContent = verdict;

      box.innerHTML = warnings.length
        ? warnings.map(function (w) { return '<div class="sched-flag ' + w.level + '">' + escS(w.msg) + "</div>"; }).join("")
        : (classes.length
            ? '<div class="sched-flag ok">✅ Morning class + early-afternoon class, nothing late, no conflicts. This is your pattern — now find real sections matching it in Albert.</div>'
            : '<div class="sched-flag amber">Add class blocks to check them against your preferences.</div>');
    }

    document.getElementById("s-add").addEventListener("click", function () {
      var name = document.getElementById("s-name").value.trim();
      if (!name) { document.getElementById("s-name").focus(); return; }
      var days = [];
      for (var d = 0; d < 5; d++) {
        if (document.getElementById("s-d" + d).checked) days.push(d);
      }
      if (!days.length) return;
      var start = parseInt(document.getElementById("s-start").value, 10);
      var end = parseInt(document.getElementById("s-end").value, 10);
      if (end <= start) return;
      sched.push({ name: name, days: days, start: start, end: end, kind: document.getElementById("s-kind").value });
      saveJSON(LS_SCHED, sched);
      document.getElementById("s-name").value = "";
      renderSched();
    });

    document.getElementById("s-list").addEventListener("click", function (e) {
      if (e.target.dataset.sdel !== undefined) {
        sched.splice(parseInt(e.target.dataset.sdel, 10), 1);
        saveJSON(LS_SCHED, sched);
        renderSched();
      }
    });

    document.getElementById("s-reset").addEventListener("click", function () {
      if (confirm("Clear the whole schedule sketch?")) {
        sched = [];
        saveJSON(LS_SCHED, sched);
        renderSched();
      }
    });

    // Real Fall 2026 registration (times as enrolled; minutes from midnight)
    var REAL_FALL_2026 = [
      { name: "Markets (Liu)",                    days: [1, 3], start: 510, end: 585, kind: "Class" },            // TTh 8:30–9:45
      { name: "History & Globalization (Fuccaro)", days: [0, 2], start: 595, end: 670, kind: "Class" },           // MW 9:55–11:10
      { name: "Methods of the Written Voice I (0 cr)", days: [1], start: 595, end: 670, kind: "Class" },          // T 9:55–11:10
      { name: "Calculus (Paparella)",             days: [0, 2], start: 680, end: 755, kind: "Class" },            // MW 11:20–12:35
      { name: "Calculus recitation",              days: [4], start: 560, end: 635, kind: "Recitation/Lab" },      // F 9:20–10:35
      { name: "Markets recitation (Jain)",        days: [3], start: 835, end: 910, kind: "Recitation/Lab" }       // Th 1:55–3:10
    ];
    var loadRealBtn = document.getElementById("s-load-real");
    if (loadRealBtn) {
      loadRealBtn.addEventListener("click", function () {
        if (sched.length && !confirm("Replace the current grid with your registered Fall 2026 schedule?")) return;
        sched = REAL_FALL_2026.map(function (b, i) {
          return { name: b.name, days: b.days.slice(), start: b.start, end: b.end, kind: b.kind };
        });
        saveJSON(LS_SCHED, sched);
        renderSched();
      });
    }

    renderSched();
  }

  /* ---------- GPA calculator & grade tracker ---------- */

  var LS_GRADES = "nyuad-compass-grades";
  var GRADE_POINTS = {
    "A": 4.0, "A-": 3.667, "B+": 3.333, "B": 3.0, "B-": 2.667,
    "C+": 2.333, "C": 2.0, "C-": 1.667, "D+": 1.333, "D": 1.0, "F": 0
  };

  var gTbody = document.getElementById("g-tbody");
  if (gTbody) {
    var grades = loadJSON(LS_GRADES, []);

    function gradedOnly() {
      return grades.filter(function (g) { return GRADE_POINTS.hasOwnProperty(g.grade); });
    }

    function cumGPA() {
      var pts = 0, cr = 0;
      gradedOnly().forEach(function (g) {
        pts += GRADE_POINTS[g.grade] * g.credits;
        cr += g.credits;
      });
      return cr ? pts / cr : null;
    }

    function escG(s) {
      var d = document.createElement("div");
      d.textContent = s == null ? "" : String(s);
      return d.innerHTML;
    }

    function renderGrades() {
      gTbody.innerHTML = grades.map(function (g, i) {
        var pts = GRADE_POINTS.hasOwnProperty(g.grade)
          ? (GRADE_POINTS[g.grade] * g.credits).toFixed(1)
          : "—";
        return "<tr><td>" + escG(g.sem) + "</td><td>" + escG(g.name) + "</td><td>" + g.credits +
          "</td><td>" + escG(g.grade) + "</td><td>" + pts + "</td>" +
          '<td><button class="btn danger small" data-gdel="' + i + '">✕</button></td></tr>';
      }).join("");

      var gpa = cumGPA();
      var totalCr = grades.reduce(function (s, g) { return s + g.credits; }, 0);
      var gradedCr = gradedOnly().reduce(function (s, g) { return s + g.credits; }, 0);
      var summary = document.getElementById("g-summary");
      if (summary) summary.textContent = grades.length + " courses · " + totalCr + " credits";
      var stats = document.getElementById("g-stats");
      if (stats) {
        if (gpa === null) {
          stats.innerHTML = "<strong>No graded courses yet.</strong> Add courses above; P and In-progress entries track credits without affecting GPA.";
        } else {
          var gateNote = gpa >= 3.5
            ? "✅ At or above the 3.5 gate for your second study-away semester (New York)."
            : "⚠️ Below the 3.5 gate for your second study-away semester (New York) — needs " + (3.5 - gpa).toFixed(3) + " more before you'd clear it at this credit total.";
          stats.innerHTML = "<strong>Cumulative GPA: " + gpa.toFixed(3) + "</strong> over " + gradedCr +
            " graded credits (" + (totalCr - gradedCr) + " credits P/in-progress). " + gateNote;
        }
      }
    }

    document.getElementById("g-add").addEventListener("click", function () {
      var name = document.getElementById("g-name").value.trim();
      if (!name) { document.getElementById("g-name").focus(); return; }
      grades.push({
        name: name,
        sem: document.getElementById("g-sem").value,
        credits: parseFloat(document.getElementById("g-credits").value),
        grade: document.getElementById("g-grade").value
      });
      saveJSON(LS_GRADES, grades);
      document.getElementById("g-name").value = "";
      renderGrades();
    });

    gTbody.addEventListener("click", function (e) {
      if (e.target.dataset.gdel !== undefined) {
        grades.splice(parseInt(e.target.dataset.gdel, 10), 1);
        saveJSON(LS_GRADES, grades);
        renderGrades();
      }
    });

    document.getElementById("g-reset").addEventListener("click", function () {
      if (confirm("Delete ALL grade entries? This cannot be undone.")) {
        grades = [];
        saveJSON(LS_GRADES, grades);
        renderGrades();
      }
    });

    document.getElementById("g-calc").addEventListener("click", function () {
      var target = parseFloat(document.getElementById("g-target").value);
      var remaining = parseFloat(document.getElementById("g-remaining").value);
      var out = document.getElementById("g-target-out");
      if (isNaN(target) || isNaN(remaining) || remaining <= 0) {
        out.textContent = "Enter a numeric target GPA and remaining credits.";
        return;
      }
      var pts = 0, cr = 0;
      gradedOnly().forEach(function (g) {
        pts += GRADE_POINTS[g.grade] * g.credits;
        cr += g.credits;
      });
      var needed = (target * (cr + remaining) - pts) / remaining;
      if (needed <= 0) {
        out.textContent = "Target already secured — even all-F futures cannot drop you below it (nice problem to have; do not test it).";
      } else if (needed > 4.0) {
        out.textContent = "Needed average is " + needed.toFixed(3) + " — above 4.0, so this target is not reachable with the given remaining credits. Adjust the target or credits.";
      } else {
        out.textContent = "You need an average of " + needed.toFixed(3) + " across the remaining " + remaining +
          " credits (" + (needed <= 3.0 ? "comfortable" : needed <= 3.667 ? "achievable with your systems" : "demanding — protect the theory semesters") + ").";
      }
    });

    renderGrades();
  }

  /* ---------- Command palette (search + jump, Ctrl/Cmd+K) ---------- */

  var searchBox = document.getElementById("global-search");
  var resultsEl = document.getElementById("search-results");
  var paletteOverlay = document.getElementById("palette-overlay");
  var paletteTrigger = document.getElementById("palette-trigger");

  function textOf(id) {
    var sec = document.getElementById("section-" + id);
    return sec ? sec.textContent : "";
  }

  function showAllSections() {
    resultsEl.innerHTML = order.map(function (id) {
      return '<div class="hit" data-go="' + id + '">' +
        '<div class="hit-section">' + sections[id].icon + " " + sections[id].title + "</div></div>";
    }).join("");
    resultsEl.classList.remove("hidden");
  }

  function runSearch(q) {
    q = q.trim().toLowerCase();
    if (q.length < 2) { showAllSections(); return; }

    var titleHits = [], contentHits = [];
    order.forEach(function (id) {
      var title = sections[id].title.toLowerCase();
      if (title.indexOf(q) >= 0) {
        titleHits.push({ id: id, snippet: "Jump to section" });
        return;
      }
      var text = textOf(id);
      var lower = text.toLowerCase();
      var pos = lower.indexOf(q);
      if (pos >= 0) {
        var start = Math.max(0, pos - 60);
        var snippet = (start > 0 ? "…" : "") +
          text.slice(start, pos + q.length + 90).replace(/\s+/g, " ").trim() + "…";
        contentHits.push({ id: id, snippet: snippet });
      }
    });

    var hits = titleHits.concat(contentHits);
    if (!hits.length) {
      resultsEl.innerHTML = '<div class="empty">No matches for "' + q.replace(/</g, "&lt;") + '".</div>';
    } else {
      resultsEl.innerHTML = hits.map(function (h) {
        return '<div class="hit" data-go="' + h.id + '">' +
          '<div class="hit-section">' + sections[h.id].icon + " " + sections[h.id].title + "</div>" +
          '<div>' + h.snippet.replace(/</g, "&lt;") + "</div></div>";
      }).join("");
    }
    resultsEl.classList.remove("hidden");
  }

  function openPalette() {
    paletteOverlay.classList.add("open");
    searchBox.value = "";
    showAllSections();
    setTimeout(function () { searchBox.focus(); }, 30);
  }
  function closePalette() {
    paletteOverlay.classList.remove("open");
    resultsEl.classList.add("hidden");
    searchBox.value = "";
  }

  if (searchBox && paletteOverlay) {
    paletteTrigger.addEventListener("click", openPalette);

    document.addEventListener("keydown", function (e) {
      if ((e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K")) {
        e.preventDefault();
        if (paletteOverlay.classList.contains("open")) closePalette(); else openPalette();
      } else if (e.key === "Escape" && paletteOverlay.classList.contains("open")) {
        closePalette();
      }
    });

    paletteOverlay.addEventListener("click", function (e) {
      if (e.target === paletteOverlay) closePalette();
    });

    searchBox.addEventListener("input", function () { runSearch(searchBox.value); });

    searchBox.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        var first = resultsEl.querySelector(".hit");
        if (first) { show(first.dataset.go); closePalette(); }
      }
    });

    resultsEl.addEventListener("click", function (e) {
      var hit = e.target.closest(".hit");
      if (hit) { show(hit.dataset.go); closePalette(); }
    });
  }

  /* ---------- Scroll progress + back to top ---------- */

  var progressBar = document.getElementById("scroll-progress");
  var backTop = document.getElementById("back-top");

  function onScroll() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - doc.clientHeight;
    var pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
    if (progressBar) progressBar.style.width = pct + "%";
    if (backTop) backTop.classList.toggle("show", doc.scrollTop > 500);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (backTop) {
    backTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Reveal-on-scroll animations ---------- */

  if ("IntersectionObserver" in window &&
      !(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
    var revealables = document.querySelectorAll(
      ".app-section .card, .app-section .callout, .app-section .table-wrap, " +
      ".app-section .semester, .app-section details, .app-section .timeline > li"
    );
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("rv-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06, rootMargin: "0px 0px -30px 0px" });

    Array.prototype.forEach.call(revealables, function (el) {
      el.classList.add("rv");
      io.observe(el);
    });

    // Fallback sweep: instantly reveal anything already inside the viewport
    // (covers first paint and section switches, where IO timing can lag).
    function revealInView() {
      var vh = window.innerHeight || 800;
      Array.prototype.forEach.call(revealables, function (el) {
        if (el.classList.contains("rv-in")) return;
        var r = el.getBoundingClientRect();
        if (r.height > 0 && r.top < vh + 40) el.classList.add("rv-in");
      });
    }
    requestAnimationFrame(revealInView);
    window.addEventListener("sectionshown", function () { requestAnimationFrame(revealInView); });
    window.addEventListener("load", revealInView);
  }

  /* ---------- Per-card checklist progress bars ---------- */

  var ckCards = [];
  Array.prototype.forEach.call(document.querySelectorAll(".app-section .card"), function (card) {
    var boxes = card.querySelectorAll("input[data-ck]");
    if (boxes.length >= 3) {
      var wrap = document.createElement("div");
      wrap.className = "ck-progress";
      wrap.innerHTML = '<div class="ckp-bar"><div class="ckp-fill"></div></div><span class="ckp-label"></span>';
      card.insertBefore(wrap, card.querySelector("label.check"));
      ckCards.push({ card: card, boxes: boxes, fill: wrap.querySelector(".ckp-fill"), label: wrap.querySelector(".ckp-label") });
    }
  });

  function updateCkBars() {
    ckCards.forEach(function (c) {
      var done = 0;
      Array.prototype.forEach.call(c.boxes, function (b) { if (b.checked) done++; });
      var pct = Math.round((done / c.boxes.length) * 100);
      c.fill.style.width = pct + "%";
      c.label.textContent = done + "/" + c.boxes.length;
    });
  }
  document.addEventListener("change", function (e) {
    if (e.target && e.target.dataset && e.target.dataset.ck !== undefined) updateCkBars();
  });
  updateCkBars();

  /* ---------- Live dashboard stats on Home ---------- */

  var homeSec = document.getElementById("section-home");
  if (homeSec) {
    var strip = document.createElement("div");
    strip.className = "stats-strip";
    var lede = homeSec.querySelector(".section-lede");
    if (lede && lede.nextSibling) homeSec.insertBefore(strip, lede.nextSibling);
    else homeSec.appendChild(strip);

    function stat(value, label, sub, cls) {
      return '<div class="stat-tile ' + (cls || "") + '">' +
        '<div class="st-value">' + value + '</div>' +
        '<div class="st-label">' + label + '</div>' +
        (sub ? '<div class="st-sub">' + sub + '</div>' : "") + '</div>';
    }

    function renderStats() {
      var allBoxes = document.querySelectorAll("input[data-ck]");
      var done = 0;
      Array.prototype.forEach.call(allBoxes, function (b) { if (b.checked) done++; });
      var pct = allBoxes.length ? Math.round((done / allBoxes.length) * 100) : 0;

      var grades = loadJSON("nyuad-compass-grades", []);
      var pts = 0, cr = 0;
      var GP = { "A": 4.0, "A-": 3.667, "B+": 3.333, "B": 3.0, "B-": 2.667, "C+": 2.333, "C": 2.0, "C-": 1.667, "D+": 1.333, "D": 1.0, "F": 0 };
      grades.forEach(function (g) {
        if (GP.hasOwnProperty(g.grade)) { pts += GP[g.grade] * g.credits; cr += g.credits; }
      });
      var gpa = cr ? (pts / cr) : null;
      var gpaCls = gpa === null ? "" : (gpa >= 3.5 ? "gate-ok" : "gate-low");
      var gpaSub = gpa === null ? "log grades in the tracker" : (gpa >= 3.5 ? "✓ above the 3.5 away-gate" : "below the 3.5 away-gate");

      var profs = loadJSON(LS_PROFS, []) || [];
      var realProfs = profs.filter(function (p) { return !p.sample; }).length;

      var sched = loadJSON("nyuad-compass-sched", []) || [];

      var marhaba = new Date("2026-08-24T00:00:00");
      var days = Math.max(0, Math.ceil((marhaba - new Date()) / 86400000));

      strip.innerHTML =
        stat(pct + "%", "Checklists done", done + " of " + allBoxes.length + " items") +
        stat(gpa === null ? "—" : gpa.toFixed(2), "Cumulative GPA", gpaSub, gpaCls) +
        stat(realProfs, "Professors researched", "in your comparison tool") +
        stat(sched.length, "Schedule blocks", "in the week builder") +
        stat(days, "Days to Marhaba", "est. late-Aug arrival");
    }

    renderStats();
    window.addEventListener("sectionshown", function (e) {
      if (e.detail && e.detail.id === "home") renderStats();
    });
    document.addEventListener("change", function (e) {
      if (e.target && e.target.dataset && e.target.dataset.ck !== undefined) renderStats();
    });
  }
})();
