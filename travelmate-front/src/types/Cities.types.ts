import type { Country } from "./Country.types";

export type City = {
  _id: string;
  name: string;
  image: string;
  slug: string;
  description: string;
  country: Country;
};