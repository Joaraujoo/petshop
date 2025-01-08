import styles from "./header.module.css"
import { FiShoppingCart } from "react-icons/fi" 
import { Link } from "react-router-dom"

import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"

export function Header(){
const { cartAmount } = useContext(CartContext)

    return(
        <header className={styles.header}>
            <div className={styles.container}>
                <Link className={styles.link} to="/">
                    <h1 className={styles.logo}>PetSHop</h1>
                </Link>

                {/*MOSTRA A QUANTIDADE DE ITENS NO CARRINHO*/}
                <Link className={styles.buyCart} to="/cart"><FiShoppingCart/> 
                    {cartAmount > 0 && (
                        <span className={styles.itensCart}>{cartAmount}</span>
                    )}
                </Link>
               
            </div>
        </header>
    )
}