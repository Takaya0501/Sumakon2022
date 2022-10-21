import Head from 'next/head';
import React, { useEffect, useState, useRef } from 'react';
import styles from '../styles/Home.module.css';
import axios from 'axios';

// 位置情報のエラーテキスト
const ErrorText = () => <p className="App-error-text">geolocation IS NOT available</p>;

export default function posting() {
  const [preview, setPreview] = useState('');
  const isFirstRef = useRef(true);
  //位置情報の関数呼び出し
  const [isAvailable, setAvailable] = useState(false);
  const [position, setPosition] = useState({ latitude: null, longitude: null });

  // 自分の情報

  const [pic, setPic] = useState('');
  const [username, setUsername] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [context, setContext] = useState('');

  //緯度経度読み込み
  useEffect(() => {
    isFirstRef.current = false;
    if ('geolocation' in navigator) {
      setAvailable(true);
    }
  }, [isAvailable]);

  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setPosition({ latitude, longitude });
    });
  };

  // useEffect実行前であれば、"Loading..."という呼び出しを表示させます
  if (isFirstRef.current) return <div className="App">Loading...</div>;

  const handleChangeFile = (e) => {
    const { files } = e.target;
    setPreview(window.URL.createObjectURL(files[0]));
  };

  // 投稿内容を変える関数（ハンドラー）
  const changepic = (e) => {
    setPic(e.target.value);
  };

  const changeusername = (e) => {
    setUsername(e.target.value);
  };

  const changeLat = (e) => {
    setLat(e.target.value);
  };

  const changeLng = (e) => {
    setLng(e.target.value);
  };

  const changeContext = (e) => {
    setContext(e.target.value);
  };

  // 日誌を投稿する関数
  const postDaily = () => {
    axios.post('/api/post_daily', {
      // APIに渡すJSONの中にauthorとcontextを入れる
      author: username,
      pic: pic,
      lat: lat,
      lng: lng,
      context: context,
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>投稿作成</title>
      </Head>
      <h1>投稿作成</h1>
      {/* <div className={styles.iconCircle} /> */}
      <main>
        <div className={preview}>
          <h3>写真を選択して下さい。</h3>

          <label className={styles.file}>
            <div>画像を選ぶ</div>
            <input type="file" accept="image/*" multiple="multiple" onChange={handleChangeFile} />
          </label>
          <br />
          <img
            className={styles.preview}
            value={context}
            onChange={changepic}
            src={preview}
            name="aaa"
          />
        </div>

        <label for="name">
          <h3>名前を入力して下さい。</h3>
          <textarea
            className={styles.context}
            value={username}
            onChange={changeusername}
            name="text"
            style={{ resize: 'none;' }}
            rows="1"
            cols="40"
            maxlength="40"
          ></textarea>
        </label>
        <label for="location">
          <h3>写真を撮影した場所の座標を取得</h3>
          <h3></h3>
          <div className="App">
            {!isFirstRef && !isAvailable && <ErrorText />}
            {isAvailable && (
              <div>
                <div className={styles.submit_color}>
                  <button onClick={getCurrentPosition} className={styles.submit}>
                    取得
                  </button>
                </div>
                <div>
                  <div value={lat} onChange={changeLat}>
                    {/* 緯度: {position.latitude} */}
                  </div>
                  <br />
                  <div value={lng} onChange={changeLng}>
                    {/* 経度: {position.longitude} */}
                    <br />
                  </div>
                </div>
              </div>
            )}
          </div>
        </label>

        <label for="first">
          <h3>投稿文を入力して下さい。</h3>
        </label>
        <textarea
          className={styles.context}
          value={context}
          onChange={changeContext}
          name="context"
          style={{ resize: 'none;' }}
          rows="4"
          cols="40"
          maxlength="200"
        ></textarea>

        <br />

        <br />
        <div className={styles.submit_color}>
          <button className={styles.submit} onClick={postDaily}>
            投稿
          </button>
        </div>
      </main>
    </div>
  );
}
