window.APP_SECTIONS = window.APP_SECTIONS || {};
window.APP_ORDER = window.APP_ORDER || [];

window.APP_ORDER.push("gpa-tools");
window.APP_SECTIONS["gpa-tools"] = {
  title: "GPA & Grade Tracker",
  icon: "🧮",
  html: `
<h2>GPA Calculator &amp; Grade Tracker</h2>
<p class="section-lede">
  Track every course you take, watch your cumulative GPA build across eight semesters, and see what future
  grades you need to hit a target. Entries save in this browser only. Uses the standard NYU letter-grade points
  scale — confirm current official grading policy with the Registrar.
</p>

<div class="callout danger">
  <strong>Your specific gate: a second study-away semester requires a cumulative GPA of at least 3.5.</strong>
  Your plan uses two away semesters (Florence, then New York) — New York, the second one, is gated on this
  number at the point you apply (roughly end of Y2 spring / summer). Use this tracker every semester from
  Year 1 onward so a dip shows up with time to recover, not during the application window itself.
</div>

<div class="callout warn">
  <strong>GPA is also your main goal's first filter.</strong> ADIA, Mubadala, MBB, and the bank graduate
  programmes screen hard on GPA — it is the number that decides whether your application is read at all (see
  Career Mission). Practically, keep your cumulative comfortably above the 3.5 study-away gate and push toward
  the top of the band: for these employers, GPA is the cheapest credential to protect and the most expensive to
  repair. Watch it here from Year 1.
</div>

<div class="callout info">
  <strong>Points scale used:</strong> A = 4.0, A− = 3.667, B+ = 3.333, B = 3.0, B− = 2.667, C+ = 2.333,
  C = 2.0, C− = 1.667, D+ = 1.333, D = 1.0, F = 0. Pass/Fail courses are excluded from GPA (mark them P to
  track credits without affecting the average).
</div>

<div class="card">
  <h4>Add a course</h4>
  <div class="prof-form" id="gpa-form">
    <div class="field"><label for="g-name">Course</label>
      <input type="text" id="g-name" placeholder="e.g., Markets"></div>
    <div class="field"><label for="g-sem">Semester</label>
      <select id="g-sem">
        <option>Y1 Fall</option><option>Y1 J-Term</option><option>Y1 Spring</option><option>Y1 Summer</option>
        <option>Y2 Fall</option><option>Y2 J-Term</option><option>Y2 Spring (Florence)</option><option>Y2 Summer</option>
        <option>Y3 Fall (New York)</option><option>Y3 J-Term</option><option>Y3 Spring</option><option>Y3 Summer</option>
        <option>Y4 Fall</option><option>Y4 J-Term</option><option>Y4 Spring</option>
      </select></div>
    <div class="field"><label for="g-credits">Credits</label>
      <select id="g-credits"><option>4</option><option>2</option><option>1</option><option>3</option><option>6</option></select></div>
    <div class="field"><label for="g-grade">Grade</label>
      <select id="g-grade">
        <option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option>
        <option>C+</option><option>C</option><option>C-</option><option>D+</option><option>D</option>
        <option>F</option><option>P</option><option value="IP">In progress</option>
      </select></div>
    <div class="field"><button class="btn" id="g-add">Add course</button></div>
  </div>
</div>

<div class="card">
  <h4>Your record <span class="progress-pill" id="g-summary"></span></h4>
  <div class="table-wrap"><table>
    <thead><tr><th>Semester</th><th>Course</th><th>Credits</th><th>Grade</th><th>Points</th><th></th></tr></thead>
    <tbody id="g-tbody"></tbody>
  </table></div>
  <div class="callout tip" id="g-stats" style="margin-top:12px"></div>
  <p><button class="btn danger small" id="g-reset">Delete all grade entries</button></p>
</div>

<div class="card">
  <h4>Target calculator</h4>
  <p>What average do future courses need so your cumulative GPA reaches a target?</p>
  <div class="prof-form">
    <div class="field"><label for="g-target">Target cumulative GPA</label>
      <input type="text" id="g-target" value="3.8"></div>
    <div class="field"><label for="g-remaining">Remaining graded credits (estimate)</label>
      <input type="text" id="g-remaining" value="96"></div>
    <div class="field"><button class="btn secondary" id="g-calc">Calculate needed average</button></div>
    <div class="field wide"><div id="g-target-out" style="font-weight:600"></div></div>
  </div>
</div>

<h3>Reading your GPA like a strategist (Rhodes lens)</h3>
<ul>
  <li><strong>Trajectory matters as much as level.</strong> A 3.6 rising to 3.9 across four years tells a better
      story than a flat 3.75. First semester wobble is recoverable; sustained decline is the pattern to prevent
      (the Study Habits section's early-warning rule: any course at B-range by midterm triggers support that week).</li>
  <li><strong>Protect the theory semesters.</strong> Intermediate micro/macro and econometrics are the grades
      economics-literate readers (graduate schools, some selectors) look at first. Schedule lighter Core loads
      around them — the Four-Year Plan already does this; keep it that way when you adjust.</li>
  <li><strong>Do not GPA-optimize into blandness.</strong> An A− in the ambitious course with the invested
      professor beats an A in the safe one, on every dimension you care about: learning, letters, and story.
      Use the calculator to know your margins, then spend them on ambition.</li>
  <li><strong>Study-away grades count too</strong> (confirm exactly how they post for your record) — Florence
      and New York are not GPA vacations.</li>
</ul>
`
};
