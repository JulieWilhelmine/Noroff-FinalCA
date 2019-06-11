// imports
import React from 'react';
import CardSpecificComponent from '../../components/card-specific-component/Card-Specific-Component';
import NavigationComponent from '../../components/navigation/Navigation';

export default class CardSpecific extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            cardsObj: [],
            cardId: this.props.match.params.id
        }
    }

    componentDidMount(){
        const app = this;
        app.getData();
    }

    getData(){
        const app = this;
        fetch('https://api.magicthegathering.io/v1/cards/'+ app.state.cardId)
        .then(response => {
            return response.json()
        })
        .then(result => {
            console.log(result)
            app.setState({
                cardsObj: result.card
            })
            console.log(result, 'result')
        });
    }

    render() {
        const app = this;
        console.log('app.state.cardId', app.props)
        let specificCard = <CardSpecificComponent image={app.state.cardsObj.imageUrl}
                                                  name={app.state.cardsObj.name}
                                                  text={app.state.cardsObj.text}
                                                  rarity={app.state.cardsObj.rarity}
                                                  colors={app.state.cardsObj.colors}
        >
        </CardSpecificComponent>;
        return (
                <div className="[ row ]">
                <div className="[ col-sm-12 ]">
                    <NavigationComponent></NavigationComponent>
                </div>
                    <div className="[ col-sm-12 ]">
                    <div className="[ specific-card ]">
                        {specificCard}
                    </div>
                    </div>
                </div>
        );
    }
}
