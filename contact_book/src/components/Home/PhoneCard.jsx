import React, { useState } from "react";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  TextField,
} from "@mui/material";
import { useContactStore } from "../../global/contact.store";

function PhoneCard({ index }) {
  const { phones, handlePhoneAtIndex } = useContactStore((state) => state);

  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");

  const handleInputsChange = (event) => {
    const { name, value } = event.target;

    if (phones[index] == undefined) {
      handlePhoneAtIndex(index, { type: "casa", [name]: value });
    }

    if (value.length < 10 && name != "type") {
      setError(true);
      setHelperText("Enter a valid number");
    } else {
      setError(false);
      setHelperText("");

      handlePhoneAtIndex(index, { ...phones[index], [name]: value });
    }
  };

  return (
    <div className="flex flex-row bg-zinc-800/60 mt-2 px-2 pb-2 rounded-md drop-shadow-md">
      <FormControl variant="standard" sx={{ m: 1, width: "40%" }}>
        <InputLabel id="Type-select">Type</InputLabel>
        <Select
          id="type-Select"
          label="Type"
          name="type"
          value={phones[index]?.type ? phones[index]?.type : "casa"}
          onChange={handleInputsChange}
        >
          <MenuItem value={"casa"}> Casa </MenuItem>
          <MenuItem value={"oficina"}> Oficina </MenuItem>
          <MenuItem value={"teléfono"}>Teléfono Personal</MenuItem>
        </Select>
      </FormControl>

      <Box
        sx={{
          width: "60%",
          maxWidth: "100%",
          paddingTop: "4px",
          margin: "4px",
        }}
      >
        <TextField
          type="number"
          label="Number"
          variant="standard"
          name="phoneNumber"
          fullWidth
          value={phones[index]?.phoneNumber}
          error={error}
          helperText={helperText}
          onChange={handleInputsChange}
        />
      </Box>
    </div>
  );
}

export default PhoneCard;
