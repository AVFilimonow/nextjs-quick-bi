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
            className={`flex items-center justify-center lg:text-[20px] lg:leading-[28px] md:text-p2 text-p2 text-white font-semibold lg:py-[20px] lg:px-[80px] py-[9px] px-[24px] bg-gradient-to-r from-[#FF6060] to-[#FE124A] rounded-[500px] hover:scale-110 transition duration-300 ease-in-out active:scale-125
             ${className}`}
            {...rest}
            data-testid="btn"
        >
            {children}
        </button>
    );
};
