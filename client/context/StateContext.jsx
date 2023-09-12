'use client'

import React, { createContext, useContext, useState, useEffect } from "react";

const Context = createContext()
let foundProduct;

export const StateContext = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [showCart, setShowCart] = useState(false)
    const [totalQuantities, setTotalQuantities] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const onRemove = (product) =>{
        foundProduct = cartItems.find(item => item.id === product.id)
        const updatedCart = cartItems.filter(item => item.id !== product.id)

        
        setTotalQuantities((prevTotalQuanties) => prevTotalQuanties - foundProduct.quantity)
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * product.quantity)
        setCartItems(updatedCart)
    }   
    const onAdd = (product,quantity) => {
        const isInCart = cartItems.find((item) => item.id == product.id)
        setTotalQuantities((prevTotalQuanties) => prevTotalQuanties + quantity)
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price)
        
        if (isInCart) {
            const updatedCart = cartItems.map((item) =>{
                if (item.id === product.id){
                    return {
                        ...item,
                        quantity: item.quantity + quantity
                    }
                } 
                else{
                    return {...item}
                }
            })
            setCartItems(updatedCart)
            // return;
        }else{
            product.quantity = quantity
            setCartItems([...cartItems,{...product}])
        }
    }
    return (
        <Context.Provider
            value={{
                onAdd,
                onRemove,
                cartItems,
                showCart,
                totalPrice,
                setTotalPrice,
                setShowCart,
                totalQuantities,
                setTotalQuantities
            }}
        >
            {children}
        </Context.Provider>
    )
}
export const useStateContext = () => useContext(Context)