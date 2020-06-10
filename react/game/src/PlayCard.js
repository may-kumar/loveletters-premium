import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import './Game.css';
import {Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShieldAlt, faHandshake, faSkull} from '@fortawesome/free-solid-svg-icons';
import socket from './socket-context'

class PlayCard extends React.Component {
	
	constructor(props) {
	    super(props);
	    this.state = {
	    	selectedPlayers: this.props.syco,
	    	selectionSatisfied: false,
	    	selectedNumber: -1
	    }
	    this.selectPlayer = this.selectPlayer.bind(this);
	    this.selectNumber = this.selectNumber.bind(this);
		this.endPlay = this.endPlay.bind(this);
		this.getList = this.getList.bind(this);
	}

	componentWillMount() {
		socket.onmessage = (event) => {
	   		var obj = JSON.parse(event.data);
			console.log(obj)
			
			if(obj.type === 'discard') {
			}
	   	}
	}

	selectPlayer(type, item){ 
		let selectedPlayers = this.state.selectedPlayers;
		let x = 0;
		
		if(type==='single') {
			if(this.props.syco.length===0) //no sycophants; proceed as normal
				selectedPlayers = [item];
			
			if(this.props.cardPlayed!=="Guard" && this.props.cardPlayed!=="Bishop")
				this.setState({selectionSatisfied: true, selectedPlayers: selectedPlayers});
			else
				this.setState({selectedPlayers: selectedPlayers});
		}
		else {
			if(this.props.syco.length===0 || !this.props.syco.indexOf(item)>=0) { //this item is not a sycophant
				x = selectedPlayers.indexOf(item);
				if(x!==undefined && x>=0) {
					selectedPlayers.splice(x, 1);
				} else {
					selectedPlayers = selectedPlayers.concat(item);
				}
			}

			if(type==='double') {
				if(selectedPlayers.length===2) {
						this.setState({selectionSatisfied: true, selectedPlayers: selectedPlayers});
				} else {
					this.setState({selectionSatisfied: false, selectedPlayers: selectedPlayers});
				}
			} else {
				if(selectedPlayers.length===1 || selectedPlayers.length===2) {
						this.setState({selectionSatisfied: true, selectedPlayers: selectedPlayers});
				} else {
					this.setState({selectionSatisfied: false, selectedPlayers: selectedPlayers});
				}
			}	
		}
		console.log('selected player ids:'+selectedPlayers)
	}

	selectNumber(item) {
		this.setState({selectionSatisfied: true, selectedNumber: item});
		console.log('selected number:'+item);
	}

	endPlay() {
		const valuesToSend = {};
		valuesToSend['type'] = 'discard';
		valuesToSend['player'] = this.props.currentPlayer;
		valuesToSend['card'] = this.props.cardPlayed;
		valuesToSend['player1'] = null;
		valuesToSend['player2'] = null;
		valuesToSend['number'] = null;

		if(this.state.selectedPlayers.length>0)
			valuesToSend['player1'] = this.state.selectedPlayers[0];
		if(this.state.selectedPlayers.length>1)
			valuesToSend['player2'] = this.state.selectedPlayers[1];
		if(this.state.selectedNumber!==-1)
			valuesToSend['number'] = this.state.selectedNumber;

		console.log(valuesToSend);
		socket.send(JSON.stringify(valuesToSend));
	    console.log('sent discard')
		// getResult(valuesToSend);

		const results = {} //0 : no change (ex.Priest)
		results[this.state.selectedPlayer] = 1;//won
		results[this.props.currentPlayer] = -1;//lost and eliminated
		//display the result of the turn
		
		this.props.roundCallback(results);
	}

	getList() {
		var list = null;
		if(["Assassin", "Constable", "Count", "Countess", "Handmaid", "Princess"].indexOf(this.props.cardPlayed)>=0) { //no action
			list = null;
			console.log('list is null');
		}
		
		else {
			var enableCurrent = (this.props.cardPlayed==="Prince" || this.props.cardPlayed==="Sycophant");
			var choiceType = "";
			var isImmune = false;
  			var isSyco = false;
  			var isEliminated = false;

			if(this.props.cardPlayed==="Baroness") //one or two choices
				choiceType = "either";
			else if(this.props.cardPlayed==="Cardinal") // two choices
				choiceType = "double";
			else // single choice
				choiceType = "single";

	  		list = (<ListGroup>
  				{Object.entries(this.props.all_players).map(([id, value]) => {
  					isImmune = (this.props.immune.indexOf(id)>=0);
  					isSyco = (this.props.syco.indexOf(id)>=0);
  					isEliminated = (this.props.eliminated.indexOf(id)>=0);
					return <ListGroup.Item className='List-item-design'
								variant={(this.state.selectedPlayers.indexOf(id)>=0)?'dark':'light'}
								key={id}
								disabled={(enableCurrent?false:(id===this.props.currentPlayer)) || 
											isImmune || isEliminated}
								onClick={(e) => this.selectPlayer(choiceType, id, e)}>{value}

								{isImmune?<FontAwesomeIcon style={{float: 'right'}} icon={faShieldAlt}/>: <div></div>}
								{isSyco?<FontAwesomeIcon style={{float: 'right'}} icon={faHandshake}/>: <div></div>}
								{isEliminated?<FontAwesomeIcon style={{float: 'right'}} icon={faSkull}/>: <div></div>}
							</ListGroup.Item>})}
				</ListGroup>);  
	  	} 

		return list;
	}

	render() {
		const list = this.getList();
		const card_numbers = [1,2,3,4,5,6,7,8,9];

		if(list!=null) {
			return (
				<div>
					<Row style={{justifyContent: 'center'}}>
						<Col>{list}</Col>
						{(this.props.cardPlayed==="Guard"|| this.props.cardPlayed==="Bishop")?
							<Col>
								<ListGroup>
					  				{card_numbers.map((item, i) => {
										return <ListGroup.Item className='List-item-design'
													variant={this.state.selectedNumber===item?'dark':'light'}
													key={item} 
													disabled={item===1}
													onClick={(e) => this.selectNumber(item, e)}>{item}
												</ListGroup.Item>})}
								</ListGroup>
							</Col>:
							<div>
							</div>}
					</Row>
					<Row style={{width: '50vw', paddingTop: '10px', margin: 'auto'}}> 
						<Button size="lg" block className='Confirm-button' 
						disabled={!this.state.selectionSatisfied}
						onClick={this.endPlay}>OK</Button>
					</Row>
				</div>
			);
		}
		else {
			return (<div>{this.endPlay()}</div>);
		}
	}
}

export default PlayCard;