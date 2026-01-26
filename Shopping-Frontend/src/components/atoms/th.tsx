import type React from "react";

type ThProps = {
    children: string;
}

const Th: React.FC<ThProps> = ({
    children
}) => {
    return(
        <>
            <th>{children}</th>
        </>
    );
}

export default Th;