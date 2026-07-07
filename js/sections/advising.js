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
    <li>My fall plan is the First-Year Writing Seminar + a second writing course (Methods of the Written Voice) + Markets, with no math. Is that load and combination permitted and advisable — and should I add a fourth (Core) course given my two planned study-away semesters?</li>
    <li>Which course officially satisfies the FYWS requirement, and what does the second writing course count toward (Core category, elective)?</li>
    <li>Are two writing-intensive courses in one semester allowed for first-years, and would you advise it?</li>
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
  <summary>🧮 Calculus (Plans A/B/C)</summary>
  <ul>
    <li>How does math placement work, and could it change which Calculus course I start in?</li>
    <li>If I cannot take Calculus in the fall, what exactly moves in my Economics sequence, and by how much?</li>
    <li>Is taking Calculus in the spring (Plan B) fully compatible with Florence in sophomore spring?</li>
    <li>Does the Economics major require Multivariable Calculus for any track, and would you recommend it for a
        student considering graduate school in economics?</li>
    <li>Which statistics course does Economics require, and does it have Calculus as a prerequisite?</li>
  </ul>
</details>

<details>
  <summary>☀️ Summer courses</summary>
  <ul>
    <li>Can NYUAD students take summer courses — at NYU New York, online, or at another university — and how does approval work?</li>
    <li>Specifically: could I take Calculus or Multivariable Calculus in the summer after year one? What has to be true for the credit and prerequisite to count?</li>
    <li>What is the deadline and form for pre-approving an outside/summer course?</li>
    <li>How do summer courses interact with financial aid and housing?</li>
    <li>In your experience, is a summer course or a research assistantship more valuable for a student with my goals?</li>
  </ul>
</details>

<details>
  <summary>💹 Finance concentration</summary>
  <ul>
    <li>I want a concentration in finance alongside the Economics major. What is the official mechanism at NYUAD
        right now — a formal concentration/track, a minor, or a planned cluster of finance electives?</li>
    <li>Which finance courses does NYUAD currently offer, which are required for the concentration (if formal),
        and how often does each run?</li>
    <li>What are the prerequisites for the foundational finance course, and does my Calculus/statistics timing
        (including Plans B/C) affect when I can take it?</li>
    <li>During my New York junior fall: can NYUAD students take finance courses at Stern or elsewhere at NYU,
        what is the cross-registration process, and which courses have historically counted toward the
        concentration/major?</li>
    <li>Can my senior capstone be on a finance topic, and which faculty supervise finance-related capstones?</li>
    <li>Does the finance concentration change my Core or elective math in any way I should plan around now?</li>
  </ul>
</details>

<details>
  <summary>📈 Economics major</summary>
  <ul>
    <li>Can we map the full Economics requirement list against my four-year draft (I have it with me)?</li>
    <li>What is the recommended order for intermediate micro, intermediate macro, and econometrics, and which are offered every semester vs. once a year?</li>
    <li>How does the senior capstone work — timing, adviser matching, and what strong projects look like?</li>
    <li>Which requirements are safe to complete abroad, and which should only be done in Abu Dhabi?</li>
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
    <li>Does sophomore spring in Florence create any prerequisite problems for my Economics sequence?</li>
    <li>What is the application timeline for a spring semester in Florence, counted back from today?</li>
    <li>How do I pre-approve Florence courses for Core/major credit, and who signs?</li>
    <li>Is there anything I must complete in Abu Dhabi before that semester (advising checkpoints, declarations)?</li>
  </ul>
</details>

<details>
  <summary>🗽 New York study away</summary>
  <ul>
    <li>Junior fall in New York: any conflicts with capstone preparation or once-a-year NYUAD courses?</li>
    <li>Which NYU New York economics courses have historically transferred as major requirements vs. electives for NYUAD students?</li>
    <li>How early should I start the US visa process for a fall semester, given my nationality?</li>
    <li>A schedule question: I heard a site name "Bloomerpool" — can you or Global Education tell me what site that actually refers to, if anything?</li>
  </ul>
</details>

<details>
  <summary>🎓 Graduation requirements</summary>
  <ul>
    <li>Can we run a degree audit now and again each spring, so nothing surprises me senior year?</li>
    <li>Exactly how many credits, Core courses, and major courses remain in my plan, and where is the slack?</li>
    <li>Are there non-course requirements (J-Term participation, residency semesters in Abu Dhabi, capstone
        presentation) I should have on my calendar?</li>
    <li>What is the latest semester by which each remaining requirement can safely be scheduled?</li>
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
