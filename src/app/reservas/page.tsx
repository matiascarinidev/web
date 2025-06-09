"use client";
import ReservaForm from "@/components/reservas/ReservaForm";
import React from "react";

export default function page() {
  return (
    <section className="flex flex-col  w-2/3  mx-auto items-center bg-[#0009] backdrop-blur-xs p-14">
      <h1 className="text-3xl font-bold text-white text-left w-4/5 mb-12">
        Reservar mesa
      </h1>
      <p className="text-center mb-8">
        Completa el formulario para reservar tu mesa. Te contactaremos para
        confirmar tu reserva.
      </p>
      <ReservaForm />
    </section>
  );
} 
