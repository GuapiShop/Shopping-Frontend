import type React from "react";
import Swal from "sweetalert2";
import type { ApiResponse } from "../../models/ApiResponse";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

type ModalEnableProps = {
    message: string
    onEnable: () => Promise<ApiResponse>
}

const ModalEnable: React.FC<ModalEnableProps> = ({
    message,
    onEnable
}) => {

    async function showModal () {
        const confirm = await Swal.fire({
            title: `${message}`,
            showCancelButton: true,
            confirmButtonText: "Enable",
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#eb354c'
        }); 

        if (confirm.isConfirmed){
            await onEnable();
        }    
    }

    return(
        <div className="px-2 py-2">
            <button 
                title="Enable"
                className="py-2 px-4 rounded-full disabled:opacity-70 disabled:cursor-not-allowed hover:cursor-pointer bg-[#eb354c] hover:bg-[#e91e39]"
                onClick={showModal}
            >
                <ArrowPathIcon className="h-6 w-6 text-white font-semibold" />
            </button>
        </div>
    );
}

export default ModalEnable