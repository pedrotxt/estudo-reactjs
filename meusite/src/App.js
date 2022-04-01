import React from "react";


//const Bemvindo = (props) => {
//    return (
//        <div>
//            <h2>Bem Vindo(a) {props.nome}</h2>
//            <h3>Tenho: {props.idade} Anos</h3>
//        </div>
//    );
//}

const Equipe = (props) => {
    // Criando um componente Sobre para ficar responsavel sobre todas as informações da equipe, sem ter que precisar escrever todos os props um por um em cada pessoa da equipe quando for colocar na interface.

    // Criando um componente para as redes sociais da equipe.
    return (
        <div>
            <Sobre username={props.nome} cargo={props.cargo} idade={props.idade}/>

            <Social fb={props.facebook} linkedin={props.linkedin} ytb={props.youtube}/>
            <hr/>

        </div>
    );
}

const Sobre = (props) => {
    return (
        <div>
            <h2>Olá eu sou o(a) {props.username}</h2>
            <h3>Cargo: {props.cargo}</h3>
            <h3>Idade: {props.idade} anos.</h3>
        </div>
    );
}

const Social = (props) =>{
    return (
        <div>
            <a href={props.fb}>Facebook </a>
            <a href={props.linkedin}>Linkedin </a>
            <a href={props.ytb}>Youtube</a>
        </div>
    );
}

function App(){
    return (
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Equipe nome="Pedro" cargo="Programador" idade="20"
            facebook="https://www.facebook.com"/>
            <Equipe nome="Lucas" cargo="Desginer" idade="26"
            linkedin="https://www.linkedin.com/feed/"/>
            <Equipe nome="Jairo" cargo="Analista" idade="Um Misterio"
            facebook="https://www.facebook.com/friends" linkedin="https://www.linkedin.com/in/pedro-henrique-p/"
            youtube="https://www.youtube.com"/>
        </div>
    );
}

export default App;