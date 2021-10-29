import React from 'react';
import Link from 'next/link';
import styles from '../styles/globalNavigation.module.scss';
import * as Strings from '../strings';

const GlobalNavigation: React.VFC = () => {
    return (
        <nav>
            <ul className={styles['global-navigation']}>
                <li>
                    <p>|</p>
                </li>
                <li className={styles['global-navigation__item']}>
                    <Link href={Strings.PET_HOTEL_URL}>
                        <a>{Strings.HEADER_NAVIGATION_PET_HOTEL}</a>
                    </Link>
                </li>
                <li>
                    <p>|</p>
                </li>
                <li className={styles['global-navigation__item']}>
                    <Link href={Strings.BLOG_URL}>
                        <a>{Strings.HEADER_NAVIGATION_BLOG}</a>
                    </Link>
                </li>
                <li>
                    <p>|</p>
                </li>
                <li className={styles['global-navigation__item']}>
                    <Link href={Strings.BREEDING_URL}>
                        <a>{Strings.HEADER_NAVIGATION_BREEDING}</a>
                    </Link>
                </li>
                <li>
                    <p>|</p>
                </li>
                <li className={styles['global-navigation__item']}>
                    <Link href={Strings.ACCESS_URL}>
                        <a>{Strings.HEADER_NAVIGATION_ACCESS}</a>
                    </Link>
                </li>
                <li>
                    <p>|</p>
                </li>
            </ul>
        </nav>
    );
};

export default GlobalNavigation;
