import { FC, ReactNode } from "react";
import React from "react";

interface IPageLayout {
    children?: any;
}
export const PageLayout = (props: IPageLayout) => {
    const { children } = props;
    return (
        <>
            <main>{children}</main>
        </>
    );
};
