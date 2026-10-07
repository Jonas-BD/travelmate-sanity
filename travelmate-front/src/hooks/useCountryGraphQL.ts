import type { Country } from "../types/Country.types";
import { useGraphQL } from "./useGraphQL";

type CountriesResponse = {
  allCountry: Country[];
};

const COUNTRIES_QUERY = `
  query {
    allCountry {
      id
      code

      image {
        asset {
          url
        }
      }

      infos {
        language
        name
        description
      }
    }
  }
`;

export const useCountryGraphQL = () => {
  const { data, error } = useGraphQL<CountriesResponse>(COUNTRIES_QUERY);

  return {
    countries: data?.allCountry ?? [],
    error,
  };
};