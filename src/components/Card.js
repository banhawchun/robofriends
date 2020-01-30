import React from 'react';

const Card = ({ id, name, email }) => {
	let randomNum = Math.floor((Math.random() * 88) + 2);
	return(
		<div className="tc bg-light-green dib pa2 ma4 br3 grow bw2 shadow-5">
			<img alt="Robots" src={`https://robohash.org/${randomNum}?200x200`}/>
			<div>
				<h2>{ name }</h2>
				<p>{ email }</p>
			</div>
		</div>
	);
} 


export default Card;