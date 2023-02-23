import React from "react";

export const Button: any = ({ className = "", children, ...rest }) => {
    return (
        <div
            className={`flex items-center justify-center lg:text-[20px] lg:leading-[28px] md:text-p2 text-p2 text-white font-semibold lg:w-[340px] md:w-[220px] w-[178px] lg:py-[20px] lg:px-[80px] py-[9px] px-[24px] bg-gradient-to-r from-[#FF6060] to-[#FE124A] rounded-[500px] cursor-pointer hover:scale-110 transition duration-300 ease-in-out active:scale-125
             ${className}`}
            {...rest}
            data-testid="btn"
        >
            {children}
        </div>
    );
};
