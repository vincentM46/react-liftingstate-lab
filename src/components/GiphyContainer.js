import React, { useState } from 'react';
import fetchData from '../services/fetchData';
import GiphyFilter from './GiphyFilter';
import GiphyList from './GiphyList';


export default function GiphyContainer() {
    const [GiphyResult, setGiphyResult] = useState([])
    async function handleOnClick(keywords) {
        try {
            const search = await fetchData(keywords)
            setGiphyResult(search)
        } catch (error) {
            console.log(error)
        }
    }

    function handleDelete(id) {
        const removed = GiphyResult.filter((z) => z.id !== id)
        console.log(id)
        setGiphyResult(removed)
    }

    return (
        <div>
            <GiphyFilter handleOnClick={handleOnClick}/>
            <GiphyList GiphyResult={GiphyResult} handleDelete={handleDelete} />
        </div>
    )
}