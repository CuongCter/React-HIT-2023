import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
//https://picsum.photos/

// https://picsum.photos/v2/list
// https://picsum.photos/v2/list?page=2&limit=100
const Photos = () => {
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const getRandomPhotos = async (page) => {
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=8`
      );
      setRandomPhotos(response.data)
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const hanldeLoadMorePhotos = async () => {
    const images = await getRandomPhotos(nextPage)
    const newPhoto = [...randomPhotos, ...images]
    setRandomPhotos(newPhoto)
    setNextPage(nextPage + 1)
  }
  useEffect(() => {
    // getRandomPhotos()
    hanldeLoadMorePhotos()
  }, [])
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {randomPhotos && randomPhotos.map((item, index) => (
          <div
            key={`${item.download_url}${index}`}
            className="p-3 bg-white shadow-md rounded-lg h-[200px]"
          >
            <img
              src={item.download_url}
              alt={item.author}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      <div className="text-center">
        <button onClick={hanldeLoadMorePhotos}
          className="inline-block px-8 py-4 bg-purple-600 text-white"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photos;