import React from "react";
import { useState,useEffect } from "react";

const useChange = () => {

  const [bgImage, setBgImage] = useState([
    "https://th.bing.com/th/id/OIP.2G01lVcK8JWA9UFMTtDZzgHaFj?rs=1&pid=ImgDetMain",
    "https://excursionvietnam.com/uploads/Saigon_Street_food_(1).jpg",
    "https://www.travelvui.com/wp-content/uploads/2016/08/best-street-food-in-bangkok.jpg",
  ]);

  const [indexImg, setIndexImg] = useState(0);

  useEffect(() => {
    const changeImg = () => {
      setIndexImg((index) => (index === bgImage.length - 1 ? 0 : index + 1));
    };

    const interval = setInterval(changeImg, 2000);

    // Limpia el intervalo al desmontar el componente para evitar fugas de memoria
    return () => clearInterval(interval);
  }, [bgImage]);

  return { bgImage , indexImg};
};

export default useChange;
