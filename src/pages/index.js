import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import React, { useState } from 'react';
import Image from 'next/image';
import { AiFillCamera } from 'react-icons/ai';
import { MdPhotoLibrary } from 'react-icons/md';

export default function posting() {
  const [preview, setPreview] = useState('');

  const handleChangeFile = (e) => {
    const { files } = e.target;
    setPreview(window.URL.createObjectURL(files[0]));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>投稿作成</title>
      </Head>

      <main>
        <div className={styles.iconCircle} />
        {/* <div className={preview} */}
        <button onClick={preview}>ファイルアップロード</button>
        <input type="file" accept="image/*" name="photo" onChange={handleChangeFile} />
        <br />
        <img src={preview} name="aaa" width="20%" height="20%" />
      </main>
      {/* <div className={styles.imageContainer}>
        <Image className={styles.image} src="/picture/image1.png" width="200%" height="200%" />
      </div> */}

      <form action="/send-data-here" method="post">
        <label for="first">投稿文章</label>
        <br />
        <input type="text" id="text" name="text" />
        <br />
        <button type="submit">投稿</button>
      </form>
    </div>
  );
}
