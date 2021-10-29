import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import styles from '../../styles/pets.module.scss';
import { Contact, Pet } from '../../components/index';
import * as JSON from '../../pet-data.json';

type PathParam = {
    kind: string;
};

export type Info = {
    name: string;
    gender: string;
    isCB: boolean;
    length: number;
    price: number;
    type: string;
    imgUrl: string;
};

type Props = {
    tortoise: Info[];
    turtle: Info[];
    chameleon: Info[];
    leopa: Info[];
    frog: Info[];
    axolotl: Info[];
    salamander: Info[];
    newt: Info[];
};

export const getStaticPaths: GetStaticPaths<PathParam> = async () => {
    return {
        paths: [
            { params: { kind: 'tortoise' } },
            { params: { kind: 'turtle' } },
            { params: { kind: 'chameleon' } },
            { params: { kind: 'leopa' } },
            { params: { kind: 'frog' } },
            { params: { kind: 'axolotl' } },
            { params: { kind: 'salamander' } },
            { params: { kind: 'newt' } },
        ],
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<Props> = async () => {
    const props: Props = {
        tortoise: JSON.tortoise,
        turtle: JSON.turtle,
        chameleon: JSON.chameleon,
        leopa: JSON.leopa,
        frog: JSON.frog,
        axolotl: JSON.axolotl,
        salamander: JSON.salamander,
        newt: JSON.newt,
    };
    return { props };
};

const Pets: React.VFC<Props> = (props) => {
    const {
        tortoise,
        turtle,
        chameleon,
        leopa,
        frog,
        axolotl,
        salamander,
        newt,
    } = props;
    const router = useRouter();
    const kind = router.query.kind as string;
    let data: Info[];

    switch (kind) {
        case 'tortoise':
            data = tortoise;
            break;
        case 'turtle':
            data = turtle;
            break;
        case 'chameleon':
            data = chameleon;
            break;
        case 'leopa':
            data = leopa;
            break;
        case 'frog':
            data = frog;
            break;
        case 'axolotl':
            data = axolotl;
            break;
        case 'salamander':
            data = salamander;
            break;
        case 'newt':
            data = newt;
            break;
        default:
            break;
    }

    return (
        <>
            <div className={styles.pets}>
                {data.map((value) => (
                    <Pet
                        name={value.name}
                        gender={value.gender}
                        isCB={value.isCB}
                        length={value.length}
                        price={value.price}
                        type={value.type}
                        imgUrl={value.imgUrl}
                    />
                ))}
            </div>
            <Contact />
        </>
    );
};

export default Pets;
