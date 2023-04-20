export interface SidebarItem {
  icon: string;
  title: string;
  slug?: string;
}

export interface SidebarDetailItem {
  label: string;
  value: string;
}

export type Size = "small" | "medium" | "large";
