import React, { useContext, useState } from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import classes from './CartDetail.module.css'
import CartContext from '../../../store/CartContext';
import Meal from '../../Meal/Meal';
import Confirm from '../../UI/Confirm/Confirm';


const CartDetail = () => {
  const ctx = useContext(CartContext)

  // 设置state控制确认框的显示
  const [showConfirm, setShowConfirm] = useState(false)

  // 显示确认框
  const showConfirmHandler = () => {
    setShowConfirm(true)
  }

  const cancelHandler = (e) => {
    e.stopPropagation()
    setShowConfirm(false)
  }

  const okHandler = () => {
    // 清空购物车
    ctx.cartDataDispatch({ type: 'clearCart', })
  }

  return (
    <Backdrop >
      {showConfirm && <Confirm confirmText='确认清空购物车吗？' onCancel={cancelHandler} onOk={okHandler}></Confirm>}
      {/* 阻止事件冒泡 */}
      <div onClick={e => e.stopPropagation()} className={classes.CartDetail}>

        <header className={classes.Header}>

          <h2 className={classes.Title}>餐品详情</h2>

          <div className={classes.Clear} onClick={showConfirmHandler}>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            <span>清空购物车</span>
          </div>

        </header>

        <div className={classes.MealList}>

          {ctx.items.map(item => <Meal noDesc key={item.id} meal={item}></Meal>)}

        </div>


      </div>
    </Backdrop>
  );
};

export default CartDetail;