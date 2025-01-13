import axios from "axios";
import { useEffect, useState } from "react";

const UnsplashBento = () => {
  const [unsplashPhotos, setUnsplashPhotos] = useState();
  const collectionId = "i2jtuisLjY0";
  const accessKey = import.meta.env.VITE_ACCESS_KEY;

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/collections/${collectionId}/photos?client_id=${accessKey}`
        );
        console.log(response);
        setUnsplashPhotos(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPhotos();
  }, [accessKey]);
  useEffect(() => {
    if (unsplashPhotos) {
      console.log(unsplashPhotos);
    }
  }, [unsplashPhotos]);
  return (
    <div className="bentoCase" id="unsplashBentoCase">
      <div className="unsplashImgContainer">
        <img
          src={unsplashPhotos && unsplashPhotos[1].urls.regular}
          alt="photo issue de unsplash"
        />
      </div>
    </div>
  );
};

export default UnsplashBento;
