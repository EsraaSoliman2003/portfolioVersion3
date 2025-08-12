import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: import.meta.env.VITE_UPSTASH_URL,
  token: import.meta.env.VITE_UPSTASH_TOKEN,
});

export async function handler(req, res) {
  try {
    // نزود العداد (مفتاح visits)
    const visits = await redis.incr("visits");
    res.status(200).json({ visits });
  } catch (error) {
    console.error("Redis error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
