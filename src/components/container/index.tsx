import { FC, ReactNode } from "react";
import React from "react";

export const Container: FC<{ className?: string; children: ReactNode }> = ({
    children,
    className = "",
}) => {
    return (
        <div
            className={`px-[16px] py-[40px] lg:px-[176px] lg:py-[120px]
             ${className}`}
        >
            {children}
        </div>
    );
};
