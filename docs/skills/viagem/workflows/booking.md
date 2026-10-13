# Workflow · Booking

**SPEC_VERSION:** `2026-10-13.1`

## Use when

The request involves purchasing, reserving, holding, canceling, changing or monitoring a travel product.

## Booking gate

Never execute an irreversible booking, purchase, cancellation or paid change without explicit authorization for the exact transaction.

Before requesting confirmation, summarize:

- provider;
- exact route/property/activity;
- traveler(s);
- dates and local times;
- total price and currency;
- included baggage/room/fare conditions;
- cancellation/change terms;
- major exclusions or risks.

## Comparison method

Compare like-for-like:

- same traveler count;
- same dates;
- same room/fare class;
- same baggage;
- taxes and mandatory fees;
- cancellation flexibility;
- payment timing;
- transfer/self-transfer risk.

A low headline fare that requires baggage, seat, airport transfer or overnight accommodation must be evaluated on total cost.

## Supplier verification

Aggregators may be used for discovery and comparison. Before execution, verify the chosen option on the transactional provider that will actually issue the reservation whenever possible.

## Reservation record

After successful booking, capture at minimum:

- provider;
- confirmation/PNR/reference;
- traveler names as ticketed;
- route/property/activity;
- date/time and timezone;
- address/terminal/station when relevant;
- total paid and currency;
- payment status;
- baggage/room/fare conditions;
- cancellation/change deadline and terms;
- check-in/check-out;
- contact or support route;
- source confirmation.

Hand calendar/task/storage updates to Laura.

## Verification

After booking:

1. Re-read confirmation.
2. Match traveler names.
3. Match dates/times.
4. Match origin/destination/property.
5. Match total charged.
6. Confirm ticket/reservation status.
7. Confirm cancellation terms.
8. Reconcile any mismatch before reporting success.
