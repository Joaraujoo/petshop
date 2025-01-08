import { useParams } from "react-router-dom"


export function Detail(){
const { id } = useParams();
    return(
        <div>
            <h1>DETALHES</h1>
        </div>
    )
}