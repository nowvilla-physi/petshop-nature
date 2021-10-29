import { AppProps } from 'next/app';
import '../styles/globals.scss';
import NextNprogress from 'nextjs-progressbar';
import React from 'react';
import { Footer, Header, PetKinds } from '../components/index';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <div className='app'>
            <NextNprogress
                color='#00bd00'
                options={{ easing: 'ease', speed: 500 }}
            />
            <Header />
            <PetKinds />
            <main className='wrapper'>
                <Component {...pageProps} />
            </main>
            <Footer />
        </div>
    );
};

export default MyApp;
