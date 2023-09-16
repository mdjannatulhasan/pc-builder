import React, { ReactElement } from 'react';
import Navbar from '../sections/common/Navbar';

interface RootLayoutProps {
    children: ReactElement;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default RootLayout;
