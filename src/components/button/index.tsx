import React from "react";

export type IButton = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

export const Button: React.FC<IButton> = ({
    className = "",
    children,
    ...rest
}) => {
    return (
        <button
            className={`text-[14px] lg:text-[20px] uppercase rounded-xl font-bold py-[12px] lg:py-[15px] font-['PT-Root-UI'] lg:font-['Arsenal']
             ${className}`}
            {...rest}
            data-testid="btn"
        >
            {children}
        </button>
    );
};
