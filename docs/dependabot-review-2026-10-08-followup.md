# Dependabot review — 8 October 2026

Review of currently open GitHub alerts against repository source, configurations and dependency callers. Dismissals require the described exploit precondition to be absent; development-only status alone is not sufficient. Reassess if the documented usage changes. Compatible tooling patches are included as defense in depth.

| Alert | Advisory | Package / manifest | Decision | Evidence |
|---|---|---|---|---|
| #91 | [GHSA-2883-xcg3-v3hh](https://github.com/advisories/GHSA-2883-xcg3-v3hh) | js-yaml / package-lock.json | dismiss | YAML is parsed only by local build/lint/release configuration tooling. Application/library sources do not parse attacker-supplied YAML. Both lockfiles are additionally hardened to the supported patched 3.x/4.x releases. |
| #90 | [GHSA-2883-xcg3-v3hh](https://github.com/advisories/GHSA-2883-xcg3-v3hh) | js-yaml / yarn.lock | dismiss | YAML is parsed only by local build/lint/release configuration tooling. Application/library sources do not parse attacker-supplied YAML. Both lockfiles are additionally hardened to the supported patched 3.x/4.x releases. |
| #89 | [GHSA-82fw-gwwq-j7x9](https://github.com/advisories/GHSA-82fw-gwwq-j7x9) | vitest / package-lock.json | dismiss | Tests use jsdom/local Node execution. No public mockerPlugin/interceptorPlugin registration or browser-mode dev server exists. The advisory requires reachable mock-registration/file-serving paths, which are absent. |
| #88 | [GHSA-82fw-gwwq-j7x9](https://github.com/advisories/GHSA-82fw-gwwq-j7x9) | vitest / yarn.lock | dismiss | Tests use jsdom/local Node execution. No public mockerPlugin/interceptorPlugin registration or browser-mode dev server exists. The advisory requires reachable mock-registration/file-serving paths, which are absent. |
| #87 | [GHSA-82fw-gwwq-j7x9](https://github.com/advisories/GHSA-82fw-gwwq-j7x9) | vitest / package.json | dismiss | Tests use jsdom/local Node execution. No public mockerPlugin/interceptorPlugin registration or browser-mode dev server exists. The advisory requires reachable mock-registration/file-serving paths, which are absent. |
| #86 | [GHSA-82fw-gwwq-j7x9](https://github.com/advisories/GHSA-82fw-gwwq-j7x9) | @vitest/mocker / package-lock.json | dismiss | Only transitive Vitest test tooling; no public mockerPlugin/interceptorPlugin registration or browser-mode server. Checked-in tests use jsdom/local execution, so the file-read registration path is not exposed. |
| #85 | [GHSA-82fw-gwwq-j7x9](https://github.com/advisories/GHSA-82fw-gwwq-j7x9) | @vitest/mocker / yarn.lock | dismiss | Only transitive Vitest test tooling; no public mockerPlugin/interceptorPlugin registration or browser-mode server. Checked-in tests use jsdom/local execution, so the file-read registration path is not exposed. |

## Lockfile audit

Compared the exact locked package versions with the npm registry security advisory database against default-branch commit `bb50fdcae980ba28eefdbce871454f240a508bc0`. npm advisories: **19 → 18**. Yarn advisories: **19 → 8**. **No new package/advisory pairs were introduced in either lockfile.** Counts represent distinct package/advisory pairs, not npm audit’s derived vulnerable-parent count. Existing dismissed issues may still appear in registry audits. This check covers currently published advisories; future advisories require a new review.
