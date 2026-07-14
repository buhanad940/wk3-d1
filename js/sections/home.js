window.APP_SECTIONS = window.APP_SECTIONS || {};
window.APP_ORDER = window.APP_ORDER || [];

window.APP_ORDER.push("home");
window.APP_SECTIONS["home"] = {
  title: "Home",
  icon: "🏠",
  html: `
<h2>Welcome to NYUAD Compass</h2>
<p class="section-lede">
  A big, practical, everything-in-one-place guide built around <strong>your</strong> plan:
  Economics major at New York University Abu Dhabi, Rhodes Scholarship as the long-term goal,
  the Academic Enrichment Program (AEP) before your first year, study away in Florence and New York,
  and a schedule that keeps your afternoons early and your evenings free.
</p>

<div class="callout warn">
  <strong>How to use this guide safely.</strong> Everything here is planning material written for a student,
  not official policy. Three rules keep you out of trouble:
  <ol>
    <li><strong>Confirm before you commit.</strong> Course codes, professors, times, and requirements change every
        semester — the official course search (Albert) and your academic adviser are the only sources that count.</li>
    <li><strong>Verify before you repeat.</strong> Campus "insider info" is often half-true. Use the
        rumor-verification checklist in the Community section before acting on or sharing anything.</li>
    <li><strong>Protect privacy.</strong> Never share private information about classmates or professors,
        and never post unverified claims about real people.</li>
  </ol>
</div>

<h3>Your plan at a glance</h3>
<div class="card-grid">
  <div class="card">
    <h4>🎓 Degree goal</h4>
    <p><strong>B.A. in Economics with a Finance and Market Studies concentration</strong> (confirm the exact
       name), NYU Abu Dhabi, Class of 2030. Major: 72 credits; major-with-concentration: minimum 80 credits;
       General Education: 26 credits. New York is the concentration's officially recommended, and your planned,
       anchor semester — see the Four-Year Plan's finance layer.</p>
  </div>
  <div class="card">
    <h4>🏆 Long-term goal</h4>
    <p><strong>Rhodes Scholarship.</strong> The full four-year roadmap is in the Rhodes section —
       grades, leadership, service, research, and references all planned by semester.</p>
  </div>
  <div class="card">
    <h4>📚 First semester — registered ✅</h4>
    <p>Fall 2026 as enrolled: <strong>Markets</strong> (Liu), <strong>Calculus</strong> (Paparella),
       <strong>History and Globalization</strong> (Fuccaro) = 12 credits, plus <strong>Methods of the Written
       Voice I</strong> (0 cr, AEP). <strong>FYWS moves to spring.</strong> Full schedule in First Semester.</p>
  </div>
  <div class="card">
    <h4>✈️ Study away</h4>
    <p><strong>Florence</strong> — sophomore spring (Gen Ed/exploration electives). <strong>New York</strong> —
       junior fall (finance electives; officially recommended for your concentration). Your <strong>second</strong>
       away semester (New York) requires a <strong>cumulative GPA ≥ 3.5</strong> — see Study Away and the GPA
       Tracker.</p>
  </div>
  <div class="card">
    <h4>⏰ Schedule style</h4>
    <p>One class in the morning, one in the early afternoon (ideally ~1:00–3:00 PM), nothing late.
       The First Semester section shows how to build this in registration.</p>
  </div>
  <div class="card">
    <h4>🧮 Math timing — ahead of schedule</h4>
    <p><strong>Calculus is in your fall registration</strong> (MATH-UH 1013, in Abu Dhabi as required) — the
       end-of-Year-1 deadline is beaten by a semester. Remaining AD-only courses: Multivariable Calculus (Y2),
       Data Analysis (Y2), Econometrics (Y3 spring).</p>
  </div>
</div>

<h3>What is inside this app</h3>
<div class="table-wrap">
<table>
  <thead><tr><th>Section</th><th>What you will find</th></tr></thead>
  <tbody>
    <tr><td><strong>Arrival &amp; First 30 Days</strong></td><td>Landing-day logistics, how to play Marhaba orientation, a week-by-week first-month plan, and the unwritten rules.</td></tr>
    <tr><td><strong>Packing &amp; Tech Setup</strong></td><td>What to pack vs. buy in Abu Dhabi, the documents list, and the digital setup to finish before you fly.</td></tr>
    <tr><td><strong>First Semester</strong></td><td>Your exact course plan, AEP prep, Calculus Plans A/B/C, summer-course options, and a morning + 1–3 PM schedule template.</td></tr>
    <tr><td><strong>Schedule Builder</strong></td><td>An interactive weekly grid: sketch candidate sections and get automatic checks against your morning + 1–3 PM, no-late-classes preference.</td></tr>
    <tr><td><strong>Four-Year Plan</strong></td><td>Semester-by-semester Economics plan built on the official study-away prerequisite chains, the Abu-Dhabi-only course rule, the 3.5 GPA gate, and the Rhodes timeline.</td></tr>
    <tr><td><strong>Core Curriculum</strong></td><td>The real Gen Ed structure (26 credits: PE, Quantitative Reasoning, Experimental Inquiry, Islamic Studies, Colloquia, Field Colloquia, four Core Competencies) and how to sequence it.</td></tr>
    <tr><td><strong>J-Term &amp; Summers</strong></td><td>All three January Terms (including the two required Field Colloquia) and all three summers planned, with the Abu-Dhabi-only rule for math/econ requirements.</td></tr>
    <tr><td><strong>Rhodes Roadmap</strong></td><td>Eligibility, selection criteria, year-by-year actions, referee strategy, and honest backup scholarships.</td></tr>
    <tr><td><strong>Study Away</strong></td><td>The official prerequisite chain per away semester, the 3.5 GPA gate on a second semester, concentration-site fit, and Florence/New York planning.</td></tr>
    <tr><td><strong>Professors &amp; Courses</strong></td><td>How to research professors in math, economics, and writing — plus a comparison tool where you rate clarity, grading fairness, workload, feedback, office hours, and Rhodes/Econ fit.</td></tr>
    <tr><td><strong>Advising</strong></td><td>Complete question banks for every advising topic you listed, plus how to run an advising meeting.</td></tr>
    <tr><td><strong>Writing Lab</strong></td><td>The craft section: argument mechanics, the five-pass revision workflow, and playbooks for FYWS, economics writing, and personal statements.</td></tr>
    <tr><td><strong>Data &amp; Quant Toolkit</strong></td><td>The skill ladder from spreadsheets to Stata/R to a portfolio project, timed to arrive just before each course needs it.</td></tr>
    <tr><td><strong>Research &amp; Capstone</strong></td><td>Getting into faculty research as an underclassman, the four-year research ladder, and how the Economics capstone works.</td></tr>
    <tr><td><strong>Internships &amp; Careers</strong></td><td>Where NYUAD economists go, the recruiting calendar mapped to your plan (including New York fall), CV and interview strategy.</td></tr>
    <tr><td><strong>Leadership &amp; Clubs</strong></td><td>The SIG ecosystem, the member-to-leader arc mapped to your four years, starting something new, and leading well.</td></tr>
    <tr><td><strong>Money &amp; Financial Aid</strong></td><td>Understanding your aid package, what Abu Dhabi costs, budgeting for two study-aways, earning on campus, and financial safety rules.</td></tr>
    <tr><td><strong>Campus Life</strong></td><td>Housing, dining, transport, weather, traditions, athletics, student interest groups, and small practical details.</td></tr>
    <tr><td><strong>Abu Dhabi &amp; UAE</strong></td><td>The city and country beyond campus — culture, etiquette, law essentials, day trips, and the anti-regret exploration plan.</td></tr>
    <tr><td><strong>Travel &amp; Breaks</strong></td><td>Flights home, break-by-break booking strategy, time-zone systems, and the visa triple-check that prevents border disasters.</td></tr>
    <tr><td><strong>Languages &amp; Arabic</strong></td><td>Arabic and Italian plans that fit your real schedule, plus keeping your home language sharp as a career asset.</td></tr>
    <tr><td><strong>Community &amp; Groups</strong></td><td>How to find real student groups and Facebook pages, how to verify rumors, and how to avoid spreading private or false claims.</td></tr>
    <tr><td><strong>Support &amp; Resources</strong></td><td>Health &amp; Wellness, academic support, writing support, Career Development, Global Education, library, IT.</td></tr>
    <tr><td><strong>Wellbeing &amp; Balance</strong></td><td>Sleep, movement, connection, and meaning as engineered systems, plus a monthly early-warning dashboard.</td></tr>
    <tr><td><strong>Safety &amp; Emergencies</strong></td><td>Emergency numbers, the health decision tree, UAE-specific safety (heat, sea, desert, roads), and looking out for each other.</td></tr>
    <tr><td><strong>Study Habits</strong></td><td>Daily routines built around your morning + early-afternoon schedule, study systems, and exam strategy.</td></tr>
    <tr><td><strong>GPA &amp; Grade Tracker</strong></td><td>A cumulative GPA calculator across all eight semesters, plus a target calculator for the grades you still need.</td></tr>
    <tr><td><strong>Checklists &amp; Templates</strong></td><td>Pre-arrival, weekly, registration, and advising checklists (they save automatically), plus email templates.</td></tr>
    <tr><td><strong>Glossary &amp; FAQ</strong></td><td>The NYUAD acronym decoder ring and honest answers to the questions first-years are embarrassed to ask.</td></tr>
  </tbody>
</table>
</div>

<h3>Quick start — your next five moves</h3>
<div class="card">
  <label class="check"><input type="checkbox" data-ck="home-move-1"> Read the <strong>First Semester</strong> section and pick your Calculus plan (A, B, or C).</label>
  <label class="check"><input type="checkbox" data-ck="home-move-2"> Read the <strong>Rhodes Roadmap</strong> "Year 1" list — the first-year actions are small but they compound.</label>
  <label class="check"><input type="checkbox" data-ck="home-move-3"> Copy the adviser questions you need from the <strong>Advising</strong> section into a note for your first meeting.</label>
  <label class="check"><input type="checkbox" data-ck="home-move-4"> Add your first professor research entries in the <strong>Professors</strong> comparison tool.</label>
  <label class="check"><input type="checkbox" data-ck="home-move-5"> Work through the <strong>Pre-Arrival Checklist</strong> in Checklists &amp; Templates.</label>
</div>

<div class="callout anecdote">
  A pattern upperclassmen repeat in almost every orientation panel: the students who thrive at NYUAD are not the
  ones who knew everything on day one — they are the ones who asked questions early, went to office hours in week
  two (not week twelve), and treated their adviser as a teammate instead of a formality. This app is designed to
  make you that student.
</div>
`
};
