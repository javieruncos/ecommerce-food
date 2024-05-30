import React from "react";
import { useState,useEffect } from "react";

const useChange = () => {

  const [bgImage, setBgImage] = useState([
    "https://images.pexels.com/photos/3738755/pexels-photo-3738755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/845812/pexels-photo-845812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/681586/sushi-japan-soya-rice-681586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
