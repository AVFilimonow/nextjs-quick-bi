import { FC, ReactNode } from "react";
import React from "react";

export const Section: FC<{ className?: string; children: ReactNode }> = ({
    children,
    className = "",
}) => {
    return (
        <div
            className={`px-[32px] sm:px-[80px] md:px-[100px] lg:px-[200px]
             ${className}`}
        >
            {children}
        </div>
    );
};
