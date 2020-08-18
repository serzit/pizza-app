import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {setCategory} from '../redux/actions/filters';

import {Categories, PizzaBlock, SortPopup} from '../components';

const Home = ({onClickItem}) => {
	const dispatch = useDispatch();
	const items = useSelector(({pizzas}) => pizzas.items);

	return (
		<div className="container">
			<div className="content__top">
				<Categories
					onClickItem={(index) => dispatch(setCategory(index))}
					items={[
						'Мясные',
						'Вегетарианские',
						'Гриль',
						'Острые',
						'Закрытые'
					]}/>
				<SortPopup items={[
					{name: 'популярности', type: 'popular'},
					{name: 'цене', type: 'price'},
					{name: 'алфавит', type: 'alphabet'}
				]}/>
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{
					items && items.map((obj) => (
						<PizzaBlock
							key={obj.id}
							{...obj}
						/>
					))
				}
			</div>
		</div>
	)
}

export default Home;