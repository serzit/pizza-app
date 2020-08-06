import React, {useState} from 'react';

const Categories = ({items}) => {
	const [activeItem, setActiveItem] = useState(null);

	const onSelectItem = (index) => {
		setActiveItem(index);
	}

	return (
		<div>
			<div className="categories">
				<ul>
					<li
						className={activeItem === null ? 'active' : ''}
						onClick={() => onSelectItem(null)}>Все
					</li>
					{
						items &&
						items.map((pizzaCategory, index) => (
							<li
								className={activeItem === index ? 'active' : ''}
								onClick={() => onSelectItem(index)}
								key={`${pizzaCategory}_${index}`}
							>
								{pizzaCategory}</li>
						))
					}
				</ul>
			</div>
		</div>
	)
}

export default Categories