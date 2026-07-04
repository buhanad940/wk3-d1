/* NYUAD Compass — app logic: navigation, search, persistent checklists,
   and the professor comparison tool. No external dependencies; all data
   stays in this browser via localStorage. */

(function () {
  "use strict";

  var LS_CHECKS = "nyuad-compass-checks";
  var LS_PROFS = "nyuad-compass-profs";

  var sections = window.APP_SECTIONS || {};
  var order = window.APP_ORDER || [];

  /* ---------- Render sections + nav ---------- */

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

    var btn = document.createElement("button");
    btn.innerHTML = '<span class="nav-icon">' + s.icon + "</span><span>" + s.title + "</span>";
    btn.dataset.target = id;
    btn.addEventListener("click", function () { show(id); });
    nav.appendChild(btn);
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
        stats.innerHTML = gpa === null
          ? "<strong>No graded courses yet.</strong> Add courses above; P and In-progress entries track credits without affecting GPA."
          : "<strong>Cumulative GPA: " + gpa.toFixed(3) + "</strong> over " + gradedCr +
            " graded credits (" + (totalCr - gradedCr) + " credits P/in-progress). " +
            "Rhodes-track reference point: sustained A-range ≈ 3.7+.";
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

  /* ---------- Search ---------- */

  var searchBox = document.getElementById("global-search");
  var resultsEl = document.getElementById("search-results");

  function textOf(id) {
    var sec = document.getElementById("section-" + id);
    return sec ? sec.textContent : "";
  }

  function runSearch(q) {
    q = q.trim().toLowerCase();
    if (q.length < 2) { resultsEl.classList.add("hidden"); return; }

    var hits = [];
    order.forEach(function (id) {
      var text = textOf(id);
      var lower = text.toLowerCase();
      var pos = lower.indexOf(q);
      if (pos >= 0) {
        var start = Math.max(0, pos - 60);
        var snippet = (start > 0 ? "…" : "") +
          text.slice(start, pos + q.length + 90).replace(/\s+/g, " ").trim() + "…";
        hits.push({ id: id, title: sections[id].title, snippet: snippet });
      }
    });

    if (!hits.length) {
      resultsEl.innerHTML = '<div class="empty">No matches for "' + q.replace(/</g, "&lt;") + '".</div>';
    } else {
      resultsEl.innerHTML = hits.map(function (h) {
        return '<div class="hit" data-go="' + h.id + '">' +
          '<div class="hit-section">' + sections[h.id].icon + " " + h.title + "</div>" +
          '<div>' + h.snippet.replace(/</g, "&lt;") + "</div></div>";
      }).join("");
    }
    resultsEl.classList.remove("hidden");
  }

  if (searchBox) {
    searchBox.addEventListener("input", function () { runSearch(searchBox.value); });
    searchBox.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { resultsEl.classList.add("hidden"); searchBox.blur(); }
    });
    resultsEl.addEventListener("click", function (e) {
      var hit = e.target.closest(".hit");
      if (hit) {
        show(hit.dataset.go);
        resultsEl.classList.add("hidden");
        searchBox.value = "";
      }
    });
    document.addEventListener("click", function (e) {
      if (!resultsEl.contains(e.target) && e.target !== searchBox) {
        resultsEl.classList.add("hidden");
      }
    });
  }
})();
