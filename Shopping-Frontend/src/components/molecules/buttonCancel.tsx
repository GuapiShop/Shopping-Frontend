import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

type ButtonCancelProps = {
    onCancel: () => void
}

const ButtonCancel: React.FC<ButtonCancelProps>= ({
    onCancel
}) => {
    return (
        <div className="px-2 py-2">
            <button 
                title="Cancel"
                className="py-2 px-4 rounded-full disabled:opacity-70 disabled:cursor-not-allowed hover:cursor-pointer bg-[#eb354c] hover:bg-[#e91e39]"
                onClick={onCancel}
            >
                <XMarkIcon className="h-6 w-6 text-white font-semibold" />
            </button>
        </div>
    );
}

export default ButtonCancel;