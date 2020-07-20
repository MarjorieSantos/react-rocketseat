import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Product from './pages/products/product'
import Main from './pages/main/index'


//BrowserRouter - definir que as rotas serão utilizadas através de um browser
//Switch - vai permitir que apenas uma rota seja chamada ao memso tempo
// podemos assim fazer com que dois componentes separados sejam exibidos ao mesmo tempo quando uma rota for acessada
//Route

//exact = só vai chamar a rota do /, quando não tiver nada após ela.


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/product/:id' component={Product} />
        </Switch>
    </BrowserRouter>
);

export default Routes;