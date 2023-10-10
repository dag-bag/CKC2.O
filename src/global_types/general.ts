import React, { type ReactNode } from "react";
export type children = ReactNode

export interface LayoutProps {
    children: children,
}

export type Layout = React.FC<LayoutProps>
