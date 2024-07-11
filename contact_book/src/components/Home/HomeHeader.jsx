import { Avatar, Tooltip } from "@mui/material";
import React, { useEffect } from "react";
import UserIcon from "../../assets/icons/UserIcon";
import Login from "../Login/Login";
import { useLoginStore } from "../../global/login.store";
import { setApiToken } from "../../services/api.services";

function HomeHeader() {
  const { showLogin, setShowLogin, setUserToken } = useLoginStore(
    (state) => state
  );

  const handleLogin = () => {
    setShowLogin(!showLogin);
  };

  useEffect(() => {
    const StorageToken = window.localStorage.getItem("token");

    if (StorageToken) {
      setUserToken(StorageToken);
      setApiToken(StorageToken);
    }
  }, []);

  return (
    <div className="flex justify-end pt-2 pr-2 text-white">
      <Tooltip title="Login" enterDelay={100} leaveDelay={150} arrow>
        <button
          className="bg-violet-700/70 rounded-full hover:scale-110 transition hover:bg-violet-700"
          onClick={handleLogin}
        >
          <UserIcon style={"w-11 h-11  pt-1 "} />
        </button>
      </Tooltip>

      {showLogin && <Login />}
    </div>
  );
}

export default HomeHeader;
