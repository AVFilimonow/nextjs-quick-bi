import React from "react";

export const BlockSpec: any = ({ className = "", children, ...rest }) => {
    return (
        <div
            className={`bg-[#FFFFFF] lg:rounded-[20px] md:rounded-[10px] rounded-[12px] drop-shadow-[10px_10px_10px_rgba(1,75,160,0.2)] lg:px-[40px] lg:py-[26px] md:px-[16px] md:py-[20px] px-[10px] py-[10px] ${className}`}
        >
            {children}
        </div>
    );
};
