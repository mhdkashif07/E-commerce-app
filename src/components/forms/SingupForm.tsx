import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import clsx from "clsx";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";
// import { Header } from "./Header";
import {  makeStyles, createStyles } from '@mui/styles';
import Link from "next/link";
import { SelectChangeEvent } from "@mui/material";
import PrimaryButton from "../buttons/PrimaryButton";
import { AuthContext } from "../../context/auth-context";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme: { spacing: (arg0: number) => any; }) => ({
  root: {
    "& .MuiInputBase-root": {
      border_radius: "-1px",
      padding: "0px 65px",
      borderRadius: "50px",
      marginBottom: "15px",
    },
  },

  root_password: {
    "& .MuiInputBase-root": {
      border_radius: "-1px",
      padding: "0px 50px",
      borderRadius: "50px",
    },
  },

  MuiOutlinedInput_input: {
    padding: "18.5px 60px",
  },
  MuiOutlinedInput_root: {
    border_radius: "-1px",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
}));

interface Styles {
    useStyles: () => never
}

const SingupForm = () => {
  //get auth context
  const authContext = useContext(AuthContext);

  const router = useRouter()

  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  // const [checked, setChecked] = React.useState(true);
  // const handleChange = (event) => {
  //     setChecked(event.target.checked);
  // };

  const handleChange = (prop: string) => (event: SelectChangeEvent<{ value: string[] | unknown }>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  };

  //handle login
  const handleLogin = () => {
    console.log("Login");
    console.log(authContext.isUserAuthenticated());
    // authContext.setAuthState("alskdjf;akdsjfl;kasjdf")
    
     sessionStorage.setItem("siteJWT", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjMwZTg4OGVmYzc1NDE3ZGQyOGFkNyIsImlhdCI6MTY2MjM3MDI5NCwiZXhwIjoxNjcwMTQ2Mjk0fQ.y7xVab6ROnrl3a8m6MV_ym1qbzvID_UDXrE_dx7_Lj4" )
     localStorage.setItem("isAuthenticated", JSON.stringify(true))
     router.push("/dashboard")
    
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
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  className={classes.root}
                />
                <FormControl
                  className={classes.root_password}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={() => handleChange("password")}
                    // fullWidth={true}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                   
                  />
                </FormControl>

                <div style={{ marginTop: "15px" }}>
                  <Link href="/dashboard"><button onClick={() => handleLogin()} ><PrimaryButton text="Sign Up" /></button></Link>
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