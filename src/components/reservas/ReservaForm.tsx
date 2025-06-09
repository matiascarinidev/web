import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { obtenerFeriados } from "@/lib/feriados";
import { set } from "zod/v4";

const reservaSchema = z.object({
  nombre: z.string().min(2, "Nombre demasiado corto"),
  email: z.string().email("Email inválido"),
  telefono: z.string().min(10, "Teléfono demasiado corto"),
  fecha: z.date(),
  cantidadPersonas: z.number().min(1, "Debe seleccionar al menos una persona"),
  sector: z.string().min(1, "Debe seleccionar un sector"),
  description: z.string().optional(),
  senia: z.boolean().default(false).optional(),
});

type ReservaFormData = z.infer<typeof reservaSchema>;

export default function ReservaForm() {
  const [feriados, setFeriados] = useState<string[]>([]);
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  useEffect(() => {
    obtenerFeriados().then(setFeriados);
  }, []);
  const esFeriado = (date: Date): boolean => {
    const diaMes = `${date.getDate().toString().padStart(2, "0")}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}`;
    return feriados.includes(diaMes);
  };
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ReservaFormData>({ resolver: zodResolver(reservaSchema) });
  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
    if (date) {
      setValue("fecha", date);
    }
  };
  const onSubmit = (data: ReservaFormData) => {
    console.log("Datos de reserva:", data);
    // Aquí puedes enviar los datos al servidor o realizar alguna acción
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-5/6 m-auto space-y-4 grid grid-cols-4 gap-4"
    >
      <div className="grid col-span-2">
        <label className="block text-sm  font-bold">Nombre completo *</label>
        <input {...register("nombre")} className="w-full p-2 border rounded" />
        {errors.nombre && (
          <p className="text-red-500 text-xs">{errors.nombre.message}</p>
        )}
      </div>

      <div className="grid col-span-1">
        <label className="block text-sm font-bold ">Teléfono *</label>
        <input {...register("telefono")} className="w-full border rounded" />
        {errors.telefono && (
          <p className="text-red-500 text-xs">{errors.telefono.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">
          Cantidad de personas *
        </label>
        <input
          type="number"
          {...register("cantidadPersonas", { valueAsNumber: true })}
          className="w-full p-2 border rounded"
          min="1"
        />
        {errors.cantidadPersonas && (
          <p className="text-red-500 text-xs">
            {errors.cantidadPersonas.message}
          </p>
        )}
      </div>
      <div className="grid col-span-2">
        <label className="block text-sm font-medium"> Email *</label>
        <input {...register("email")} className="w-full p-2 border rounded" />
        {errors.email && (
          <p className="text-red-500 text-xs">{errors.email.message}</p>
        )}
      </div>
      <div className="col-span-2 row-span-2">
        <label className="block text-sm font-medium">Fecha y Hora</label>
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          inline
          calendarClassName="bg-white shadow-lg rounded-lg p-2" // Estilos personalizados
          filterDate={(date) =>
            [0, 5, 6].includes(date.getDay()) || esFeriado(date)
          }
        />
        {errors.fecha && (
          <p className="text-red-500 text-xs">Selecciona una fecha</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Sector</label>
        <select {...register("sector")} className="w-full p-2 border rounded">
          <option value="" className="text-black">
            Seleccionar
          </option>
          <option value="interior" className="text-black">
            Interior
          </option>
          <option value="exterior" className="text-black">
            Exterior
          </option>
        </select>
        {errors.sector && (
          <p className="text-red-500 text-xs">{errors.sector.message}</p>
        )}
      </div>
      <div className="col-span-4">
        <label className="block text-sm font-medium">
          Detalles adicionales
        </label>
        <textarea
          {...register("description")}
          className="w-full p-2 border rounded resize-y"
          rows={2}
        />
      </div>
      <div className="flex items-center col-span-4">
        <input type="checkbox" {...register("senia")} className="mr-2" />
        <label className="text-sm font-medium">Dejar seña</label>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Confirmar Reserva
      </button>
    </form>
  );
}
