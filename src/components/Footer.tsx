import React from 'react';
import styles from '../styles/footer.module.scss';
import * as Strings from '../strings';

const Footer: React.VFC = () => {
    return (
        <footer className={styles.footer}>
            <small className='footer__copy'>&copy; {Strings.FOOTER_COPY}</small>
        </footer>
    );
};

export default Footer;
