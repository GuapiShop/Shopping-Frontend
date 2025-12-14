import type React from "react";
import TableUser from "../organisms/tableUser";
import { useListUsers } from "../../utils/useListUsers";
import Pagination from "../molecules/pagination";
import Link from "../atoms/link";

const TempListUsers: React.FC = () => {

    const {
        header,
        row, 
        page, 
        totalPage, 
        changePreviousPage, 
        changeNextPage,
        disable, 
        enable
    } = useListUsers();

    return(
        <>
            {row ? (
                <>
                    <div className="flex mx-30">
                        <h1 className="text-3xl font-semibold justify-items-start py-4">Available Users</h1>
                    </div>

                    <div
                        className="flex flex-col gap-5 items-center justify-center mx-30"
                    >
                        <TableUser 
                            arrayHeader={header}
                            arrayRows={row}
                            onDisable={disable}
                            onEnable={enable}
                        />
                        <Pagination 
                            page={page}
                            totalPage={totalPage}
                            changeNextPage={changeNextPage}
                            changePreviousPage={changePreviousPage}
                        /> 
                    </div>
                </>
            ) : (
                <>
                    <div
                        className="flex gap-1 items-center justify-center"
                    >
                    <h1> No users are currently available. Please add some to continue. </h1> <Link label="Click here to add." link="/user-create"></Link>
                    </div>
                </>
            )}
        </>
    );
}

export default TempListUsers;