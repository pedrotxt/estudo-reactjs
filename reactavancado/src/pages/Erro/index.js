import { Link } from "react-router-dom";

export default function Erro(){
    return(
        <div>
            <h1>Hum, parece que essa página não existe!</h1><br/>

            <spam>Você pode estar procurando:</spam> <br/>
            <Link to='/'>Home</Link> <br/>
            <Link to='/sobre'>Sobre</Link> <br/>
            <Link to='/contato'>Contatos</Link>
        </div>
    )
}