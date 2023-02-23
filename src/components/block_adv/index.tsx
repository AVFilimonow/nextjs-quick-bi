import React from "react";

export const BlockAdv: any = ({ className = "", children, ...rest }) => {
    return (
        <div
            className={`lg:h-[350px] lg:w-[350px] md:w-[20vw] md:h-[20vw] h-[170px] w-[170px] bg-[#FFFFFF] lg:rounded-[40px] md:rounded-[20px] rounded-[12px] drop-shadow-[40px_40px_120px_rgba(1,75,160,0.2)]  lg:p-[60px] md:p-[32px] p-[20px] 
            ${className}`}
        >
            {children}
        </div>
    );
};
