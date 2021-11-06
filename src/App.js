import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import AuthProvider from "./components/context/AuthProvider";

import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Login from "./components/Login/Login/Login";
import Orders from "./components/Orders/Orders";
import ManageAllOrders from "./components/ManageAllOrders/ManageAllOrders";
import MyOrders from "./components/MyOrders/MyOrders";
import AddService from "./components/AddService/AddService";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/orders/:serviceId">
              <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute path="/manage">
              <ManageAllOrders />
            </PrivateRoute>
            <PrivateRoute path="/myorder">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/addservice">
              <AddService></AddService>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
