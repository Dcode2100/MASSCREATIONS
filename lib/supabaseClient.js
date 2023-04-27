import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://csrkdqkbwgtbiqmutlqo.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzcmtkcWtid2d0YmlxbXV0bHFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI2MDM0MDcsImV4cCI6MTk5ODE3OTQwN30.WtQHQQyOUVmcSfRRSLhoDVxaksl96b4XsFmeIyCOQ4Y"
);
