"use client";
import { useCartStore } from "@/providers/store";

function ProductCartCard({ producto }) {
  const { removeFromCart, cart, addToCart } = useCartStore();

  const productoEnCarrito = cart.find(item => item.ID === producto.ID);
  const cantidad = productoEnCarrito?.quantity || 0;

  return (
    <div key={producto.ID} className="flex items-center shadow-md p-1">
      <img
        src={producto.LinkIMG}
        alt={producto.Descripcion}
        className="object-contain w-12 h-12"
      />
      <div className="flex justify-between w-full items-center">
        <p>{producto.NombreProducto}</p>
        <div className="flex items-center gap-4">
          <p>$ {producto.Precio * cantidad}</p>
          
          <button
            onClick={() => removeFromCart(producto.ID)}
            className="bg-green-500 p-2 rounded text-white font-semibold hover:bg-green-600 cursor-pointer"
          >
            -
          </button>
          <div className="text-center">
            <p>Cantidad</p>
            <span>{cantidad}</span>
          </div>
          <button
            onClick={() => addToCart(producto)}
            className="bg-green-500 p-2 rounded text-white font-semibold hover:bg-green-600 cursor-pointer"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCartCard;
