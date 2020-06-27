import React from 'react';
import './App.css';
import Message from './Message';



const initialState = {
	name: 'init',
	state: 'initState'
}

type State = Readonly<typeof initialState>;

//function App() {
class App extends React.Component<any, State> {

	componentWillMount() {
		console.log('componentWillMount');
	}

	componentDidMount() {
		console.log('componentDidMount');
	}

	readonly state: State = initialState;

	render() {
		//let firstValue: string = "Hello";
		//let firstValue: number = 28343.232;
		//let firstValue: boolean = true;
		//let firstValue: number[] = [2, 52, 6, 2, 6, 2,];
		//let firstValue: string[] = ['ksdjfskd', 'kdjkdfj'];
		const args: [number, string, boolean] = [2323, "hello", false];
		//enum Position { first, second };
		enum Position { first = 1, second = 2 };
		const firstPlayer: Position = Position.first;
		const secondPlayer: Position = Position.second;
		let name: any = 2343; // only for prototyping, etc.
		const displayGreeting = (name: string): void => {
			console.log(`Hello ${name}`);
		}
		displayGreeting('Christopher');

		let message: string = '';
		if (args[2]) {
			message = `TRUE: ${args[0]} and ${args[1]}`;
		} else {
			message = `FALSE: ${args[0]} and ${args[1]}`;
		}

		return (
			<div className="App">
				<header className="App-header">
					<p>Message: {message}</p>
					<p>First Player is {firstPlayer}.</p>
					{/* <Message name="okok" status="high" /> */}
					<Message name={this.state.name} status={this.state.state} />
				</header>
			</div>
		)
	}


	// );
}

export default App;
