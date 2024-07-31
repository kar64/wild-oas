import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://etpmnvmiuymtamuyueyw.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0cG1udm1pdXltdGFtdXl1ZXl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkzODE3MTksImV4cCI6MjAzNDk1NzcxOX0.JVbHOF_BpfXT32XaOwiTx3jzeY-RhrVmMH38cnmDvP4";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
