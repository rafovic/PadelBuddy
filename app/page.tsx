"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Home() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const [status, setStatus] = useState(`URL: ${url ? "OK" : "MISSING"} | KEY: ${key ? "OK" : "MISSING"}`);

console.log("SUPABASE URL =", process.env.NEXT_PUBLIC_SUPABASE_URL);

  useEffect(() => {
    console.log("SUPABASE URL =", url);
console.log("SUPABASE KEY present =", !!key);

    const test = async () => {
      const { data, error } = await supabase.from("tournaments").select("id").limit(1);
      if (error) setStatus("❌ Erreur Supabase: " + error.message);
      else setStatus("✅ Connexion Supabase OK (tournaments reachable)");
    };
    test();
  }, []);

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>PadelBuddy</h1>
      <p>{status}</p>
    </main>
  );
}
