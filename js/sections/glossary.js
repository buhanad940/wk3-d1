window.APP_SECTIONS = window.APP_SECTIONS || {};
window.APP_ORDER = window.APP_ORDER || [];

window.APP_ORDER.push("glossary");
window.APP_SECTIONS["glossary"] = {
  title: "Glossary & FAQ",
  icon: "📖",
  html: `
<h2>Glossary &amp; Frequently Asked Questions</h2>
<p class="section-lede">
  Every campus runs on acronyms and shorthand that nobody explains. Here is the decoder ring, plus straight
  answers to the questions first-years actually ask (including the ones they are embarrassed to ask).
</p>

<h3>The NYUAD decoder ring</h3>
<div class="table-wrap">
<table>
  <thead><tr><th>Term</th><th>Meaning</th></tr></thead>
  <tbody>
    <tr><td><strong>AEP</strong></td><td>Academic Enrichment Program — pre-first-year academic preparation (your reading + FYWS prep track).</td></tr>
    <tr><td><strong>Albert</strong></td><td>NYU's student information system — registration, course search, grades. The only authoritative source for course times.</td></tr>
    <tr><td><strong>ARC</strong></td><td>Academic Resource Center — tutoring, academic coaching, study-skills workshops.</td></tr>
    <tr><td><strong>Capstone</strong></td><td>The senior-year research project every NYUAD student completes in their major.</td></tr>
    <tr><td><strong>Core</strong></td><td>The Core Curriculum — required courses across disciplinary categories outside your major.</td></tr>
    <tr><td><strong>D2</strong></td><td>The main dining hall (from "Dining 2" in campus building shorthand). Where campus actually socializes.</td></tr>
    <tr><td><strong>FYWS</strong></td><td>First-Year Writing Seminar — your Methods of the Written Voice.</td></tr>
    <tr><td><strong>The Gazelle</strong></td><td>The independent student news publication of NYUAD.</td></tr>
    <tr><td><strong>Global Education</strong></td><td>The office managing study away, J-Term travel, and global programs.</td></tr>
    <tr><td><strong>Handshake</strong></td><td>The jobs/internships platform used for on-campus roles and employer postings (name may evolve — ask Career Development for the current one).</td></tr>
    <tr><td><strong>J-Term</strong></td><td>January Term — one intensive ~3-week course between semesters, sometimes with travel.</td></tr>
    <tr><td><strong>Marhaba</strong></td><td>"Welcome" in Arabic — the name of first-year orientation.</td></tr>
    <tr><td><strong>NetID</strong></td><td>Your NYU-wide login identity (letters + numbers). On every form forever.</td></tr>
    <tr><td><strong>RA</strong></td><td>Resident Assistant — upperclassman support figure in housing. (In research contexts: Research Assistant. Context disambiguates.)</td></tr>
    <tr><td><strong>Saadiyat</strong></td><td>The island campus and cultural district ("Saadiyat" = "island of happiness").</td></tr>
    <tr><td><strong>SIG</strong></td><td>Student Interest Group — official name for student clubs/organizations.</td></tr>
    <tr><td><strong>Study away</strong></td><td>A semester at another NYU global site (your Florence + New York semesters).</td></tr>
    <tr><td><strong>Wasserman</strong></td><td>NYU New York's career center (relevant during your junior fall).</td></tr>
    <tr><td><strong>Wellness Exchange</strong></td><td>NYU's 24/7 mental-health hotline and app.</td></tr>
    <tr><td><strong>Karak</strong></td><td>Sweet spiced tea, the unofficial beverage of the UAE. 1–2 AED of national infrastructure.</td></tr>
  </tbody>
</table>
</div>

<h3>FAQ — asked every year, answered honestly</h3>

<details open>
  <summary>Is three courses in my first semester "behind"?</summary>
  <p>No — it is a load choice with trade-offs. What matters is the four-year credit arithmetic (which your
  adviser will run with you, especially given two study-aways). Some students take four including a Core;
  your three are deliberately chosen heavy-hitters (FYWS + Calculus + Markets). Decide with the arithmetic,
  not with peer anxiety.</p>
</details>

<details>
  <summary>I'm skipping math in my first semester — does that hurt my Economics major or graduation?</summary>
  <p>No, provided one deadline holds: <strong>Calculus completed by the end of Year 1</strong> (spring is the
  plan, summer is the firewall). Semester one itself needs no math — Markets is an intro course. The math chain
  (Calculus → intermediate theory → econometrics) is timed against your study-away semesters, not against the
  first semester. Full analysis and the updated Plans A/B/C: First Semester section.</p>
</details>

<details>
  <summary>Can I really study away twice as an Economics major?</summary>
  <p>The plan in this app is built for exactly that (Florence Y2 spring, New York Y3 fall), and it is a
  well-trodden path — but it requires the sequencing discipline in the Four-Year Plan: theory courses
  positioned around the away semesters, courses pre-approved in writing, capstone groundwork protected in
  Y3 spring. Confirm the whole shape with your adviser in Year 1.</p>
</details>

<details>
  <summary>Is the Rhodes actually realistic?</summary>
  <p>Statistically, no single scholarship is "likely" for anyone — constituencies award a handful each year.
  Strategically, yes it is worth building toward, because the roadmap (grades, research, leadership, referees)
  is identical to the roadmap for top graduate programs and every other major scholarship. You are not betting
  four years on one committee; you are building a portfolio one committee might also reward. See the Rhodes
  section's parallel-paths rule.</p>
</details>

<details>
  <summary>How do I know if a campus rumor is true?</summary>
  <p>Run the five-step checklist in Community &amp; Groups: source distance → checkability → incentive →
  stakes → person test. The two-line verification email template is in Checklists. Rule of thumb: if acting on
  it wrongly would cost you anything real, verify with the owning office first.</p>
</details>

<details>
  <summary>What is "Bloomerpool"?</summary>
  <p>Unknown to this guide — it appeared in your own plan notes as a possible name for the junior-fall site
  alongside New York, and it does not match any commonly listed NYU global site. It is this app's live example
  of rumor hygiene: an unverified name gets flagged, not repeated as fact. Ask Global Education; update your
  plan with whatever the official answer is.</p>
</details>

<details>
  <summary>I'm struggling and everyone else seems fine. Now what?</summary>
  <p>"Everyone else seems fine" is the most reliably false observation on any campus — see Arrival's unwritten
  rules. The playbook: (1) tell one human (RA, friend, adviser); (2) book the relevant support the same day
  (ARC for academics, counseling via Health &amp; Wellness or the 24/7 Wellness Exchange for the rest);
  (3) reduce one commitment, not zero and not all. Struggling early and acting is the strong move; the record
  shows scholarship winners are heavy support-service users, not people who never needed help.</p>
</details>

<details>
  <summary>Do professors actually want office-hours visits from first-years?</summary>
  <p>Yes — office hours are scheduled work time that professors report is chronically underused, and NYUAD's
  ratios make access absurdly good by world standards. Come with one real question (about the material, their
  research, or how to study for their course). The compounding value of these visits appears in five other
  sections of this app; that is not an accident.</p>
</details>

<details>
  <summary>How much should I go to Dubai?</summary>
  <p>Less than week-one-you plans to, more than midterm-you remembers to. It is a superb occasional trip
  (old Dubai especially) and a mediocre weekly habit (cost + time). The Abu Dhabi section's every-two-weeks
  exploration rule covers the balance — and most of the best trips are not Dubai.</p>
</details>

<details>
  <summary>What should I absolutely not put in group chats?</summary>
  <p>Private information about identifiable people, unverified claims presented as fact, anything about grades
  or health or immigration status that is not yours, and anything you would not want read aloud in a
  scholarship interview — because screenshots are forever and UAE defamation/privacy law applies online.
  Full rules: Community &amp; Groups.</p>
</details>

<details>
  <summary>What is the single highest-leverage habit in this entire app?</summary>
  <p>The evening 3-item list (Study Habits). Second place: office hours by week 3. Third: the written recap
  email after every advising decision. All three cost minutes; all three compound for years.</p>
</details>
`
};
