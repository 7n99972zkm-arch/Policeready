# PoliceReady v0.7

A free, mobile-first police applicant research and fitness-preparation tool.

## v0.7 features
- Search 64 North Texas agencies by agency, city, or county
- Read summarized public information inside PoliceReady
- Open official external pages for applications and sensitive forms
- Compare two departments with data-coverage and best-fit notes
- Find My Department preference matcher
- Agency-based workout generation only where fitness data is verified
- Readiness context using user-entered fitness numbers without pass/fail predictions
- Local-only favorites, countdowns, workouts, and safe application-stage tracking

## Public-information policy
PoliceReady is independent and is not endorsed by any agency. Department-specific claims must be supported by official public sources. Missing fields remain clearly labeled rather than guessed.

## Privacy rule
PoliceReady must never collect official applications, background packets, SSNs, driver-license numbers, medical records, financial details, passwords, or uploaded hiring documents. Users must submit important information through official external agency systems.


## v0.7 architecture

Department records now live in `data/departments.js`. The app exposes a Data Status screen so incomplete profiles are visible rather than disguised as verified.


## v0.7 compensation policy
PoliceReady compares recruit pay, starting pay, Years 1-5, top pay, and published step schedules only from official city or agency sources. It does not estimate missing steps or future raises.
