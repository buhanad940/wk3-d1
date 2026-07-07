window.APP_SECTIONS = window.APP_SECTIONS || {};
window.APP_ORDER = window.APP_ORDER || [];

window.APP_ORDER.push("support");
window.APP_SECTIONS["support"] = {
  title: "Support & Resources",
  icon: "🛟",
  html: `
<h2>Student Support &amp; Study Resources</h2>
<p class="section-lede">
  NYUAD is unusually well-resourced for its size — the students who do best are simply the ones who use the
  support systems early and unembarrassed. Here is the full map: health, wellness, academic support, writing,
  careers, global education, library, and IT — and exactly when in your plan each one matters.
</p>

<h3>🩺 Health &amp; Wellness</h3>
<div class="card">
  <ul>
    <li><strong>Health Center on campus:</strong> primary care, referrals to Abu Dhabi hospitals/specialists,
        vaccinations. Register with them during orientation; know where they are before you need them.</li>
    <li><strong>Counseling &amp; mental health:</strong> confidential counseling is available to students, and
        NYU's 24/7 <strong>Wellness Exchange</strong> hotline/app connects you to someone any hour, any day.
        Use it for anything from stress to crisis — no problem is "too small."</li>
    <li><strong>Insurance:</strong> students are covered by a health insurance plan — learn what it covers
        (including while abroad in Florence and New York) before each study-away semester.</li>
    <li><strong>Normalize the first visit:</strong> book one low-stakes counseling session in a calm week of
        semester one, so if a hard week ever comes, the door is already familiar. This is the single most
        repeated wellness advice from upperclassmen.</li>
    <li>Fitness, sleep, and the dining hall are health infrastructure too — the Study Habits section builds
        them into your daily template.</li>
  </ul>
</div>

<h3>📖 Academic support</h3>
<div class="card">
  <ul>
    <li><strong>Academic Resource Center (ARC):</strong> peer tutoring, academic coaching (time management,
        study strategies), and workshops. For your plan: book <strong>Calculus peer tutoring by week three</strong>
        — not when trouble starts, but as a standing weekly slot. Tutoring while ahead is how A-students use it.</li>
    <li><strong>Writing support / Writing Center:</strong> trained consultants who work on your drafts at any
        stage — ideal cadence for Methods of the Written Voice is one visit per essay at the draft stage.
        Later they are also your Rhodes personal-statement gym.</li>
    <li><strong>Professor office hours:</strong> the most underused resource on any campus. Standing rule from
        the First Semester plan: every professor, by week three, with a real question.</li>
    <li><strong>Peer mentors &amp; advising:</strong> covered in the Advising section — the cadence there
        (one themed meeting per month) is the backbone.</li>
    <li><strong>Accessibility services (Moses Center):</strong> if you have or suspect a learning difference,
        chronic condition, or need accommodations, register early — accommodations are forward-looking, not
        retroactive.</li>
  </ul>
</div>

<h3>💼 Career Development Center</h3>
<div class="card">
  <ul>
    <li>CV/resume reviews, interview prep, internship search support, employer events, and — critical for you —
        <strong>guidance on fellowships and graduate school</strong>. Ask them in year one who advises Rhodes/
        Marshall/Fulbright-type applications at NYUAD, so you are on that office's radar three years early.</li>
    <li>Get your CV into reviewed shape in <strong>year one, spring</strong> — summer research/internship
        applications come faster than you expect.</li>
    <li>During New York junior fall, also use NYU New York's career resources (Wasserman) — double coverage,
        and the NY fall recruiting cycle is the biggest of your degree.</li>
    <li>Handshake (or the current jobs platform) is where on-campus jobs and internships post — set alerts for
        "research assistant" and "economics."</li>
  </ul>
</div>

<h3>🌍 Global Education</h3>
<div class="card">
  <ul>
    <li>Owns study away: site selection, applications, course pre-approval workflow, visa guidance, and J-Term
        travel courses. Your Florence and New York timelines (Study Away section) are executed through them.</li>
    <li>Go to their info sessions in year one even though your study away is a year off — deadlines are set by
        their calendar, not yours.</li>
    <li>They are also the authoritative source for confirming your prerequisite completion and GPA gate before
        each away application — do not rely on self-tracking alone for the final sign-off.</li>
  </ul>
</div>

<h3>📚 Library &amp; research support</h3>
<div class="card">
  <ul>
    <li>The library is 24/7 in spirit during exams and generously staffed always: subject librarians (yes,
        there is one for economics/social science) will teach you database research one-on-one — book them
        before your first Markets paper and again before the capstone.</li>
    <li>Interlibrary loan + the NYU global network = nearly any book or paper on earth, usually digital and fast.</li>
    <li>Beyond books: media labs, group study rooms (bookable online — book Sunday for the week), quiet floors,
        and equipment lending.</li>
    <li>Software students commonly get access to: statistical tools you will need for econometrics (Stata/R),
        Microsoft/Google suites, and more via campus licenses — ask IT rather than buying anything.</li>
  </ul>
</div>

<h3>🖥️ IT &amp; practical services</h3>
<div class="card">
  <ul>
    <li>Campus IT help desk fixes laptops, accounts, Wi-Fi, and two-factor lockouts (set up backup 2FA methods
        during orientation — the airport-lockout story is a rite of passage; skip it).</li>
    <li>Printing quota, campus card top-ups, and room bookings all run through the student portal — spend one
        hour in week one clicking through everything the portal offers; it pays back all semester.</li>
    <li>Lost &amp; found, mail room (packages announced by email; bring ID), and facilities requests for room
        issues — all fast, all easier than students expect.</li>
  </ul>
</div>

<h3>Which resource, when — mapped to your four-year plan</h3>
<div class="table-wrap">
<table>
  <thead><tr><th>Moment in your plan</th><th>Resource to activate</th></tr></thead>
  <tbody>
    <tr><td>AEP summer</td><td>Writing support habits; portal orientation; Health Center registration on arrival.</td></tr>
    <tr><td>Y1 fall (FYWS + Calculus + Markets)</td><td>ARC Calculus tutoring (standing slot), Writing Center per essay, all office hours by week 3, one calm-week counseling intro visit.</td></tr>
    <tr><td>Y1 spring</td><td>Career Development CV review; Global Education info session; fellowship adviser introduction.</td></tr>
    <tr><td>Y2 fall (pre-Florence)</td><td>Global Education application support; insurance-abroad check; librarian session for research methods.</td></tr>
    <tr><td>Y3 fall (New York)</td><td>Wasserman + NYUAD Career Development; NY course-credit paper trail with your adviser.</td></tr>
    <tr><td>Y3 spring–Y4 fall (Rhodes season)</td><td>Fellowship advisers + Writing Center (statement drafts), Career Development (mock interviews), counseling (application stress is normal, managed stress performs better).</td></tr>
    <tr><td>Y4 (capstone)</td><td>Subject librarian, statistical software support, capstone adviser cadence.</td></tr>
  </tbody>
</table>
</div>

<div class="callout tip">
  <strong>The asking-for-help rule.</strong> At NYUAD every support service is free, confidential where relevant,
  and staffed by people whose entire job is you. The strongest students on campus — including the scholarship
  winners — are measurably the heaviest users of these services, not the lightest. Needing nothing is not the
  goal; converting resources into growth is.
</div>
`
};
