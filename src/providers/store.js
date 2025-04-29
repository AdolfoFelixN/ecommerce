import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  total: 0,
  showCart: false,

  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.find((item) => item.ID === product.ID);

      if (existingProduct) {
        return {
          cart: state.cart.map((item) =>
            item.ID === product.ID
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + product.Precio,
        };
      } else {
        return {
          cart: [...state.cart, { ...product, quantity: 1 }],
          total: state.total + product.Precio,
        };
      }
    }),

  removeFromCart: (productId) =>
    set((state) => {
      const existingProduct = state.cart.find((item) => item.ID === productId);

      if (!existingProduct) return state;

      const updatedCart =
        existingProduct.quantity > 1
          ? state.cart.map((item) =>
              item.ID === productId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
          : state.cart.filter((item) => item.ID !== productId);

      return {
        cart: updatedCart,
        total: state.total - existingProduct.Precio,
      };
    }),

  clearCart: () => set({ cart: [], total: 0, showCart:false }),
  // Función para alternar visibilidad del carrito
  toggleShowCart: () => set((state) => ({ showCart: !state.showCart })),

  // Función para definir explícitamente si mostrar o no el carrito
  setShowCart: (value) => set({ showCart: value }),
}));
