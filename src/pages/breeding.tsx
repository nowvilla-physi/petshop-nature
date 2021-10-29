import React from 'react';
import Router from 'next/router';
import styles from '../styles/breeding.module.scss';
import * as Strings from '../strings';

const Breeding: React.VFC = () => {
    const showHome = (url: string) => {
        Router.push(url).then();
    };

    return (
        <article className={styles.breeding}>
            <p className={styles.breeding__message}>
                {Strings.BREEDING_MESSAGE}
            </p>
            <button
                type='button'
                className={styles.breeding__button}
                onClick={() => showHome(Strings.HOME_URL)}
            >
                {Strings.BREEDING_BUTTON}
            </button>
        </article>
    );
};

export default Breeding;
