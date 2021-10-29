import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/home.module.scss';
import * as Strings from '../strings';

const Home: React.VFC = () => {
    const iconStyle: React.CSSProperties = { padding: 0, fontSize: 32 };

    return (
        <article className={styles.home}>
            <h2 className={styles.home__warning}>
                <FontAwesomeIcon
                    className={styles['contact__button-icon']}
                    style={iconStyle}
                    icon={faExclamationTriangle}
                />
                <span className={styles['home__warning-label']}>
                    {Strings.HOME_HOME_WARNING}
                </span>
            </h2>
            <p className={styles['home__warning-1']}>
                {Strings.HOME_HOME_WARNING1}
            </p>
            <p className={styles['home__warning-2']}>
                {Strings.HOME_HOME_WARNING2}
            </p>
            <p className={styles['home__warning-3']}>
                {Strings.HOME_HOME_WARNING3}
            </p>
            <p className={styles['home__warning-4']}>
                {Strings.HOME_HOME_WARNING4}
            </p>
        </article>
    );
};

export default Home;
