import { useCartStore } from "@/providers/store";
import ProductCartCard from "./ProductCartCard";
import { MdDelete, MdOutlineRemoveShoppingCart } from "react-icons/md";

function Cart() {
  const { cart, total, clearCart } = useCartStore();

  if(cart.length <= 0){
    return(
        <div className="absolute right-2 top-17 bg-[#292929] text-white shadow-xl rounded py-2 px-5 flex gap-2">
            <span className="text-sm">Carrito vacío</span>
            <MdOutlineRemoveShoppingCart fontSize={18}/>
        </div>
    )
  }

  return (
    <div className="absolute right-2 top-17 bg-[#292929] text-white shadow-xl rounded py-4 px-2 flex flex-col gap-2">
      {cart.map((producto) => (
        <ProductCartCard key={producto.ID} producto={producto} />
      ))}
      <div className="flex gap-3 justify-end items-center">
        <p>Total:</p>
        <span>
          {total.toLocaleString("es-MX", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      </div>
      <button
        onClick={() => clearCart()}
        className="flex items-center justify-center  gap-2 bg-red-500 p-2 text-white hover:bg-red-600 cursor-pointer rounded-xs"
      >
        Vaciar carrito <MdDelete fontSize={18}/>
      </button>
    </div>
  );
}

export default Cart;
