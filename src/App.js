import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
// import About from './pages/About';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Product from './pages/Product';



const App = () => {
	return (

		<>
			<Router>
					<Navigation/>
				<Switch>
					<Route path ="/" component={Home} exact></Route>
					{/* <Route path ="/about" component={About}></Route> */}
					<Route path ="/products" component={Product}></Route>
					<Route path ="/cart" component={Cart}></Route>
				</Switch>
			</Router>
		</>

	);
}

export default App;

