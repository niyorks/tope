# AlumniHub

Context for working with Tope on AlumniHub. Tope is a UK based designer and product consultant, embedded with AlumniHub on weekends as freelance product strategist and product designer (advisory, design led, not full time).

## What AlumniHub is

A global community super app for verified communities: alumni networks, universities, secondary schools, diaspora groups, professional associations, faith communities.

* Surfaces: discussion feed, community gated marketplace, native payments (dues, fundraising), job board, announcements, admin dashboard
* Five roles: Super Admin, Subgroup Admin, Finance Admin, Moderator, Announcer
* Subcommunity hierarchy covers schools and chapters or class sets
* Coordinator mediated dues remittance is a non negotiable requirement
* 1.5% platform fee on transactions
* V1 to V2 shift: from founder led onboarding to self serve, where communities adopt and run the platform independently
* Collaborators: the founding team (CTO, founders) and Razeb, backend developer

## Principles (hold firm on these)

* Global first framing, always. Nigeria is a proof of concept lab, not the market. Demo data, copy and TAM must reflect global diversity across community types, geographies and currencies. Do not default to Nigeria.
* Nothing is a dead end. If it goes in, it works. No placeholder actions.
* Calibrate documents to author and audience. A non technical founder writing to a CTO should sound like one. Strip jargon and over engineering.
* Honest metrics. Distinguish activated users from roster seeded figures.
* Non tech savvy UX for admin flows: plain sentence action cards, one question per step wizards, undoable toasts, shortcuts like "Copy last year's dues".

## How Tope works

* Iterates in rounds. Apply feedback fully before the next version.
* Terse replies like "continue" or "yes for 1" mean approval.
* Prefers Markdown files or clean exports he can lift into his own tools.
* Writing: concise, scannable, short sentences, no dashes.

## HTML prototype technique

* Single file SPAs using a screen router (`go()` + `TABMAP`)
* Patch via exact string replacement with assertions
* Validate JS after every patch
* Verify all navigation targets programmatically
* Clean dead code after refactors

## Figma technique

* Figma file key: `k2DZtGQU3HnGk0JmNcE2LR`
* Call `setCurrentPageAsync` before node lookups
* Find sections by name, do not cache IDs across scripts
* Load all font weights before text mutations
* Set `layoutSizingHorizontal = 'FILL'` after `appendChild`

## Design tokens

* Colours: blue `#0E2AF5`, lime `#9DF50E`, gold `#AD8B3A`, orange `#F5660E`
* Type: Satoshi and Cabinet Grotesk (from Fontshare, installed locally). In Figma plugin scripts substitute Hanken Grotesk or DM Sans and put the real font name in the style description.
* Card radius 12px, pill radius 100px, mobile frames 393px

## Current state (re-verify before relying on it)

* Full app redesign in active development
* Three HTML prototypes: mobile admin SPA (`alumnihub-admin.html`), desktop admin dashboard (`alumnihub-admin-desktop.html`), responsive advertiser platform (`alumnihub-ads.html`)
* Figma has a design system (foundations, variables, 6 component sets) and gap screens for Discussion and Jobs
* Scope document written for Razeb covering V1 stabilisation and V2 self serve

## Still to do

* Figma: interview scheduling, offer state in application tracking, applicant sorting for recruiters
* Advertiser platform: rejection flow, moderation admin queue, edit after launch confirmation, mobile wizard views
* Dark mode design system (structure exists, not populated)
* Small Figma fixes: text wrapping on Card title and body, Donate label on Fundraiser card, icon glyph swaps in Tab Bar
* Open question: roster seeded vs organically activated user counts in investor materials
