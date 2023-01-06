import React from "react";

export const BlockService: any = ({ className = "", children, ...rest }) => {
    return (
        <div
            className={`bg-[#FFFFFF] lg:rounded-[40px] rounded-[20px] drop-shadow-[40px_40px_120px_rgba(1,75,160,0.2)] lg:py-[60px] lg:px-[60px] md:py-[42px] md:px-[32px] py-[32px] px-[40px] ${className}`}
        >
            {children}
        </div>
    );
};
