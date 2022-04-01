import { useParams } from "react-router-dom"

export default function Produto(){
    // dentro do id, vai ter o numero que vamos passar na frente de /produtos/{id}
    const { id } = useParams();

    return(
        <header>
            <h2>Grade de produtos</h2><br/>

            <span>Produto selecionado: {id}</span>
            
        </header>
    )
}