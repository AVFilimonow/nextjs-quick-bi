import { FC, ReactNode } from "react";
import React from "react";

export const Section: FC<{ className?: string; children: ReactNode }> = ({
    children,
    className = "",
}) => {
    return (
        <div
            className={`px-[16px] pt-[40px] pb-[24px] lg:px-[176px] lg:pt-[120px] lg:pb-[140px]
             ${className}`}
        >
            {children}
        </div>
    );
};
