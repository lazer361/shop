import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';



const Home = () => {
    const { searchValue} = React.useContext(SearchContext);
    const [items, setItems] = React.useState([]);
    const [isLoading, setisLoading] = React.useState(true);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [categoruId, setCategoruId] = React.useState(0);
    const [sortType, setSortType] = React.useState({
        name: 'популярности',
        sortProperty: 'rating',
    });
   
  
    React.useEffect(() => {
      setisLoading(true);

      const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
      const sortBy = sortType.sortProperty.replace('-', '');
      const category = categoruId > 0 ? `category=${categoruId}`: '';
      const search = searchValue ? `search=${searchValue}`: '';

      // page=${currentPage}&limit=4&

      fetch(`https://63649bb68a3337d9a2fa7107.mockapi.io/items?${search}&${category}&sortBy=${sortBy}&order=${order}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setisLoading(false);
      });
      window.scrollTo(0, 0);
    }, [categoruId, sortType, searchValue]);



    const pizzas = items.filter(obj => {
      if(obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }

      return false;
    }).map((obj) => (
      <PizzaBlock
      key={obj.id}
      id={obj.id} 
      imageUrl={obj.imageUrl} 
      title={obj.title} 
      types={obj.types} 
      sizes={obj.sizes} 
      price={obj.price} 
      category={obj.category} 
      rating={obj.rating} 
      />
  ));

  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

    return (
        <div className="container">
            <div className="content__top">
            <Categories value={categoruId} onChangeCategory={(i) => setCategoruId(i)} />
            <Sort value={sortType} onChangeSort={(i) => setSortType(i)}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? skeletons : pizzas}
            </div>
            <Pagination onChangePage={(number) => setCurrentPage(number)} />
        </div>
    )
}

export default Home;