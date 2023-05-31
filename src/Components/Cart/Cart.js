import React, { useContext, useEffect, useState } from 'react';
import classes from './Cart.module.css'
import iconImg from '../../asset/bag.png'
import CartContext from '../../store/CartContext';
import CartDetail from './CartDetail/CartDetail';
import Checkout from './Checkout/Checkout';

const Cart = () => {
  const ctx = useContext(CartContext)

  // 添加一个state来设置详情是否显示
  const [showDetail, setShowDetail] = useState(false)

  // 结账页的显示和隐藏
  const [shwoCheckout, setShowCheckout] = useState(false)

  useEffect(() => {
    if (ctx.totalAmount === 0) {
      setShowDetail(false)
      setShowCheckout(false)
    }
  })

  const showCheckoutHandler = () => {
    if (ctx.totalAmount === 0) return
    setShowCheckout(true)
  }

  const hideCheckoutHandler = () => {
    setShowCheckout(false)
  }

  //添加显示详情页的函数
  const toggleDeatilHandler = () => {
    if (ctx.totalAmount === 0) {
      setShowDetail(false)
      return
    }
    setShowDetail(!showDetail)
  }

  return (
    <div className={classes.Cart} onClick={toggleDeatilHandler}>
      {shwoCheckout && <Checkout onHide={hideCheckoutHandler}></Checkout>}
      {/* {购物车详情} */}
      {showDetail && < CartDetail></CartDetail>}

      <div className={classes.Icon}>
        <img src={iconImg} alt="" />
        {ctx.totalAmount === 0 ? null : <span className={classes.TotalAmount}>{ctx.totalAmount}</span>}
      </div>
      {ctx.totalAmount === 0 ? <p className={classes.noMeal}>未选购商品</p> : <p className={classes.Price}>{ctx.totalPrice}</p>}

      <button onClick={showCheckoutHandler} className={`${classes.Button} ${ctx.totalAmount === 0 ? classes.Disabled : ''}`}> 结算</button>
    </div>
  );
};

export default Cart;