import { useState, useContext, createContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [carts, setCarts] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(carts));
    }, [carts]);

    const addToCart = (product) => {
        setCarts((prev) => {
            const existingProduct = prev.find((item) => item.id === product.id);
            if (existingProduct) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prev, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (product) => {
        setCarts((prev) => 
            prev.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity - 1 } 
                    : item
            ).filter((item) => item.quantity > 0)
        );
    };
    
    const removeFromCartFully = (product) => {
        setCarts((prev) => prev.filter((item) => item.id !== product.id));
    };

    const totalAmount = carts.reduce((acc, item) => acc + item.discountprice * item.quantity, 0);

    const cartValues = {
        carts,
        addToCart,
        removeFromCart,
        totalAmount,
        removeFromCartFully,
    };

    return <CartContext.Provider value={cartValues}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCartContext must be used within a CartProvider");
    }
    return context;
};
