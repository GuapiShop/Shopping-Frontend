import type React from "react";

type TdProps = {
    children: React.ReactNode;
}

const Td: React.FC<TdProps> = ({
    children
}) => {
    return(
        <>
            <td>{children}</td>
        </>
    );
}

export default Td;