import React from "react";
import { ArrowDownOnSquareIcon } from "@heroicons/react/24/outline";

type ButtonSaveProps = {
    isDisabled: boolean;
    onSave: () => void;
}

const ButtonSave: React.FC<ButtonSaveProps>= ({
    isDisabled, 
    onSave
}) => {
    return (
        <div className="px-2 py-2">
            <button 
                title="Save"
                disabled={isDisabled}
                className="py-2 px-4 rounded-full disabled:opacity-70 disabled:cursor-not-allowed hover:cursor-pointer bg-[#eb354c] hover:bg-[#e91e39]"
                onClick={onSave}
            >
                <ArrowDownOnSquareIcon className="h-6 w-6 text-white font-semibold" />
            </button>
        </div>
    );
}

export default ButtonSave;