import React from "react";
import { BrowserRouter as Router, route, Switch} from "react-router-dom";
import { navigation, aboutme, experience, home, engineeringpjkts, NavigationBar} from "./pages";

function App() {
    return( 
        <div className="App">
            <Router>
                <NavigationBar />
                <Switch>
                    <Route path="/" exact component={() => <home />}/>
                    <Route path="/aboutme" exact component={() => <aboutme />}/>
                    <Route path="/experience" exact component={() => <experience />} />
                    <Route path="engineeringpjkts" exact component={() => <engineeringpjkts />} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;