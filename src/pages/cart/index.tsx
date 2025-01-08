import styles from "./cart.module.css"
import { CartContext } from "../../contexts/CartContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

export function Cart(){

    const { cart, total, addItemCart, removeItemCart } = useContext(CartContext)

    return(
        <main className={styles.main}>
            <h1 className={styles.titleMain}>Meu Carrinho</h1>
            <div className={styles.container}>

                {cart.length === 0 &&(
                    <div className={styles.CartEmpty}>
                        <p>Ops seu carrinho esta vazio...</p>
                        <Link to="/" className={styles.link}>Acessar produtos</Link>
                    </div>

                )}

                {cart.map((item) => (
                    <section key={item.id} className={styles.productItens}>
                    <img className={styles.logo} src={item.cover} alt={item.title} />

                    <strong>{item.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    })}</strong>

                    <div className={styles.button}>
                        <button className={styles.subButton} onClick={() => removeItemCart(item)}>-</button>
                        {item.amount}
                        <button className={styles.subButton} onClick={() => addItemCart(item)}>+</button>
                    </div>
                    <strong>SubTotal: {item.total.toLocaleString("pr-BR", {
                        style: "currency",
                        currency: "BRL",
                    })}</strong>
                </section>
                ))}

                {cart.length !== 0 && <p className={styles.total}>Total: {total}</p>}
            </div>
        </main>
    )
}