window.APP_SECTIONS = window.APP_SECTIONS || {};
window.APP_ORDER = window.APP_ORDER || [];

window.APP_ORDER.push("careers");
window.APP_SECTIONS["careers"] = {
  title: "Internships & Careers",
  icon: "💼",
  html: `
<h2>Internships &amp; Careers for an NYUAD Economist</h2>
<p class="section-lede">
  Rhodes or not, you graduate into a career — and the Rhodes plan and the career plan are built from the same
  parts: skills, experiences, references, and a story. This section maps the economics career landscape from
  Abu Dhabi, the recruiting calendar (including your New York junior fall), and how to build the CV in parallel
  with everything else.
</p>

<h3>Where NYUAD economics graduates actually go</h3>
<div class="card-grid">
  <div class="card">
    <h4>🏛️ Policy &amp; institutions</h4>
    <p>Central banks (UAE and home-country), ministries and sovereign entities, international organizations
    (IMF/World Bank/UN agencies — usually after a master's), development banks, think tanks.</p>
    <p><strong>Fits your Rhodes narrative directly.</strong> Entry: research internships, strong econometrics,
    writing ability. Abu Dhabi is genuinely rich in policy-adjacent institutions.</p>
  </div>
  <div class="card">
    <h4>🏦 Finance &amp; consulting</h4>
    <p>Banks, asset managers, sovereign wealth funds (the UAE hosts some of the world's largest), and the
    consulting firms — all recruit in the Gulf and love quantitative economists.</p>
    <p>Entry: structured internship pipelines with <strong>early deadlines (a year+ ahead)</strong>; case/interview
    prep via student groups; your New York fall is prime recruiting territory.</p>
    <p><strong>Your finance concentration feeds this directly:</strong> Introduction to Accounting and
    Foundations of Financial Markets in Abu Dhabi before recruiting season, New York finance electives during
    it (New York is an officially recommended site for the Finance and Market Studies concentration), and a
    finance capstone as interview material (see the Four-Year Plan's finance layer).</p>
  </div>
  <div class="card">
    <h4>🎓 Research &amp; academia</h4>
    <p>MSc/PhD economics route: research assistantships, Multivariable Calculus + strong econometrics, a serious
    capstone, and professor references — conveniently, the exact Rhodes ingredient list.</p>
    <p>Entry: the Research &amp; Capstone section is the playbook; graduate applications run parallel to
    scholarship season in Year 4.</p>
  </div>
  <div class="card">
    <h4>🚀 Tech, data &amp; everything else</h4>
    <p>Data analysis, product, economics-of-platforms roles, startups, social enterprises, journalism.
    An economist who can code (R/Python/Stata from econometrics + a bit more) is broadly employable.</p>
    <p>Entry: portfolio projects beat course lists — one real dataset, one real question, results written up
    clearly.</p>
  </div>
</div>

<h3>The recruiting calendar, mapped to your four years</h3>
<div class="table-wrap">
<table>
  <thead><tr><th>When</th><th>Career move</th><th>Notes for your plan</th></tr></thead>
  <tbody>
    <tr><td>Y1 fall</td><td>None required. Learn, join, explore.</td><td>Resist finance-club urgency culture; first-years do not need internships, they need GPAs and curiosity.</td></tr>
    <tr><td>Y1 spring</td><td>CV reviewed at Career Development; Handshake alerts set; apply for modest summer roles/research.</td><td>Summer 1 = skills + possibly your Plan C course (see J-Term &amp; Summers).</td></tr>
    <tr><td>Y2 fall</td><td>Attend employer events to calibrate; apply for structured Summer 2 internships (many open now); research assistantship conversations.</td><td>Heavy season: this overlaps study-away applications — calendar both in week 1.</td></tr>
    <tr><td>Y2 spring (Florence)</td><td>Interviews for summer roles happen remotely — plan quiet rooms and time zones.</td><td>Summer 2 is the anchor experience for both Rhodes and career.</td></tr>
    <tr><td>Y3 fall (New York)</td><td>THE recruiting semester: NY career fairs, on-campus recruiting, networking at full density. Junior-summer internship applications (many due Sept–Nov).</td><td>Wasserman + NYUAD Career Development both; treat coffee-chat networking as a weekly class.</td></tr>
    <tr><td>Y3 spring–summer</td><td>Junior summer internship (often converts to a return offer) OR research summer if academia/Rhodes-narrative leads.</td><td>The honest fork: return-offer security vs. research depth. Decide with your adviser and fellowship advisers by March.</td></tr>
    <tr><td>Y4</td><td>Rhodes + graduate applications + any return offer decision. Deadlines cluster Sept–Jan.</td><td>Because you planned parallel paths (Rhodes section), December is a choice, not a scramble.</td></tr>
  </tbody>
</table>
</div>

<h3>CV construction — the NYUAD economist's stack</h3>
<div class="card">
  <ol>
    <li><strong>Education block:</strong> GPA (if strong), key coursework (econometrics, Multivariable Calculus),
        both study-away sites — global mobility reads as a feature, tell it that way.</li>
    <li><strong>Experience:</strong> 2–4 entries with <em>quantified outcomes</em> ("cleaned and analyzed 40k-row
        dataset; findings used in X" beats "assisted with research"). Your impact journal (Rhodes section) is the
        raw material — this is why it exists.</li>
    <li><strong>Skills:</strong> statistical software (Stata/R/Python), languages (Arabic basics + anything from
        home + Italian from Florence = a very NYUAD row), data tools.</li>
    <li><strong>Leadership/service:</strong> your 1–2 deep commitments with concrete outputs, not membership lists.</li>
    <li><strong>One page.</strong> Always one page until a master's degree says otherwise.</li>
  </ol>
</div>

<h3>Networking without the cringe</h3>
<ul>
  <li><strong>Alumni are the unfair advantage:</strong> NYUAD's alumni network is young, global, and famously
      responsive to current students. Ask Career Development how to reach alumni in economics/policy/finance —
      a 20-minute call with someone three years ahead beats twenty cold applications.</li>
  <li><strong>The ask that works:</strong> "I'm a second-year NYUAD economics student interested in [specific
      thing you actually mean]. Could I ask you 3 questions about your path for 15 minutes?" Specific, bounded,
      honest. Then send a thank-you note that references something they said.</li>
  <li><strong>Professors are a network too:</strong> economics faculty route students to policy internships and
      research collaborators constantly — but only students they know. Office hours compound again.</li>
  <li><strong>Events strategy:</strong> the small seminar with 12 attendees outranks the career fair with 500 —
      you can ask a question, be remembered, and follow up by name (same principle as the Community section's
      "smallest audiences" tip).</li>
</ul>

<h3>Interview preparation (both kinds)</h3>
<div class="card">
  <ul>
    <li><strong>Behavioral:</strong> six stories, written down, each with situation → action → outcome → what
        you learned: a leadership story, a failure story, a conflict story, a data story, a persuasion story,
        a "why economics" story. These six cover ~90% of behavioral questions everywhere — including Rhodes
        panels.</li>
    <li><strong>Technical/case:</strong> if finance/consulting tempts you, join the relevant student group's
        prep circuit by Y2 — case interviewing is a trainable sport, not a talent.</li>
    <li><strong>Mock everything:</strong> Career Development runs mock interviews; do one per application
        season minimum. Filmed mocks hurt and help in equal measure.</li>
  </ul>
</div>

<div class="callout tip">
  <strong>The career-vs-Rhodes false conflict.</strong> Students sometimes treat scholarship prep and career prep
  as competing tracks. Look at the ingredient lists: excellent grades, real experiences with measurable outcomes,
  professors and supervisors who vouch for you specifically, and a clear story about what problem you care about.
  Identical. Build the ingredients once; plate them differently per audience.
</div>

<div class="callout anecdote">
  A line that circulates among NYUAD upperclassmen every recruiting season: "The person who got the offer wasn't
  the one with the perfect CV — it was the one who could explain <em>why</em> for ten minutes without saying
  'passionate.'" Interviewers across policy, finance, and scholarship panels are all running the same detector:
  do you actually care about something, and have you done anything about it? Your whole four-year plan is
  engineered to make the honest answer yes.
</div>
`
};
