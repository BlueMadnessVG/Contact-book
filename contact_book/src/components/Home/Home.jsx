import React, { useEffect, useState } from "react";
import HomeHeader from "./HomeHeader";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  TextField,
} from "@mui/material";

import { CssTextField, CssTextFieldName } from "../../utils/css";
import ContactInfo from "../../assets/icons/ContactInfo";
import SaveIcon from "../../assets/icons/SaveIcon";
import DirectionCard from "./DirectionCard";
import PhoneCard from "./PhoneCard";
import AddIcon from "@mui/icons-material/Add";
import { useContactStore } from "../../global/contact.store";
import SurpriseIcon from "../../assets/icons/SurpriseIcon";
import { fetchSaveContact } from "../../services/api.services";

function Home() {
  const { id, info, phones, address, setInfo } = useContactStore(
    (state) => state
  );

  const [addresses, setAddresses] = useState(address);
  const [phonesState, setPhonesState] = useState(phones);

  useEffect(() => {
    setAddresses(address);
    setPhonesState(phones);
  }, [phones, address]);

  const handleAddAddress = () => {
    setAddresses([...addresses, { type: "casa" }]);
  };

  const handleAddNumber = () => {
    // Function to add a new phone card
    setPhonesState([...phonesState, { type: "casa", number: "" }]);
  };

  const handleInfoForm = (event) => {
    const { name, value } = event.target;

    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = async () => {
    const data = { ...info, addresses: address, phones: phones };
    //const response = await fetchSaveContact(data);
    console.log(addresses, phones);
  };

  return (
    <div className="flex-1 p-2 h-screen overflow-y-hidden">
      <header>
        <HomeHeader />
      </header>

      {id != null ? (
        <>
          <main className="flex-1 flex-col p-4 ">
            <div className="flex flex-col">
              <h2 className="flex font-bold text-lg items-center gap-2">
                <ContactInfo style={"h-10 w-10 m-0 text-violet-600"} /> Contact
                Information
              </h2>

              <div className="bg-zinc-800/60 pt-2 p-4 rounded-lg shadow-md">
                <div className="flex flex-row gap-4">
                  <Box sx={{ width: "40%" }}>
                    <CssTextFieldName
                      fullWidth
                      placeholder="Name"
                      variant="filled"
                      value={info?.name}
                      name="name"
                      onChange={handleInfoForm}
                    />
                  </Box>
                  <Box sx={{ width: "60%" }}>
                    <CssTextFieldName
                      fullWidth
                      placeholder="Last name"
                      variant="filled"
                      value={info?.lastName}
                      name="lastName"
                      onChange={handleInfoForm}
                    />
                  </Box>
                </div>

                <Box
                  sx={{
                    width: "auto",
                    maxWidth: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "end",
                  }}
                >
                  <CssTextField
                    fullWidth
                    placeholder="Insert the contact Email"
                    variant="filled"
                    sx={{ maxWidth: "50%" }}
                    value={info?.email}
                    name="email"
                    onChange={handleInfoForm}
                  />
                </Box>
              </div>

              <div className="grid grid-cols-2 pt-8 gap-6 ">
                <div className="flex-1 flex-col md:h-[40vh] h-[56vh] overflow-y-auto">
                  <header className="border-b border-zinc-600 pb-2 sticky top-0 z-10 bg-[#1f1e1e]">
                    <h2 className="text-2xl font-bold text-zinc-300 ml-2">
                      Addresses
                    </h2>
                  </header>

                  {addresses &&
                    addresses?.length > 0 &&
                    addresses.map((address, index) => {
                      console.log(index);
                      return (
                        <DirectionCard
                          key={index}
                          index={index}
                          info={address}
                        />
                      );
                    })}

                  <button
                    className="flex items-center justify-center gap-2 mt-2 bg-violet-700/60 py-1 px-2 rounded-sm hover:bg-violet-700 transition-all duration-200 w-full"
                    onClick={handleAddAddress}
                  >
                    <AddIcon /> Add Direction
                  </button>
                </div>

                <div className="flex flex-col md:h-[40vh] h-[56vh] overflow-y-auto">
                  <header className="border-b border-zinc-600 pb-2 sticky top-0 z-10 bg-[#1f1e1e]">
                    <h2 className="text-2xl font-bold text-zinc-300 ml-2">
                      Phone Numbers
                    </h2>
                  </header>

                  {phonesState &&
                    phonesState?.length > 0 &&
                    phonesState.map((phone, index) => {
                      console.log(index);
                      return (
                        <PhoneCard key={index} info={phone} index={index} />
                      ); // Render each phone card
                    })}

                  <button
                    className="flex items-center justify-center gap-2 mt-2 bg-violet-700/60 py-1 px-2 rounded-sm hover:bg-violet-700 transition-all duration-200 w-full"
                    onClick={handleAddNumber}
                  >
                    <AddIcon /> Add Phone
                  </button>
                </div>
              </div>
            </div>
          </main>
          <button
            className="bg-green-600 px-2 py-1 font-bold text-lg rounded-sm flex items-center mr-2 hover:bg-green-500 right-1 bottom-4 absolute"
            onClick={handleSubmit}
          >
            <SaveIcon style={"h-8 w-8"} />
            Save contact
          </button>
        </>
      ) : (
        <div className="flex flex-col text-zinc-600 items-center justify-center h-full">
          <SurpriseIcon style={"h-20 w-20"} />
          <h1 className="font-bold">NO CONTACT SELECTED </h1>
        </div>
      )}
    </div>
  );
}

export default Home;
