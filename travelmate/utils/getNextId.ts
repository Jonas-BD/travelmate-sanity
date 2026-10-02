import type { InitialValueResolverContext } from "sanity";

type DocumentType = "country" | "city" | "attraction";

export const getNextId = async (
  type: DocumentType,
  context: InitialValueResolverContext
): Promise<number> => {
  const client = context.getClient({
    apiVersion: "2025-02-19",
  });

  const highestId = await client.fetch<number | null>(
    `*[
      _type == $type &&
      defined(id) &&
      !(_id in path("drafts.**"))
    ] | order(id desc)[0].id`,
    { type },
    { perspective: "published" }
  );

  return (highestId ?? 0) + 1;
};