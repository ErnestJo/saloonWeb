import logo from './logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { connect } from 'react-redux'
import LoginPage from './views/Login'

function App() {
  return (
   <>
   <ToastContainer />
   <BrowserRouter>
    <Routes>
        <Route  path="/" element={<LoginPage/>} />
    </Routes>
   </BrowserRouter>
   </>
    

  );
}

const MapStateToProps = (state) => ({
  sharedState: state.SharedState,
})
export default connect(MapStateToProps)(App)
