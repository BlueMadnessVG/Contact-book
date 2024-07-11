import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ShowIcon from "../../assets/icons/ShowIcon";
import HideIcon from "../../assets/icons/HideIcon";
import { useLoginStore } from "../../global/login.store";
import { fetchLogin, setApiToken } from "../../services/api.services";
import HappyIcon from "../../assets/icons/HappyIcon";

function Login() {
  const { userToken, setShowLogin, setUserToken } = useLoginStore(
    (state) => state
  );
  const [showPass, setShowPass] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    const result = await fetchLogin(loginForm);
    console.log(result);

    setApiToken(result.access_token);
    setUserToken(result.access_token);
    window.localStorage.setItem("token", result.access_token);

    setShowLogin(false);
  };

  return (
    <div className="absolute z-10 right-5 top-16 bg-zinc-700 w-72 h-auto shadow-lg p-3 rounded-md flex flex-col gap-4 ">
      {userToken == null ? (
        <>
          <TextField
            fullWidth
            label="User Name"
            variant="standard"
            name="username"
            value={loginForm?.username}
            onChange={handleInputChange}
          />
          <FormControl>
            <InputLabel htmlFor="password-label">Password</InputLabel>
            <Input
              id="password-label"
              fullWidth
              label="Password"
              variant="standard"
              name="password"
              type={showPass ? "text" : "password"}
              onChange={handleInputChange}
              endAdornment={
                <InputAdornment position="end">
                  <button
                    className="hover:text-violet-600"
                    onClick={handleShowPass}
                  >
                    {!showPass ? (
                      <ShowIcon style={" h-10 w-10"} />
                    ) : (
                      <HideIcon style={" h-10 w-10"} />
                    )}
                  </button>
                </InputAdornment>
              }
            />
          </FormControl>
          <div className="flex justify-end">
            <button
              className="flex bg-violet-800 p-1 px-2 rounded-md "
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center text-zinc-500">
          <HappyIcon style={"h-20 w-20"} />
          <h1 className="font-bold"> YOU ARE ALREADY LOGIN </h1>
        </div>
      )}
    </div>
  );
}

export default Login;
