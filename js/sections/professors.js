window.APP_SECTIONS = window.APP_SECTIONS || {};
window.APP_ORDER = window.APP_ORDER || [];

window.APP_ORDER.push("professors");
window.APP_SECTIONS["professors"] = {
  title: "Professors & Courses",
  icon: "🧑‍🏫",
  html: `
<h2>Professors &amp; Courses — Research Guide + Comparison Tool</h2>
<p class="section-lede">
  Who teaches you matters as much as what you take — for learning, grades, and eventually Rhodes reference
  letters. This section shows how to research professors in <strong>math (Calculus, Multivariable), economics
  (Markets and beyond), and writing (FYWS / Methods of the Written Voice)</strong>, and gives you a private
  comparison tool with the exact rating criteria you asked for.
</p>

<div class="callout danger">
  <strong>Why this guide does not list named professors with ratings.</strong> Publishing ratings of real,
  named people based on hearsay would be unfair to them and unreliable for you — teaching assignments change
  every semester, and second-hand opinions are exactly the kind of unverified claim the Community section
  teaches you not to spread. Instead: this page gives you a <em>method</em> to research professors from
  legitimate sources, and a <em>private tool</em> (data stays in your browser) to record and compare what you
  learn. Keep your notes factual, first-hand where possible, and never publish them.
</div>

<div class="card">
  <h4>🎯 Your actual Fall 2026 instructors — start here</h4>
  <p>From your registration, these are the people to build relationships with this semester (facts from your
  enrollment; form your own views and log them in the tool below):</p>
  <ul>
    <li><strong>Prof. Liu</strong> — Markets (SOCSC-UH 1111), TTh mornings. Your first economics faculty
        relationship; office hours by week 3.</li>
    <li><strong>Jain</strong> — Markets recitation, Thursday afternoons. Recitation leaders see your actual
        problem-solving up close — a underrated ally for exam preparation.</li>
    <li><strong>Prof. Fuccaro</strong> — History and Globalization (HIST-UH 2010), MW mornings. A humanities
        referee balances an economist's file; read their faculty page for research interests.</li>
    <li><strong>Prof. Paparella</strong> — Calculus (MATH-UH 1013), MW late mornings. The professor of your
        most consequential course this semester — early office-hours visits here pay the highest dividends.</li>
    <li><strong>MWV instructor (TBA)</strong> — your writing coach for the year; their feedback feeds spring FYWS.</li>
  </ul>
</div>

<h3>How to research a professor properly (legitimate sources)</h3>
<ol>
  <li><strong>The current course search (Albert):</strong> the only reliable answer to "who teaches this section,
      when, and where." Check it every registration cycle — assignments change.</li>
  <li><strong>The professor's faculty page:</strong> research interests, publications, background. For economics,
      a professor whose research matches your interests is a future capstone adviser.</li>
  <li><strong>The syllabus:</strong> ask the professor or students from last term for it. Grading breakdown,
      workload, and late policies tell you more than any rating site.</li>
  <li><strong>Course evaluations:</strong> ask your adviser and peer mentors whether summaries are accessible to
      students at NYUAD, and how.</li>
  <li><strong>Upperclassmen — with calibration:</strong> ask at least three people, ask for specifics
      ("How were problem sets graded?" beats "Was she good?"), and note that a course that was "too hard" for
      one student may be exactly the rigor you want for the Rhodes track.</li>
  <li><strong>One office-hours visit before or during week one:</strong> the single best data point. Five minutes
      of conversation tells you about clarity, warmth, and expectations better than fifty online comments.</li>
  <li><strong>Sit in during add/drop:</strong> if two sections fit your schedule, attend both in week one and
      keep the better fit.</li>
</ol>

<h3>What to look for, by subject</h3>
<div class="card-grid">
  <div class="card">
    <h4>🧮 Math (Calculus / Multivariable)</h4>
    <ul>
      <li>Does the professor work full examples on the board, or state theorems and move on? (For your goals you
          want examples + intuition.)</li>
      <li>Are problem sets aligned with exams? Ask past students specifically.</li>
      <li>Recitations/TA support: who runs them and are they useful?</li>
      <li>Partial-credit policy — it changes how you should write solutions.</li>
      <li>For Multivariable later: ask whether the section leans computational or proof-flavored, and which the
          Economics program expects.</li>
    </ul>
  </div>
  <div class="card">
    <h4>📈 Economics (Markets → theory → capstone)</h4>
    <ul>
      <li>Research fit: read the faculty's fields (development, macro, behavioral, trade…). Your capstone adviser
          and two Rhodes referees will come from this pool — start mapping it in year one.</li>
      <li>Does the intro course lean essays, problem sets, or exams? Match to your strengths while building the
          weak side.</li>
      <li>Does the professor involve undergraduates in research? Ask directly in office hours — NYUAD's
          student-faculty ratio makes this genuinely accessible.</li>
      <li>Guest lectures / policy connections: economics faculty often bring regional central bank and policy
          contacts — gold for internships.</li>
    </ul>
  </div>
  <div class="card">
    <h4>✍️ Writing (FYWS / Methods of the Written Voice)</h4>
    <ul>
      <li>Feedback density is everything: ask past students to show you (or describe) the margin comments they
          received. A professor who writes a page of feedback is worth more than an easy A.</li>
      <li>Revision policy: can you revise after grading? That is where writers are made.</li>
      <li>Reading load and theme: FYWS sections have themes — pick one whose readings you will actually enjoy
          arguing about.</li>
      <li>Conference model: some writing professors hold one-on-one draft conferences. Prioritize them.</li>
    </ul>
  </div>
</div>

<h3>Your private professor comparison tool</h3>
<p>Rate professors/courses you are researching on the six criteria you chose, plus fit for your long-term
Economics + Rhodes goals. Entries are saved <strong>only in this browser</strong> (localStorage) — they are your
private research notes. Two <span class="badge sample">sample</span> fictional entries show how it works; delete
them anytime.</p>

<div class="card">
  <h4>Add / edit an entry</h4>
  <div class="prof-form" id="prof-form">
    <div class="field"><label for="pf-name">Professor (or "Section A — TBD")</label>
      <input type="text" id="pf-name" placeholder="e.g., Prof. — Calculus Sec 2"></div>
    <div class="field"><label for="pf-course">Course / subject</label>
      <select id="pf-course">
        <option>Calculus</option><option>Multivariable Calculus</option><option>Markets</option>
        <option>Economics (other)</option><option>FYWS / Writing</option><option>Statistics / Econometrics</option>
        <option>Core / Other</option>
      </select></div>
    <div class="field"><label for="pf-source">Main info source</label>
      <select id="pf-source">
        <option>My own class experience</option><option>Office-hours visit</option><option>Syllabus</option>
        <option>Course evaluations</option><option>Multiple upperclassmen</option><option>Single student (low confidence)</option>
      </select></div>
    <div class="field"><label>Clarity <span class="rating-val" id="pv-clarity">3</span>/5</label>
      <div class="rating-row"><input type="range" min="1" max="5" value="3" id="pf-clarity"></div></div>
    <div class="field"><label>Grading fairness <span class="rating-val" id="pv-fairness">3</span>/5</label>
      <div class="rating-row"><input type="range" min="1" max="5" value="3" id="pf-fairness"></div></div>
    <div class="field"><label>Workload manageability <span class="rating-val" id="pv-workload">3</span>/5</label>
      <div class="rating-row"><input type="range" min="1" max="5" value="3" id="pf-workload"></div></div>
    <div class="field"><label>Feedback quality <span class="rating-val" id="pv-feedback">3</span>/5</label>
      <div class="rating-row"><input type="range" min="1" max="5" value="3" id="pf-feedback"></div></div>
    <div class="field"><label>Office-hours accessibility <span class="rating-val" id="pv-office">3</span>/5</label>
      <div class="rating-row"><input type="range" min="1" max="5" value="3" id="pf-office"></div></div>
    <div class="field"><label>Econ/Rhodes long-term fit <span class="rating-val" id="pv-fit">3</span>/5</label>
      <div class="rating-row"><input type="range" min="1" max="5" value="3" id="pf-fit"></div></div>
    <div class="field wide"><label for="pf-notes">Notes (facts &gt; vibes: grading %, revision policy, research areas…)</label>
      <textarea id="pf-notes" rows="2" placeholder="e.g., 40% psets / 60% exams; encourages office hours; researches development economics."></textarea></div>
    <div class="field"><button class="btn" id="pf-save">Save entry</button></div>
    <div class="field"><button class="btn secondary" id="pf-clear">Clear form</button></div>
  </div>
</div>

<div class="card">
  <h4>Comparison table <span class="progress-pill" id="pf-count"></span></h4>
  <p style="font-size:0.88rem;color:var(--ink-soft)">"Fit" = your judgment of long-term value for the Economics
  major and Rhodes goals (mentorship potential, rigor, reference-letter relationship). Sorted by weighted score
  (fit and clarity count 1.5×).</p>
  <div class="table-wrap"><table id="prof-table">
    <thead><tr>
      <th>Professor / Section</th><th>Course</th><th>Clarity</th><th>Fairness</th><th>Workload</th>
      <th>Feedback</th><th>Office hrs</th><th>Fit ⭐</th><th>Score</th><th>Source</th><th></th>
    </tr></thead>
    <tbody id="prof-tbody"></tbody>
  </table></div>
  <p><button class="btn secondary small" id="pf-export">Copy all entries as text</button>
     <button class="btn danger small" id="pf-reset">Delete all entries</button></p>
</div>

<div class="callout tip">
  <strong>How to use the scores.</strong> The tool ranks, you decide. A professor with a lower "workload
  manageability" score but a 5 on fit may be exactly right for the Rhodes track — hard courses with invested
  professors produce the best letters. Use "grading fairness" and "feedback" as the non-negotiables; treat
  "workload" as information, not a veto.
</div>

<div class="callout warn">
  <strong>Ethics of professor notes.</strong> Keep entries factual and first-hand where possible; mark hearsay
  with the low-confidence source tag; never post your table or screenshots of it to group chats or social media.
  Rating a professor publicly on rumor is exactly the behavior the Community section warns about — privately
  organizing your own research is fine, broadcasting unverified judgments about real people is not.
</div>
`
};
