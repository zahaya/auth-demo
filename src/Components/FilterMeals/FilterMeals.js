import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import classes from './FilterMeals.module.css'

const FilterMeals = (props) => {
  let timer = null
  const inputChangeHandler = (e) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      const keywords = e.target.value.trim()
      props.onFilter(keywords)
    }, 300)

  }

  return (
    <div className={classes.FilterMeals}>
      <div className={classes.InputOuter}>
        <input className={classes.SearchInput} onChange={inputChangeHandler} type="text" placeholder='请输入关键字' />
        <FontAwesomeIcon className={classes.SearchIcon} icon={faSearch}></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default FilterMeals;