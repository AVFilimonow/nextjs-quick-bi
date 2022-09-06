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
            className={`text-[20px] uppercase rounded-xl font-familyBold py-[15px]
             ${className}`}
            {...rest}
            data-testid="btn"
        >
            {children}
        </button>
    );
};
