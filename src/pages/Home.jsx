import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Categories, PizzasBlock, SortPopup, PizzasLoadingBlock } from '../components';
import { setCategory } from '../redux/action/filters';
import { fetchPizzas } from '../redux/action/pizzas';
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
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);
  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, []);
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
        {isLoaded
          ? items.map((obj) => <PizzasBlock key={obj.id} {...obj} />)
          : Array(12)
              .fill(0)
              .map((_, index) => <PizzasLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
