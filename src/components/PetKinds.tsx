import React, { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import { PetKind } from './index';
import * as Strings from '../strings';
import styles from '../styles/petKinds.module.scss';
import TortoiseIcon from '../../public/images/tortoise.svg';
import TurtleIcon from '../../public/images/turtle.svg';
import ChameleonIcon from '../../public/images/chameleon.svg';
import LeopaIcon from '../../public/images/leopa.svg';
import FrogIcon from '../../public/images/frog.svg';
import AxolotlIcon from '../../public/images/axolotl.svg';
import SalamanderIcon from '../../public/images/salamander.svg';
import NewtIcon from '../../public/images/newt.svg';
import { HOME_ICON_CLICK } from '../strings';

const initialState = {
    tortoise: false,
    turtle: false,
    chameleon: false,
    leopa: false,
    frog: false,
    axolotl: false,
    salamander: false,
    newt: false,
};

const PetKinds: React.VFC = () => {
    const router = useRouter();
    const [flags, setFlags] = useState(initialState);

    const showPet = (url: string) => {
        Router.push(url).then();
    };

    useEffect(() => {
        const kind = router.query.kind as string;
        setFlags({
            ...initialState,
            [kind]: true,
        });
    }, [router.query.kind]);

    return (
        <>
            <p className={styles['pet-kinds__message']}>{HOME_ICON_CLICK}</p>
            <div className={styles['pet-kinds']}>
                <PetKind
                    imgUrl={TortoiseIcon}
                    kind={Strings.TORTOISE_LABEL}
                    isActive={flags.tortoise}
                    alt={Strings.TORTOISE_LABEL}
                    handleClick={() => showPet(Strings.TORTOISE_URL)}
                />
                <PetKind
                    imgUrl={TurtleIcon}
                    kind={Strings.TURTLE_LABEL}
                    isActive={flags.turtle}
                    alt={Strings.TURTLE_LABEL}
                    handleClick={() => showPet(Strings.TURTLE_URL)}
                />
                <PetKind
                    imgUrl={ChameleonIcon}
                    kind={Strings.CHAMELEON_LABEL}
                    isActive={flags.chameleon}
                    alt={Strings.CHAMELEON_LABEL}
                    handleClick={() => showPet(Strings.CHAMELEON_URL)}
                />
                <PetKind
                    imgUrl={LeopaIcon}
                    kind={Strings.LEOPA_LABEL}
                    isActive={flags.leopa}
                    alt={Strings.LEOPA_LABEL}
                    handleClick={() => showPet(Strings.LEOPA_URL)}
                />
                <PetKind
                    imgUrl={FrogIcon}
                    kind={Strings.FROG_LABEL}
                    isActive={flags.frog}
                    alt={Strings.FROG_LABEL}
                    handleClick={() => showPet(Strings.FROG_URL)}
                />
                <PetKind
                    imgUrl={AxolotlIcon}
                    kind={Strings.AXOLOTL_LABEL}
                    isActive={flags.axolotl}
                    alt={Strings.AXOLOTL_LABEL}
                    handleClick={() => showPet(Strings.AXOLOTL_URL)}
                />
                <PetKind
                    imgUrl={SalamanderIcon}
                    kind={Strings.SALAMANDER_LABEL}
                    isActive={flags.salamander}
                    alt={Strings.SALAMANDER_LABEL}
                    handleClick={() => showPet(Strings.SALAMANDER_URL)}
                />
                <PetKind
                    imgUrl={NewtIcon}
                    kind={Strings.NEWT_LABEL}
                    isActive={flags.newt}
                    alt={Strings.NEWT_LABEL}
                    handleClick={() => showPet(Strings.NEWT_URL)}
                />
            </div>
        </>
    );
};

export default PetKinds;
