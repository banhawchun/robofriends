import React, { Fragment } from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	
	return (
		<Fragment>
			{
				robots.map((robo, i) => {
					return (
						<Card
						  key={i}
						  id={robots[i].id}
						  name={robots[i].name}
						  email={robots[i].email}
						/>
					);
				})
			}
		</Fragment>
	);
}

export default CardList;