import { toast } from "react-toastify";

export const showToast = ({ text, status }) => {
  const options = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  if (status) {
    toast.success(text, options);
  } else {
    toast.error(text, options);
  }
};
