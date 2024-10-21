export interface NotionInputUrl {
  url: string;
}

export interface NotionInpuDBid {
  DBiD: string;
}

export interface NotionInputID {
  id: string;
}

export type NotionInput = NotionInputUrl | NotionInpuDBid | NotionInputID;

export interface NotionUrlIds extends URL {
  workspace: string;
  databaseId: string;
  viewId: string;
}

// BLOCKS
export interface Notion_BOOKMARK_prop {
  id: string;
  type: "bookmark";
  bookmark: string;
}
export interface Notion_BREADCRUMB_prop {
  id: string;
  type: "breadcrumb";
  breadcrumb: string;
}
export interface Notion_BULLETED_list_item_prop {
  id: string;
  type: "bulleted_list_item";
  bulleted_list_item: string;
}
export interface Notion_CALLOUT_prop {
  id: string;
  type: "callout";
  callout: string;
}
export interface Notion_CHILD_database_prop {
  id: string;
  type: "child_database";
  child_database: string;
}
export interface Notion_child_page_prop {
  id: string;
  type: "child_page";
  child_page: string;
}
export interface Notion_COLUMN_prop {
  id: string;
  type: "column";
  column: string;
}
export interface Notion_COLUMNLIST_prop {
  id: string;
  type: "column_list";
  column_list: string;
}
export interface Notion_DIVIDER_prop {
  id: string;
  type: "divider";
  divider: string;
}
export interface Notion_EMBED_prop {
  id: string;
  type: "embed";
  embed: string;
}
export interface Notion_EQUATION_prop {
  id: string;
  type: "equation";
  equation: string;
}
export interface Notion_FILE_prop {
  id: string;
  type: "file";
  file: { url: string; expiry_time: string };
}
export interface Notion_HEADING1_prop {
  id: string;
  type: "heading_1";
  heading_1: string;
}
export interface Notion_HEADING2_prop {
  id: string;
  type: "heading_2";
  heading_2: string;
}
export interface Notion_HEADING3_prop {
  id: string;
  type: "heading_3";
  heading_3: string;
}
export interface Notion_IMAGE_prop {
  id: string;
  type: "image";
  image: string;
}
export interface Notion_LINKPREVIEW_prop {
  id: string;
  type: "link_preview";
  link_preview: string;
}
export interface Notion_LINK_prop {
  id: string;
  type: "link_to_page";
  link_to_page: string;
}
export interface Notion_NUMBEREDLISTITEM_prop {
  id: string;
  type: "numbered_list_item";
  numbered_list_item: string;
}
export interface Notion_PARAGRAPH_prop {
  id: string;
  type: "paragraph";
  paragraph: string;
}
export interface Notion_PDF_prop {
  id: string;
  type: "pdf";
  pdf: string;
}
export interface Notion_QUOTE_prop {
  id: string;
  type: "quote";
  quote: string;
}
export interface Notion_SYNCED_prop {
  id: string;
  type: "synced_block";
  synced_block: string;
}
export interface Notion_TABLE_prop {
  id: string;
  type: "table";
  table: string;
}
export interface Notion_TABLEOFCONTENTS_prop {
  id: string;
  type: "table_of_contents";
  table_of_contents: string;
}
export interface Notion_TABLEROW_prop {
  id: string;
  type: "table_row";
  table_row: string;
}
export interface Notion_TEMPLATE_prop {
  id: string;
  type: "template";
  template: string;
}
export interface Notion_TODO_prop {
  id: string;
  type: "to_do";
  to_do: string;
}
export interface Notion_TOGGLE_prop {
  id: string;
  type: "toggle";
  toggle: string;
}
export interface Notion_UNSUPPORTED_prop {
  id: string;
  type: "unsupported";
  unsupported: string;
}
export interface Notion_VIDEO_prop {
  id: string;
  type: "video";
  video: string;
}

// DB PROPS
export interface Notion_CHECKBOX_prop {
  type: "checkbox";
  id: string;
  checkbox: string;
}
export interface Notion_CREATEDBY_prop {
  type: "created_by";
  id: string;
  created_by: string;
}
export interface Notion_CREATEDTIME_prop {
  type: "created_time";
  id: string;
  created_time: string;
}
export interface Notion_DATE_prop {
  type: "date";
  id: string;
  date: { start: string; end: string | null; time_zone: null | number };
}
export interface Notion_EMAIL_prop {
  type: "email";
  id: string;
  email: string;
}
export interface Notion_FILES_prop {
  type: "files";
  id: string;
  files: string;
}
export interface Notion_FORMULA_prop {
  type: "formula";
  id: string;
  formula: string;
}
export interface Notion_LASTEDITBY_prop {
  type: "last_edited_by";
  id: string;
  last_edited_by: string;
}
export interface Notion_LASTEDITDATE_prop {
  type: "last_edited_time";
  id: string;
  last_edited_time: string;
}
export interface Notion_MULTI_prop {
  type: "multi_select";
  id: string;
  multi_select: string;
}
export interface Notion_NUMBER_prop {
  type: "number";
  id: string;
  number: string;
}
export interface Notion_PEOPLE_prop {
  type: "people";
  id: string;
  people: string;
}
export interface Notion_PHONE_prop {
  type: "phone_number";
  id: string;
  phone_number: string;
}
export interface Notion_RELATION_prop {
  type: "relation";
  id: string;
  relation: string;
}
export interface Notion_RICHTEXT_prop {
  type: "rich_text";
  id: string;
  rich_text: string;
}
export interface Notion_ROLLUP_prop {
  type: "rollup";
  id: string;
  rollup: string;
}
export interface Notion_SELECT_prop {
  type: "select";
  id: string;
  select: string;
}
export interface Notion_STATUS_prop {
  type: "status";
  id: string;
  status: string;
}
export interface Notion_TITLE_prop {
  type: "title";
  id: string;
  title: string;
}
export interface Notion_URL_prop {
  type: "url";
  id: string;
  url: string;
}

export interface Notion_SystemBlock_User {
  object: string | "user";
  id: string;
}
export interface Notion_SystemBlock_External {
  type: "external";
  external: { url: string };
}
export interface Notion_SystemBlock_Emoji {
  type: "emoji";
  emoji?: string;
}
export interface Notion_SystemBlock_DatabaseID {
  type: "database_id";
  database_id: string;
}
export interface Notion_SystemBlock_PageID {
  type: "page_id";
  database_id: string;
}
export interface Notion_SystemBlock_BlockID {
  type: "block_id";
  database_id: string;
}
export interface Notion_SystemBlock_Workspace {
  type: "workspace";
  database_id: string;
}

export type DB_Props =
  | Notion_CHECKBOX_prop
  | Notion_CREATEDBY_prop
  | Notion_CREATEDTIME_prop
  | Notion_DATE_prop
  | Notion_EMAIL_prop
  | Notion_FILES_prop
  | Notion_FORMULA_prop
  | Notion_LASTEDITBY_prop
  | Notion_LASTEDITDATE_prop
  | Notion_MULTI_prop
  | Notion_NUMBER_prop
  | Notion_PEOPLE_prop
  | Notion_PHONE_prop
  | Notion_RELATION_prop
  | Notion_RICHTEXT_prop
  | Notion_ROLLUP_prop
  | Notion_SELECT_prop
  | Notion_STATUS_prop
  | Notion_TITLE_prop
  | Notion_URL_prop;

export interface QueryResultItem {
  id: string;
  object: "page";
  created_time: string;
  last_edited_time: string;
  archived: boolean;
  in_trash: boolean;
  url: string;
  public_url: string;
  properties: { [propName: string]: DB_Props };
  created_by: Notion_SystemBlock_User;
  last_edited_by: Notion_SystemBlock_User;
  cover: Notion_FILE_prop | Notion_SystemBlock_External | null;
  icon: Notion_SystemBlock_Emoji;
  parent:
    | Notion_SystemBlock_DatabaseID
    | Notion_SystemBlock_PageID
    | Notion_SystemBlock_BlockID
    | Notion_SystemBlock_Workspace;
}
