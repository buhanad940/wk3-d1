window.APP_SECTIONS = window.APP_SECTIONS || {};
window.APP_ORDER = window.APP_ORDER || [];

window.APP_ORDER.push("money");
window.APP_SECTIONS["money"] = {
  title: "Money & Financial Aid",
  icon: "💰",
  html: `
<h2>Money, Financial Aid &amp; Student Budgeting</h2>
<p class="section-lede">
  Money stress is the quietest academic performance killer on any campus. This section covers how NYUAD's
  support typically works, what life actually costs in Abu Dhabi, budgeting for two study-away semesters,
  and earning on campus — so finances stay a solved problem in the background of your plan.
</p>

<div class="callout warn">
  <strong>Verify your own package.</strong> Financial aid at NYUAD is individual: packages differ in what they
  cover (tuition, housing, meals, travel allowances, study away, summers). Everything below is the general
  shape — your binding answers come from the Financial Aid office and your own award letter. Read your award
  letter twice and file every question with the office in writing.
</div>

<h3>Understand your package (questions to settle in semester one)</h3>
<div class="card">
  <ul>
    <li>Exactly which components are covered: tuition, housing, meal plan, health insurance, flights/travel
        support, books?</li>
    <li>How does aid apply during <strong>study away</strong> (Florence, New York — different cost structures)
        and <strong>J-Term travel courses</strong>?</li>
    <li>Is <strong>summer</strong> study or research funded differently? Are there internal grants for research
        summers or unpaid-internship support? (Career Development and the research offices often run funding
        programs — ask early, deadlines are in spring.)</li>
    <li>What are the renewal conditions (credit progress, standing) and what is the process if your family's
        situation changes mid-degree?</li>
    <li>Who is <em>your</em> named financial aid contact? Meet them once in person so later emails have a face.</li>
  </ul>
</div>

<h3>What Abu Dhabi actually costs (student-level calibration)</h3>
<div class="table-wrap">
<table>
  <thead><tr><th>Item</th><th>Rough student range (AED)</th><th>Calibration notes</th></tr></thead>
  <tbody>
    <tr><td>Cafeteria/shawarma meal off campus</td><td>10–25</td><td>The affordable food layer is genuinely good — learn it early.</td></tr>
    <tr><td>Mall food court / casual restaurant</td><td>30–70</td><td>The default social spend; twice a week adds up fast.</td></tr>
    <tr><td>Taxi across town / Careem</td><td>20–60</td><td>Shuttle + planning cuts most of this; late nights justify it.</td></tr>
    <tr><td>Intercity bus to Dubai</td><td>~25–35 each way</td><td>The cheap Dubai trip; car-shares cost more, split rides help.</td></tr>
    <tr><td>Phone plan (student-ish)</td><td>50–150/month</td><td>Compare prepaid vs. plans once you have your Emirates ID.</td></tr>
    <tr><td>Coffee shop coffee</td><td>15–25</td><td>The classic budget leak — a daily one is ~500+/month.</td></tr>
    <tr><td>Cinema / activities</td><td>35–60</td><td>Student discounts exist widely — always ask.</td></tr>
  </tbody>
</table>
</div>
<p style="font-size:0.85rem;color:var(--ink-soft)">Ranges are order-of-magnitude calibration from typical student
experience, not quotes — prices drift. The dirham is pegged to the US dollar (~3.67 AED/USD).</p>

<h3>The three-bucket student budget</h3>
<div class="card">
  <ol>
    <li><strong>Fixed &amp; covered:</strong> whatever your package handles (often housing, meals, insurance).
        Know this list cold so you never double-spend on covered things.</li>
    <li><strong>Monthly discretionary:</strong> set one number for food-out + transport + fun. A common
        comfortable student range is a few hundred to ~1,500 AED/month depending on habits — the number matters
        less than <em>having</em> a number and checking it weekly (5 minutes, Sunday planning block).</li>
    <li><strong>Event funds:</strong> separate small sinking funds for the lumpy stuff — travel home, study-away
        setup costs, winter clothes for New York, J-Term incidentals, graduation season. 100–300 AED/month set
        aside makes the lumps boring instead of stressful.</li>
  </ol>
</div>

<h3>Study-away money notes (plan a semester ahead)</h3>
<ul>
  <li><strong>Florence:</strong> the budget risk is weekend travel — Europe is adjacent and tempting. Set the
      monthly travel number <em>before</em> arriving; group trips split costs well. Regional trains beat flights
      for Italy itself.</li>
  <li><strong>New York:</strong> the budget risk is everything — NY prices dwarf Abu Dhabi student prices.
      Dining-hall discipline, free-with-student-ID culture (museums, events), and a weekly cash cap are the
      standard survival kit. Budget winter clothing as a one-time setup cost.</li>
  <li><strong>Banking abroad:</strong> confirm your UAE card's foreign fees before each semester away; a
      no-foreign-fee option (or the host country's student account) saves real money over four months.</li>
  <li><strong>Ask Global Education + Financial Aid together</strong> how allowances shift at each site — the
      answer is package-specific.</li>
</ul>

<h3>Earning on campus</h3>
<div class="card">
  <ul>
    <li><strong>On-campus student jobs</strong> (library, offices, events, peer tutoring) pay by the hour and
        respect class schedules. 4–8 hours/week is the sweet spot; more starts taxing grades.</li>
    <li><strong>Research assistantships</strong> are the premium option for you: paid <em>and</em> they build the
        Rhodes file. Set the Handshake alert ("research assistant", "economics") from Year 1 spring.</li>
    <li><strong>Peer tutoring</strong> (via ARC) once you have aced Calculus/Markets: strong pay-per-hour,
        deepens your own mastery, and is service — three birds, one job.</li>
    <li>Know the work rules: student visa employment is regulated — on-campus routes are the clean path;
        confirm anything off-campus with the university before accepting.</li>
  </ul>
</div>

<h3>Financial safety rules (the short list that prevents the long regrets)</h3>
<ul>
  <li><strong>No lending/borrowing beyond trivial amounts</strong> inside friend groups — money is the #1
      friendship solvent on residential campuses. "I don't do loans, but I'll buy dinner" preserves both.</li>
  <li><strong>Marketplace rule</strong> (from the Community section): in person, cash/verified transfer on
      handover, no deposits to strangers, ever.</li>
  <li><strong>Beware anything recruiting students for fees</strong> — "exclusive" conferences, pay-to-publish
      journals, paid "leadership programs." Legitimate opportunity at NYUAD flows through offices, professors,
      and Handshake, and it does not charge you.</li>
  <li><strong>If money gets genuinely tight, say so early</strong> — to Financial Aid, to your adviser. Emergency
      support mechanisms exist at most universities including hardship funds; the students who suffer are the
      ones who stay silent until it becomes an academic crisis.</li>
</ul>

<div class="callout anecdote">
  The most repeated money realization among students who study away twice: "Abu Dhabi was the cheapest place I
  lived in my degree, and I didn't save while I was there." Cheap semesters are when the event funds get built —
  future-you in a New York November will send thanks.
</div>
`
};
