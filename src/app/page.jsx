"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import { IoSearch } from "react-icons/io5";

function Home() {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");

  useEffect(() => {
    async function getProductos() {
      const { data } = await axios.get("http://localhost:3000/api/productos");
      setProductos(data);
    }
    getProductos();
  }, []);

  // Filtrar productos según búsqueda y categoría
  const productosFiltrados = productos.filter((producto) => {
    const coincideBusqueda =
      producto.NombreProducto.toLowerCase().includes(busqueda.toLowerCase()) ||
      producto.Categoria?.toLowerCase().includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoriaSeleccionada === "Todos" ||
      producto.Categoria === categoriaSeleccionada;

    return coincideBusqueda && coincideCategoria;
  });

  return (
    <div className="py-2 px-10">
      {/* Buscador */}
      <div className="mt-1 mb-3 flex items-center justify-center w-full">
        <div className="relative w-[40%]">
          <input
            type="text"
            name="search"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            id="search"
            placeholder="Busca un producto o categoría"
            className="p-2 pr-10 border border-gray-300 rounded-sm w-full"
          />
          <IoSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Categorías */}
      <div className="flex gap-5">
        {["Todos", "Hogar", "Ropa", "Tecnología"].map((cat) => (
          <div
            key={cat}
            onClick={() => setCategoriaSeleccionada(cat)}
            className={`border rounded px-3 py-1 text-center cursor-pointer ${
              categoriaSeleccionada === cat
                ? "bg-gray-300 text-black border-gray-500"
                : "bg-white text-black border-gray-400 hover:bg-gray-300"
            }`}
          >
            <p>{cat}</p>
          </div>
        ))}
      </div>

      {/* Productos */}
      <div className="grid grid-cols-5 justify-between gap-x-20 gap-y-5 mt-2">
        {productosFiltrados.map((producto) => (
          <ProductCard key={producto.ID} producto={producto} />
        ))}
      </div>
    </div>
  );
}

export default Home;
