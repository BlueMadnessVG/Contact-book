import { Avatar } from "@mui/material";
import React from "react";
import { useContactStore } from "../../../global/contact.store";

function SideMenuCard({ info }) {
  const { address, setInfo, setPhones, setAddress, setId } = useContactStore(
    (state) => state
  );

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name, lastName) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${lastName.split(" ")[0][0]}`,
    };
  }

  const handleClick = () => {
    console.log(info);
    if (info?.name != "New") {
      setInfo({
        name: info?.name,
        lastName: info?.lastName,
        email: info?.email,
      });
      setPhones(info?.phone);
      setAddress(info?.address);
      setId(info.id);
    } else {
      console.log(info);
      setInfo({
        name: "",
        lastName: "",
        email: "",
      });
      setPhones([]);
      setAddress([]);
      console.log(address);
    }
  };

  return (
    <button
      className="flex flex-row gap-2 bg-zinc-700 w-full p-2 mt-2 rounded-sm shadow-md items-center"
      onClick={handleClick}
    >
      <Avatar {...stringAvatar(info?.name, info?.lastName)} />
      <h2 className="font-bold text-lg truncate"> {info.name} </h2>
    </button>
  );
}

export default SideMenuCard;
