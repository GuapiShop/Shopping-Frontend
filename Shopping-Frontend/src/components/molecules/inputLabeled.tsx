import ErrorMessage from "../atoms/error";
import Input from "../atoms/input";
import Label from "../atoms/label";

type InputLabeledProps = {
    inputType: string;
    inputPlaceHolder: string;
    inputValue: string | number;
    inputName: string;
    disabled?: boolean; 
    inputOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    labelText: string;
    labelColor?: string;
    errorMessage?: string;
}

const InputLabeled: React.FC<InputLabeledProps> = ({ 
    inputType, 
    inputPlaceHolder, 
    inputValue, 
    inputName,
    disabled = false, 
    inputOnChange, 
    labelText, 
    errorMessage
 }) => {
    return (
        <>
            <div
                className="mb-4"
            >
                <Label text={labelText} />

                <Input 
                    name={inputName}
                    type={inputType} 
                    value={inputValue}
                    placeholder={inputPlaceHolder} 
                    onChange={inputOnChange}
                    disabled={disabled}
                /> 
                <div className="flex justify-start"> 
                {(errorMessage) && 
                    <ErrorMessage 
                        message={errorMessage}
                    />
                }
                </div>
            </div>
        </>
    );
}

export default InputLabeled;