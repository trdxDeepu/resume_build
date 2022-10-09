import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import './App.css';

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Profile from './Pages/Profile'
import Templates from "./Pages/Templates/Temp";
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>} />
          <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>} />
          <Route path="/templates/:id" element={<ProtectedRoute><Templates/></ProtectedRoute>} />

          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          
        </Routes>
      </Router>

      </div>
  );
}

export default App;

export function ProtectedRoute(props) {
  if (localStorage.getItem("resume-build-user")) 
  {
    return props.children;
  } 
  
  else {
    return <Navigate to="/login"/>;
  }
}
