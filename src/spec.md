# Specification

## Summary
**Goal:** Add the requested plot (Dag) numbers to the existing property records for Hateberia (JL 167) and Radhaballabchak (JL 165) so they appear in the Property Details Plot List.

**Planned changes:**
- Update `frontend/src/content/siteContent.ts` for the Hateberia record (mouza "Hateberia", jl "167") to include plot numbers: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 23, 25, 26, 27, 28, 3/5726, 3/5727, 3/5728, 3/5729, 3/5730, 10/5731.
- Update `frontend/src/content/siteContent.ts` for the Radhaballabchak record (mouza "Radhaballabchak", identified by a khatian reference note "JL 165") to include plot numbers: 22, 23, 22/894, 22/966, 22/967, 22/969, 22/970, 22/971.

**User-visible outcome:** In Property Details under "Disputed Land & Property with Maternal Uncles", the Plot List accordion for Hateberia (JL 167) and Radhaballabchak (JL 165) shows all specified Dag values exactly as provided (including fractional forms like "3/5726" and "22/894").
