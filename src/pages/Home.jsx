import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Categories, PizzasBlock, SortPopup } from '../components';
import { setCategory } from '../redux/action/filters';
import { setActiveItem } from '../components/Categories';

const categoryNames = ['Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];
function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const onSelectCategory = (index) => {
    dispatch(setCategory(index));
  };
  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={categoryNames} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((obj) => <PizzasBlock key={obj.id} {...obj} />)}{' '}
      </div>
    </div>
  );
}

export default Home;
