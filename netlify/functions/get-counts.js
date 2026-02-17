import { getStore } from "@netlify/blobs";

export default async (req, context) => {
  const store = getStore("nameCounterStore");
  const key = "nameCounts";

  try {
    let nameCounts = await store.get(key, { type: "json" });

    if (!nameCounts || typeof nameCounts !== "object") {
      nameCounts = {};
    }

    return new Response(JSON.stringify({ data: nameCounts }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error accessing blob store:", error);
    return new Response(JSON.stringify({ error: "Failed to retrieve counts" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
