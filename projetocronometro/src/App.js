import React, { Component } from "react";
import './style.css'

class App extends Component {
    
    constructor(props){
        super(props);
        this.state={
            numero: 0,
            botao: 'VAI' 
        };
        this.timer = null;
        this.vai = this.vai.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    vai(){
        let state = this.state;
        // if - se o timer for diferente de null, ou seja, se tiver valor dentro desse timer, execute
        if(this.timer !== null){
            // pausar o timer
            clearInterval(this.timer);
            // setando o timer como null para cair no else e ele despausar o timer
            this.timer = null;
            state.botao = 'VAI'
        } else {
            // else - se o timer for null ele vai cair no else
            this.timer = setInterval(() => {
                state.numero += 0.1;
                this.setState(state);
            },100);
            state.botao = 'PAUSAR'
        };

        this.setState(state);
    };

    limpar(){
        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
        };
        let state = this.state;
        state.numero = 0;
        state.botao = 'VAI';
        this.setState(state);
    };
    render(){
        return(
            <div className="container">
                <img src={require('./assets/cronometro.png')} className="img"/>
                <a className="timer">{this.state.numero.toFixed(1)}</a>

                <div className="areaBtn">
                    <a className="botao" onClick={this.vai}>{this.state.botao}</a>
                    <a className="botao" onClick={this.limpar}>LIMPAR</a>
                </div>
            </div>
        );
    }
}

export default App;