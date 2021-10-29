import React from 'react';
import Image from 'next/image';
import styles from '../styles/pet.module.scss';
import { Info } from '../pages/pet/[kind]';

const Pet: React.VFC<Info> = (props) => {
    const { name, gender, isCB, length, price, type, imgUrl } = props;

    return (
        <div className={styles.pet}>
            <Image src={imgUrl} width={800} height={600} />
            <div className={styles.pet__detail}>
                <p className={styles['pet__detail-name']}>
                    {name}({gender})
                </p>
                <p className={styles['pet__detail-other']}>
                    ({isCB ? 'CB' : 'WC'}個体 大きさ約{length}cm)
                </p>
                <p className={styles['pet__detail-price']}>
                    ¥{price.toLocaleString()}-
                </p>
                <p className={styles['pet__detail-type']}>{type}</p>
            </div>
        </div>
    );
};

export default Pet;
