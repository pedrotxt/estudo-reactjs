import React, { Component } from "react";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: '',
            email: '',
            senha: '',
            error: ''
        };

        this.cadastrar = this.cadastrar.bind(this);
    }

    cadastrar(e){
        // Descontruindo para não ficar muito grande fazendo um por um:
        const {nome, email, senha} = this.state;

        // Se for diferente de vazio, faça:
        if(nome !== '' && email !== '' && senha !== ''){
            alert(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha}`)
        } else{
            // Nosso error vem vazio, mas se caso o if falhar, colocamos no error essa mensagem e mandamos com um <p> no render para aparecer na página
            this.setState({error: 'Ops! Parece que está faltando algo!'})
        }

        // chamando um preventDefault no evento para não atualizar a pagina
        e.preventDefault();
    }

    // Nosso onSubmit funcionar com o type submit do button, podemos passar uma função anonima ou uma função existente no codigo
    render(){
        return(
            <div>
                <h1>Novo usuario</h1>
        
                {this.state.error && <p>{this.state.error}</p>}

                <form onSubmit={this.cadastrar}>
                    <label>Nome:</label>
                    <input type="text" value={this.state.nome} 
                    onChange={(e) => this.setState({nome: e.target.value})}/> <br/>

                    <label>Email: </label>
                    <input type="email" value={this.state.email}
                    onChange={(e) => this.setState({email: e.target.value})}/> <br/>

                    <label>Senha:</label>
                    <input type="password" value={this.state.senha}
                    onChange={(e) => this.setState({senha: e.target.value})}/> <br/>

                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        );
    }
}

export default App;