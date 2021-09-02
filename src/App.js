import "./App.css"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Plan from "./components/Plan"
import Materials from "./components/Materials"
import Tools from "./components/Tools"
import Obstacles from "./components/Obstacles"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import TipsTricks from "./components/TipsTricks"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/plan" exact component={Plan} />
          <Route path="/materials" exact component={Materials} />
          <Route path="/tools" exact component={Tools} />
          <Route path="/obstacles" exact component={Obstacles} />
          <Route path="/tipstricks" exact component={TipsTricks} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
