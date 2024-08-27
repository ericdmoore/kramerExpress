export const notionUrlParse = (urlToParse: string | URL) => {
  const url = typeof urlToParse === "string" ? new URL(urlToParse) : urlToParse;

  return {
    href: url.href,
    origin: url.origin,
    protocol: url.protocol,
    username: url.username,
    password: url.password,
    host: url.host,
    hostname: url.hostname,
    port: url.port,
    pathname: url.pathname,
    hash: url.hash,
    search: url.search,
    fromNotion: {
      workspace: url.pathname.split("/")[1],
      db_ID: url.pathname.split("/")[2],
      page_ID: url.searchParams.get("v"),
    },
  };
};

export default notionUrlParse;
