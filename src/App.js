import { Route, Routes} from "react-router-dom";

import SignUp from './pages/SignUp/index';
import LogIn from './pages/LogIn/index';
import Plans from './pages/Plans/index';
import Admin from './pages/Admin/index';
import UserWebsite from './pages/UserWebsite/index';

const App = () => (
  <Routes>
    <Route exact path="/" element={<Admin />} />
    <Route exact path="/login" element={<LogIn />} />
    <Route exact path="/signup" element={<SignUp />} />
    <Route exact path="/plans" element={<Plans />} />
    <Route exact path="/user/:id" element={<UserWebsite />} />
  </Routes>
)


export default App;
