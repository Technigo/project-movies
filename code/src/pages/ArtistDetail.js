import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const ArtistDetail = () => {
  const { artistId } = useParams()
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    fetch(`https://theaudiodb.com/api/v1/json/1/album.php?i=${artistId}`)
      .then((res) => res.json())
      .then((json) => {
        setAlbums(json.album)
      })
  }, [artistId])

  return (
    <div>
      {albums.map((album) => (
        <div key={album.idAlbum}>
          <img src={`${album.strAlbumThumb}/preview`} alt={album.strAlbum} />
          <h1>{album.strAlbum}</h1>
        </div>
      ))}
    </div>
  )
}
