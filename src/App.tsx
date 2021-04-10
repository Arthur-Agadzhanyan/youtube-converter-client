import React from 'react';
import YtdlForm from './components/YtdlForm/YtdlForm';

function App() {
  return (
    <div className='overlay'>
      <div className="content">     
        <h3 className='ytdl-title'>Youtube Downloader</h3>
        <p className='ytdl-description'>Конвертируйте и скачивайте Youtube видео бесплатно с нашим Youtube Downloader</p>
        <YtdlForm />
      </div>
    </div>
  );
}

export default App;
