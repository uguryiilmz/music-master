import React from 'react'
import './Artist.css'

const Artist=({artist})=>{

    if (!artist){
        return null
    }

    const {images, name, followers, genres }= artist

    return(
        <div className="artist-div">
            <h3>{name}</h3>
            <p>{followers.total} followers</p>
            <p>{genres.join(',')}</p>
            <img className="artist-img" src={images[0] && images[0].url} alt='artist-profile'/>
        </div>
    )
}

export default Artist;