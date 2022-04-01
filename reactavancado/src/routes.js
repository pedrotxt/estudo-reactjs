// Switch: esse componente do react router dom vai fazer com que apenas uma unica página essa executa(apenas um componente seja chamado). Garantindo que so vai ser renderizado um componente por página
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// ele ja procura por /index.js por isso não preciso colocar aqui
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Erro from './pages/Erro';
import Produto from './pages/Produto';

import Header from './components/Header';

/*
<Route path="/">
  <Home/>
</Route>
*/

// exact vai fazer eu acessar aquela Route exatamente com endereço do site que eu passei no path, assim não dando divergencia com a minha Home aparecendo em tudo que tem '/' em dianta

// react-router-dom não atualiza a página
const Routes = ()=> {
    return(
        <BrowserRouter>
        <Header/>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sobre" component={Sobre} />
        <Route exact path="/contato" component={Contato} />
        <Route path="/produto/:id" component={Produto} />

        <Route path="*" component={Erro} />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;