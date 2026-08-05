import { useContext } from "react";
import { CartContext } from "../Providers/CartProvider";

export const CartPage = () => {
    const { cartItems } = useContext(CartContext);

    return <div className="d-flex justify-content-center gap-2 flex-wrap">
        {
            cartItems.map(product => {
                return <div key={product.id} style={{width: "18rem"}} className="text-center shadow">
                    <img src={product.images[0]} alt={product.title} className="w-100"/>
                   <h1>{product.title}</h1>
                </div>
            })
        }
    </div>
}
