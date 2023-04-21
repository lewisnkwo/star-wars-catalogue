import type { Character, CharacterListItem } from "./types";
import { createInitials, toCharacterList } from "./utils";

describe("createInitials", () => {
  it("should return empty string for empty input", () => {
    expect(createInitials("")).toBe("");
  });

  it("should remove extra whitespaces around the name", () => {
    expect(createInitials("  Lewis Nkwo    ")).toBe("LN");
  });

  it("should remove extra whitespaces in-between names", () => {
    expect(createInitials("  Lewis   Nkwo    ")).toBe("LN");
  });

  it("should return the initials for a user name", () => {
    expect(createInitials("Lewis Nkwo")).toBe("LN");
  });

  it("should return a maximum of 4 initials", () => {
    expect(createInitials("Lewis Nkwo Another Name Here")).toBe("LNAN");
  });
});

describe("toCharacterList", () => {
  const characters: Character[] = [
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      hair_color: "blond",
      skin_color: "fair",
      eye_color: "blue",
      birth_year: "19BBY",
      gender: "male",
      homeworld: "https://swapi.dev/api/planets/1/",
      films: [
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/6/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/7/",
      ],
      species: ["https://swapi.dev/api/species/1/"],
      vehicles: [
        "https://swapi.dev/api/vehicles/14/",
        "https://swapi.dev/api/vehicles/30/",
      ],
      starships: [
        "https://swapi.dev/api/starships/12/",
        "https://swapi.dev/api/starships/22/",
      ],
      created: "2014-12-09T13:50:51.644000Z",
      edited: "2014-12-20T21:17:56.891000Z",
      url: "https://swapi.dev/api/people/1/",
    },
  ];

  it("should transform the model data into props for the CharacterListItem", () => {
    const expected: CharacterListItem[] = [
      {
        name: "Luke Skywalker",
        homeworld: "https://swapi.dev/api/planets/1/",
      },
    ];

    const result = toCharacterList(characters);

    expect(result).toEqual(expected);
  });
});
