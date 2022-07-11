import React, { useState } from "react";



function ItemCount() {
    const [count, setCount] = useState(9);
    function sumar() { setCount(count + 1) };
    function restar() { setCount(count - 1) };
    return (
        <div>
            <button onClick={restar}>-</button>
            <span>{count}</span>
            <button onClick={sumar}>+</button>
            <button>Agregar al carrito</button>
        </div>
    );
}
export default ItemCount;