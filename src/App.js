

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './pages/auth/Login'
import ForgotPassword from "./pages/auth/ForgotPassword";
import Register from "./pages/auth/Register";

import ChildrenAccount from "./pages/childrenAccount/ChildrenAccount";
import EmailUpdateHistory from "./pages/emailUpdateHistory/EmailUpdateHistory";
import Payments from "./pages/payments/Payments";
import ParentTools from "./pages/parentTools/ParentTools";
import NeedHelp from "./pages/needhelp/NeedHelp";
import CreateChildProfile from "./pages/createChildProfile/CreateChildProfile";
import FirstTimeLogin from "./pages/firstTimeLogin/FirstTimeLogin";
import MyProfile from "./pages/myProfile/MyProfile";
import ChildInfo from "./pages/childInfo/ChildInfo";
import MoreInfo from "./pages/moreInfo/MoreInfo";

import EditProfile from "./pages/editProfile/EditProfile";
import ParentToolMoreInfo from "./pages/parentToolMoreinfo/ParentToolMoreInfo";
import EmergencyContact from "./pages/emergencyContactInfo/EmergencyContact";

function App() {
  return (
    <Router>
      <div>
        <Router>
          <Route exact path='/' component={Login} />
          <Route exact path='/forgot' component={ForgotPassword} />
          <Route exact path='/register' component={Register} />
        </Router>
        <Switch>
          <Route exact path="/" />

          <Route path="/children" component={ChildrenAccount} />
          <Route path="/emailupdate" component={EmailUpdateHistory} />
          <Route path="/payments" component={Payments} />
          <Route path="/parenttools" component={ParentTools} />
          <Route path="/help" component={NeedHelp} />
          <Route path="/createprofile" component={CreateChildProfile} />
          <Route path="/firsttimelogin" component={FirstTimeLogin} />
          <Route path="/myprofile" component={MyProfile} />
          <Route path="/childinfo" component={ChildInfo} />
          <Route path="/moreinfo" component={MoreInfo} />
          <Route path="/editprofile" component={EditProfile} />
          <Route path="/toolmoreinfo" component={ParentToolMoreInfo} />
          <Route path="/emergencyInfo" component={EmergencyContact} />
        </Switch>
      </div>
    </Router >
  );
}

export default App;
