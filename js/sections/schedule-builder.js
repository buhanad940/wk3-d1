window.APP_SECTIONS = window.APP_SECTIONS || {};
window.APP_ORDER = window.APP_ORDER || [];

window.APP_ORDER.push("schedule-builder");
window.APP_SECTIONS["schedule-builder"] = {
  title: "Schedule Builder",
  icon: "🗓️",
  html: `
<h2>Weekly Schedule Builder <span class="badge core">Fall 2026 loaded from your registration</span></h2>
<p class="section-lede">
  Sketch schedules and test them against your preference: one class in the morning, one in the early afternoon
  (ideally 1:00–3:00 PM), nothing late. Your actual registered Fall 2026 classes can be loaded with one click
  below; for future semesters, add candidate sections from the official course search. Saved in this browser only.
</p>

<div class="card">
  <h4>⚡ Your real Fall 2026 registration</h4>
  <p style="font-size:0.9rem;color:var(--ink-soft)">Loads all six registered meeting patterns — Markets (Liu),
  Markets recitation (Jain), History and Globalization (Fuccaro), Methods of the Written Voice I, Calculus
  (Paparella), and Calculus recitation — exactly as enrolled. Replaces whatever is currently in the grid.</p>
  <p><button class="btn" id="s-load-real">Load my registered Fall 2026 schedule</button></p>
</div>

<div class="card">
  <h4>Add a class block</h4>
  <div class="prof-form" id="sched-form">
    <div class="field"><label for="s-name">Course / activity</label>
      <input type="text" id="s-name" placeholder="e.g., Calculus"></div>
    <div class="field"><label>Days</label>
      <div class="rating-row" style="flex-wrap:wrap;gap:4px">
        <label class="check" style="padding:2px 6px"><input type="checkbox" id="s-d0"> Mon</label>
        <label class="check" style="padding:2px 6px"><input type="checkbox" id="s-d1"> Tue</label>
        <label class="check" style="padding:2px 6px"><input type="checkbox" id="s-d2"> Wed</label>
        <label class="check" style="padding:2px 6px"><input type="checkbox" id="s-d3"> Thu</label>
        <label class="check" style="padding:2px 6px"><input type="checkbox" id="s-d4"> Fri</label>
      </div></div>
    <div class="field"><label for="s-start">Starts</label>
      <select id="s-start"></select></div>
    <div class="field"><label for="s-end">Ends</label>
      <select id="s-end"></select></div>
    <div class="field"><label for="s-kind">Type</label>
      <select id="s-kind">
        <option>Class</option><option>Recitation/Lab</option><option>Office hours</option>
        <option>Study block</option><option>SIG / activity</option><option>Other</option>
      </select></div>
    <div class="field"><button class="btn" id="s-add">Add to schedule</button></div>
  </div>
</div>

<div class="card">
  <h4>Preference check <span class="progress-pill" id="s-verdict"></span></h4>
  <div id="s-warnings"></div>
</div>

<div class="card">
  <h4>Your week</h4>
  <div class="table-wrap">
    <div id="s-grid" class="sched-grid"></div>
  </div>
  <div id="s-list" style="margin-top:10px"></div>
  <p><button class="btn danger small" id="s-reset">Clear schedule</button></p>
</div>

<div class="callout info">
  <strong>How to use this with registration.</strong> (1) In Albert, list every real section time for your
  courses. (2) Rebuild them here to see the week and catch conflicts. (3) Build your two backup schedules the
  same way (First Semester section explains why two). (4) Register the moment your window opens. This builder
  is a sketchpad — Albert is the truth.
</div>

<div class="callout tip">
  <strong>Reading the preference check.</strong> Green = fits your stated pattern (a morning class, an
  early-afternoon class in the 13:00–15:00 zone, nothing starting after 16:00). Amber = workable but off-pattern
  (e.g., afternoon class outside 1–3 PM). Red = violates your "not very late" rule or two blocks collide.
  Remember the First Semester section's priority order: sacrifice the 1–3 PM ideal before you sacrifice
  "no late classes."
</div>
`
};
