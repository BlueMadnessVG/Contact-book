export const getValidationError = (errorCode) => {
  const codeMatcher = {
    ERR_NETWORK: "ERROR GETTING THE INFORMATION, PLACE TRY LATER!!",
    ERR_BAD_REQUEST:
      "SOMETHING WHEN WRONG GETTING THE INFORMATION, PLACE TRY LATER!!",
  };

  return codeMatcher[errorCode];
};
