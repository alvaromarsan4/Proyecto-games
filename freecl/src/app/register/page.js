"use client";

import { useState } from "react";
import { register } from "@/services/api";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(form);
    alert("Usuario registrado");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Registro</h1>
      <input placeholder="Nombre" required
        onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input type="email" placeholder="Email" required
        onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Contraseña" required
        onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <input type="password" placeholder="Confirmar contraseña" required
        onChange={(e) => setForm({ ...form, password_confirmation: e.target.value })} />
      <button>Registrar</button>
    </form>
  );
}
