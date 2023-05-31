import React, { useState, useReducer } from 'react';
import Meals from './Components/Meals';
import CartContext from './store/CartContext';
import FilterMeals from './Components/FilterMeals/FilterMeals';
import Cart from './Components/Cart/Cart';

// 模拟一组食物数据
const MEALS_DATA = [
  {
    id: '1',
    title: '汉堡包',
    desc: '百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
    price: 12,
    img: '/img/meals/1.png'
  },
  {
    id: '2',
    title: '双层吉士汉堡',
    desc: '百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！',
    price: 20,
    img: './img/meals/2.png'
  },
  {
    id: '3',
    title: '巨无霸',
    desc: '两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！',
    price: 24,
    img: '/img/meals/3.png'
  }, {
    id: '4',
    title: '麦辣鸡腿汉堡',
    desc: '金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！',
    price: 21,
    img: '/img/meals/4.png'
  }, {
    id: '5',
    title: '板烧鸡腿堡',
    desc: '原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！',
    price: 22,
    img: '/img/meals/5.png'
  }, {
    id: '6',
    title: '麦香鸡',
    desc: '清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！',
    price: 14,
    img: '/img/meals/6.png'
  }, {
    id: '7',
    title: '吉士汉堡包',
    desc: '百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！',
    price: 12,
    img: '/img/meals/7.png'
  }
];

const cartDataReducer = (state, action) => {
  // meal 要添加到购物车的商品
  const newCart = { ...state }
  switch (action.type) {
    case 'addItem':
      // 判断购物车中是否存在该商品
      if (newCart.items.indexOf(action.meal) === -1) {
        // 将meal添加到购物车
        newCart.items.push(action.meal)
        // 修改商品数量
        action.meal.amount = 1
      } else {
        action.meal.amount += 1
      }

      // 增加总数
      newCart.totalAmount += 1
      // 增加总金额
      newCart.totalPrice += action.meal.price
      return newCart

    case 'removeItem':
      // 减少商品数量
      action.meal.amount -= 1
      // 检查商品数量是否为0
      if (action.meal.amount === 0) {
        // 从购物车中移除商品
        newCart.items.splice(newCart.items.indexOf(action.meal), 1)
      }
      // 修改商品总数和金额
      newCart.totalAmount -= 1
      newCart.totalPrice -= action.meal.price
      return newCart

    case 'clearCart':
      newCart.items.forEach(item => delete item.amount)
      newCart.items = []
      newCart.totalAmount = 0
      newCart.totalPrice = 0
      return newCart

    default:
      return state

  }
}


const App = () => {
  // 存储食物列表
  const [mealsData, seMealsData] = useState(MEALS_DATA)


  const [cartData, cartDataDispatch] = useReducer(cartDataReducer, {
    items: [],
    // 商品总数量
    totalAmount: 0,
    // 商品总价钱
    totalPrice: 0
  })

  // 查询购物车
  const filterHandler = (keywords) => {
    // // 判断是否为空
    // if (keywords)
    const newMealsData = MEALS_DATA.filter(item => item.title.indexOf(keywords) !== -1)
    seMealsData(newMealsData)
  }

  return (
    <CartContext.Provider value={{ ...cartData, cartDataDispatch }}>
      <div>
        <FilterMeals onFilter={filterHandler}></FilterMeals>
        <Meals onAdd={cartDataDispatch} onSub={cartDataDispatch} mealsData={mealsData}></Meals>
        <Cart></Cart>

      </div>
    </CartContext.Provider>

  );
};

export default App;
