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
            <input value={ytLink} type='text' onChange={inputHandler} />
            {buttons.map((item, i) => {
                return <button key={`${item}_${i}`} type="submit" onClick={() => download(item.fetchUrl)}>{item.text}</button>
            })}
            <button type="submit" onClick={downloadSplitedVideo}>Скачать поделённое видео</button>
        </>
    );
}

export default YtdlForm;
