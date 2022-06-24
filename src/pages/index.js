import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import React from 'react';
import { Camera } from 'react-feather';

export default function ProductsList() {
  return (
    <div className={styles.container}>
      <main>
        <div className={styles.iconCircle} />
        <img src="/image1.png" />
      </main>
      {/* <p className={styles.iconpicture}>
        <img src="/../../picture/camera.jpeg" alt="表示できません" />
      </p> */}
      <Camera />
    </div>
  );
}
