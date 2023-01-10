import React from "react";

export const BlockLogo: any = ({ className = "", children, ...rest }) => {
    return (
        <div
            className={`bg-[#FFFFFF] flex items-center justify-center md:mr-[10px] lg:mr-[32px] lg:h-[180px] lg:w-[180px] md:h-[120px] md:w-[120px] h-[140px] w-[140px] lg:rounded-[40px] md:rounded-[20px] rounded-[16px] drop-shadow-[40px_40px_120px_rgba(1,75,160,0.2)] bg-no-repeat bg-center ${className}`}
        >
            {children}
        </div>
    );
};
