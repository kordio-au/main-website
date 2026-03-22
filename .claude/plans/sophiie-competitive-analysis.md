# Sophiie AI — Deep Competitive Analysis
*Analysed: 21 March 2026*

## 1. TECHNOLOGY STACK

### Frontend
| Layer | Sophiie | Kordio |
|-------|---------|--------|
| **Marketing site** | Webflow (no-code, site ID: 68d290d293affc6bb3574aeb) | Custom HTML + Tailwind CSS |
| **App dashboard** | Next.js + Turbopack (React) | React (Vite) + Express |
| **CSS** | Tailwind (likely) + custom | Tailwind + custom CSS |
| **Fonts** | Satoshi + Inter | Inter |
| **JS Libraries** | Finsweet Attributes, Slick Carousel, Alpine.js | Alpine.js |
| **Docs** | Custom docs site (docs.sophiie.ai) | None yet |

### Backend & AI
| Layer | Sophiie | Kordio |
|-------|---------|--------|
| **AI orchestration** | Coragents AI (app.coragents.ai) — external service | Custom-built (in-house) |
| **Voice AI** | Unknown (likely Bland AI or custom via Coragents) | Retell AI + Custom (Deepgram STT + OpenAI + TTS) |
| **LLM** | Unknown (likely GPT-4 via Coragents) | OpenAI GPT-4.1 / GPT-4.1-mini |
| **API server** | api.sophiie.ai (REST, Bearer auth) + api.dev.sophiie.ai | Express.js on Railway |
| **Database** | Unknown (likely PostgreSQL) | Supabase (PostgreSQL) |
| **Auth** | Custom (no Supabase/Clerk/Auth0 detected) | Supabase Auth (JWT) |
| **Error tracking** | Sentry | None yet |
| **Analytics** | PostHog (self-proxied through app domain to avoid ad blockers) | None yet |

### Marketing & Sales
| Tool | Sophiie | Kordio |
|------|---------|--------|
| **CRM/Marketing** | HubSpot (full suite: forms, analytics, conversations, ads pixel) | None yet |
| **Ad tracking** | Facebook Pixel + Google Ads Call Tracking | None yet |
| **Onboarding** | Cor AI / Obi (AI video onboarding assistant) | Manual setup |
| **Chatbot CDN** | cdn.sophiie.ai/chatbot/bundle.mjs (custom embeddable widget) | Planned |

### Integrations
- ServiceM8 (trades job management)
- Zapier (workflow automation)
- Google Calendar
- Outlook/Gmail
- API access (Pro plan, Bearer token auth)

---

## 2. COMPLETE FEATURE MAP

### Knowledge Base / Agent Training ("Train Sophiie")
| Section | What It Does | Kordio Equivalent |
|---------|-------------|-------------------|
| **Business Information** | Company name, email, phone, website, location (with Google Maps), trading hours per day, description, social profiles, branding. **KEY: "Data Sourced from Website" — scrapes business website to auto-populate fields via "Refresh from URL" button** | Shop settings (basic — name, address, hours) |
| **Services** | Categories (e.g. "Restaurants") with sub-services (Pizza, Pasta, Ribs etc). Each has description, duration (minutes), action (Continue Call / Send SMS) | Menu Management (much deeper — categories, items, sizes, modifiers, deals) |
| **Products** | Product catalog grouped by trade categories | Menu items |
| **Documents** | Upload PDFs that the AI learns from | Not available |
| **Policies** | Cancellation policies, payment terms, procedures — agent references during calls | Hardcoded in agent prompt |
| **FAQs** | Common customer Q&A pairs the AI uses to answer questions | Via Knowledge Base text |
| **Scenarios & Restrictions** | Pre-built templates: Complaint, Quote Request, Pricing Inquiry. Each has action (Continue Call / Send SMS). **Restrictions**: "NEVER" rules (e.g. "never discuss politics") | Hardcoded in agent prompt ("CRITICAL RULES") |

### Personality & Voice
| Feature | Details | Kordio Equivalent |
|---------|---------|-------------------|
| **Voice Selection** | Choose from multiple voices (Sophiie Female, Steve Male), filtered by style (Casual, Conversational, English), accent (Australian, British, NZ), with audio preview | Voice provider selection (Retell/Custom) but no voice picker UI |
| **Agent Personality** | 3 presets: "Friendly Mate" (casual, local slang), "Professional Assistant" (polite, formal), "Empathetic Listener" (patient, calm). Each has "Preview Personality" button | Hardcoded in agent prompt |
| **Agent Name** | Customisable (default: "Sophie"). Premium add-on to change it | Fixed per agent in Retell |
| **Profanity Filter** | Toggle to filter offensive language in transcripts | Not available |
| **Greetings & Closings** | Template builder with variables (Agent Name, Business Name, Customer First/Last Name). Separate configs for Phone Calls vs Chatbot. **"Preview Audio" button** to hear how it sounds. Welcome Message Delay slider (0-5s). After Hours Message. Call Recording Disclosure. | Greeting message in agent flow |

### Team & Routing
| Feature | Details | Kordio Equivalent |
|---------|---------|-------------------|
| **Staff & Departments** | Team members with roles, department assignment | Shop staff (owner, staff roles) |
| **Transfers** | Transfer Rules — route calls to specific numbers with configurable timeouts, hold messages, fallback behaviours | Transfer phone number (single) |
| **Notifications** | Alert rules for different events | Not available |
| **Tags** | Categorise inquiries/leads | Not available |

### CRM & Business Management
| Feature | Details | Kordio Equivalent |
|---------|---------|-------------------|
| **Inbox** | Unified inbox — Call, Text, Email, Chat, Form tabs. Each lead shows AI-generated Key Points + Summary + audio player with waveform + "Schedule Job" + "View Transcript" | Call History (basic table) |
| **Customers** | Full CRM — import, add, search, contact info, tags, last interaction, inquiry status | Not available |
| **Quotes** | Create quotes with Total Quoted, Accepted, Avg Acceptance Time metrics | Not available |
| **Jobs** | Schedule jobs with customer, status, time, team member assignment | Orders (Kanban board) |
| **Schedule** | Full calendar (Daily/Weekly/Monthly) with team member views | Not available |
| **Invoices** | Create invoices, track Total Invoiced, Outstanding, Overdue, Avg Payment Time | Not available |
| **Call Logs** | All Calls / Analysed Calls / Unanalysed Calls tabs, search by phone number | Call History page |

### Apps / Channels
| Channel | Status | Kordio Equivalent |
|---------|--------|-------------------|
| **Chatbot** | Embeddable widget via script tag (orgId-based). Auto-open toggle, attribution removal, Standard/Iframe install options | Planned |
| **Calendar** | Google Calendar / Outlook integration | Not available |
| **Email** | Email account connection for AI email responses | Not available |
| **Phone** | Allocated phone number for AI receptionist (Pro only) | Twilio number per shop |
| **Webform** | Embeddable form for lead capture | Not available |

---

## 3. PRICING MODEL

| | Free | Pro | Enterprise |
|--|------|-----|-----------|
| **Price** | $0 | **$300/mo** + $1,200 setup | Custom |
| **Customers** | 50 | Unlimited | Unlimited |
| **Team members** | 1 | 3+ | 10+ |
| **Channels** | Scheduler only | Webform, Chatbot, Phone, SMS | All + tailored integrations |
| **Demo calls** | 5 | Unlimited | Unlimited |
| **API** | No | Yes | Yes |
| **Support** | Basic | Custom support | Dedicated team |
| **Notifications** | No | Yes | Yes |

---

## 4. API STRUCTURE (from OpenAPI spec)

**Base URLs**: api.sophiie.ai (prod), api.dev.sophiie.ai (dev)
**Auth**: Bearer token
**Pagination**: page + limit (1-100, default 50)

### Endpoints:
- `GET /v1/leads` — List leads (paginated)
- `POST /v1/leads` — Create lead
- `GET /v1/leads/{id}` — Get lead details
- `PUT /v1/leads/{id}` — Update lead
- `DELETE /v1/leads/{id}` — Soft delete lead
- `GET /v1/leads/{id}/notes` — Lead notes
- `GET /v1/leads/{id}/activities` — Lead activity log
- `GET /v1/inquiries` — List inquiries (filter by source: CALL, EMAIL, CHATBOT, SMS, WEBFORM)
- `GET /v1/inquiries/{id}` — Get inquiry with polymorphic source data
- `GET /v1/appointments` — List appointments
- `POST /v1/calls` — Initiate call (modes: "normal" or "transfer_only", supports custom instructions)
- `GET /v1/faqs` — List FAQs
- `POST /v1/faqs` — Create FAQ
- `PUT /v1/faqs/{id}` — Update FAQ
- `DELETE /v1/faqs/{id}` — Delete FAQ
- `GET /v1/policies` — List policies
- `POST /v1/policies` — Create policy
- `PUT /v1/policies/{id}` — Update policy
- `GET /v1/organization` — Org details
- `GET /v1/organization/availability` — Availability schedules
- `GET /v1/organization/members` — Team members
- `GET /v1/organization/services` — Services by category
- `GET /v1/organization/products` — Products by category
- `GET /v1/members` — List members (roles: OWNER, ADMIN, USER)
- `SMS endpoints` — SMS integration

---

## 5. COMPETITIVE ADVANTAGES — KORDIO vs SOPHIIE

### Where Kordio WINS:
1. **Deep ordering system** — Full menu management with categories, items, sizes, modifiers, deals, half-half pizzas, deal upgrades. Sophiie has basic "Services" cards with no ordering logic.
2. **Server-side order calculation** — `calculate_order` tool ensures accurate pricing. Sophiie has no equivalent.
3. **Order management (Kanban)** — Visual drag-and-drop order board. Sophiie has a basic "Jobs" list.
4. **Knowledge Base auto-sync** — Menu changes auto-sync to Retell KB. Sophiie requires manual "Train" updates.
5. **Price** — Planned $49-99/mo vs $300/mo + $1,200 setup. 3-6x cheaper.
6. **Custom voice stack** — Building own Deepgram+OpenAI pipeline gives full control, lower per-call cost. Sophiie depends on Coragents (third-party).
7. **Multi-provider flexibility** — Can switch between Retell/Custom/OpenAI Realtime per shop. Sophiie is locked to their provider.
8. **Platform admin** — Super admin dashboard to manage multiple businesses. Sophiie's admin is per-org only.

### Where Sophiie WINS:
1. **Unified inbox** — Call + Text + Email + Chat + Form in one view with AI summaries. Kordio only has Call History.
2. **Multi-channel** — Phone + Chatbot + Email + SMS + Webform all integrated. Kordio only has Phone.
3. **Full CRM** — Customers, Quotes, Invoices, Jobs, Schedule. Kordio has none of these.
4. **Voice & Personality UI** — Beautiful voice picker with filters, personality presets, preview audio. Kordio has a basic dropdown.
5. **Scenarios & Restrictions** — Template-based scenario handling (Complaint, Quote Request) with actions. Kordio hardcodes this in prompts.
6. **Greeting template builder** — Visual editor with variable tokens (Agent Name, Business Name, Customer Name). Kordio has a basic text field.
7. **Transfer rules** — Multiple transfer rules with timeouts, hold messages, fallbacks. Kordio has one transfer number.
8. **Website scraping** — "Refresh from URL" auto-populates business info from their website. Kordio requires manual entry.
9. **Document upload** — Upload PDFs for the AI to learn from. Kordio doesn't support this.
10. **API docs** — Full REST API with OpenAPI spec. Kordio has no public API.
11. **Embeddable chatbot** — Ready-to-install widget with script tag. Kordio planned but not built.
12. **PostHog + Sentry** — Production-grade analytics and error monitoring. Kordio has neither.
13. **Onboarding** — Cor AI (Obi) provides video-guided onboarding. Kordio is manual.

---

## 6. IDEAS TO STEAL / IMPLEMENT

### High Priority (Quick Wins):
1. **Greeting template with variables** — Let shop owners customise greeting with {business_name}, {agent_name} tokens. We already have `greeting_message` — just add the variable system and preview audio.
2. **Restrictions list** — Simple "NEVER" rules that shop owners can add without editing the full prompt. Store in DB, inject into agent prompt.
3. **FAQ management UI** — Let shop owners add Q&A pairs that the agent can reference. Store in DB, sync to KB.
4. **Voice picker UI** — Show available voices with preview audio buttons. We already support voice selection but no preview.
5. **Profanity filter toggle** — Easy to add to voice settings.

### Medium Priority (Significant Value):
6. **Unified inbox** — Combine Call History + Orders into a single view per customer. Show AI-generated call summaries with key points.
7. **Embeddable chatbot widget** — Script tag + orgId approach (same as Sophiie). Connect to our AI backend.
8. **Document upload for KB** — Let shop owners upload PDFs (menus, policies) that get parsed into the Knowledge Base.
9. **Website scraping for onboarding** — "Refresh from URL" button that auto-fills shop info from their website.
10. **Scenario templates** — Pre-built handling for Complaint, Cancellation, Modified Order etc. with configurable actions.

### Lower Priority (Future):
11. **Customer CRM** — Track callers across multiple interactions. Build a customer profile from call history.
12. **Quotes & Invoices** — Expand beyond orders into quoting and billing (for non-restaurant businesses).
13. **Calendar/Schedule** — Full calendar view for service-based businesses.
14. **Email/SMS channels** — Multi-channel AI responses beyond phone.
15. **API docs** — Public REST API with OpenAPI spec for developer integrations.
16. **PostHog analytics** — Add product analytics to track user behaviour.
17. **Sentry** — Add error monitoring for production.

---

## 7. UI/UX IDEAS TO ADOPT

### Navigation & Layout:
- **Left sidebar with sections** — Manage (core features) + Automate (AI config) + Settings (infrastructure). Clean grouping.
- **Setup Progress indicator** — "66.67% Complete" bar showing onboarding status. Encourages completion.
- **"Test Agent" floating button** — Always visible blue "Test Sophiie" button in bottom-right. Great for quick testing.
- **"Try Your AI Agent" card** — Persistent bottom-left card encouraging users to test their agent as a customer.
- **Card vs List toggle** — Let users switch between card grid and list view for services, scenarios, FAQs.
- **Tutorial button** — Every page has a "Tutorial" button top-right linking to guides.

### Specific UI Patterns:
- **Scenario cards with templates** — Pre-built "Complaint", "Quote Request", "Pricing Inquiry" cards with description + action (Continue Call / Send SMS). Badge shows "Template" vs custom.
- **Status pills** — Active (green), Inactive (yellow), Pending (grey), Missing (orange warning) throughout.
- **Variable token chips** — Greeting editor uses coloured chips like `Agent Name ×` and `Business Name ×` that can be inserted/removed.
- **Audio waveform player** — In inbox, calls show waveform visualisation with play/speed controls.
- **"Preview Audio" / "Preview Personality"** buttons — Let users hear how their agent sounds before going live.
- **Onboarding Assistant** — Floating "Onboarding Assistant" pill that appears on every page to guide new users.

### Dark sidebar + Light content:
- Sophiie uses **dark navy sidebar** (#1a2332) + **white content area**. This is clean and professional.
- Their sidebar has clear section labels (MANAGE, AUTOMATE, SETTINGS) with icons.
- Account switcher at bottom with org name + plan badge.

---

## 8. COMPANY INTEL

- **Founded**: 2024, Surfers Paradise QLD, Australia
- **Founders**: Jacob Banks (CEO, ex-Floodgate Digital, ex-Service.com.au) + Luke Kelleher
- **Team size**: 19 employees
- **Key hires**: Muhammad Mamed (Full Stack Dev), Salman Anis (Head of Customer Success)
- **Funding**: Unfunded (per Tracxn)
- **Target**: Australian SMEs in trades & services
- **Growth**: Uses Cor AI (Obi) for onboarding — "hundreds of onboarding sessions every month"
- **Tech leader familiarity**: Jacob Banks uses Claude Code (mentioned building AI sales coaching agent)
