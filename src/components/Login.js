import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState, useContext } from 'react'
import axios from 'axios'
// const { toast } = require('tailwind-toast')
import Notify from '../helper/Notify'
import { connect } from 'react-redux'
import { InsertUserData } from '../action/request'

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

const LOGIN_URL = '/api/StaffManagement/login'

function Login({ sharedState, InsertUserData, ...prop }){
    
    const [loginState,setLoginState]=useState(fieldsState);

    const navigate = useNavigate()
    const userRef = useRef()
    const errRef = useRef()
  
    const [username, setUser] = useState('')
    const [password, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        setErrMsg('')
      }, [username, password])

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const fixedInputClass="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"

    const handleSubmit=(e)=>{
        e.preventDefault();
        authenticateUser();
    }

    //Handle Login API Integration here
    const authenticateUser = async () =>{
       
        try {
            const response = await axios.post(
              LOGIN_URL,
              JSON.stringify({ username, password }),
              {
                headers: { 'content-Type': 'application/json' },
                withCredentials: true,
              },
            )
            console.log(response.data.data[0])
        
            if (response.data.data.length > 0){
              InsertUserData(response.data.data[0])
              Notify.notifySuccess('You have logged in Successufuly')
              setUser('')
              setPwd('')
              setSuccess(true)
            }
            else {
                console.log("sinakitu hapa")  
                Notify.notifyErrorTopCenter('Sorry failed to login please check your login credentials')
                setUser('')
                setPwd('')
                setSuccess(false)
            }
          } catch (e) {}
    }

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        
        <div className="-space-y-px">
        
        <div className="my-5">
        <label htmlFor="username" className="sr-only">
         <h3>Username</h3>
        </label>
        <input className={fixedInputClass}  
              id="username"
              name="username"
              type="text"
              required
              ref={userRef}
              value={username}
              onChange={(e) => setUser(e.target.value)}
              placeholder="username"/> 
        </div>   

        <div className="my-5">
        <label htmlFor="password" className="sr-only">
         <h3>Password</h3>
        </label>
        <input className={fixedInputClass}  
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPwd(e.target.value)}
              required
              placeholder="Password"/> 
        </div>        
    </div>
    <FormExtra/>
    <FormAction handleSubmit={handleSubmit} text="Login"/>
 </form>
  )
}

const MapStateToProps = (state) => ({
  sharedState: state.SharedState,
})
export default connect(MapStateToProps, { InsertUserData })(Login)