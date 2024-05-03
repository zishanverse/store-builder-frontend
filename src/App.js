import { Route, Routes} from "react-router-dom";

import SignUp from './pages/SignUp/index';
import LogIn from './pages/LogIn/index';
import Plans from './pages/Plans/index';
import Admin from './pages/Admin/index';
import UserWebsite from './pages/UserWebsite/index';

const App = () => (
  <Routes>
    <Route exact path="/" Component={Admin} />
    <Route exact path="/login" Component={LogIn} />
    <Route exact path="/signup" Component={SignUp} />
    <Route exact path="/plans" Component={Plans} />
    <Route exact path="/user-website" Component={UserWebsite} />
  </Routes>
)


export default App;
