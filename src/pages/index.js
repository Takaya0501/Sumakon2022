import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import React from 'react';
import { AiFillCamera } from 'react-icons/ai';
import { MdPhotoLibrary } from 'react-icons/md';
// import { IconContext } from 'react-icons';

export default function ProductsList() {
  return (
    <div className={styles.container}>
      <Head>
        <title>投稿作成</title>
      </Head>

      <main>
        <div className={styles.iconCircle} />
        <img src="/image1.png" />
      </main>
      {/* <p className={styles.iconpicture}>
        <img src="/../../picture/camera.jpeg" alt="表示できません" />
      </p> */}
      <h1>
        <MdPhotoLibrary className={styles.MdPhotoLibrary} />
        <AiFillCamera className={styles.AiFillCamera} />
      </h1>
    </div>
  );
}
