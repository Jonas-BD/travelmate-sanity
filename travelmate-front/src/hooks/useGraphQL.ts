import { useEffect, useState } from "react";

const API_URL = "https://vc422zc2.api.sanity.io/v2025-09-19/graphql/production/default";

type GraphQLResponse<T> = {
  data?: T;
  errors?: {
    message: string;
  }[];
};

export const useGraphQL = <T,>(query: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        });

        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        const result: GraphQLResponse<T> = await response.json();

        if (result.errors) {
          throw new Error(result.errors[0].message);
        }

        if (!result.data) {
          throw new Error("No data returned from GraphQL");
        }

        setData(result.data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
          console.error("GraphQL fetch failed:", error.message);
        }
      }
    };

    fetchData();
  }, [query]);

  return { data, error };
};