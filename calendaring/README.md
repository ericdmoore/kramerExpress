Calendaring API
===============

# Fresh
This is a Fresh Project.

See the  "Getting Started" guide here: https://fresh.deno.dev/docs/getting-started

### Usage

Make sure to install Deno: https://deno.land/manual/getting_started/installation

Then start the project:

```
deno task start
```

watches project directory and restarts as necessary.


# API

## Sources

### _/api/from_

shows a list of connected providers

- list of available and configured sources

### _/api/from/data_

- a form that collects inline data

### _/api/from/url_

- shows the form to collect the url

### _/api/from/airtable_

- shows a form to collect the airtable config information.
- also shows an optional PubKey (w/ ttl) to use if passing in a secret.

// assumes storage: GUID -> PubKey (secret private key)

### _/api/from/notion_

- shows a form to collect the notion config information.
  - eventID
  - or ListID
- also shows an optional PubKey (w/ ttl) to use if passing in a secret. //
  assumes storage: GUID -> PubKey (secret private key)

... pattern continues etc

### Specific URL Handlers (premium)

- URL handlers available for purchase

## Destinations

### _/api/from/notion/to/_

- shows a list of destinations that notion can route to
- shows a preview of validated notion data

### _/api/from/notion/to/email_

- shows destination config screen
  - to: email Address

### _/api/from/notion/to/ical_

- button -> [iCal](#icalFormat)

### _/api/from/notion/to/googleCal_

- shows destination config screen

### _/api/from/notion/to/googleCal_

- shows destination config screen

## SideEffects (premium)

- standard add to calendar
- pre:add - require extra form-data before add to calendar
  - aka: email address
- post:add - trigger SES

## Integrations

- Email Providers
- Data Storage
- Triggers
  - Developer Webhooks
  - Data Notifications
  - AWS:SNS
  -

## Scheduling Blocks (premium)

- Select a chunk time based on the available block of time shown
- after time is selected: standard add to calendar
- works with side-effects

## RSVP Collectors (premium)

- configurable notifications (w/ confirmations)
- works with side-effects

## Embedable Calendars (premium)

- Widget

## Composite Calendars (premium)

- Calendar Merges

---

---

**Hobby plan includes: $0**

- Solutions
- Share Events
- Collect RSVPs
- Subscription Calendars
- Automated add-to-calendar button

Usage up to 5 events / month 100 event-adds / month 20 RSVPs / month 1 calendar
20 active subscribers

Account 1 account user

**Small Business plan includes: $29**

- Solutions
- Share Events
- Collect RSVPs
- Subscription Calendars
- Embeddable Calendars
- NEW
- Automated add-to-calendar button
- Automated add-to-calendar links
- Analytics (included in Annual)

Usage up to 50 events / month 2,500 event-adds / month 1,000 RSVPs / month 10
calendars 1,000 active subscribers

Account 1 account user

**Professional plan includes: $99**

- Solutions
- Share Events
- Collect RSVPs
- Subscription Calendars
- Embeddable Calendars
- NEW
- Automated add-to-calendar button
- Automated add-to-calendar links
- Analytics

Usage up to 250 events / month 25,000 event-adds / month 5,000 RSVPs / month 50
calendars 5,000 active subscribers

Account 5 account users Developer & priority support Dedicated account manager

**Enterprise plan includes:**

- Solutions
- Share Events
- Collect RSVPs
- Subscription Calendars
- Embeddable Calendars
- NEW
- Automated add-to-calendar button
- Automated add-to-calendar links
- Analytics

Usage up to Unlimited events / month Unlimited event-adds / month Unlimited
RSVPs / month Unlimited calendars Unlimited active subscribers

Account Additional account users Developer & priority support Dedicated account
manager Custom Integrations
