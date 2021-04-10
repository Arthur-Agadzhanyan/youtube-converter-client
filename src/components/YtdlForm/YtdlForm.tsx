import React, { SyntheticEvent, useState } from 'react';

const YtdlForm = () => {
    const [ytLink, setYtLink] = useState<string>('');

    interface downloadButton {
        text: string,
        fetchUrl: string
    }

    const download = async (url: string) => {
        if (ytLink) {
            window.location.href = `http://localhost:5000/${url}?url=${ytLink}`
            setYtLink('')
        }
    }

    const downloadSplitedVideo = async (e: SyntheticEvent) => {
        e.preventDefault()
        if (ytLink) {
            const videoUrl = `http://localhost:5000/download-video?url=${ytLink}`
            const audioUrl = `http://localhost:5000/download-audio?url=${ytLink}`

            window.location.href = videoUrl
            setTimeout(() => window.location.href = audioUrl, 2000)

            setYtLink('')
        }
    }

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setYtLink(e.target.value)
    }

    const buttons: downloadButton[] = [
        { text: 'Скачать', fetchUrl: 'download' },
        { text: 'Скачать только аудио', fetchUrl: 'download-audio' },
        { text: 'Скачать только видео', fetchUrl: 'download-video' }
    ]

    return (
        <>
            <input value={ytLink} type='text' className='ytdl-input' placeholder='Вставьте ссылку на видео здесь...' onChange={inputHandler} />
            <div className="controls">
                {buttons.map((item, i) => {
                    return <button key={`${item}_${i}`} type="submit" className='ytdl-btn' onClick={() => download(item.fetchUrl)}>{item.text}</button>
                })}
                <button type="submit" className='ytdl-btn f-100' onClick={downloadSplitedVideo}>Скачать отдельно видео и аудио</button>
            </div>
        </>
    );
}

export default YtdlForm;
