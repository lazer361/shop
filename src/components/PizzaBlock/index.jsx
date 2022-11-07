import React from 'react';
import { SearchContext } from '../../App';


function PizzaBlock({ id, title, price, imageUrl, sizes, types }) {
  
  const typeNames = ['тонкое', 'традиционное'];

  const [activeType, setActibeType] = React.useState(0);
  const {payCount, setPayCount } = React.useContext(SearchContext);
  const {moneyCount, setMoneCount} = React.useContext(SearchContext);
  const {purchases, setPurchases} = React.useContext(SearchContext);
  const [pizzaCount, setPizzaCount] = React.useState(0);
  const [activeSize, setActibeSize] = React.useState(0);

  const onClickAdd = () => {
    
    setPizzaCount(pizzaCount + 1);
    setPayCount(payCount + 1);
    setMoneCount(moneyCount + price);

    let copy = Object.assign([], purchases);
    copy.push([id, title, price, imageUrl, sizes[activeSize], typeNames[activeType], payCount]);
    setPurchases(copy);
  }

  return(
      <div className='pizza-block-wrapper'>
        <div className="pizza-block">
          <img
            className="pizza-block__image"
            src={imageUrl}
            alt="Pizza"
          />
          <h4 className="pizza-block__title">{title}</h4>
          <div className="pizza-block__selector">
            <ul>
              {
                types.map((typeId, i) => (
                  <li key={i} onClick={() => setActibeType(i)} className={activeType === i ? 'active' : ''}>{typeNames[typeId]}</li>
                ))
              }
            </ul>
            <ul>
              {
                sizes.map((size, i) => (
                  <li key={i}  onClick={() => setActibeSize(i)} className={activeSize === i ? 'active' : ''}>{size} см</li>
                ))
              }
            </ul>
          </div>
          <div className="pizza-block__bottom">
            <div className="pizza-block__price">от {price} ₽</div>
            <button onClick={onClickAdd} className="button button--outline button--add">
              <span>Добавить</span>
            </button>
          </div>
        </div> 
      </div>
  );
}
export default PizzaBlock;