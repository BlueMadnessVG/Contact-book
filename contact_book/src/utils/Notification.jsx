import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { useAlertStore } from "../global/alerts.store";

function Notification() {
  const { showAlert, alertMessage, alertSeverity, setShowAlert } =
    useAlertStore((state) => state);

  const handleClose = () => {
    setShowAlert(false);
  };

  return (
    <Snackbar
      open={showAlert}
      onClose={handleClose}
      autoHideDuration={4000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        severity={alertSeverity}
        onClose={handleClose}
        sx={{ width: "100%" }}
        variant="filled"
        elevation={6}
      >
        {alertMessage}
      </Alert>
    </Snackbar>
  );
}

export default Notification;
