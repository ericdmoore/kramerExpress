# Calendaring

## Source:

- Notion (URL, NotionID [DB | page])
- Airtable (Table)
- Open Web (URL)
  - Scan HTML data
  - Scan CSS

## Destination Providers:

- ICal / ICS (fileish)
- Google Link
- Outlook Link
- Office365 Link
- Yahoo ? Notion ? Airtable

```js
// Examples
const yahooLink = await calendaring
  .from.airtable({ table: "string" })
  .to.yahoo();

const office365Link = await calendaring
  .from.airtable({ table: "string" })
  .to.office365();

const googleLink = await calendaring
  .from.web({ url: "string" })
  .to.googleCal();

const outlookLink = await calendaring
  .from.notion({ db: "string" })
  .to.outlook();

const icsFileText = await calendaring
  .from.notion({ url: "string" })
  .to.ical.text();

const icsFileish = await calendaring
  .from.notion({ db: "string" })
  .to.ical.blob();
```
