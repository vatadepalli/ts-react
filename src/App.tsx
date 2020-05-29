import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeGuest from "./pages/HomeGuest";
import About from "./pages/About";
import Terms from "./pages/Terms";


const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact><HomeGuest/></Route>
        <Route path="/about-us"><About/></Route>
        <Route path="/terms"><Terms/></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
