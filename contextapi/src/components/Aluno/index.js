import Nome from "../Nome";

import { UserContext } from "../../contexts/user";
import { useContext } from "react";

    function Aluno() {
      const { alunos, qtdAlunos } = useContext(UserContext);

    return (
      <div>
        <h2>Component Alunos</h2>

        <spam>Nome do aluno online: </spam> 
        <strong>{alunos}</strong> <br/>

        <spam>Quantidade total de alunos: </spam> 
        <strong>{qtdAlunos}</strong> <br/> <br/>
        <Nome />
      </div>
    );
  }
  
  export default Aluno;