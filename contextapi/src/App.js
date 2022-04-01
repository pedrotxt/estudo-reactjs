import { useState } from "react";
import Aluno from "./components/Aluno";
import UserProvider from "./contexts/user";

function App() {
 
  // Chamando o UserProvider em volta de todo mundo, ou seja todo mundo ali dentro é children dele
  return (
    <UserProvider>
    <div>
      <h1>Escola</h1>
      <hr/>
      <Aluno/>
    </div>
    </UserProvider>
  );
  
}

export default App;

  // Mais explicações sobre children

  //<Titulo> (Aqui dentro ele é um children) - Pode passar o que quiser aqui como se fosse o return de um componente normal </Titulo>
  // Recebo o children nos parametros na hora de criar o componente e recebo tudo que tem dentro desse children> exemplo> <Titulo><h1>Exemplo de children</h1></Titulo>
  // Depois de receber é so eu passar ele no return do nosso componente e ele vai ler o que tem dentro do children e vai replicar pro componente:
  // Exemplo:
  //  function Titulo({children}){
  //    return(
  //      <div> {children} </div>
  //    )
  //  }