import type { City } from "../types/Cities.types";
import type { LanguageCode } from "../types/Country.types";
import { useGROQ } from "./useCROQ";

const CITIES_QUERY = `
  *[_type == "city"] {
    _id,
    "image": image.asset->url,
    "name": info[language->code == $language][0].name,
    "slug": info[language->code == $language][0].slug.current,
    "description": info[language->code == $language][0].description,
    "country": country-> {
      _id,
      code,
      "image": image.asset->url,
      "name": info[language->code == $language][0].name,
      "slug": info[language->code == $language][0].slug.current,
      "description": info[language->code == $language][0].description
    }
  } | order(name asc)
`;

export const useCities = (language: LanguageCode = "da") => {
  const { data, isLoading, error } = useGROQ<City[]>(
    CITIES_QUERY,
    { language },
  );

  return {
    cities: data ?? [],
    isLoading,
    error,
  };
};