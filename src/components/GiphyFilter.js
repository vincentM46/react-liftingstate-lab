import React, { useState } from 'react';

export default function GiphyFilter(props) {
    const [Keywords, setKeywords] = useState("")
    function handleOnChange(e) {
        setKeywords(e.target.value)
    }


    return (
        <div>
            <input onChange={handleOnChange}></input>
            <button onClick={() => props.handleOnClick(Keywords)}>Search!</button>        
        </div>
    )
}