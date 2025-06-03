import {Routes as Switch, Route} from 'react-router-dom';

import Home from './pages/Home/Home.tsx';
import Country from './pages/Country/Country.tsx';

const Routes = () => (
    <Switch>
        <Route path="/" Component={Home}/>
        <Route path="/country/:name" Component={Country} />
    </Switch>
)

export default Routes;