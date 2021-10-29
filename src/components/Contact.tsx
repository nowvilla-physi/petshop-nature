import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import styles from '../styles/contact.module.scss';
import * as Strings from '../strings';

const Contact: React.VFC = () => {
    const iconStyle: React.CSSProperties = { padding: 10, fontSize: 40 };
    const handleClick = () => {
        alert('購入機能は未実装です。');
    };

    return (
        <section className={styles.contact}>
            <p className={styles.contact__message}>{Strings.CONTACT_MESSAGE}</p>
            <button
                className={styles.contact__button}
                type='button'
                onClick={handleClick}
            >
                <FontAwesomeIcon
                    className={styles['contact__button-icon']}
                    style={iconStyle}
                    icon={faArrowAltCircleRight}
                />
                <p className={styles['contact__button-name']}>
                    {Strings.CONTACT_BUTTON}
                </p>
            </button>
            <p className={styles.contact__tel}>{Strings.CONTACT_TEL}</p>
        </section>
    );
};

export default Contact;
