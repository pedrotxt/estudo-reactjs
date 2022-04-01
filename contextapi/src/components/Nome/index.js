import { useContext } from "react";
import { UserContext } from "../../contexts/user";

function Nome() {
    // Instanciando
    // Passando no parametro qual contexto eu quero utilizar
    // Passando nas chaves é o que eu quero pegar desse contexto
    const { alunos, setAlunos } = useContext(UserContext);

    return (
      <div>
        <span style={{color: '#FF0000'}}>Bem vindo: {alunos}</span> <br/>
        <button onClick={ ()=> setAlunos('Luana') }>Troca nome</button>
       
      </div>
    );
  }
  
  export default Nome;
  