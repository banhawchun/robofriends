import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super();
        this.state = {
            hasError: false
        }
    }

    // to catch error, lifecycle DidCatch = try, catch block
    componentDidCatch(error, info){
    	this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError){
        	return <h1>Ooops, there's an error!!</h1>
        }
        return this.props.children;
    }

}

export default ErrorBoundry;