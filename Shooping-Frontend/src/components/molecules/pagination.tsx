import React from "react"


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
            <div>
                <button
                    className=""
                    onClick={changePreviousPage}
                > 
                    Previous 
                </button>
                
                <p>
                    Page {page} of {totalPage}
                </p>

                <button
                    className=""
                    onClick={changeNextPage}
                > 
                    Next 
                </button>
            </div>
        </>
    )
}

export default Pagination; 

