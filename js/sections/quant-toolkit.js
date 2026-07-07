window.APP_SECTIONS = window.APP_SECTIONS || {};
window.APP_ORDER = window.APP_ORDER || [];

window.APP_ORDER.push("quant-toolkit");
window.APP_SECTIONS["quant-toolkit"] = {
  title: "Data & Quant Toolkit",
  icon: "📊",
  html: `
<h2>Data &amp; Quantitative Toolkit for an Economist</h2>
<p class="section-lede">
  Modern economics is a data discipline. The math courses give you the theory spine; this section is the
  practical skill ladder — from spreadsheets to Stata/R to a portfolio project — timed so each skill arrives
  just before the course or opportunity that needs it.
</p>

<h3>The skill ladder, timed to your plan</h3>
<div class="table-wrap">
<table>
  <thead><tr><th>When</th><th>Skill</th><th>Why then</th><th>How (free/available routes)</th></tr></thead>
  <tbody>
    <tr><td>Y1 fall</td><td><strong>Spreadsheet fluency</strong>: formulas, pivot tables, charts, cleaning messy data by hand.</td><td>Markets problem sets + every club treasurer job forever.</td><td>Any structured online course + immediately using it for real tasks (your budget from the Money section is a perfect practice dataset).</td></tr>
    <tr><td>Y1 spring</td><td><strong>Statistics intuition</strong>: distributions, sampling, hypothesis tests — in plain language.</td><td>Runs alongside your first statistics course; intuition before formalism.</td><td>The statistics course itself + explaining each concept aloud (Study Habits' define-out-loud test).</td></tr>
    <tr><td>Y1 summer</td><td><strong>First scripting language: R or Python</strong> (basics: load data, clean, plot, summarize).</td><td>The summer slot pairs with Plan C course or research assistance — data cleaning is the RA entry ticket (Research section).</td><td>A structured beginner course + one tiny project on data you care about (football stats, home-country macro data, anything).</td></tr>
    <tr><td>Y2</td><td><strong>Stata and/or R for econometrics</strong>: regressions, robust errors, panel basics, clean .do/.R files.</td><td>Econometrics coursework demands it; campus licenses cover it (Support section).</td><td>The course + rewriting every problem set cleanly enough that future-you could rerun it.</td></tr>
    <tr><td>Y3 (New York)</td><td><strong>Applied polish</strong>: one real dataset project end-to-end, versioned and documented.</td><td>Recruiting season artifact + capstone rehearsal.</td><td>NY electives with data components; policy datasets are abundant and public.</td></tr>
    <tr><td>Y3–Y4</td><td><strong>Capstone stack</strong>: reproducible pipeline (raw data → cleaning script → analysis → figures), reference manager, backup discipline.</td><td>The thesis. Also graduate-school readiness.</td><td>Your capstone adviser's workflow + the library's data services.</td></tr>
  </tbody>
</table>
</div>

<h3>The rules of clean quantitative work (learn once, benefit forever)</h3>
<div class="card">
  <ol>
    <li><strong>Never edit raw data.</strong> Raw files are read-only; every change happens in a script that can
        be rerun. This single habit separates professional from amateur work — and it is Rule 1 of research
        integrity (Research section).</li>
    <li><strong>Name things so future-you understands:</strong> <code class="chip">wages_clean_2027.csv</code>
        beats <code class="chip">final_v2_REAL.csv</code>. Dates in filenames, units in column names.</li>
    <li><strong>Document decisions where you make them</strong> — a comment for every dropped observation rule,
        every merged file, every constructed variable.</li>
    <li><strong>One chart, one message.</strong> If a figure needs a paragraph to explain, remake the figure.
        Label axes with units. Your Markets essays are the practice ground.</li>
    <li><strong>Back up in three places:</strong> laptop, cloud, and (for the capstone) a second cloud or drive.
        The Packing section's automatic-backup setup is where this starts.</li>
  </ol>
</div>

<h3>Math confidence maintenance (the honest section)</h3>
<div class="card">
  <ul>
    <li><strong>Before Calculus (AEP summer):</strong> the highest-value refresher is algebra fluency — factoring,
        exponents, logs, function graphs. Thirty minutes daily for the last month beats any cram. Calculus fails
        are usually algebra fails wearing a disguise.</li>
    <li><strong>During Calculus:</strong> the error log + weekly mixed sweep (Study Habits) + standing ARC slot.
        If Plans B/C delay the course, keep algebra warm with light weekly practice — math skills decay
        measurably in a gap year… or gap semester.</li>
    <li><strong>Multivariable Calculus is required, not optional</strong> under the official Economics pathway —
        and it must be completed in Abu Dhabi before junior-year study away. The jump from Calculus is real but
        smaller than rumor claims — it is Calculus with more dimensions, not a different sport.</li>
    <li><strong>Econometrics is where the streams merge:</strong> statistics + calculus + software. Students who
        arrive with all three strands warm call it the best course of the major; students missing one call it
        the hardest. The ladder above exists to make you the first kind.</li>
  </ul>
</div>

<h3>Portfolio: proof beats claims</h3>
<ul>
  <li>By Y3 you want <strong>one polished project</strong> anyone can look at: a question, a public dataset, clean
      analysis, honest limitations, clear figures, written up in 3–5 pages. This artifact works in internship
      applications, research-assistant pitches, scholarship conversations, and interviews simultaneously.</li>
  <li>Good first-project shapes: replicate a published result on newer data; test a local claim with public
      statistics (UAE/home-country data); build a small index and track it.</li>
  <li>Host it simply (a document or simple repository is fine) — presentation polish matters less than
      reasoning transparency.</li>
</ul>

<div class="callout tip">
  <strong>The 80/20 of economist data skills:</strong> cleaning data carefully, running a sensible regression,
  knowing what it does NOT prove, and writing one clear page about it. Fancy methods impress briefly;
  trustworthy basics compound forever. Every rung of the ladder above practices the same four moves at
  increasing scale.
</div>

<div class="callout anecdote">
  A pattern professors mention when picking research assistants: the deciding factor is rarely the fanciest
  skill list — it is the student whose sample work has labeled axes, named files, and a comment explaining a
  judgment call. "I could hand them data and sleep," one version of the line goes. Be the student whose work
  lets people sleep.
</div>
`
};
