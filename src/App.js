import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import './ElementsStyles.css';
import Footer from './components/widgets/Footer/Footer';
import Navigation from './components/widgets/Navigation/Navigation';
import Authorization from './views/Authorization/Authorization';
import Gallery from './views/Gallery/Gallery';
import Homepage from './views/Homepage/Homepage';
import Inbox from './views/Inbox/Inbox';
import UserProfile from './views/UserProfile/UserProfile';
import UserSettings from './views/UserSettings/UserSettings';
import QuickChat from './components/widgets/QuickChat/QuickChat';

const App = () => {

  const logedIn = true;

  return (
    <Router>
      <div className="App">
          <header>
            <Navigation />
          </header>

          <div className="page-content">
              <Switch>
                <Route path="/" exact>

                  <Homepage />
                </Route>
                <Route path="/authorization">
                  <Authorization />
                </Route>
                <Route path="/user-profile">
                  <UserProfile />
                </Route>
                <Route path="/gallery">
                  <Gallery />
                </Route>
                <Route path="/inbox">
                  <Inbox />
                </Route>
                <Route path="/settings">
                  <UserSettings />
                </Route>
              </Switch>

              <QuickChat />
          </div>

          <Footer />
      </div>
    </Router>
  );
}

export default App;
