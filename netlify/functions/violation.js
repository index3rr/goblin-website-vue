import { getStore } from "@netlify/blobs";

export default async (req, context) => {
  const store = getStore("nameCounterStore");
  const key = "nameCounts";

  try {
    let nameCounts = await store.get(key, { type: "json" });

    if (!nameCounts || typeof nameCounts !== "object") {
      nameCounts = {};
    }

    const { name } = await req.json();
    
    if (!name || typeof name !== "string") {
      return new Response(JSON.stringify({ error: "Name is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    nameCounts[name] = (nameCounts[name] || 0) + 1;

    await store.setJSON(key, nameCounts);

    return new Response(JSON.stringify({ message: "Count incremented", data: nameCounts }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error accessing blob store:", error);
    return new Response(JSON.stringify({ error: "Failed to update count" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
