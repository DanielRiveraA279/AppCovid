//CASES

export interface Cases {
    confirmed:           number;
    recovered:           number;
    deaths:              number;
    country:             string;
    population:          number;
    sq_km_area:          number;
    life_expectancy:     string;
    elevation_in_meters: number;
    continent:           string;
    abbreviation:        string;
    location:            string;
    iso:                 number;
    capital_city:        string;
    lat?:                string;
    long?:               string;
    updated?:            Updated;
}

export enum Updated {
    The2021120212222600 = "2021/12/02 12:22:26+00",
}


// HISTORY

export interface History {
    All: StructureCountry;
}

export interface StructureCountry {
    country:             string;
    population:          number;
    sq_km_area:          number;
    life_expectancy:     string;
    elevation_in_meters: number;
    continent:           string;
    abbreviation:        string;
    location:            string;
    iso:                 number;
    capital_city:        string;
    dates:               { [key: string]: number };
}



//VACCINES

export interface Vaccines {
    administered:                number;
    people_vaccinated:           number;
    people_partially_vaccinated: number;
    country:                     string;
    population:                  number;
    sq_km_area:                  number;
    life_expectancy:             string;
    elevation_in_meters:         number;
    continent:                   string;
    abbreviation:                string;
    location:                    string;
    iso:                         number;
    capital_city:                string;
    updated:                     Updated;
}

export enum Updated {
    The2021120200000000 = "2021/12/02 00:00:00+00",
}