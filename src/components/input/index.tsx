import React from "react";

export const Input: any = ({ className = "", children, ...rest }) => {
    return (
        <input
            className={`border-[1px] border-[#424242] lg:rounded-[12px] rounded-[8px] sm:p-[20px] p-[8px] mb-[24px] outline-none
             ${className}`}
            {...rest}
            data-testid="input"
        >
            {children}
        </input>
    );
};
