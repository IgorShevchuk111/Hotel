import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mlcvciqzgxancuyuulgw.supabase.co';

const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sY3ZjaXF6Z3hhbmN1eXV1bGd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxOTQ4OTcsImV4cCI6MjA0Mjc3MDg5N30.Z9T5WOSbliEr7aj_7UAkwtQDrgMrZ70apt6-YcI50jY';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
