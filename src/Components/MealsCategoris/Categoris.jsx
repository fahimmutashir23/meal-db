// import PropTypes from 'prop-types';

import { useEffect, useState } from "react";
import Categori from "../Categori/Categori";

const Categoris = () => {
  const [categoris, setCategoris] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategoris(data.categories));
  }, []);
  
  return (
    <div className="md:w-2/3 mx-auto mt-10">
        <div className="flex flex-wrap gap-2 justify-center">
            {
                categoris.map((categori, idx) => <Categori key={idx} categori={categori}></Categori>)
            }
        </div>
    </div>
  );
};

// Categoris.propTypes = {

// };

export default Categoris;
