import Swal from "sweetalert2";

export const ErrorModal = (message) => {
  Swal.fire({
    icon: "error",
    text: message,
  });
};
