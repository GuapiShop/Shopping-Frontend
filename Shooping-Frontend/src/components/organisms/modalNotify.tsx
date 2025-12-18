import Swal from "sweetalert2"

export const modalSuccess = (title:string, text:string) => {
    Swal.fire({
        position: "center",
        icon: "success",
        iconColor: "#eb354c",
        title: `${title}`,
        text: `${text}`, 
        showConfirmButton: false,
        timer: 3000
    });
}

export const modalError = (title:string, text:string) => {
    Swal.fire({
        position: "center",
        icon: "error",
        iconColor: "#eb354c",
        title: `${title}`,
        text: `${text}`, 
        showConfirmButton: false,
        timer: 3000
    });
} 

export const modalWarning = (title:string, text:string) => {
    Swal.fire({
        position: "center",
        icon: "warning",
        iconColor: "#eb354c",
        title: `${title}`,
        text: `${text}`, 
        showConfirmButton: false,
        timer: 3000
    });
} 