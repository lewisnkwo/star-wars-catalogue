import type { Character, CharacterListItem } from "./types";
import {
  createInitials,
  filterByGender,
  sortAscending,
  sortDescending,
  toCharacterList,
} from "./utils";

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
    homeworld: "Tatooine",
    films: ["A New Hope", "The Empire Strikes Back", "Return of the Jedi"],
    species: ["Human"],
    vehicles: ["Snowspeeder", "Imperial Speeder Bike"],
    starships: ["X-wing", "Imperial shuttle"],
    created: "2014-12-09T13:50:51.644000Z",
    edited: "2014-12-20T21:17:56.891000Z",
    url: "https://swapi.dev/api/people/1/",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
    homeworld: "Tatooine",
    films: [
      "A New Hope",
      "The Empire Strikes Back",
      "Return of the Jedi",
      "Revenge of the Sith",
    ],
    species: ["Human"],
    vehicles: [],
    starships: ["TIE Advanced x1"],
    created: "2014-12-10T15:18:20.704000Z",
    edited: "2014-12-20T21:17:50.313000Z",
    url: "https://swapi.dev/api/people/4/",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
    homeworld: "Alderaan",
    films: [
      "A New Hope",
      "The Empire Strikes Back",
      "Return of the Jedi",
      "The Force Awakens",
    ],
    species: ["Human"],
    vehicles: ["Tantive IV"],
    starships: [],
    created: "2014-12-10T15:20:09.791000Z",
    edited: "2014-12-20T21:17:50.315000Z",
    url: "https://swapi.dev/api/people/5/",
  },
];

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

  it("should return a maximum of 2 initials", () => {
    expect(createInitials("Lewis Nkwo Another Name Here")).toBe("LN");
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

describe("sortAscending", () => {
  it("should sort the characters in ascending order by name", () => {
    const expected: Character["name"][] = [
      "Darth Vader",
      "Leia Organa",
      "Luke Skywalker",
    ];
    expect(sortAscending(characters).map((c) => c.name)).toEqual(expected);
  });
});

describe("sortDescending", () => {
  it("should sort the characters in descending order by name", () => {
    const expected: Character["name"][] = [
      "Luke Skywalker",
      "Leia Organa",
      "Darth Vader",
    ];
    expect(sortDescending(characters).map((c) => c.name)).toEqual(expected);
  });
});

describe("filterByGender", () => {
  const filterCharacters: Character[] = [
    ...characters,
    {
      name: "R2-D2",
      height: "96",
      mass: "32",
      hair_color: "n/a",
      skin_color: "white, blue",
      eye_color: "red",
      birth_year: "33BBY",
      gender: "n/a",
      homeworld: "https://swapi.dev/api/planets/8/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/",
      ],
      species: ["https://swapi.dev/api/species/2/"],
      vehicles: [],
      starships: [],
      created: "2014-12-10T15:11:50.376000Z",
      edited: "2014-12-20T21:17:50.311000Z",
      url: "https://swapi.dev/api/people/3/",
    },
  ];

  it('should return all items when the filter value is "all"', () => {
    const expected: Character["name"][] = [
      "Luke Skywalker",
      "Darth Vader",
      "Leia Organa",
      "R2-D2",
    ];

    expect(filterByGender(filterCharacters, "all").map((c) => c.name)).toEqual(
      expected
    );
  });

  it('should return only male characters when the filter value is "male"', () => {
    const expected: Character["name"][] = ["Luke Skywalker", "Darth Vader"];
    expect(filterByGender(filterCharacters, "male").map((c) => c.name)).toEqual(
      expected
    );
  });

  it('should return only female characters when filter value is "female"', () => {
    const expected: Character["name"][] = ["Leia Organa"];
    expect(
      filterByGender(filterCharacters, "female").map((c) => c.name)
    ).toEqual(expected);
  });

  it('should return only characters with gender "n/a" when the filter value is "n/a"', () => {
    const expected: Character["name"][] = ["R2-D2"];
    expect(filterByGender(filterCharacters, "n/a").map((c) => c.name)).toEqual(
      expected
    );
  });

  it("should return all characters when there is an unspecified gender", () => {
    expect(filterByGender(filterCharacters, "unspecified")).toEqual(
      filterCharacters
    );
  });

  it("should return no characters when the characters array is empty", () => {
    expect(filterByGender([], "male")).toEqual([]);
  });
});
