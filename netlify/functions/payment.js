import { getStore } from "@netlify/blobs";

export default async (req, context) => {
  const store = getStore("nameCounterStore");
  const key = "nameCounts";

  try {
    let nameCounts = await store.get(key, { type: "json" });

    if (!nameCounts || typeof nameCounts !== "object") {
      nameCounts = {};
    }

    const { name, amount } = await req.json();
    
    if (!name || typeof name !== "string") {
      return new Response(JSON.stringify({ error: "Name is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!amount || typeof amount !== "number" || amount <= 0) {
      return new Response(JSON.stringify({ error: "Valid amount is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!nameCounts[name]) {
      nameCounts[name] = { violations: 0, amountPaid: 0 };
    }

    nameCounts[name].amountPaid += amount;

    await store.setJSON(key, nameCounts);

    return new Response(JSON.stringify({ message: "Payment added", data: nameCounts }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error accessing blob store:", error);
    return new Response(JSON.stringify({ error: "Failed to add payment" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
