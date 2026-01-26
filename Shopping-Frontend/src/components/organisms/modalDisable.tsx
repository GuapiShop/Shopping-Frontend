import type React from "react";
import Swal from "sweetalert2";
import type { ApiResponse } from "../../models/ApiResponse";
import { NoSymbolIcon } from "@heroicons/react/24/outline";

type ModalDisableProps = {
    isDisabled?: boolean
    message: string
    onDisable: () => Promise<ApiResponse>
}

const ModalDisable: React.FC<ModalDisableProps> = ({
    isDisabled = false, 
    message,
    onDisable
}) => {

    async function showModal () {
        const confirm = await Swal.fire({
            title: `${message}`,
            showCancelButton: true,
            confirmButtonText: "Disable",
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#eb354c'
        }); 

        if (confirm.isConfirmed){
            await onDisable();
        } 
    }

    return(
        <div className="px-2 py-2">
            <button 
                title="Disable"
                disabled={isDisabled}
                className="py-2 px-4 rounded-full disabled:opacity-70 disabled:cursor-not-allowed hover:cursor-pointer bg-[#eb354c] hover:bg-[#e91e39]"
                onClick={showModal}
            >
                <NoSymbolIcon className="h-6 w-6 text-white font-semibold" />
            </button>
        </div>
    );
}

export default ModalDisable