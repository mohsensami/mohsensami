'use client';

import { ProgressProvider } from '@bprogress/next/app';

const Bprogress = ({ children }: { children: React.ReactNode }) => {
    return (
        <ProgressProvider height="8px" color="#009966" options={{ showSpinner: false }} shallowRouting>
            {children}
        </ProgressProvider>
    );
};

export default Bprogress;
