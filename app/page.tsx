"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Home() {
  const [status, setStatus] = useState("Test en cours...");

  useEffect(() => {
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
