window.APP_SECTIONS = window.APP_SECTIONS || {};
window.APP_ORDER = window.APP_ORDER || [];

window.APP_ORDER.push("packing");
window.APP_SECTIONS["packing"] = {
  title: "Packing & Tech Setup",
  icon: "🎒",
  html: `
<h2>Packing &amp; Tech Setup — Arrive Ready, Not Overloaded</h2>
<p class="section-lede">
  The two most common packing outcomes: half a suitcase of things Abu Dhabi sells cheaper, and a missing
  document that costs a week of queues. This section prevents both, and gets your digital life set up before
  wheels-up.
</p>

<h3>Documents — the never-in-checked-luggage list</h3>
<div class="card">
  <label class="check"><input type="checkbox" data-ck="pk-1"> Passport (validity comfortably beyond year one) + printed visa/entry documents per NYUAD instructions.</label>
  <label class="check"><input type="checkbox" data-ck="pk-2"> Admission letter, housing assignment, AEP/arrival instructions — printed AND in cloud storage.</label>
  <label class="check"><input type="checkbox" data-ck="pk-3"> Passport-size photos (several — early UAE paperwork consumes them).</label>
  <label class="check"><input type="checkbox" data-ck="pk-4"> Immunization records and any prescriptions with a doctor's letter (check UAE approved-medication rules BEFORE flying — see Abu Dhabi section's legal notes).</label>
  <label class="check"><input type="checkbox" data-ck="pk-5"> Bank card that works internationally + a small amount of USD/AED cash for day one.</label>
  <label class="check"><input type="checkbox" data-ck="pk-6"> Academic records you might need for placement/transfer questions (final transcripts, exam certificates).</label>
</div>

<h3>What to pack vs. buy there</h3>
<div class="table-wrap">
<table>
  <thead><tr><th>Category</th><th>Pack</th><th>Buy in Abu Dhabi</th></tr></thead>
  <tbody>
    <tr><td>Clothing</td><td>Light breathable basics, ONE warm layer for arctic air-conditioning, modest options (shoulders/knees) for city outings, one smart outfit for events/interviews.</td><td>Almost everything else — malls cover every budget; winter gear for New York junior year is a later problem.</td></tr>
    <tr><td>Room</td><td>Sentimental items, photos, anything that makes a room feel like yours (this matters more than people expect at week 4 homesickness).</td><td>Bedding, mattress topper, fan, hangers, storage — IKEA/Carrefour runs are a first-week social ritual, and move-out marketplace deals beat imports.</td></tr>
    <tr><td>Toiletries/meds</td><td>Two weeks' supply + specific brands you cannot live without + prescriptions (with paperwork).</td><td>Everything routine — pharmacies are excellent and everywhere.</td></tr>
    <tr><td>Culture/home</td><td>Spices, snacks, and small gifts from home — the international-dinner currency of a 100+-nationality campus.</td><td>—</td></tr>
    <tr><td>Beach/sport</td><td>Swimwear, one pair of good walking shoes.</td><td>Beach gear, sports equipment (or borrow — campus lends lots).</td></tr>
  </tbody>
</table>
</div>

<h3>Tech loadout</h3>
<div class="card">
  <ul>
    <li><strong>Laptop:</strong> any reliable mid-range machine handles an economics degree (writing, spreadsheets,
        Stata/R later). Prioritize battery life and weight over power. Campus licenses cover most software —
        buy nothing until IT tells you to (see Support section).</li>
    <li><strong>Plugs:</strong> the UAE uses the UK-style Type G socket. Two adapters + one power strip from home
        solves every device at once.</li>
    <li><strong>Phone:</strong> must be carrier-unlocked for a UAE SIM/eSIM. Note that some internet calling apps
        are restricted in the UAE — campus networks and paid local options exist; ask upperclassmen for the
        current family-calls setup rather than assuming your usual app works.</li>
    <li><strong>Backup drive or cloud plan:</strong> four years of essays, problem sets, and eventually your
        capstone. Set automatic backup in week one — the dead-laptop-during-finals story recurs annually.</li>
    <li><strong>Optional but loved:</strong> noise-cancelling earphones (shared housing), e-reader (course
        readings), a modest camera if you like it (mind the photography etiquette in the Abu Dhabi section).</li>
  </ul>
</div>

<h3>Digital setup — do before you fly</h3>
<div class="card">
  <label class="check"><input type="checkbox" data-ck="pk-7"> NYU NetID activated, email working, password manager set up.</label>
  <label class="check"><input type="checkbox" data-ck="pk-8"> Two-factor authentication configured with BACKUP methods (a second device/backup codes — the #1 arrival-week IT ticket).</label>
  <label class="check"><input type="checkbox" data-ck="pk-9"> Cloud folder created with scans of every document above, shared with a trusted family member.</label>
  <label class="check"><input type="checkbox" data-ck="pk-10"> One calendar system chosen (you will live by it — see Study Habits) and AEP/arrival dates already in it.</label>
  <label class="check"><input type="checkbox" data-ck="pk-11"> Banking app + card notifications working; travel notice set so day-one purchases do not trigger a freeze.</label>
  <label class="check"><input type="checkbox" data-ck="pk-12"> Downloaded offline: Abu Dhabi maps, airline app, this guide's repo folder if you want it portable.</label>
</div>

<div class="callout tip">
  <strong>The one-suitcase test.</strong> If it does not fit in one large suitcase plus a carry-on, re-run the
  "buy there" column. Every veteran packer at NYUAD converges on the same formula: documents + tech + meds +
  sentiment + two weeks of clothes, and money for the IKEA run. Freight what you truly must; regret-buy nothing
  at airport prices.
</div>

<div class="callout anecdote">
  Recurring arrival-week scene: one student cannot log in to anything because their only 2FA device is a home
  phone number that no longer receives texts — while their roommate, who set backup codes in July, is at the
  beach. Fifteen minutes of setup vs. three days of IT tickets. Choose the beach.
</div>
`
};
