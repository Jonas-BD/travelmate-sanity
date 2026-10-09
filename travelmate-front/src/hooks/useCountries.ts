import type {
  Country,
  LanguageCode,
} from "../types/Country.types";
import { useGROQ } from "./useCROQ";

const COUNTRIES_QUERY = `
  *[_type == "country"] {
    _id,
    code,
    "image": image.asset->url,
    "name": info[language->code == $language][0].name,
    "slug": info[language->code == $language][0].slug.current,
    "description": info[language->code == $language][0].description
  } | order(name asc)
`;

export const useCountries = (language: LanguageCode = "da") => {
  const { data, isLoading, error } = useGROQ<Country[]>(
    COUNTRIES_QUERY,
    { language },
  );

  return {
    countries: data ?? [],
    isLoading,
    error,
  };
};