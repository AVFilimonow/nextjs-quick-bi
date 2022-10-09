import React from "react";

export type ICheckbox = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;

export const Checkbox: React.FC<ICheckbox> = ({
    className = "",
    children,
    ...rest
}) => {
    return (
        <input
            type="checkbox"
            className={"accent-black w-[32px] h-[32px] rounded-[6px] mr-[16px]"}
        />
    );
};
