import React from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrain, faBusAlt } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/access.module.scss';
import * as Strings from '../strings';

const Access: React.VFC = () => {
    const iconStyle: React.CSSProperties = {
        padding: 0,
        fontSize: 56,
        color: '#00bd00',
    };

    const defaultLatLng = {
        lat: 35.65863496289651,
        lng: 139.74547044865866,
    };

    const handleApiLoaded = ({ map, maps }) => {
        return new maps.Marker({
            map,
            position: defaultLatLng,
        });
    };

    return (
        <article className={styles.access}>
            <section className={styles.access__title}>
                <FontAwesomeIcon style={iconStyle} icon={faTrain} />
                <p className={styles['access__title-message']}>
                    {Strings.ACCESS_TITLE_MESSAGE}
                </p>
                <FontAwesomeIcon style={iconStyle} icon={faBusAlt} />
            </section>
            <h2 className={styles.access__label}>
                {Strings.ACCESS_TRAIN_AND_BUS_LABEL}
            </h2>
            <ul className={styles.access__method}>
                <li className={styles['access__method-item']}>
                    {Strings.ACCESS_METHOD_TRAIN}
                </li>
                <li className={styles['access__method-item']}>
                    {Strings.ACCESS_METHOD_SUBWAY}
                </li>
                <li className={styles['access__method-item']}>
                    {Strings.ACCESS_METHOD_BUS}
                </li>
                <li className={styles['access__method-item']}>
                    {Strings.ACCESS_METHOD_TRAM}
                </li>
            </ul>
            <h2 className={styles.access__label}>{Strings.ACCESS_MAP_LABEL}</h2>
            <div style={{ height: '50vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY,
                    }}
                    defaultCenter={defaultLatLng}
                    defaultZoom={20}
                    onGoogleApiLoaded={handleApiLoaded}
                />
            </div>
        </article>
    );
};

export default Access;
