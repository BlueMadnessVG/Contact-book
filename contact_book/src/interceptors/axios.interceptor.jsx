import axios from "axios";
import { apiRoute } from "../services/api.services";
import { getValidationError } from "../utils/get-validation-error";
import { SnackbarUtilities } from "../utils/snackbar-manager";

export const AxiosInterceptor = () => {
  const updateHeader = (request) => {
    const newHeaders = {
      ...request,
      headers: {
        ...request.headers,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    return newHeaders;
  };

  apiRoute.interceptors.request.use((request) => {
    console.log("Starting Request", request);
    return updateHeader(request);
  });

  apiRoute.interceptors.response.use(
    (response) => {
      console.log("response", response);
      return response;
    },
    (error) => {
      console.log("error", error);
      SnackbarUtilities.error(getValidationError(error.code));
      return Promise.reject(error);
    }
  );
};
