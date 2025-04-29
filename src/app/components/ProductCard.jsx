import { useCartStore } from "@/providers/store";

function ProductCard({ producto }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div
      key={producto.ID}
      className="flex flex-col items-center gap-2 bg-[#2A2A2A] w-48 rounded p-2 shadow-md"
    >
      <img
        src={producto.LinkIMG}
        alt={producto.Descripcion}
        className="object-contain w-full"
      />
      <div className="bg-[#2A2A2A] w-full py-0 px-2 gap-2 text-[#E0E0E0]">
        <p className="font-semibold">{producto.NombreProducto}</p>
        <span className="font-semibold text-[#FF6F00]">${producto.Precio}</span>
        <p className="text-sm text-[#B0B0B0]">
          Hasta {producto.MesesSI} meses sin intereses
        </p>
      </div>
      <button
        onClick={() => addToCart(producto)}
        className="w-full bg-[#FF6F00] text-white px-3 py-2 rounded hover:brightness-110 cursor-pointer"
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductCard;
