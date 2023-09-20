import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Food = ({ meal }) => {
  return (
    <div>
      <div className="card felx flex-col bg-slate-800 shadow-xl py-5">
        <figure className="px-5">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="rounded-xl"
          />
        </figure>
        <div className="items-center text-center my-3 h-32">
          <h2 className="text-2xl font-semibold">{meal.strMeal}</h2>
        </div>
        <NavLink to={`/food/${meal.idMeal}`}>
          <p className="text-lg text-blue-500 hover:underline text-center">
            Show Details...
          </p>
        </NavLink>
      </div>
    </div>
  );
};

Food.propTypes = {
  meal: PropTypes.object,
};

export default Food;
