import React from 'react';
import Classes from './Meal.module.css'
import Count from '../UI/Count/Count';

const Meal = (props) => {
  return (
    <div className={Classes.Meal}>
      <div className={Classes.ImgBox}>
        <img src={props.meal.img} alt="" />
      </div>

      <div className={Classes.DescBox}>
        <h2 className={Classes.Title}>{props.meal.title}</h2>
        {props.noDesc ? null : <p className={Classes.Desc}>{props.meal.desc}</p>}


        <div className={Classes.PriceWrap}>
          <span className={Classes.Price}>{props.meal.price}</span>
          <div>
            <Count meal={props.meal}></Count>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Meal;