import { useEffect, useState } from "react";
import type { Country } from "../types/Country.types";

const API_URL = "https://vc422zc2.api.sanity.io/v2025-09-19/graphql/production/default";

const query = `
    query {
      allCountry {
        id
        code
      }
    }
`

export const useCountryGraphQL = () => {
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        const getCountries = async () => {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ query }),
            })

            const result = await response.json();
            console.log(result);

            setCountries(result.data.allCountry);
        }

        getCountries();
    }, []);

    return { countries };
}