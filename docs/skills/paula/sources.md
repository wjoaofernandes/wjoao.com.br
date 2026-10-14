# Paula · Source Strategy

**SPEC_VERSION:** `2026-10-14.1`

## Principle

Travel facts expire quickly. Use public web research aggressively for discovery, but use the most authoritative source available for the final factual claim or decision.

## Source hierarchy

### Tier 0 — User and confirmed reservation records

Highest priority for the user's actual trip state:

- explicit current user instructions;
- booking confirmations;
- tickets;
- reservation emails;
- provider invoices/receipts;
- calendar events;
- connected account records.

A confirmed reservation beats a generic web result about what is normally available.

### Tier 1 — Official and primary sources

Use for facts that can create legal, financial, safety or execution risk:

- immigration, border and consular authorities;
- official government travel advisories;
- IATA Travel Centre / Timatic-derived requirements;
- European Union official travel portals;
- WHO and official national/public-health guidance;
- airline, railway, bus, ferry and airport websites;
- official accommodation/provider terms;
- official attraction, museum, park and event websites;
- official tourism boards;
- national meteorological services;
- central banks and official currency sources;
- local public-transport authorities.

Examples researched when this Skill was created:

- IATA Travel Centre — https://www.iata.org/en/travel-centre/
- Your Europe travel — https://europa.eu/youreurope/citizens/travel/
- ETIAS / EES official EU portal — https://travel-europe.europa.eu/
- Spain Ministry of Foreign Affairs travel advice — https://www.exteriores.gob.es/
- WHO travel advice — https://www.who.int/travel-advice/
- CDC Travelers' Health — https://wwwnc.cdc.gov/travel/
- European Central Bank exchange rates — https://www.ecb.europa.eu/
- Aena passenger information — https://www.aena.es/

### Tier 2 — Transactional search and comparison platforms

Use to discover and compare options, not as the final authority for legal or safety claims:

- Google Flights;
- Skyscanner;
- KAYAK;
- Rome2Rio;
- Omio;
- Trainline;
- Booking.com;
- Airbnb;
- Hostelworld;
- car-rental aggregators and local transport marketplaces.

Whenever practical, verify the selected option on the actual supplier/operator site before booking.

### Tier 3 — Editorial, maps and crowd-reviewed sources

Use for qualitative planning, neighborhood feel, attraction ideas and practical context:

- official local tourism sites;
- Google Maps / place listings;
- OpenStreetMap-based tools;
- UNESCO;
- Lonely Planet;
- Wikivoyage;
- Tripadvisor;
- reputable local newspapers and established travel publications.

Never rely on this tier alone for border, visa, health, legal, safety, baggage or refund rules.

### Tier 4 — Community and social sources

Use Reddit, specialist forums, travel blogs, YouTube, TikTok and other public social content only for:

- subjective experience;
- crowd levels;
- neighborhood atmosphere;
- packing habits;
- recurring traveler pain points;
- practical tips that can be independently verified.

Do not treat anecdotal content as authoritative fact.

## Freshness rules

Always re-check close to execution when the fact can change:

- prices and availability;
- schedules;
- strikes and disruptions;
- opening hours;
- visa/entry requirements;
- ETIAS/EES status;
- travel advisories;
- health notices;
- weather;
- exchange rates;
- baggage rules;
- cancellation policies.

For weather outside the reliable forecast window, label the result as climate/seasonal guidance rather than a forecast.

## Conflict resolution

When sources disagree:

1. Prefer primary over secondary.
2. Prefer the rule specific to the exact provider/journey over a generic rule.
3. Prefer newer information when authority is comparable.
4. Check whether the sources describe different fare classes, nationalities, dates or conditions.
5. If the conflict remains material, show the uncertainty instead of choosing silently.

## Provenance

For material recommendations, retain enough provenance to reconstruct the decision:

- source;
- checked time/date;
- observed price/availability;
- key restriction;
- whether the information is official, transactional, editorial or community-derived.

## Public research patterns adopted

Public travel-agent projects reviewed during Skill design consistently separate research into specialized lanes such as flights, hotels, destination/places, weather and budget, then synthesize a single itinerary. Stronger implementations verify proposed places against real mapping/place data before exposing them and keep budget evaluation separate from raw discovery.

This Skill adopts those architectural principles without treating any public repository as authoritative travel data.
