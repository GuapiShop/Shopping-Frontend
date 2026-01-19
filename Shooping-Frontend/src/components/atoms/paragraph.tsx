import type React from "react";

type ParagraphProps = {
    paragraph: string;
}

const Paragraph: React.FC<ParagraphProps> = ({
    paragraph
}) => {
    return (
        <>
            <p>
                {paragraph}
            </p>
        </>
    );
}

export default Paragraph;