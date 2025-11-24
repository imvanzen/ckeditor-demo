export interface HeaderFooterItem {
  html: string;
  css?: string;
}

export interface HeaderFooterConfig {
  default?: HeaderFooterItem;
  first?: HeaderFooterItem;
  odd?: HeaderFooterItem;
  even?: HeaderFooterItem;
}

export interface ExportWordHeadersFootersConfig {
  headers?: HeaderFooterConfig;
  footers?: HeaderFooterConfig;
}
