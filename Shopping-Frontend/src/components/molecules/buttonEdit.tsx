import React from "react";
import { PencilIcon } from "@heroicons/react/24/outline";

type ButtonEditProps = {
    isDisabled: boolean;
    setEdit: () => void;
}

const ButtonEdit: React.FC<ButtonEditProps>= ({
    isDisabled, 
    setEdit
}) => {
    return (
        <div className="px-2 py-2">
            <button 
                title="Edit"
                disabled={isDisabled}
                className="py-2 px-4 rounded-full disabled:opacity-70 disabled:cursor-not-allowed hover:cursor-pointer bg-[#eb354c] hover:bg-[#e91e39]"
                onClick={setEdit}
            >
                <PencilIcon className="h-6 w-6 text-white font-semibold" />
            </button>
        </div>
    );
}

export default ButtonEdit;