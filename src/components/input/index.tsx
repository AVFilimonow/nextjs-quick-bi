import React from "react";

export type IInput = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;

export const Input: React.FC<IInput> = ({
    className = "",
    children,
    ...rest
}) => {
    return (
        <input
            className={`text-[#292929] text-p3 font-['PT-Root-UI'] outline-none pb-[8px] pt-[20px] bg-transparent border-b-[1px] border-b-black lg:text-[24px]
             ${className}`}
            {...rest}
            data-testid="input"
        >
            {children}
        </input>
    );
};