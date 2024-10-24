import React, { useState, useEffect } from 'react';
import { GifItem } from './GifItem'; // Componente que crearemos después

const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Ns4NdhIX2lHEqu9xdgsozNuiNyuy937q&q=${category}&limit=25&offset=0&rating=g&lang=en`;
  const response = await fetch(url);
  const { data } = await response.json();

  return data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url
  }));
};

export const GifGrid = ({ category }) => {
 
  const [images, setImages] = useState([]);

 
  const fetchGifs = async () => {
    const gifs = await getGifs(category);  
    setImages(gifs); 
    console.log(gifs); 
  };


  useEffect(() => {
    fetchGifs();
  }, [category]);

  return (
    <>
      <h3>{category}</h3> 
      <div className="gif-grid"> 
        {images.map((img) => (
          <GifItem 
            key={img.id} 
            {...img} 
          />
        ))}
      </div>
    </>
  );
};
