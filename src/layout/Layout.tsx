import { FC } from 'react';
import { isBrowser } from 'react-device-detect'; // Import a utility to detect if the user is on a browser
import { DesktopLayout } from '@layout'; // Import the DesktopLayout component

// Functional component to determine the layout based on the device type
const Layout: FC = () => {
    // Check if the environment is a browser
    if (isBrowser) {
        // Render the DesktopLayout if on a browser
        return <DesktopLayout />;
    }
    // Return null if not in a browser (e.g., mobile or other devices)
    return null;
};

export default Layout;
