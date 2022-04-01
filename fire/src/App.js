import firebase from "./firabaseConnection";
import './styles.css';
import { useState } from "react";

function App() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cargo, setCargo] = useState('');
  const [nome, setNome] = useState('');
  
  const [user, setUser] = useState({});

  // Cadastrar Usuario (Assim que Cadastra ele loga automaticamente pelo firebase)
  async function novoUsuario(){
    // await: faz essa requisição mas espera ela acabar para proseguir
    // função createUserWithEmailAndPassword() espera nos parametros um email e uma senha, então vou passar os useStates ja criados
    await firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then( async (value)=>{
        // quando ele cadastrou email e senha e deu tudo certo, ele vai cair dentro desse then e aqui vou acessar meu banco de dados para colocar o resto dos dados do usuario pedidos no cadastro
        await firebase.firestore().collection('users')
        .doc(value.user.uid)
        .set({
            nome: nome,
            cargo: cargo,
            status: true
        })
        .then(()=>{
            setNome('');
            setCargo('');
            setEmail('');
            setSenha('');
        })
    })

    .catch((error)=>{
      // Existem mais outros tipos de Error Codes
      if(error.code === 'auth/weak-password'){
        alert('Senha muito fraca')
      } else if(error.code === 'auth/email-already-in-use'){
        alert('Email já existente')
      }
    })
  }

  // Logout / Deslogar Usuario
  async function logout(){
    await firebase.auth().signOut();
    setUser({});
  }

  // Login
  async function login(){
      await firebase.auth().signInWithEmailAndPassword(email, senha)
      .then(async (value)=>{
          await firebase.firestore().collection('users')
          .doc(value.user.uid)
          .get()
          .then((snapshot)=>{
              setUser({
                  nome: snapshot.data().nome,
                  cargo: snapshot.data().cargo,
                  status: snapshot.data().status,
                  email: value.user.email
              });

          })
      })
      .catch((error)=> {
          console.log('Erro ao logar' + error)
      })
  }

  return (
    <div>
      <h1>ReactJS + Firebase :)</h1> <br/>

      <div className="container">

        <label>Nome:</label>
        <input type="text" value={nome} onChange={ (e)=> setNome(e.target.value) }/>

        <label>Cargo:</label>
        <input type="text" value={cargo} onChange={ (e)=> setCargo(e.target.value) }/>

        <label>Email:</label>
        <input type="text" value={email} onChange={ (e)=> setEmail(e.target.value) }/>

        <label>Senha:</label>
        <input type="password" value={senha} onChange={ (e)=> setSenha(e.target.value) }/> <br/>

        <button onClick={ login }>Fazer login</button>
        <button onClick={ novoUsuario }>Cadastrar</button>
        <button onClick={ logout }>Sair da conta</button> <br/>
      </div>

      <hr/> <br/>

      { Object.keys(user).length > 0 && (
          <div>
              <strong>Olá </strong> {user.nome} <br/>
              <strong>Cargo: </strong> {user.cargo} <br/>
              <strong>Email: </strong> {user.email} <br/>
              <strong>Status: </strong> {String(user.status) ? 'ATIVO' : 'DESATIVADO'}
          </div>
      )}
    
    </div>
  );
}

export default App;
