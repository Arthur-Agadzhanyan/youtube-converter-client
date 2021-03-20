import React, { SyntheticEvent, useState } from 'react';

const YtdlForm = () => {
    const [ytLink, setYtLink] = useState<string>('');


    const submitHandler = async (e: SyntheticEvent)=>{
        e.preventDefault()
        if (ytLink) {
            // const data = await fetch(`http://localhost:5000/download?url=${ytLink}`).then(data=>data.json())
            // console.log(data);
            
            window.location.href = `http://localhost:5000/download?url=${ytLink}`
            setYtLink('')
        }    
    }

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setYtLink(e.target.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <input value={ytLink} type='text' onChange={inputHandler} />
            <button type="submit">Convert</button>
        </form>
    );
}

export default YtdlForm;
