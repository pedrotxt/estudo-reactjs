import React, { useState, useEffect, useMemo, useCallback } from "react";
// useEffect: Basicamente o useEffect que vai substituir todos os ciclos de vida que tinhamos nos componentes em classes, por exemplo componentDidMouth e etc...

// Antes dos hooks tinha que transformar esse componente App em uma class component, mas agora podemos criar atraves de uma função que tenha estados, então não vou precisar mais dar aquele constructor ou uma state = {} para adicionar nossas states.
function App(){

  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React Hooks'
  ]);

  const [input, setInput] = useState('');

  // Quando carrega nosso componente na tela ele executa
  // Quando a gente deixa o 2 parametro vazio ele vai executar automaticamente a função quando montar na nossa tela o componente
  useEffect(() =>{
    // Ele vai pegar tudo que está no nosso localStorage 'tarefas'.
    const tarefasStorage = localStorage.getItem('tarefas');

    // depois vai salvar no nosso setTarefas tudo que está no nosso localStorage 'tarefas', fazendo com que tudo que estava no localStorage seja salvo
    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage));
    }

  }, []);

  // Ele vai receber 2 parametros, 1 é a propria função que vai ser executada e o segundo é a state que ele fica monitorando, por exemplo toda vez que o state tarefas sofrer alterações ele vai executar a 1 função ali dentro.
  useEffect(()=> {
    // setar no nosso local Storage todo nosso array que tiver dentro de tarefas
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas])

  // useMemo = 1 parametro é uma função, 2 parametro é um array passando o state
  // ou seja toda vez que alterar o state tarefas, chamar a função tarefas.length
  // caso eu passasse tarefas.length no return, ele iria executar toda vez essa função, porém com o useMemo ela so vai ser executada quando nosso state tarefas sofrer alteração
  const totalTarefas = useMemo(() => tarefas.length, [tarefas]);

  // o useCallback funciona mais ou menos como o Memo, mas ao invés dele retorna um valor unico por exemplo, ele retorna uma função.
  // ele serve para nossa função handleAdd também, que se apagava e chamava toda vez que era executada/ clickada
  /*
  function handleAdd(){
    // o ...tarefas vai servir para pegar tudo que está no meu set tarefas
    setTarefas([...tarefas, input])
    setInput('')
  }
  */
 // vai continuar funcionando da mesma forma, porém, essa função handleAdd não vai ser chamada ou recriada toda vez que a gente digita alguma coisa, apenas quando precisar, quando for alterada essas states que estão sendo atualizadas aqui [input, tarefas]
    const handleAdd = useCallback(() =>{
      // o ...tarefas vai servir para pegar tudo que está no meu set tarefas
    setTarefas([...tarefas, input])
    setInput('')
    }, [input, tarefas]);

  return(
    <div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <br/>
      <strong>Você tem {tarefas.length} tarefas!</strong>
      <br/>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      <button onClick={handleAdd}>adicionar</button>
    </div>
  );
}

export default App;