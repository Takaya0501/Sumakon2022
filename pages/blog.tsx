import React, { useRef } from 'react';

const Blog = () => {
  const inputPicture = useRef<HTMLTextAreaElement>(null);
  const inputName = useRef<HTMLTextAreaElement>(null);
  const inputSen = useRef<HTMLTextAreaElement>(null);
  const inputKariloce = useRef<HTMLTextAreaElement>(null);
  const handlePost = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const Picture = inputPicture.current?.value;
    const Name = inputName.current?.value;
    const Sen = inputSen.current?.value;
    const Kariloce = inputKariloce.current?.value;
    fetch('/api/create-post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Picture, Name, Sen, Kariloce }),
    });
  };
  return (
    <div className={'flex justify-center'}>
      <form>
        <div className={'flex flex-col justify-center items-center'}>
          <label htmlFor={'picture'}></label>
          <textarea
            ref={inputPicture}
            className={
              'w-96 mt-16 mb-5 px-3 py-3  bg-gray-200 border rounded-lg text-lg text-gray-700 focus:outline-none rounded-2xl resize-none focus:border-blue-500 focus:shadow-outline'
            }
            placeholder={'picture'}
            spellCheck={false}
            id={'picture'}
            autoComplete={'off'}
          />
          <label htmlFor={'name'}></label>
          <textarea
            ref={inputName}
            className={
              'w-96 h-96 mt-5 mb-5 px-3 py-3  bg-gray-200 border rounded-lg text-lg text-gray-700 focus:outline-none rounded-2xl resize-none focus:border-blue-500 focus:shadow-outline'
            }
            placeholder={'name'}
            spellCheck={false}
            id={'name'}
            autoComplete={'off'}
          />
          <label htmlFor={'sen'}></label>
          <textarea
            ref={inputSen}
            className={
              'w-96 h-96 mt-5 mb-5 px-3 py-3  bg-gray-200 border rounded-lg text-lg text-gray-700 focus:outline-none rounded-2xl resize-none focus:border-blue-500 focus:shadow-outline'
            }
            placeholder={'sen'}
            spellCheck={false}
            id={'sen'}
            autoComplete={'off'}
          />
          <label htmlFor={'kariloce'}></label>
          <textarea
            ref={inputKariloce}
            className={
              'w-96 h-96 mt-5 mb-5 px-3 py-3  bg-gray-200 border rounded-lg text-lg text-gray-700 focus:outline-none rounded-2xl resize-none focus:border-blue-500 focus:shadow-outline'
            }
            placeholder={'kariloce'}
            spellCheck={false}
            id={'kariloce'}
            autoComplete={'off'}
          />
        </div>
        <div className={'flex items-end'}>
          <button
            className="w-32 mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto"
            onClick={handlePost}
          >
            送信
          </button>
        </div>
      </form>
    </div>
  );
};

export default Blog;
