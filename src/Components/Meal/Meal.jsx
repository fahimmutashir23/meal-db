import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Meal = ({ mealDetails }) => {
  const {
    strMeal,
    strDrinkAlternate,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strYoutube
  } = mealDetails;

  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1);
  }

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl max-w-6xl mx-auto my-10">
        <div className="px-5 pt-10 md:w-1/3">
          <img
            src={strMealThumb}
            alt="Album"
            className=" rounded-xl "
          />
        </div>
        <div className="card-body md:w-2/3">
          <h2 className="card-title text-3xl text-indigo-500">{strMeal}</h2>
          <hr />
          <p><p className="text-lg font-semibold text-red-600">Food Details :</p>{strInstructions}</p>
          <hr />
          <p className="flex items-center gap-2"> <span className="text-xl">&#8226;</span>Drink Alternate : {strDrinkAlternate ? strDrinkAlternate : "not in this food"}</p>

          <p className="flex items-center gap-2"> <span className="text-xl">&#8226;</span> It is <strong>{strArea ? strArea : "not in this food"}</strong> Food</p>

          <p className="flex items-center gap-2"> <span className="text-xl">&#8226;</span> Food categorie: <strong>{strCategory ? strCategory : "not in this food"}</strong></p>

          <p className="flex items-center gap-2"> <span className="text-xl">&#8226;</span> Youtube link: <strong className="text-blue-600"><a href={strYoutube? strYoutube: "There is no youtube link in this food"} target="  ">Click here</a></strong></p>

          <div className="card-actions justify-end">          
            <button onClick={handleBack} className="btn btn-primary">back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Meal.propTypes = {
  mealDetails: PropTypes.object,
};

export default Meal;
