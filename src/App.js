import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CatView from './pages/catview';
import Analyze from './pages/analyze';

export default function App() {
    return (
        <div className="">
            <Switch>
                <Route exact path="/" component={CatView} />
                <Route path="/analyze" component={Analyze} />
            </Switch>
        </div>
    );
}
