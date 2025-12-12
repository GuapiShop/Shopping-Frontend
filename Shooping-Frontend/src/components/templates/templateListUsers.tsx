import type React from "react";
import TableUser from "../organisms/tableUser";
import { useListUsers } from "../../utils/useListUsers";
import Pagination from "../molecules/pagination";

const TempListUsers: React.FC = () => {

    const {
        header,
        row, 
        page, 
        totalPage, 
        changePreviousPage, 
        changeNextPage,
    } = useListUsers();

    return(
        <>
            <TableUser 
                arrayHeader={header}
                arrayRows={row}
            />
            <Pagination 
                page={page}
                totalPage={totalPage}
                changeNextPage={changeNextPage}
                changePreviousPage={changePreviousPage}
            /> 
        </>
    );
}

export default TempListUsers;