"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import Swal from "sweetalert2";

function Formulario() {
  const router = useRouter();
  const formRef = useRef(null);

  const [producto, setProducto] = useState({
    NombreProducto: "",
    Descripcion: "",
    Precio: 0.0,
    Categoria: "Hogar",
  });

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("/api/productos", producto);
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Producto registrado",
          text: "Producto registrado correctamente",
        });
      }
      router.push("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo salió mal!",
      });
    }
    formRef.current.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      ref={formRef}
      className="bg-white flex flex-col gap-3 shadow-md w-96 px-8 pt-8 rounded"
    >
      <h2 className="text-2xl text-center text-[#0F4C81] font-semibold mb-3">Registrar Producto</h2>
      <div className="flex flex-col gap-1 text-sm">
        <label htmlFor="nombre">
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
      <div className="flex flex-col gap-1 text-sm">
        <label htmlFor="categoria">
          Categoría:
        </label>
        <select
          name="Categoria"
          id=""
          className="p-2 border border-gray-300 rounded-sm"
          onChange={handleChange}
        >
          <option value="Hogar">Hogar</option>
          <option value="Ropa">Ropa</option>
          <option value="Alimentos">Alimentos</option>
          <option value="Tecnología">Tecnología</option>
        </select>
      </div>
      <div className="flex flex-col gap-1 text-sm">
        <label htmlFor="descripcion">
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
      <div className="flex flex-col gap-1 text-sm">
        <label htmlFor="precio">
          Precio:
        </label>
        <input
          type="number"
          step={0.01}
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
