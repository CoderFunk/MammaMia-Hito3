// import Home from './components/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// import Register from './pages/Register';
// import Login from './pages/Login';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Cart from './pages/Cart';


function App() {
  return (
    <>
      <NavBar />
      {/* <Login></Login> */}
      {/* <Register></Register> */}


      {/* <Home /> */}
      <Cart/>


      <Footer />
    </>
  )
}
export default App;