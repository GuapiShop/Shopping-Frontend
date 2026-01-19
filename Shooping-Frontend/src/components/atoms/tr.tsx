import type React from "react";

type TrProps = {
    children: React.ReactNode;
}

const Tr: React.FC<TrProps> = ({
    children
}) => {
    return(
        <>
            <tr>{children}</tr>
        </>
    );
}

export default Tr;