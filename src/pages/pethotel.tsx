import React from 'react';
import styles from '../styles/petHotel.module.scss';
import * as Strings from '../strings';

const PetHotel: React.VFC = () => {
    return (
        <article className={styles['pet-hotel']}>
            <h2 className={styles['pet-hotel__label']}>
                {Strings.PET_HOTEL_ABOUT}
            </h2>
            <div className={styles['pet-hotel__about']}>
                <p className={styles['pet-hotel__about-message']}>
                    {Strings.PET_HOTEL_ABOUT_MESSAGE1}
                </p>
                <p className={styles['pet-hotel__about-message']}>
                    {Strings.PET_HOTEL_ABOUT_MESSAGE2}
                </p>
                <p className={styles['pet-hotel__about-message']}>
                    {Strings.PET_HOTEL_ABOUT_MESSAGE3}
                </p>
                <p className={styles['pet-hotel__about-message']}>
                    {Strings.PET_HOTEL_ABOUT_MESSAGE4}
                </p>
            </div>
            <h2 className={styles['pet-hotel__label']}>
                {Strings.PET_HOTEL_PRICE}
            </h2>
            <div className={styles['pet-hotel__price']}>
                <table className={styles['pet-hotel__price-table']}>
                    <tr className={styles['pet-hotel__price-table-tr']}>
                        <th className={styles['pet-hotel__price-table-th']}>
                            {Strings.PET_HOTEL_PRICE_HEADER_KIND}
                        </th>
                        <th className={styles['pet-hotel__price-table-th']}>
                            {Strings.PET_HOTEL_PRICE_PER_ONE_DAY}
                        </th>
                        <th className={styles['pet-hotel__price-table-th']}>
                            {Strings.PET_HOTEL_PRICE_PER_ONE}
                        </th>
                        <th className={styles['pet-hotel__price-table-th']}>
                            {Strings.PET_HOTEL_PRICE_HEADER_SUM}
                        </th>
                    </tr>
                    <tr className={styles['pet-hotel__price-table-tr']}>
                        <td className={styles['pet-hotel__price-table-td']}>
                            {Strings.TORTOISE_LABEL}
                        </td>
                        <td className={styles['pet-hotel__price-table-td']}>
                            ¥6,000-
                        </td>
                        <td className={styles['pet-hotel__price-table-td']}>
                            ¥2,000-
                        </td>
                        <td className={styles['pet-hotel__price-table-td']}>
                            ¥8,000-
                        </td>
                    </tr>
                    <tr className={styles['pet-hotel__price-table-tr']}>
                        <td className={styles['pet-hotel__price-table-td']}>
                            {Strings.TURTLE_LABEL}
                        </td>
                        <td className={styles['pet-hotel__price-table-td']}>
                            ¥4,000-
                        </td>
                        <td className={styles['pet-hotel__price-table-td']}>
                            ¥500-
                        </td>
                        <td className={styles['pet-hotel__price-table-td']}>
                            ¥4,500-
                        </td>
                    </tr>
                    <tr className={styles['pet-hotel__price-table-tr']}>
                        <td className={styles['pet-hotel__price-table-td']}>
                            {Strings.CHAMELEON_LABEL}
                        </td>
                        <td className={styles['pet-hotel__price-table-td']}>
                            ¥6,000-
                        </td>
                        <td className={styles['pet-hotel__price-table-td']}>
                            ¥2,500-
                        </td>
                        <td className={styles['pet-hotel__price-table-td']}>
                            ¥8,500-
                        </td>
                    </tr>
                    <tr className={styles['pet-hotel__price-table-tr']}>
                        <td className={styles['pet-hotel__price-table-td']}>
                            {Strings.LEOPA_LABEL}
                        </td>
                        <td className={styles['pet-hotel__price-table-td']}>
                            ¥5,000-
                        </td>
                        <td className={styles['pet-hotel__price-table-td']}>
                            ¥1,000-
                        </td>
                        <td className={styles['pet-hotel__price-table-td']}>
                            ¥6,000-
                        </td>
                    </tr>
                    <tr className={styles['pet-hotel__price-table-tr']}>
                        <td className={styles['pet-hotel__price-table-td']}>
                            {Strings.FROG_LABEL}
                        </td>
                        <td className={styles['pet-hotel__price-table-td']}>
                            ¥4,500-
                        </td>
                        <td className={styles['pet-hotel__price-table-td']}>
                            ¥1,500-
                        </td>
                        <td className={styles['pet-hotel__price-table-td']}>
                            ¥6,000-
                        </td>
                    </tr>
                    <tr className={styles['pet-hotel__price-table-tr']}>
                        <td className={styles['pet-hotel__price-table-td']}>
                            {Strings.AXOLOTL_LABEL}
                        </td>
                        <td className={styles['pet-hotel__price-table-td']}>
                            ¥4,500-
                        </td>
                        <td className={styles['pet-hotel__price-table-td']}>
                            ¥2,000-
                        </td>
                        <td className={styles['pet-hotel__price-table-td']}>
                            ¥6,500-
                        </td>
                    </tr>
                    <tr className={styles['pet-hotel__price-table-tr']}>
                        <td className={styles['pet-hotel__price-table-td']}>
                            {Strings.SALAMANDER_LABEL}
                        </td>
                        <td className={styles['pet-hotel__price-table-td']}>
                            ¥5,000-
                        </td>
                        <td className={styles['pet-hotel__price-table-td']}>
                            ¥1,000-
                        </td>
                        <td className={styles['pet-hotel__price-table-td']}>
                            ¥6,000-
                        </td>
                    </tr>
                    <tr className={styles['pet-hotel__price-table-tr']}>
                        <td className={styles['pet-hotel__price-table-td']}>
                            {Strings.NEWT_LABEL}
                        </td>
                        <td className={styles['pet-hotel__price-table-td']}>
                            ¥4,000-
                        </td>
                        <td className={styles['pet-hotel__price-table-td']}>
                            ¥500-
                        </td>
                        <td className={styles['pet-hotel__price-table-td']}>
                            ¥4,500-
                        </td>
                    </tr>
                </table>
                <p className={styles['pet-hotel__price-message']}>
                    {Strings.PET_HOTEL_PRICE_MESSAGE}
                </p>
            </div>
            <h2 className={styles['pet-hotel__label']}>
                {Strings.PET_HOTEL_WARNING}
            </h2>
            <div className={styles['pet-hotel__warning']}>
                <p className={styles['pet-hotel__warning-message--red']}>
                    {Strings.PET_HOTEL_READ}
                </p>
                <p className={styles['pet-hotel__warning-message']}>
                    {Strings.PET_HOTEL_WARNING_MESSAGE1}
                </p>
                <ul className={styles['pet-hotel__warning-list']}>
                    <li className={styles['pet-hotel__warning-list-item']}>
                        {Strings.PET_HOTEL_WARNING_MESSAGE2}
                    </li>
                    <li className={styles['pet-hotel__warning-list-item']}>
                        {Strings.PET_HOTEL_WARNING_MESSAGE3}
                    </li>
                    <li className={styles['pet-hotel__warning-list-item']}>
                        {Strings.PET_HOTEL_WARNING_MESSAGE4}
                    </li>
                    <li className={styles['pet-hotel__warning-list-item']}>
                        {Strings.PET_HOTEL_WARNING_MESSAGE5}
                    </li>
                </ul>
            </div>
        </article>
    );
};

export default PetHotel;
