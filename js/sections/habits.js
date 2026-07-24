window.APP_SECTIONS = window.APP_SECTIONS || {};
window.APP_ORDER = window.APP_ORDER || [];

window.APP_ORDER.push("habits");
window.APP_SECTIONS["habits"] = {
  title: "Study Habits & Routines",
  icon: "⏱️",
  html: `
<h2>Study Habits, Daily Routines &amp; Exam Strategy</h2>
<p class="section-lede">
  Your schedule preference — one morning class, one early-afternoon class, evenings free — is already the
  skeleton of an excellent routine. This section fills in the muscles: what to do in each block, subject-specific
  study systems for math, economics, and writing, and how to run midterm/finals seasons without chaos.
</p>

<h3>The daily template (built around your 9 AM / 1–3 PM class shape)</h3>
<div class="table-wrap">
<table>
  <thead><tr><th>Block</th><th>What happens</th><th>Why it works</th></tr></thead>
  <tbody>
    <tr><td><strong>07:30–08:45</strong></td><td>Wake, movement (gym/run/walk), breakfast. No email, no group chats.</td><td>Physical start beats scrolling start; you arrive at 9 AM already awake.</td></tr>
    <tr><td><strong>09:00–10:15</strong></td><td>Morning class (e.g., Calculus).</td><td>Math early = freshest brain on the hardest symbol-pushing.</td></tr>
    <tr><td><strong>10:30–12:15</strong></td><td><strong>Deep block 1:</strong> same-day review of the morning class (20 min), then problem sets or reading for tomorrow.</td><td>Reviewing within 2 hours of a lecture roughly doubles retention vs. reviewing days later.</td></tr>
    <tr><td><strong>12:15–13:00</strong></td><td>Lunch, ideally social.</td><td>Community is a retention strategy too — for you at NYUAD, literally.</td></tr>
    <tr><td><strong>13:00–15:45</strong></td><td>Afternoon class (your 1–3 PM slot) + office hours / Writing Center right after while questions are fresh.</td><td>Attaching help-seeking to an existing anchor makes it automatic.</td></tr>
    <tr><td><strong>16:00–18:30</strong></td><td>Life: SIGs, sport, events, naps, calls home. <em>Not</em> studying.</td><td>Guilt-free leisure requires scheduled leisure; this is it.</td></tr>
    <tr><td><strong>19:30–21:30</strong></td><td><strong>Deep block 2 (light):</strong> readings, essay drafting, flashcards. Stop at a planned time.</td><td>Two bounded deep blocks beat one heroic all-nighter every time, all semester.</td></tr>
    <tr><td><strong>22:30</strong></td><td>Shutdown ritual: tomorrow's 3-item list, devices parked, sleep.</td><td>Sleep is when today's Calculus consolidates. 7.5–8h is a academic performance decision.</td></tr>
  </tbody>
</table>
</div>

<div class="callout tip">
  <strong>The 3-item rule.</strong> Each evening, write tomorrow's three must-do items (one per course is a good
  default). Days with a 3-item list start themselves; days without one get eaten by group chats and "quick"
  errands. This is the highest return-per-effort habit in this entire app.
</div>

<h3>Subject-specific systems</h3>
<div class="card-grid">
  <div class="card">
    <h4>🧮 Calculus system</h4>
    <ol>
      <li><strong>Problems &gt; notes.</strong> Reading solutions feels like learning; producing them is learning.
          Target: every assigned problem attempted before recitation, wrong answers marked, not erased.</li>
      <li><strong>Error log:</strong> one page where every mistake gets a line — "dropped negative in chain
          rule," "forgot to check endpoints." Reread before every exam; your exam mistakes are ~80% repeats.</li>
      <li><strong>Weekly 25-problem sweep:</strong> Friday morning block, mixed problems from all topics so far.
          Interleaving is what makes midterms feel familiar.</li>
      <li><strong>Standing tutoring slot</strong> at the ARC from week 3, even (especially) while doing well.</li>
    </ol>
  </div>
  <div class="card">
    <h4>📈 Economics (Markets) system</h4>
    <ol>
      <li><strong>Graph reps:</strong> redraw every model from a blank page within 24h of class (axes, curves,
          shifts, and the one-sentence intuition). If you cannot rebuild it blank, you do not have it yet.</li>
      <li><strong>News link:</strong> weekly, connect one concept to one real story (UAE diversification, oil
          markets, Gulf labor economics). Fuels essays, class participation, and eventually Rhodes interviews.</li>
      <li><strong>Define-out-loud test:</strong> explain elasticity/surplus/marginal cost to a non-econ friend.
          Teaching is the fastest comprehension check that exists.</li>
    </ol>
  </div>
  <div class="card">
    <h4>✍️ Writing (FYWS) system</h4>
    <ol>
      <li><strong>Never draft on deadline day.</strong> Backward-plan every essay: ideas by day X, ugly first
          draft by X+3, Writing Center by X+5, revision by X+7. The ugly-early draft is the whole secret.</li>
      <li><strong>Feedback ledger:</strong> one running doc of every professor comment ever received. Before each
          new essay, reread it. Improvement across essays is exactly what FYWS grades reward.</li>
      <li><strong>Read like a writer:</strong> for each assigned reading, note one move the author made that you
          could steal (structure, transitions, evidence use).</li>
    </ol>
  </div>
</div>

<h3>Weekly rhythm</h3>
<ul>
  <li><strong>Sunday planning (30 min):</strong> map the week's deadlines into your deep blocks; book study rooms.</li>
  <li><strong>Friday review (30 min):</strong> error-log sweep, feedback ledger update, impact-journal line if
      something Rhodes-relevant happened, next week's biggest risk identified.</li>
  <li><strong>One full rest unit per week</strong> (an evening + a morning, or a whole day). Non-negotiable;
      burnout is a scheduling failure, not a character flaw.</li>
</ul>

<h3>Midterms &amp; finals protocol</h3>
<ol>
  <li><strong>T-minus 14 days:</strong> list every exam/paper; build a one-page topic inventory per course;
      rank topics red/yellow/green by confidence.</li>
  <li><strong>Reds first.</strong> The instinct to re-study greens (it feels good) is the classic trap.</li>
  <li><strong>Practice in exam conditions:</strong> past problems, timed, no notes, in a quiet library slot at
      the same time of day as the exam. For essays: outline three plausible prompts.</li>
  <li><strong>Taper:</strong> the last 24h is for error-log review and sleep, not new material. Walk in rested;
      it is worth more than any final cram.</li>
  <li><strong>After each exam season:</strong> 15-minute retro — what worked, what to change. Your system should
      be visibly better each semester; by junior year exams become routine, which is exactly the calm you want
      during Rhodes season.</li>
</ol>

<h3>Focus mechanics (the boring stuff that decides everything)</h3>
<ul>
  <li><strong>Phone in bag, bag on hook</strong> during deep blocks — physical distance beats willpower.</li>
  <li><strong>50/10 cycles</strong> (50 min on, 10 min off) or 25/5 if attention is ragged that day.</li>
  <li><strong>One location = one mode:</strong> pick a silent library floor for deep work, a café/common room for
      light work, and your room for neither if you can help it (rooms are for rest; blurring them costs both).</li>
  <li><strong>Time-zone discipline:</strong> calls home across time zones will pull at your evenings — schedule
      them into the 16:00–18:30 life block, not into deep block 2.</li>
</ul>

<div class="callout anecdote">
  A senior line that gets repeated to first-years every year, in some form: "Your GPA is decided in weeks 2–6,
  when nothing is due." Students who use the quiet early weeks to build the error log, meet the professors, and
  bank ahead on readings coast through the storm of week 10. Students who coast in week 3 meet the storm
  unarmored. Same storm, different outcomes — the difference was September.
</div>
`
};
