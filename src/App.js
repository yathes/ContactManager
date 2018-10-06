import React, { Component } from "react";
import "./App.css";
import Contacts from "./components/contacts/contacts";
import About from "./components/pages/about";
import Addcontact from "./components/contacts/addcontact";
import Editcontact from "./components/contacts/editcontact";
import Header from "./components/layouts/header";
import { Provider } from "./context";
import Notfound from "./components/pages/notfound";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />

            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/about/:id" component={About} />
                <Route exact path="/contact/edit/:id" component={Editcontact} />

                <Route exact path="/contact/add" component={Addcontact} />
                <Route component={Notfound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
