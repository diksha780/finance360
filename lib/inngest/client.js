import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "finance360-platform", // Unique app ID
  name: "Finance360 Platform",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});
