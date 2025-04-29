"use client";
import { useCartStore } from "@/providers/store";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";

function ProductCartCard({ producto }) {
  const { removeFromCart, cart, addToCart } = useCartStore();

  const productoEnCarrito = cart.find((item) => item.ID === producto.ID);
  const cantidad = productoEnCarrito?.quantity || 0;

  return (
    <div key={producto.ID} className="flex items-center shadow-md p-2 gap-3">
      {/* Imagen */}
      <img
        src={producto.LinkIMG}
        alt={producto.Descripcion}
        className="object-contain w-14 h-14 rounded"
      />

      {/* Info Producto + Cantidad y Botones */}
      <div className="flex justify-between items-center w-full gap-5">
        {/* Nombre y Precio */}
        <div className="flex flex-col">
          <p className="font-semibold">{producto.NombreProducto}</p>
          <p className="text-gray-400 text-sm">
            $
            {(producto.Precio * cantidad).toLocaleString("es-MX", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>

        {/* Controles de cantidad */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => removeFromCart(producto.ID)}
            className="bg-green-500 p-2 rounded text-white font-semibold hover:bg-green-600 cursor-pointer"
          >
            <RiSubtractLine />
          </button>

          <div className="text-center">
            <p className="text-xs">Cantidad</p>
            <span className="font-bold">{cantidad}</span>
          </div>

          <button
            onClick={() => addToCart(producto)}
            className="bg-green-500 p-2 rounded text-white font-semibold hover:bg-green-600 cursor-pointer"
          >
            <IoMdAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCartCard;
