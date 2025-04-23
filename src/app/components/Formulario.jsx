"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

function Formulario() {
  const router = useRouter();
  const formRef = useRef(null)

  const [producto, setProducto] = useState({
    NombreProducto: "",
    Descripcion: "",
    Precio: 0.00,
    Categoria: "",
  });

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/productos", producto);
    formRef.current.reset()
  };

  return (
    <form
      onSubmit={handleSubmit}
      ref={formRef}
      className="bg-white flex flex-col gap-3 shadow-md w-96 px-8 pt-8 rounded"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="nombre" className="font-semibold">
          Nombre del Producto:
        </label>
        <input
          type="text"
          name="NombreProducto"
          id="nombre"
          placeholder="ej. Refrigerador"
          className="p-2 border border-gray-300 rounded-sm"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="categoria" className="font-semibold">
          Categoría:
        </label>
        <select
          name="Categoria"
          id=""
          className="p-2 border border-gray-300 rounded-sm"
          onChange={handleChange}
        >
          <option value="hogar">Hogar</option>
          <option value="hogar">Ropa</option>
          <option value="hogar">Alimentos</option>
          <option value="hogar">Tecnología</option>
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="descripcion" className="font-semibold">
          Descripción del Producto:
        </label>
        <textarea
          rows={4}
          name="Descripcion"
          id="descripcion"
          placeholder="ej. Refrigerador de 11 pies con 4 niveles de enfriado"
          className="p-2 border border-gray-300 rounded-sm"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="precio" className="font-semibold">
          Precio:
        </label>
        <input
          type="number"
          name="Precio"
          id="precio"
          placeholder="49.99"
          className="p-2 border border-gray-300 rounded-sm"
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center justify-around my-3">
        <button
          type="button"
          className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 cursor-pointer"
          onClick={() => router.push("/")}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 cursor-pointer"
        >
          Registrar
        </button>
      </div>
    </form>
  );
}

export default Formulario;
