import React, { MouseEvent, useContext, useState, FormEvent } from "react";
import Checkbox from "@mui/material/Checkbox";
// import { Header } from "./Header";
import { makeStyles, createStyles } from '@mui/styles';
import Link from "next/link";
import { SelectChangeEvent } from "@mui/material";
import PrimaryButton from "../buttons/PrimaryButton";
import { AuthContext } from "../../context/auth-context";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db, firestoreDb } from "../../utils/init-firebase";
import { useAppDispatch } from "../../app/hook";
import { useAuth } from "../../utils/utils";
import { isError, isSuccess } from "../../app/slices/loadingSlice";
import { doc, setDoc } from "firebase/firestore";



const LoginForm = () => {
  const [email, setEmail] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)
  //get auth context
  const { login } = useAuth()


  const dispatch = useAppDispatch()
  const router = useRouter()

  // const [checked, setChecked] = React.useState(true);
  // const handleChange = (event) => {
  //     setChecked(event.target.checked);
  // };

  //handle login
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //login with firebase
    try {
      const response = await login(email, password)
      const user: any = response.user
      console.log(user);

      if (response.user != null) {
        sessionStorage.setItem("accessToken", user.accessToken)
        localStorage.setItem("isAuthenticated", JSON.stringify(true))
        dispatch(isSuccess("Successfully Login"))
        sessionStorage.setItem("userUID", response.user.uid)
        router.push("/dashboard")
      }

    } catch (error: any) {
      console.log(error);
      dispatch(isError(error.code))
    }

  }


  return (
    <div className="login__section">
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
              <form onSubmit={handleLogin} className="login_form">
                <div className="form__container">
                  <div className="input__field">
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div className="input__field">
                    <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                  </div>
                </div>

                <div style={{ margin: "5px 0 0 0", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div>
                    <button><PrimaryButton text="Login" /></button>
                  </div>
                  <h3 style={{ margin: "2px 0 " }}>Or</h3>
                  <div>
                    <Link href="/signup"><button><PrimaryButton text="Sign Up" /></button></Link>
                  </div>
                </div>

                <div className="checkbox_container">
                  <div className="checkbox">
                    <Checkbox
                      inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                    />
                    <p>Keep me signed in </p>
                  </div>
                  <div className="forget_container">
                    <Link href="">Forgot password?</Link>
                  </div>
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


export default LoginForm;