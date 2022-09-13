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
            className={`outline-none appearance-none absolute -left-[9999px] before:absolute before:left-[9999px] before:top-[5px] before:w-[24px] before:h-[24px] before:border-[2px] before:border-[#737373] before:rounded-[6px] before:checked:bg-[#D08884] before:checked:border-[#D08884] after:absolute after:checked:left-[10007px] after:checked:top-[7px] after:checked:w-[8px] after:checked:h-[14px] after:checked:rounded-[1px] after:checked:border-r-[3px] after:checked:border-b-[3px] after:checked:border-l-[#FFFFFF] after:checked:border-b-[#FFFFFF] after:checked:rotate-45 after:checked:transition-all after:checked:ease-in-out after:checked:delay-150 before:transition-all before:ease-in-out before:delay-150
             ${className}`}
            {...rest}
            type="checkbox"
            id="cb1"
            data-testid="checkbox"
        >
            {children}
        </input>
    );
};
