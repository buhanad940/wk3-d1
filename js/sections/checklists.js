window.APP_SECTIONS = window.APP_SECTIONS || {};
window.APP_ORDER = window.APP_ORDER || [];

window.APP_ORDER.push("checklists");
window.APP_SECTIONS["checklists"] = {
  title: "Checklists & Templates",
  icon: "✅",
  html: `
<h2>Checklists &amp; Templates</h2>
<p class="section-lede">
  Everything actionable from the rest of the app, collected into tickable lists (they save automatically in this
  browser) plus copy-paste email templates. Print any list with your browser's print function — the app is
  print-friendly.
</p>

<h3>📦 Pre-arrival checklist</h3>
<div class="card">
  <label class="check"><input type="checkbox" data-ck="pre-1"> Passport valid well beyond the semester; UAE student visa process started per NYUAD instructions.</label>
  <label class="check"><input type="checkbox" data-ck="pre-2"> AEP materials read; reading-annotation habit started (see First Semester section).</label>
  <label class="check"><input type="checkbox" data-ck="pre-3"> Math placement steps (if any) completed carefully — they affect Calculus Plan A.</label>
  <label class="check"><input type="checkbox" data-ck="pre-4"> Housing forms, immunization/health forms, and insurance enrollment submitted.</label>
  <label class="check"><input type="checkbox" data-ck="pre-5"> Flights booked; arrival window matches official move-in instructions.</label>
  <label class="check"><input type="checkbox" data-ck="pre-6"> One light layer packed for air-conditioned classrooms; modest-dress basics for city outings; sunscreen.</label>
  <label class="check"><input type="checkbox" data-ck="pre-7"> Unlocked phone; plan for a UAE SIM/eSIM on arrival.</label>
  <label class="check"><input type="checkbox" data-ck="pre-8"> Class-year community group joined via official-adjacent channels (see Community section for the safe method).</label>
  <label class="check"><input type="checkbox" data-ck="pre-9"> Backup 2FA methods configured for your NYU account.</label>
  <label class="check"><input type="checkbox" data-ck="pre-10"> Read the Rhodes Roadmap "Year 1" list once, so the long game is loaded before day one.</label>
</div>

<h3>🗓️ Registration checklist (every semester)</h3>
<div class="card">
  <label class="check"><input type="checkbox" data-ck="reg-1"> Registration date/time confirmed; calendar alarm set for the minute the window opens.</label>
  <label class="check"><input type="checkbox" data-ck="reg-2"> All candidate sections listed with meeting times from the official course search (not from memory or chats).</label>
  <label class="check"><input type="checkbox" data-ck="reg-3"> Primary schedule built to preference: morning class + ~1:00–3:00 PM class, nothing late.</label>
  <label class="check"><input type="checkbox" data-ck="reg-4"> Two full backup schedules built (still respecting "no late classes").</label>
  <label class="check"><input type="checkbox" data-ck="reg-5"> Prerequisites double-checked for every course (especially the Calculus → economics chain).</label>
  <label class="check"><input type="checkbox" data-ck="reg-6"> Advising meeting held; plan confirmed; recap email sent ("just to confirm we agreed…").</label>
  <label class="check"><input type="checkbox" data-ck="reg-7"> Any study-away pre-approvals or outside-credit forms filed in writing.</label>
  <label class="check"><input type="checkbox" data-ck="reg-8"> Week-one plan: attend first sessions, watch add/drop daily for better sections, waitlists joined.</label>
</div>

<h3>🎓 Advising cadence (tick per semester)</h3>
<div class="card">
  <label class="check"><input type="checkbox" data-ck="adv-1"> Month 1: theme meeting (this semester's courses; flag any struggles early).</label>
  <label class="check"><input type="checkbox" data-ck="adv-2"> Month 2: forward meeting (next semester + the standing four-year plan updated).</label>
  <label class="check"><input type="checkbox" data-ck="adv-3"> Registration-week check-in (quick; confirm final schedule).</label>
  <label class="check"><input type="checkbox" data-ck="adv-4"> Spring only: full degree audit against graduation requirements.</label>
  <label class="check"><input type="checkbox" data-ck="adv-5"> Rhodes-track: one fellowship-adviser touchpoint per year (Y1–Y2), per semester (Y3–Y4).</label>
</div>

<h3>✈️ Study-away application checklist (run twice: Florence, New York)</h3>
<div class="card">
  <label class="check"><input type="checkbox" data-ck="sa-1"> Global Education info session attended; application window and criteria noted.</label>
  <label class="check"><input type="checkbox" data-ck="sa-2"> Application submitted before deadline.</label>
  <label class="check"><input type="checkbox" data-ck="sa-3"> 5–6 candidate courses identified at host site; pre-approval for major/Core credit obtained IN WRITING.</label>
  <label class="check"><input type="checkbox" data-ck="sa-4"> Visa process started (Italy/US) — earliest possible date, especially the US interview.</label>
  <label class="check"><input type="checkbox" data-ck="sa-5"> Housing application at host site submitted on opening day.</label>
  <label class="check"><input type="checkbox" data-ck="sa-6"> Insurance coverage abroad confirmed; flights booked; banking/phone plan sorted.</label>
  <label class="check"><input type="checkbox" data-ck="sa-7"> One concrete beyond-coursework project defined for the semester (the Rhodes story).</label>
  <label class="check"><input type="checkbox" data-ck="sa-8"> Before leaving the site: professor contacts saved, documents collected, grade posting confirmed.</label>
</div>

<h3>🏆 Rhodes annual checkpoints</h3>
<div class="card">
  <label class="check"><input type="checkbox" data-ck="rh-1"> Y1: eligibility/constituency confirmed on rhodeshouse.ox.ac.uk + with fellowship advisers; impact journal started.</label>
  <label class="check"><input type="checkbox" data-ck="rh-2"> Y1: settled into 1–2 deep commitments; all professors know me from office hours.</label>
  <label class="check"><input type="checkbox" data-ck="rh-3"> Y2: named leadership role held; research assistance conversation had with an economics professor.</label>
  <label class="check"><input type="checkbox" data-ck="rh-4"> Y2: anchor summer experience secured.</label>
  <label class="check"><input type="checkbox" data-ck="rh-5"> Y3 fall: personal statement skeleton drafted; NY professor relationship built.</label>
  <label class="check"><input type="checkbox" data-ck="rh-6"> Y3 spring: referees asked in person; constituency deadline calendar built; capstone topic locked.</label>
  <label class="check"><input type="checkbox" data-ck="rh-7"> Y3 summer: full application drafted and reviewed by fellowship advisers + Writing Center.</label>
  <label class="check"><input type="checkbox" data-ck="rh-8"> Y4: submitted on time; referees reminded; mock interviews done; parallel applications (backup scholarships/grad programs) also submitted.</label>
</div>

<h3>📅 Weekly operating checklist</h3>
<div class="card">
  <label class="check"><input type="checkbox" data-ck="wk-1"> Sunday 30-min planning: deadlines → deep blocks; study rooms booked.</label>
  <label class="check"><input type="checkbox" data-ck="wk-2"> Every evening: tomorrow's 3-item list written.</label>
  <label class="check"><input type="checkbox" data-ck="wk-3"> Calculus error log updated; weekly mixed-problem sweep done.</label>
  <label class="check"><input type="checkbox" data-ck="wk-4"> One office-hours or Writing Center/ARC touchpoint this week.</label>
  <label class="check"><input type="checkbox" data-ck="wk-5"> Friday review: feedback ledger, impact journal, next week's biggest risk.</label>
  <label class="check"><input type="checkbox" data-ck="wk-6"> One full rest unit taken, guilt-free.</label>
  <p style="font-size:0.85rem;color:var(--ink-soft)">Tip: untick these every Sunday and reuse weekly.</p>
</div>

<h3>✉️ Email templates</h3>

<details open>
  <summary>To a professor — asking to join a full section</summary>
  <p><em>Subject: Request to join [COURSE] Section [X] — [Your name], Class of [Year]</em></p>
  <p>Dear Professor [Name],</p>
  <p>I am a first-year student planning to major in Economics, and [COURSE] Section [X] fits both my degree plan
  and my schedule (I am building around a morning/early-afternoon pattern this semester). The section currently
  shows as full — may I join the waitlist or attend the first sessions in case a seat opens during add/drop?</p>
  <p>I have completed [prerequisite/placement], and I am happy to provide anything else useful. Thank you for
  considering it.</p>
  <p>Best regards,<br>[Name] · [NetID] · [Program/Year]</p>
</details>

<details>
  <summary>To your adviser — meeting request with agenda</summary>
  <p><em>Subject: Advising meeting request — [topic], [your name]</em></p>
  <p>Dear [Adviser name],</p>
  <p>Could we meet for 20–30 minutes in the next two weeks? I would like to cover three things:</p>
  <p>1) [e.g., Whether my fall plan of FYWS + Calculus + Markets is the right load]<br>
     2) [e.g., Backup plan if Calculus does not fit — spring vs. summer options]<br>
     3) [e.g., Early steps for a sophomore-spring Florence semester]</p>
  <p>I will bring my draft four-year plan. Thank you!</p>
  <p>Best, [Name]</p>
</details>

<details>
  <summary>To a professor — office hours introduction (week 1–3)</summary>
  <p><em>Subject: Introduction — [Course] student</em></p>
  <p>Dear Professor [Name],</p>
  <p>I am in your [Course] this semester and wanted to introduce myself during office hours. I am planning to
  major in Economics and I am especially interested in [something real — e.g., how markets ideas apply to Gulf
  economies / how to write better arguments]. Do I need an appointment for your office hours on [day], or may I
  drop in?</p>
  <p>Thank you — looking forward to the course.</p>
  <p>Best regards, [Name]</p>
</details>

<details>
  <summary>To an office — verifying a rumor (the two-line classic)</summary>
  <p><em>Subject: Quick verification — [claim]</em></p>
  <p>Dear [Office],</p>
  <p>I have heard from other students that [claim — e.g., "the deadline for X moved to Y" / "a study-away site
  called 'Bloomerpool' exists"]. Could you confirm whether this is accurate, or point me to the official
  information?</p>
  <p>Thank you very much!<br>[Name], [Year]</p>
</details>

<details>
  <summary>To a potential referee (Year 3) — the ask</summary>
  <p><em>Subject: Reference request — Rhodes Scholarship application</em></p>
  <p>Dear Professor [Name],</p>
  <p>Over the past [two/three] years I have taken [courses] with you and worked with you on [research/project].
  I am applying for the Rhodes Scholarship this [year], with a plan to pursue [program] at Oxford, and I would be
  honored if you would consider writing a reference — I am asking because you have seen my work develop over
  time and can speak to it concretely.</p>
  <p>If you are willing, I will send my CV, draft personal statement, a summary of the work you have seen from
  me, and all deadlines (the letter would be due [date] — about [N] weeks away). And if your schedule does not
  allow it, I completely understand.</p>
  <p>With thanks and respect,<br>[Name]</p>
</details>

<div class="callout tip">
  <strong>Template etiquette.</strong> Personalize every bracket, keep emails under 150 words where possible,
  and send during working hours. One polite follow-up after 4–5 business days is fine; two is pressure.
</div>
`
};
