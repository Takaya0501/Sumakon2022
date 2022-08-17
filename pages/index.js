//8/17
//投稿ボタン押した後の処理

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useState } from 'react';

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
      <h1>投稿作成</h1>
      {/* <div className={styles.iconCircle} /> */}
      <main>
        <form action="send_data" method="post">
          <div className={preview}>
            <h3>写真を選択して下さい。</h3>

            <label className={styles.file}>
              <div>画像を選ぶ</div>
              <input type="file" accept="image/*" multiple="multiple" onChange={handleChangeFile} />
            </label>
            <br />
            <img className={styles.preview} src={preview} name="aaa" />
          </div>

          <label for="first">
            <h3>投稿文を入力して下さい。</h3>
          </label>

          <textarea
            className={styles.textarea}
            name="text"
            style={{ resize: 'none;' }}
            rows="4"
            cols="40"
            maxlength="200"
          ></textarea>

          <br />
          <br />
          <div className={styles.submit_color}>
            <button className={styles.submit} type="submit">
              投稿
            </button>
          </div>
        </form>
      </main>
      {/* <div className={styles.imageContainer}>
        <Image className={styles.image} src="/picture/image1.png" width="200%" height="200%" />
      </div> */}
    </div>
  );
}
