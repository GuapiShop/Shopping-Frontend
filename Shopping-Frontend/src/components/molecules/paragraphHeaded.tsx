import React from "react"
import Paragraph from "../atoms/paragraph";
import HeadingThree from "../atoms/headingThree";

type ParagraphHeadedProps = {
    label: string;
    labelClassName: string;
    paragraph: string;
    paragraphClassName: string;
}

const ParagraphHeaded: React.FC<ParagraphHeadedProps> = ({
    label, 
    paragraph, 
    labelClassName, 
    paragraphClassName
}) => {
    return(
        <>
        <div>
            <HeadingThree 
                label={label}
                className={labelClassName}
            />
            <Paragraph 
                paragraph={paragraph}
                className={paragraphClassName}
            />
        </div>
        </>
    );
}
export default ParagraphHeaded;