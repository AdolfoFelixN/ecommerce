function ProductCard({ producto }) {
  return (
    <div
      className="flex flex-col items-center gap-2 bg-white w-48 rounded"
    >
      <img
        src={producto.LinkIMG}
        alt={producto.Descripcion}
        className="object-contain w-full"
      />
      <div className="bg-white w-full py-0 px-2 gap-2">
        <p className="font-semibold">{producto.NombreProducto}</p>
        <span className="font-semibold text-[#FFC857]">${producto.Precio}</span>
        <p className="text-sm">Hasta {producto.MesesSI} meses sin intereses</p>
      </div>
      <button className="w-full bg-blue-500 text-white px-3 py-2 rounded cursor-pointer hover:bg-blue-600">
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductCard;
