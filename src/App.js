import {Routes,Route,Link} from "react-router-dom";
import Register from "./pages/Register";
import './App.css';

function App() {
  return (
    <>
      <Routes>
          <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </>
  );
}

export default App;
