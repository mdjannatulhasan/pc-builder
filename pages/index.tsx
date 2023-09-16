import RootLayout from '@/components/Layouts/RootLayout';
import Head from 'next/head';
import { ReactElement } from 'react';

export default function Home() {
    return (
        <>
            <Head>
                <title>Home | PC Builder</title>
            </Head>
            Home
        </>
    );
}

Home.getLayout = function getLayout(page: ReactElement) {
    return <RootLayout>{page}</RootLayout>;
};
