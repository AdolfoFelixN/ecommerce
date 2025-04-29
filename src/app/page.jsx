"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

function Home() {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("")

  useEffect(() => {
    async function getProductos() {
      const { data } = await axios.get("http://localhost:3000/api/productos");
      setProductos(data);
    }
    getProductos();
  }, []);

  // Filtrar productos según la búsqueda (nombre o categoría)
  const productosFiltrados = productos.filter((producto) =>
    producto.NombreProducto.toLowerCase().includes(busqueda.toLowerCase()) ||
    producto.Categoria?.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="py-2 px-10">
      <div className="mt-1 mb-3 flex items-center justify-center w-full">
        <input type="text" name="search" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} id="search" placeholder="Busca un producto o categoría" className="p-2 border border-gray-300 rounded-sm w-[40%]"/>
      </div>
      <div className="flex gap-5">
        <div className="bg-white border border-gray-400 text-black rounded px-4 py-3 hover:bg-gray-300 text-center cursor-pointer">
          <p>Todos</p>
        </div>
        <div className="bg-white border border-gray-400 text-black rounded px-4 py-3 hover:bg-gray-300 text-center cursor-pointer">
          <p>Hogar</p>
        </div>
        <div className="bg-white border border-gray-400 text-black rounded px-4 py-3 hover:bg-gray-300 text-center cursor-pointer">
          <p>Ropa</p>
        </div>
        <div className="bg-white border border-gray-400 text-black rounded px-4 py-3 hover:bg-gray-300 text-center cursor-pointer">
          <p>Tecnología</p>
        </div>
      </div>
    <div className="grid grid-cols-5 justify-between gap-x-20 gap-y-5">
      {productosFiltrados.map((producto) => (
        <ProductCard key={producto.ID} producto={producto}/>
      ))}
    </div>
    </div>
  );
}

export default Home;
