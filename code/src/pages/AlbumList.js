import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const AlbumList = () => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    fetch('https://theaudiodb.com/api/v1/json/1/mostloved.php?format=album&format=album')
      .then((res) => res.json())
      .then((json) => {
        setAlbums(json.loved)
      })
  }, [])

  return (
    <div>
      {albums.map((album) => (
        <div key={album.idAlbum}>
          <img src={`${album.strAlbumThumb}/preview`} alt={album.strAlbum} />
          <h2>{album.strAlbum}</h2>
          <h3>
            <Link to={`/artists/${album.idArtist}`}>
              {album.strArtist}
            </Link>
          </h3>
        </div>
      ))}
    </div>
  )
}
