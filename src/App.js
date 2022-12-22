import React from 'react'
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


const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
function App() {
  return (
   <>
   <ToastContainer />
   <BrowserRouter>
    <Routes>
        <Route  path="login" element={<LoginPage/>} />
        <Route  path="*" name="Home" element={<DefaultLayout />}/>
    </Routes>
   </BrowserRouter>
   </>
  );
}

const MapStateToProps = (state) => ({
  sharedState: state.SharedState,
})
export default connect(MapStateToProps)(App)
