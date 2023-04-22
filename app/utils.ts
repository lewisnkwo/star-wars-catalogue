import type { Character, CharacterListItem } from "./types";

export const userListTabIndex = 8;

export const createInitials = (name: string): string =>
  name.trim() === ""
    ? ""
    : name
        .trim()
        .split(" ")
        .filter((n) => n !== "")
        .map((n) => n[0].toUpperCase())
        .join("")
        .slice(0, 2);

export const toCharacterList = (characters: Character[]): CharacterListItem[] =>
  characters.map((character) => ({
    name: character.name,
    homeworld: character.homeworld,
  }));
