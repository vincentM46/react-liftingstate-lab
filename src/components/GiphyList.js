import React from 'react';

export default function GiphyList(props) {
    const { GiphyResult } = props
    console.log(props.handleDelete)

    return (
        <div>
            {GiphyResult.map((image) => (
                <img onClick={() => props.handleDelete(image.id)} src={image.images.fixed_height_small.url} alt="gif" key={image.id} id={image.id}></img>
            ))}        
        </div>
    )
}