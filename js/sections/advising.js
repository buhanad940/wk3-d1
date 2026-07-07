window.APP_SECTIONS = window.APP_SECTIONS || {};
window.APP_ORDER = window.APP_ORDER || [];

window.APP_ORDER.push("advising");
window.APP_SECTIONS["advising"] = {
  title: "Advising",
  icon: "🎓",
  html: `
<h2>Academic Advising — Question Banks &amp; Meeting Playbook</h2>
<p class="section-lede">
  Your academic adviser is the person who turns this app's draft plan into an official, safe one. Below:
  how advising works, how to run a great meeting, and ready-to-copy question banks for every topic in your plan —
  course planning, Calculus, summer courses, Economics, Rhodes, Florence, New York, and graduation requirements.
</p>

<h3>How advising works at NYUAD (the short version)</h3>
<ul>
  <li>Every student gets an academic adviser (first-year/global advisers early on; once you declare Economics,
      you also gain a <strong>faculty mentor in the major</strong>). Peer mentors and the Academic Resource
      Center round out the support net.</li>
  <li>Advisers approve/discuss your course plans each registration cycle and run degree audits.</li>
  <li>They are also the routing layer: they know which office answers what (Registrar for credit rules, Global
      Education for study away, Career Development for fellowships) — when in doubt, ask them "who owns this
      question?"</li>
</ul>

<h3>The meeting playbook</h3>
<ol>
  <li><strong>Book early</strong> — advising calendars jam right before registration. Book two weeks ahead.</li>
  <li><strong>Send an agenda</strong> the day before: 3–5 questions max per meeting (use the banks below).</li>
  <li><strong>Bring your plan</strong> — the four-year plan from this app, exported/printed. Advisers give
      radically better answers to "here is my draft, what breaks?" than to "what should I take?"</li>
  <li><strong>Write down answers during the meeting</strong> and email a recap: "Just to confirm, we agreed…"
      That email is your paper trail for credit and requirement decisions.</li>
  <li><strong>One follow-up action within 48 hours</strong> — advisers invest in students who execute.</li>
</ol>

<h3>Question banks — copy what you need</h3>

<details open>
  <summary>📋 Course planning (first year)</summary>
  <ul>
    <li>My fall plan is ~12 credits — FYWS + Markets + one Core course — plus Methods of the Written Voice as a zero-credit AEP writing course, and no math. Is that combination permitted and advisable?</li>
    <li>Is 12 credits full-time for every purpose that matters (visa status, housing, financial aid, academic standing)?</li>
    <li>Can we run the credit arithmetic to graduation: with a 12-credit first semester, two study-away semesters, and J-Terms, exactly where do the remaining credits come from, and which later semesters need to be 16?</li>
    <li>Which course officially satisfies the FYWS requirement?</li>
    <li>For the AEP writing course: does it appear on my transcript, how long does it run into the semester, and what are its attendance/completion rules?</li>
    <li>Does Markets have any math prerequisite or corequisite in the current catalog?</li>
    <li>I plan to take Calculus in the spring instead of the fall. Can you confirm spring sections will have first-year seats, and walk me through exactly what breaks (if anything) for my Economics sequence and graduation date if Calculus lands in spring vs. the following summer?</li>
    <li>Can introductory statistics sit alongside Calculus in my spring semester, or should it wait for Year 2 fall?</li>
    <li>How many credits do I need per semester to graduate on time with my study-away plan?</li>
    <li>Which Core categories should I start with, and which Core courses pair well with an Economics major?</li>
    <li>When must I formally declare the Economics major, and what does declaring change?</li>
    <li>What is the smartest use of my first J-Term?</li>
    <li>If a course I need is full, what is the official process (waitlist, permission numbers, week-one adds)?</li>
  </ul>
</details>

<details>
  <summary>🧮 Calculus &amp; Multivariable (Plans A/B/C)</summary>
  <ul>
    <li>How does math placement work, and could it change which Calculus course I start in?</li>
    <li>If I cannot take Calculus in the fall, what exactly moves in my Economics sequence, and by how much?</li>
    <li>Is taking Calculus in the spring (Plan B) fully compatible with Florence in sophomore spring?</li>
    <li>Can you confirm: Calculus, Multivariable Calculus, Data Analysis (ECON-UH 2020), and Econometrics
        (SOCSC-UH 3220) must all be completed in Abu Dhabi — no exceptions for outside transfer credit, even
        in summer?</li>
    <li>When in my sequence should I plan Multivariable Calculus, given it must land before junior-year study
        away and be completed in Abu Dhabi?</li>
    <li>Statistics for the Social and Behavioral Sciences is required before Florence — can it sit alongside
        Calculus in Y1 spring, or should it move to Y2 fall?</li>
  </ul>
</details>

<details>
  <summary>☀️ Summer courses</summary>
  <ul>
    <li>Does NYUAD run its own Abu Dhabi summer sessions, and does Calculus (or Multivariable Calculus) ever
        appear on that schedule?</li>
    <li>Since Calculus and Multivariable Calculus must be completed in Abu Dhabi, is an NYUAD-administered Abu
        Dhabi summer offering the only summer option for these two courses — confirm no outside-university
        transfer is possible for them specifically.</li>
    <li>What is the deadline and form for pre-approving any other outside/summer elective?</li>
    <li>How do summer courses interact with financial aid and housing?</li>
    <li>In your experience, is a summer course or a research assistantship more valuable for a student with my goals?</li>
  </ul>
</details>

<details>
  <summary>💹 Finance concentration</summary>
  <ul>
    <li>Can you confirm the exact current name of my concentration — is it "Finance and Market Studies"? — and
        its full requirement list beyond the 72-credit core Economics list (the major-with-concentration
        minimum is 80 credits; what fills the remaining ~8)?</li>
    <li>Which finance electives does NYUAD offer in Abu Dhabi, and when should I take Introduction to
        Accounting and Foundations of Financial Markets (and Corporate Finance if relevant) so they are done
        before my New York semester?</li>
    <li>New York is the officially recommended site for this concentration — can we confirm which NY finance
        electives have historically counted toward it, and pre-approve my likely list before I apply?</li>
    <li>Can my senior capstone (Capstone Seminar + Capstone Project) be on a finance topic, and which faculty
        supervise finance-related capstones?</li>
    <li>Given the GPA ≥ 3.5 gate on my second study-away semester (New York), what is the realistic timeline for
        confirming I have cleared it before I apply?</li>
  </ul>
</details>

<details>
  <summary>📈 Economics major</summary>
  <ul>
    <li>Can we map the full Economics requirement list (72 credits: ECON-UH/MATH-UH/SOCSC-UH courses) against
        my four-year draft (I have it with me)?</li>
    <li>What is the recommended order for Intermediate Micro, Intermediate Macro, Data Analysis, and
        Econometrics, and which are offered every semester vs. once a year?</li>
    <li>How does the two-course senior capstone work (Capstone Seminar, then Capstone Project) — timing,
        adviser matching, and what strong projects look like?</li>
    <li>Can you confirm which requirements must stay in Abu Dhabi (Calculus, Multivariable Calculus, Data
        Analysis, Econometrics) versus which are safe to take abroad as electives?</li>
    <li>How do I get involved in faculty research as a first- or second-year?</li>
  </ul>
</details>

<details>
  <summary>🏆 Rhodes &amp; fellowships</summary>
  <ul>
    <li>Who at NYUAD advises students on the Rhodes and other nationally competitive scholarships, and when should I first meet them?</li>
    <li>Given my citizenship/residency, which Rhodes constituency would I apply through, and can the fellowship adviser help me confirm eligibility now?</li>
    <li>Are there NYUAD-internal endorsement steps or deadlines before the Rhodes deadline?</li>
    <li>Which NYUAD students have won or been shortlisted for major scholarships, and what patterns do you see?</li>
    <li>Does my four-year plan leave enough senior-fall bandwidth for applications and interviews?</li>
  </ul>
</details>

<details>
  <summary>🇮🇹 Florence study away</summary>
  <ul>
    <li>Can we confirm I will have completed all four sophomore-spring prerequisites (Markets, Statistics,
        Calculus, GEPS/Intro Macro) before I apply?</li>
    <li>What is the application timeline for a spring semester in Florence, counted back from today?</li>
    <li>How do I pre-approve Florence courses for Gen Ed/major credit, and who signs?</li>
    <li>Since I won't yet qualify for 300-level economics electives at the site, what is the strongest Gen Ed /
        exploration course list Florence typically offers?</li>
  </ul>
</details>

<details>
  <summary>🗽 New York study away</summary>
  <ul>
    <li>Can we confirm, in writing, that I will have completed Intermediate Micro, Intermediate Macro, Data
        Analysis, and Multivariable Calculus (all in Abu Dhabi) before I apply for New York?</li>
    <li>Can we also confirm my cumulative GPA will be at or above 3.5 — the gate on my second away semester —
        by the time I apply?</li>
    <li>Which NYU New York finance electives have historically counted toward the Finance and Market Studies
        concentration, and which require Introduction to Accounting / Foundations of Financial Markets as a
        prerequisite I should complete here first?</li>
    <li>How early should I start the US visa process for a fall semester, given my nationality?</li>
  </ul>
</details>

<details>
  <summary>🎓 Graduation requirements</summary>
  <ul>
    <li>Can we run a degree audit now and again each spring, so nothing surprises me senior year?</li>
    <li>My understanding is Gen Ed is 26 credits, the major is 72, and major-with-concentration is a minimum
        of 80 — can you confirm these numbers and the total credits I need to graduate, including any free
        electives?</li>
    <li>Are there non-course requirements (the two Field Colloquia J-Terms, residency semesters in Abu Dhabi,
        capstone presentation) I should have on my calendar?</li>
    <li>What is the latest semester by which each remaining requirement can safely be scheduled, given that
        Calculus, Multivariable Calculus, Data Analysis, and Econometrics must all be done in Abu Dhabi?</li>
    <li>If I ever needed a lighter semester (health, application season), what are my options without delaying graduation?</li>
  </ul>
</details>

<div class="callout tip">
  <strong>One meeting, one theme.</strong> Do not bring all eight banks to one meeting. Registration season →
  course planning + Calculus. Early fall → Rhodes + summer. Before study-away applications → Florence/New York.
  Every spring → graduation audit. The Checklists section has a per-semester advising cadence you can tick off.
</div>

<div class="callout anecdote">
  Advisers consistently say some version of this: the students they can help most are not the ones with perfect
  plans, but the ones who show up with <em>a</em> plan. A draft with two mistakes gets fixed in twenty minutes; a
  blank page gets generic advice. You now have the draft — bring it.
</div>
`
};
