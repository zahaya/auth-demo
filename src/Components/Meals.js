import React from 'react';
import Meal from './Meal/Meal';
import classes from './Meals.module.css'

// 给meals添加滚动条
const Meals = (props) => {
  return (
    <div className={classes.Meals}>
      {props.mealsData.map(item => <Meal key={item.id} meal={item} />)}
    </div>
  )
}

export default Meals