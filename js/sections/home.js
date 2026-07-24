window.APP_SECTIONS = window.APP_SECTIONS || {};
window.APP_ORDER = window.APP_ORDER || [];

window.APP_ORDER.push("home");
window.APP_SECTIONS["home"] = {
  title: "Home",
  icon: "🏠",
  html: `
<h2>Welcome to NYUAD Compass</h2>
<p class="section-lede">
  A big, practical, everything-in-one-place guide built around <strong>your</strong> plan, written for you as a
  <strong>UAE national</strong> studying Economics at New York University Abu Dhabi — so it skips the
  international-student arrival/landing logistics and leans into your home-ground advantages. It is aimed at one
  <strong>main goal</strong>: landing the highest-paying, fastest-to-senior role you can at a top Abu Dhabi /
  Dubai institution (a sovereign wealth fund like ADIA or Mubadala, a ministry or the Prime Minister's Office,
  the Central Bank, a top bank, or elite consulting) <strong>straight out of your bachelor's, no master's or PhD
  first</strong> — using the national fast-track and Emiratization programs that are open to you. The Rhodes
  Scholarship is your <strong>side</strong> goal (kept in full, and it shares almost every step with the main
  one). Plus study away in Florence and New York, and a schedule that keeps your afternoons early and evenings free.
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
    <h4>🏛️ Main goal — career</h4>
    <p><strong>A senior-track, top-pay role in Abu Dhabi or Dubai, straight from your bachelor's.</strong>
       Sovereign wealth funds (ADIA, Mubadala, ADQ), ministries / the PMO, the Central Bank, top banks (FAB,
       Emirates NBD), or elite consulting (MBB). The full employer map, job titles, fast-track programs, and
       four-year plan are in the <strong>Career Mission</strong> section.</p>
  </div>
  <div class="card">
    <h4>🏆 Side goal — Rhodes</h4>
    <p><strong>Rhodes Scholarship.</strong> Kept in full in the Rhodes section — and its roadmap (grades,
       leadership, research, references) is nearly identical to the career mission's, so pursuing it costs you
       almost nothing extra.</p>
  </div>
  <div class="card">
    <h4>🎓 Degree</h4>
    <p><strong>B.A. in Economics with a Finance and Market Studies concentration</strong> (confirm the exact
       name), NYU Abu Dhabi, Class of 2030. Major: 72 credits; major-with-concentration: minimum 80 credits;
       General Education: 26 credits. New York anchors the finance concentration — reframed as the credential you
       bring <em>back</em> to Abu Dhabi/Dubai (see Career Mission and the Four-Year Plan).</p>
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
    <tr><td><strong>Packing &amp; Tech Setup</strong></td><td>What to pack vs. buy in Abu Dhabi, the documents list, and the digital setup to finish before you fly.</td></tr>
    <tr><td><strong>Career Mission</strong> <span class="badge core">main goal</span></td><td>The plan for a senior-track, top-pay role in Abu Dhabi/Dubai straight from your bachelor's: target employers (ADIA, Mubadala, ministries, PMO, Central Bank, banks, MBB), job titles, the fast-track leadership/graduate programs, and what to do each year.</td></tr>
    <tr><td><strong>Mubadala Playbook</strong> <span class="badge core">UAE national</span></td><td>A step-by-step route into your top target, Mubadala: the roles that fit your major, the Emirati development-programme and internship paths, a year-by-year plan, interview prep, networking, and a saveable readiness checklist.</td></tr>
    <tr><td><strong>ADIA Playbook</strong> <span class="badge core">UAE national</span></td><td>The route into the Abu Dhabi Investment Authority: asset-class analyst roles, the national development programme, the quant/CFA edge, a year-by-year plan, interview prep, and a readiness checklist.</td></tr>
    <tr><td><strong>PMO &amp; Gov Leadership</strong> <span class="badge core">fastest to senior</span></td><td>Your fastest route to a senior <em>government</em> role: the UAE Government Leaders Programme, National Experts Programme, the PMO, policy roles, and how to build the public-impact record they select on.</td></tr>
    <tr><td><strong>Ministries &amp; Central Bank</strong> <span class="badge core">UAE national</span></td><td>Economist and policy roles at the Ministry of Finance, Ministry of Economy, Central Bank, and emirate economic departments — with the national graduate routes and a readiness checklist.</td></tr>
    <tr><td><strong>First Semester</strong></td><td>Your registered Fall 2026 schedule, AEP prep, course-by-course strategy, and a morning + 1–3 PM schedule template.</td></tr>
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
    <tr><td><strong>Checklists &amp; Templates</strong></td><td>Pre-semester setup, weekly, registration, and advising checklists (they save automatically), plus email templates.</td></tr>
    <tr><td><strong>Glossary &amp; FAQ</strong></td><td>The NYUAD acronym decoder ring and honest answers to the questions first-years are embarrassed to ask.</td></tr>
  </tbody>
</table>
</div>

<h3>Quick start — your next five moves</h3>
<div class="card">
  <label class="check"><input type="checkbox" data-ck="home-move-1"> Read the <strong>Career Mission</strong> section — your main goal, the target employers, and the Year 1 moves that start the clock.</label>
  <label class="check"><input type="checkbox" data-ck="home-move-2"> Read the <strong>Rhodes Roadmap</strong> "Year 1" list — the side goal, and it shares almost every step with the career mission.</label>
  <label class="check"><input type="checkbox" data-ck="home-move-3"> Copy the adviser questions you need from the <strong>Advising</strong> section into a note for your first meeting.</label>
  <label class="check"><input type="checkbox" data-ck="home-move-4"> Add your first professor research entries in the <strong>Professors</strong> comparison tool.</label>
  <label class="check"><input type="checkbox" data-ck="home-move-5"> Read the <strong>Mubadala</strong> and <strong>PMO &amp; Gov Leadership</strong> playbooks and start their readiness checklists.</label>
</div>

<div class="callout anecdote">
  A pattern upperclassmen repeat in almost every orientation panel: the students who thrive at NYUAD are not the
  ones who knew everything on day one — they are the ones who asked questions early, went to office hours in week
  two (not week twelve), and treated their adviser as a teammate instead of a formality. This app is designed to
  make you that student.
</div>
`
};
