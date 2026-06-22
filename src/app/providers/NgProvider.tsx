'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const NgProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <ProgressBar height="24px" color="#fffd00" options={{ showSpinner: false }} shallowRouting />
        </>
    );
};

export default NgProviders;
