# Widget

## Basic AddToCal Widget

Config:
- Data Source: 
   - Scanning the current page
     - JSON-LD @see: https://schema.org/Event
     - RDFa
        `<div property="event" typeof="Event">`
     - [microdata / microformat](https://developer.mozilla.org/en-US/docs/Web/HTML/microformats#some_microformats_examples)
        `<div itemprop="event" itemscope itemtype="https://schema.org/Event">`
     - hCard: https://microformats.org/wiki/h-card
        - `<span class="h-card">` || `<div class="vcard">`
     - XOXO: http://microformats.org/wiki/xoxo
     - User Provided Data Pickers
       - CSS location 
       - XPath location
   - Fetch a different page `{url: https://example.com/event}`
   - given a `{providerName : eventID}`
   - given the fields in-line '{name: ExampleName, start:___, stop:__, etc}'

- Data Destinations:
    - Google: {with: overrides}
    - Yahoo
    - Outlook
    - Microsoft 365
    - providerName:{withConfigured: overrides}
    - ICal


https://www.addevent.com/blog/add-to-calendar-mailchimp

## RSVP w/ Calendar Widget

- Same as `AddToCal`
- Extra Config:
    - RSVPData Destinations:
        - Google Sheet
        - Notion DB
        - Airtable
