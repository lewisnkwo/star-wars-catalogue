export interface SidebarItem {
  icon: string;
  title: string;
  slug: string;
}

export interface FitlerItem {
  icon: string;
  title: string;
  tabIndex: number;
  onSelect: () => void;
}

export interface InfoItem {
  label: string;
  value: string;
}

export type Size = "small" | "medium" | "large";

export interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export interface CharacterListItem {
  name: string;
  homeworld: string;
}
