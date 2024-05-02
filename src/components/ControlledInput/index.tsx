import { Controller } from "react-hook-form";
import { Input } from "antd";
import { IControlledInput } from "./types";

const ControlledInput = ({
    label,
    type = "text",
    placeholder = "Search",
    ...rest
}: IControlledInput) => {
    return (
        <div className="input-container">
            {label && <label>{label}</label>}
            <Controller
                name={rest.name}
                control={rest.control}
                rules={rest.rules}
                render={({ field }) => (
                    <Input {...field} type={type} placeholder={placeholder} />
                )}
            />
        </div>
    );
};

export default ControlledInput;
