import React from 'react';
import Image from 'next/image';
import styles from '../styles/petKind.module.scss';

type Props = {
    alt: string;
    imgUrl: any;
    kind: string;
    isActive: boolean;
    handleClick: () => void;
};

const PetKind: React.VFC<Props> = (props) => {
    const { alt, imgUrl, kind, isActive, handleClick } = props;
    return (
        <button
            type='button'
            className={
                isActive ? styles['pet-kind--active'] : styles['pet-kind']
            }
            onClick={handleClick}
        >
            <Image src={imgUrl} alt={alt} />
            <p className={styles['pet-kind__name']}>{kind}</p>
        </button>
    );
};

export default PetKind;
