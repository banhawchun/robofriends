import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import '../containers/App.css';

class App extends Component  {
	constructor(){
		super();
		this.state = {
			robots1: [],
			searchField: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ robots1: users }));
		
	}

	whenSearchChanges = (event) => {
		this.setState({ searchField: event.target.value })
	}

	render(){
		const { robots1, searchField } = this.state;
		const filteredRobot = robots1.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})

		// Ternary Operator: if robot length = 0 show Loading..., else render everything
		return (!robots1.length) ?
			<h1>Loading...</h1> :
			(
			<div  className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.whenSearchChanges}/>
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobot}/>
					</ErrorBoundry>
				</Scroll>
			</div>
			);
	}
}

export default App;