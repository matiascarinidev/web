import React from "react";

export default function ReserveForm() {
  return (
    <section
      className="min-h-[70vh] relative"
      style={{
        background: `url("/images/hero/fire.jpg") center/cover no-repeat`,
      }}
    >
      <div className="absolute inset-0 bg-[#0003] flex justify-center items-center px-64 py-12 backdrop-blur-xs">
        <h1>HACE TU RESERVA</h1>
      </div>
    </section>
  );
}
