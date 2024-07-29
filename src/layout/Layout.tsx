import { FC } from 'react';
import { isBrowser } from 'react-device-detect';
import DesktopLayout from '@layout/deviceLayout/DesktopLayout';

const Layout: FC = () => {
    if (isBrowser) {
        return <DesktopLayout />;
    }
    return null;
};

export default Layout;
