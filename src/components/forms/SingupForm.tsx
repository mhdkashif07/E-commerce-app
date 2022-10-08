import React, { ReactEventHandler, ReactHTMLElement, useContext, MouseEvent, useState } from "react";
// import { Link } from "react-router-dom";

import Checkbox from "@mui/material/Checkbox";
// import { Header } from "./Header";
import {  makeStyles, createStyles } from '@mui/styles';
import Link from "next/link";
import { SelectChangeEvent } from "@mui/material";
import PrimaryButton from "../buttons/PrimaryButton";
import { AuthContext } from "../../context/auth-context";
import { useRouter } from "next/router";

import { auth } from '../../utils/init-firebase'
import {
  createUserWithEmailAndPassword
} from 'firebase/auth'
import { useAuth } from "../../utils/utils";



const SingupForm = () => {
  const [email, setEmail] = useState<string | null>('')
  const [password, setPassword] = useState<string | null>('')
  

  //get auth context
  const { signup } = useAuth()

  const router = useRouter()

 
  // const [checked, setChecked] = React.useState(true);
  // const handleChange = (event) => {
  //     setChecked(event.target.checked);
  // };

  const handleMouseDownPassword = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  };

  //handle sign up
  const handleSignup = async(e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    try {
        const response = await signup(email, password);
        if(response.user != null){
            router.push("/login")
        }
        
    } catch (error) {
        console.log(error); 
    }
  }


  return (
    <div className="login__section">
      {/* <div className="navbar__shadow color-black">
        <Header />
      </div> */}
      <div className="container">
        <div className="login_container">
          {/* <Link href="/home"><h1>This is login page</h1></Link> */}
          <div className="center_form">
            <div className="login_title">
              {/* <h3>Login</h3>
              <p>
                Imported JSX component Choose_us must be in PascalCase or
                SCREAMING_SNAKE_CASE
              </p> */}
            </div>
            <div>
              <form className="login_form">
              <div className="form__container">
               <div className="input__field">
                  <input type="email" placeholder="Email"  onChange={(e) => setEmail(e.target.value)} required  />
                </div>
                <div className="input__field">
                  <input type="text" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} required  />
                </div>
               </div>

                <div style={{ marginTop: "15px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div>
                  <button onClick={(e) => handleSignup(e)} ><PrimaryButton text="Sign Up" /></button>
                  </div>
                 <h3 style={{ margin: "7px 0 "}}>Or</h3>
                 <div>
                 <Link href="/login"><button><PrimaryButton text="Login" /></button></Link>
                 </div>
                 </div>

                <div className="checkbox_container">
                  {/* <div className="checkbox">
                    <Checkbox
                      inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                    />
                    <p>Keep me signed in </p>
                  </div>
                  <div className="forget_container">
                    <Link href="">Forgot password?</Link>
                  </div> */}
                </div>

                <div className="login_using_container">
                  <div className="login_facebook">
                    <a href="">facebook</a>
                  </div>
                  <div className="login_gmail">
                    <a href="">gmail</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default SingupForm;