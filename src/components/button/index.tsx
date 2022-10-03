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
            className={`text-p2 lg:text-p4 uppercase rounded-xl font-bold py-[12px] lg:py-[15px] lg:px-[48px] font-['PT-Root-UI'] lg:font-['Arsenal'] transition-all duration-500 
             ${className}`}
            {...rest}
            data-testid="btn"
        >
            {children}
        </button>
    );
};
