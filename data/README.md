# PoliceReady data layer

`departments.js` is the single public-data source used by the interface.

Rules:

- Only summarize facts supported by an official agency or city source.
- Keep the official source URL with every summarized fact.
- Use `See official source` when a field has not been reviewed.
- Set `fitnessVerified` to `true` only when the published standard is usable by the workout engine.
- Never store applicant documents, identifiers, background answers, medical details, or other sensitive application information.

Each record includes `dataQuality` and `privacy` metadata so the application can show coverage without pretending incomplete profiles are verified.
