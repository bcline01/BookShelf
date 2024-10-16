import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
// import auth from "./utils/auth"; 
// import Header from './components/Header';

function App() {


  return (
    <div>
       
      
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
