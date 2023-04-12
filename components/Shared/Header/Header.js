import Image from 'next/image';
import React from 'react';
import { images } from '../../../utils/demoData';
import styles from './Header.module.scss'

const Header = () => {
    return (
      <div className={styles.header_section}>
          <Image src={images.logo} alt="logo"></Image>
      </div>
    );
};

export default Header;