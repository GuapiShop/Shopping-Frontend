import React from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

type PaginationProps = {
    page: number;
    totalPage: number;
    changePreviousPage: () => void;
    changeNextPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
    page, 
    totalPage, 
    changeNextPage, 
    changePreviousPage,
}) => {
    return (
        <>
            {/* Pagination */}
            <div className="flex gap-4 items-center justify-center">
                <button
                    className="hover:cursor-pointer hover:bg-gray-300 rounded-2xl px-2 py-2 items-center justify-center"
                    onClick={changePreviousPage}
                > 
                    <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <p>
                    Page {page} of {totalPage}
                </p>
                <button
                    className="hover:cursor-pointer  hover:bg-gray-300 rounded-2xl px-2 py-2"
                    onClick={changeNextPage}
                > 
                    <ChevronRightIcon className="h-6 w-6" />
                </button>
            </div>
        </>
    )
}

export default Pagination; 

