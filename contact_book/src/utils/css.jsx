import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export const CssTextFieldName = styled(TextField)({
  "& .MuiInputBase-input": {
    color: "white",
    fontSize: "3rem",
    background: "none",
  },
  "& .MuiInput-underline:after, .MuiInput-underline:before": {
    border: "none",
  },
  "& .MuiFilledInput-underline:before": {
    border: "none",
  },
  "& .MuiFilledInput-underline:after": {
    borderColor: "rgb(109 40 217)",
  },
  "& .MuiFilledInput-root": {
    backgroundColor: "transparent",
  },
});

export const CssTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    color: "rgb(212 212 216)",
    fontSize: "1.3rem",
    background: "none",
  },
  "& .MuiInput-underline:after, .MuiInput-underline:before": {
    border: "none",
  },
  "& .MuiFilledInput-underline:before": {
    border: "none",
  },
  "& .MuiFilledInput-underline:after": {
    borderColor: "rgb(109 40 217)",
  },
  "& .MuiFilledInput-root": {
    backgroundColor: "transparent",
  },
});
