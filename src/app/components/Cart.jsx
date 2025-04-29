import { useCartStore } from "@/providers/store";
import ProductCartCard from "./ProductCartCard";

function Cart() {
  const { cart, total, clearCart } = useCartStore();

  return (
    <div className="absolute right-0 top-20 bg-white text-black shadow-xl rounded py-4 px-2 flex flex-col gap-2">
      {cart.map((producto) => (
        <ProductCartCard key={producto.ID} producto={producto} />
      ))}
      <div className="flex gap-3 justify-end items-center">
      <p>Total: </p>
      <span>{total.toFixed(2)}</span>
      
      </div>
      <button onClick={() => clearCart()} className="bg-red-500 p-2 text-white hover:bg-red-600 cursor-pointer rounded-xs">Vaciar carrito</button>
    </div>
  );
}

export default Cart;
