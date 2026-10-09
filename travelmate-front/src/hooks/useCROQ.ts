import { useEffect, useState } from "react";

const API_URL =
  "https://hzxe5s7j.api.sanity.io/v2026-10-09/data/query/production";

type GROQParams = Record<string, string | number | boolean | null>;

type GROQResponse<T> = {
  result?: T;
  error?: {
    description?: string;
  };
};

export const useGROQ = <T,>(
  query: string,
  params: GROQParams = {},
) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // En ny parameter-object med samme indhold starter ikke et nyt fetch.
  const paramsJSON = JSON.stringify(params);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      setData(null);

      try {
        const url = new URL(API_URL);

        url.searchParams.set("query", query);
        url.searchParams.set("perspective", "published");

        const queryParams: GROQParams = JSON.parse(paramsJSON);

        for (const [key, value] of Object.entries(queryParams)) {
          url.searchParams.set(`$${key}`, JSON.stringify(value));
        }

        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        const result: GROQResponse<T> = await response.json();

        if (result.error) {
          throw new Error(
            result.error.description ?? "Kunne ikke hente data fra Sanity",
          );
        }

        if (result.result === undefined) {
          throw new Error("Sanity returnerede ingen data");
        }

        if (!controller.signal.aborted) {
          setData(result.result);
        }
      } catch (error) {
        if (controller.signal.aborted) return;

        setError(
          error instanceof Error
            ? error.message
            : "Der opstod en ukendt fejl",
        );
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => controller.abort();
  }, [query, paramsJSON]);

  return { data, isLoading, error };
};