import { useSnackbar } from "notistack";

let useSnackbarRef;
export const SnackbarUtilitiesConfiguration = () => {
  useSnackbarRef = useSnackbar();
  return null;
};

export const SnackbarUtilities = {
  toast(msg, variant) {
    useSnackbarRef.enqueueSnackbar(msg, { variant });
  },
  success(mess) {
    this.toast(mess, "success");
  },
  error(mess) {
    this.toast(mess, "error");
  },
};
