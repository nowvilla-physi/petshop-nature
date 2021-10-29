import React from 'react';
import Image from 'next/image';
import { BlogProps } from '../pages/blogs';
import styles from '../styles/blog.module.scss';
import * as Strings from '../strings';

const Blog: React.VFC<BlogProps> = (props) => {
    const { alt, date, title, detail, imgUrl } = props;
    const dateElement = date.split('-');
    const newDate = `${dateElement[0]}年${dateElement[1]}月${dateElement[2]}日`;
    const handleClick = () => {
        alert(Strings.BLOG_MESSAGE);
    };

    return (
        <article className={styles.blog}>
            <div className={styles.blog__image}>
                <Image src={imgUrl} alt={alt} width={800} height={600} />
            </div>
            <div className={styles.blog__info}>
                <h2 className={styles['blog__info-title']}>{title}</h2>
                <p className={styles['blog__info-date']}>
                    <time dateTime={date}>[{newDate}]</time>
                </p>
                <p className={styles['blog__info-detail']}>{detail}</p>
                <button
                    type='button'
                    className={styles['blog__info-button']}
                    onClick={() => handleClick()}
                >
                    {Strings.BLOG_BUTTON}
                </button>
            </div>
        </article>
    );
};

export default Blog;
