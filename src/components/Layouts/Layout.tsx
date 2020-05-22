import React, { FC, ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout:FC<LayoutProps> = ({
    children
}): JSX.Element => {

    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;