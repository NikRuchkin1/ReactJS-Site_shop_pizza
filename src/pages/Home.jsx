import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Categories, PizzasBlock, SortPopup, PizzasLoadingBlock } from '../components';
import { setCategory, setSortBy } from '../redux/action/filters';
import { fetchPizzas } from '../redux/action/pizzas';
import { addPizzaToCart } from '../redux/action/cart';

const categoryNames = ['Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавит', type: 'name', order: 'asc' },
];
function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);
  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [sortBy, category]);
  const onSelectCategory = (index) => {
    dispatch(setCategory(index));
  };
  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);
  const handleAddPizza = (obj) => {
    dispatch(addPizzaToCart(obj));
  };
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <PizzasBlock
                onClickAddPizza={(obj) => handleAddPizza(obj)}
                isLoading={true}
                key={obj.id}
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                {...obj}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <PizzasLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
