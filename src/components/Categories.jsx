import React from 'react';

function Categories({ items, onClick }) {
  const [activeItem, setActiveItem] = React.useState(null);
  const onSelectItem = (index) => {
    setActiveItem(index);
  };
  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? 'active' : ''}
          onClick={() => {
            onSelectItem(null);
          }}>
          Все
        </li>
        {items &&
          items.map((u, index) => (
            <li
              className={activeItem === index ? 'active' : ''}
              onClick={() => {
                onSelectItem(index);
              }}
              key={`${u}_${index}`}>
              {u}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
