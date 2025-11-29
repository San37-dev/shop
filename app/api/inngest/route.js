import { serve } from "inngest/next";
import { inngest } from "../../../inngest/client";
import { syncUserCreation, syncUserDeletion, syncUserUpdation } from "@/inngest/functions";

export const config = {
  runtime: 'nodejs', // or 'edge', depending on your requirements
};

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion
    
  ],
});

