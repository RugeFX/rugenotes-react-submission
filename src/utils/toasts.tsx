import toast from "react-hot-toast";

const baseStyle = { backgroundColor: "#EFEC8C", color: "#282B47" };

const errorToast = (message: string) => {
  return toast.error(message, { style: baseStyle });
};

const successToast = (message: string) => {
  return toast.success(message, { style: baseStyle });
};

export { errorToast, successToast };
