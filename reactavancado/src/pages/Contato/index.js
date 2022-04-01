import { Link } from "react-router-dom";

export default function Contato(){
    return(
        <div>
            <h1>Contatos</h1>
            <span>email: pehhp2021@gmail.com</span><br/>
            <Link to='/'>Home</Link> <br/>
            <Link to='/sobre'>Sobre</Link>
        </div>
    )
}