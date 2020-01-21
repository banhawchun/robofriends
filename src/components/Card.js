import React from 'react';

const Card = ({ id, name, email }) => {
	return(
		<div className="tc bg-light-green dib pa2 ma4 br3 grow bw2 shadow-5">
			<img alt="Robots" src={`https://robohash.org/${id}?200x200`}/>
			<div>
				<h2>{ name }</h2>
				<p>{ email }</p>
			</div>
		</div>
	);
} 


export default Card;