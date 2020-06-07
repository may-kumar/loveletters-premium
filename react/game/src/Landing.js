import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import './Game.css';
import {Values} from '../assets/values.js';
import {Container, Row, Col} from 'react-bootstrap';


class Landing extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    	gameOn: true
	    };
	   	this.startGame = this.startGame.bind(this);
	   	this.endGame = this.endGame.bind(this);
	}

	startGame = () => {
		this.props.gameCallback(true);
	}

	endGame = () => {
		this.setState({
			gameOn: false //remove this player from the game metadata; it could still go on
		});
	}

	render() {
		if(this.props.toStartGame) {
			return(
				<Container className="Game-header">
				  	<Row style={{margin: 'auto'}}>
				  		<h4 className='Play-status'>Waiting For Players...</h4>
				  	</Row>
				  	<Row style={{margin: 'auto'}}>
				  		<ListGroup>
				  			{Values.all_players.map((item, i) => {
		  						return <ListGroup.Item className='List-item-design'>{item}</ListGroup.Item>})}
						</ListGroup>
				  	</Row>
				  	<Row style={{width: '50vw'}}> 
				  		<Button size="lg" block className='Confirm-button' onClick={this.startGame}>Start Game</Button>
				  	</Row>
				</Container>
			);
		} 
		else {
			return(
				<Container className="Game-header">
				<Row style={{margin: 'auto'}}>
				  	<h4 className='Play-status'>{this.props.final_winner} won the game!</h4>
			  	</Row>
			  	<Row style={{margin: 'auto'}}> 
			  		<Button size="lg" style={{width: '30vw'}} block className='Confirm-button' onClick={this.endGame}>Leave Game</Button>
			  		<Button size="lg" style={{width: '30vw'}} block className='Confirm-button' onClick={this.startGame}>Start New Game</Button>
			  	</Row>
				</Container>
			);
		}
	}
}

export default Landing;
