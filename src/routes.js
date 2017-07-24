import React from 'react';
import { 
	BrowserRouter as Router,
 	Route
} from 'react-router-dom';

import Main from './Main';
import Autorization from './Autorization';
import Registration from './Registration';

const Routes = (props) => (
	<Router {...props}>
	   <div>
		<Route exact path="/" component={Main} />
		<Route path="/autorization" component={Autorization}/>
		<Route path="/registration" component={Registration}/>
	   </div>	
	</Router>
);

export default Routes;