import React from 'react';
import { Blog } from '../components/index';
import styles from '../styles/blogs.module.scss';
import * as JSON from '../blog-data.json';

export type BlogProps = {
    title: string;
    date: string;
    detail: string;
    imgUrl: string;
    alt: string;
};

const Blogs: React.VFC = () => {
    const data: BlogProps[] = JSON['blog-data'];

    return (
        <article className={styles.blogs}>
            {data.map((value) => (
                <Blog
                    title={value.title}
                    date={value.date}
                    detail={value.detail}
                    imgUrl={value.imgUrl}
                    alt={value.alt}
                />
            ))}
        </article>
    );
};

export default Blogs;
