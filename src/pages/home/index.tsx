import { useEffect, useState, useContext } from "react"
import { api } from "../../services/api";
import { BsCartPlus } from "react-icons/bs";

import styles from "./home.module.css"
import { CartContext } from "../../contexts/CartContext";

import toast from "react-hot-toast";

export interface ProductProps{
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
}

export function Home(){

    const {addItemCart} = useContext(CartContext)
    const [products, setProducts] = useState<ProductProps[]>([])

    useEffect(() => {
        async function getProducts(){
            const response = await api.get("/products")
            setProducts(response.data)
        }

        getProducts();

    }, [])

    //ADICIONA O PRODUTO NO CARRINHO
    function handleAddCartItem(product: ProductProps){
        toast.success("Produto adicionado no carrinho" )
        addItemCart(product);
    }

    return(
        <main className={styles.main}>
            <div className={styles.container} >
                {products.map((product) => (
                     <section key={product.id} className={styles.productItens}>

                     <img className={styles.logoItens} src={product.cover} alt={product.title} />
 
                     <p className={styles.title}>{product.title}</p>
 
                     <div className={styles.priceAndCart}>

                         <strong className={styles.price}>{product.price.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                         })}</strong>

                         <button className={styles.buyCart} onClick={() => handleAddCartItem(product)}><BsCartPlus/></button>
                     </div>
 
                 </section>
                ))}

            </div>
        </main>
    )
}