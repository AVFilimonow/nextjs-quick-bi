import React from "react";

export type ISelect = React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>;

export const Select: React.FC<ISelect> = ({
    className = "",
    children,
    ...rest
}) => {
    return (
        <select
            className={`bg-transparent pb-[8px] pt-[20px] outline-none border-b-[1px] border-b-black text-[#292929]
             ${className}`}
            {...rest}
            data-testid="input"
        >
            {children}
        </select>
    );
};
