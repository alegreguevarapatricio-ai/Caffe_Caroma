import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product, quantity = 1, variant = null) => {
        set((state) => {
          const existingIndex = state.items.findIndex(
            item => item.id === product.id && item.variant === variant
          )
          
          if (existingIndex >= 0) {
            const newItems = [...state.items]
            newItems[existingIndex].quantity += quantity
            return { items: newItems }
          }
          
          return {
            items: [...state.items, {
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
              quantity,
              variant
            }]
          }
        })
      },
      
      removeItem: (id, variant = null) => {
        set((state) => ({
          items: state.items.filter(
            item => !(item.id === id && item.variant === variant)
          )
        }))
      },
      
      updateQuantity: (id, quantity, variant = null) => {
        if (quantity < 1) return
        set((state) => ({
          items: state.items.map(item =>
            item.id === id && item.variant === variant
              ? { ...item, quantity }
              : item
          )
        }))
      },
      
      clearCart: () => set({ items: [] }),
      
      getTotal: () => {
        const state = get()
        return state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
      },
      
      getItemCount: () => {
        const state = get()
        return state.items.reduce((sum, item) => sum + item.quantity, 0)
      }
    }),
    {
      name: 'karoma-cart'
    }
  )
)

export default useCartStore