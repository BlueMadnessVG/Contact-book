import React, { useEffect } from "react";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  TextField,
} from "@mui/material";
import { useContactStore } from "../../global/contact.store";

function DirectionCard({ index }) {
  const { address, handleAddressAtIndex } = useContactStore((state) => state);

  useEffect(() => {
    if (address[index] == undefined) {
      handleAddressAtIndex(index, {
        type: "casa",
        street: "test",
        number: "test",
        suburb: "test",
        city: "test",
        state: "test",
        postalCode: "test",
        country: "test",
      });
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (address[index] == undefined) {
      console.log(address[index]);
    }

    handleAddressAtIndex(index, { ...address[index], [name]: value });
    console.log(address);
  };

  return (
    <div className="flex flex-col bg-zinc-800/60 mt-2 px-2 pb-4 rounded-md drop-shadow-md">
      <FormControl variant="standard" sx={{ m: 1, maxWidth: 200 }}>
        <InputLabel id="Type-select">Type</InputLabel>
        <Select
          id="type-Select"
          label="Type"
          name="type"
          value={address[index]?.type ? address[index]?.type : "casa"}
          onChange={handleInputChange}
        >
          <MenuItem value={"casa"}> Casa </MenuItem>
          <MenuItem value={"oficina"}> Oficina </MenuItem>
          <MenuItem value={"Teléfono"}>Teléfono Personal</MenuItem>
        </Select>
      </FormControl>

      <Box
        sx={{
          width: "auto",
          maxWidth: "100%",
          paddingTop: "4px",
          margin: "4px",
        }}
      >
        <TextField
          label="Street"
          variant="standard"
          name="street"
          value={address[index]?.street}
          onChange={handleInputChange}
        />
        <TextField
          label="Suburb"
          variant="standard"
          name="suburb"
          value={address[index]?.suburb}
          onChange={handleInputChange}
          sx={{ marginLeft: "1rem" }}
        />
        <TextField
          label="Number"
          variant="standard"
          name="number"
          value={address[index]?.number}
          onChange={handleInputChange}
          sx={{ width: "4rem", marginLeft: "1rem" }}
        />
      </Box>

      <Box
        sx={{
          width: "auto",
          maxWidth: "100%",
          paddingTop: "4px",
          margin: "4px",
        }}
      >
        <TextField
          label="City"
          variant="standard"
          name="city"
          value={address[index]?.city}
          onChange={handleInputChange}
        />
        <TextField
          label="State"
          variant="standard"
          name="state"
          value={address[index]?.state}
          onChange={handleInputChange}
          sx={{ marginLeft: "1rem" }}
        />
        <TextField
          label="Postal #"
          variant="standard"
          name="postalCode"
          value={address[index]?.postalCode}
          onChange={handleInputChange}
          sx={{ width: "4rem", marginLeft: "1rem" }}
        />
      </Box>

      <Box
        sx={{
          width: "auto",
          maxWidth: "100%",
          paddingTop: "4px",
          margin: "4px",
        }}
      >
        <TextField
          label="Country"
          variant="standard"
          name="country"
          value={address[index]?.country}
          onChange={handleInputChange}
        />
      </Box>
    </div>
  );
}

export default DirectionCard;
