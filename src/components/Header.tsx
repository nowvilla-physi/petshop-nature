import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { animateScroll as scroll } from 'react-scroll/modules';
import Logo from '../../public/images/logo.svg';
import * as Strings from '../strings';
import styles from '../styles/header.module.scss';
import { GlobalNavigation } from './index';

const Header: React.VFC = () => {
    const router = useRouter();
    const toTopScreen = () => {
        scroll.scrollToTop({ smooth: true, duration: 500 });
    };
    const showPage = (url: string) => {
        if (router.pathname === url) {
            toTopScreen();
        } else {
            Router.push(url).then();
        }
    };

    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.header__logo}>
                    <Link href={Strings.HOME_URL}>
                        <a>
                            <Image
                                src={Logo}
                                alt={Strings.HEADER_LOGO_ALT}
                                onClick={() => showPage(Strings.HOME_URL)}
                            />
                        </a>
                    </Link>
                </h1>
                <ul className={styles.header__info}>
                    <li className={styles['header__info-item']}>
                        <span className={styles['header__info-item-label']}>
                            {Strings.HEADER_SHOP_WEEKDAY_LABEL}
                        </span>
                        {Strings.HEADER_SHOP_WEEKDAY}
                    </li>
                    <li className={styles['header__info-item']}>
                        <span className={styles['header__info-item-label']}>
                            {Strings.HEADER_SHOP_WEEKEND_LABEL}
                        </span>

                        {Strings.HEADER_SHOP_WEEKEND}
                    </li>
                    <li className={styles['header__info-item']}>
                        <span className={styles['header__info-item-label']}>
                            {Strings.HEADER_SHOP_HOLIDAY_LABEL}
                        </span>

                        {Strings.HEADER_SHOP_HOLIDAY}
                    </li>
                    <li className={styles['header__info-item']}>
                        <span className={styles['header__info-item-label']}>
                            {Strings.HEADER_TEL_LABEL}
                        </span>
                        {Strings.HEADER_TEL}
                    </li>
                </ul>
            </header>
            <GlobalNavigation />
        </>
    );
};

export default Header;
