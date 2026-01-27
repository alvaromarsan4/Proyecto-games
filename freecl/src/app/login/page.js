"use client";

import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";

export default function LoginPage() {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(form);
    if (!res.success) setError(res.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        required
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Contraseña"
        required
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button>Entrar</button>
      {error && <p>{error}</p>}
    </form>
  );
}
