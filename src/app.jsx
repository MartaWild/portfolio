import * as React from 'react';
import * as ReactDOM from 'react-dom';

const container = document.getElementById('container');

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {};

    }

    render(){
		return (
		   <div>
			РОБОТОЕТ
		   </div>
		)
    }

}

ReactDOM.render(<App />, container);