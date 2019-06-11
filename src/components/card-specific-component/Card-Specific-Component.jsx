// imports
import React from 'react';

export default class CardSpecificComponent extends React.Component {
    render() {
        return (
            <div className="[ row ]">
                <div className="[ col-sm-12 ]">
                    <br /><br /><br />
                </div>
                <div className="[ col-sm-4 ] [ specific-card__image ]">
                    <img src={this.props.image} />
                </div>
                <div className="[ col-sm-8 ] [ specific-card__info ]">
                    <h2 className="[ specific-card__name ]">{this.props.name}</h2>
                    <p>{this.props.text}</p>
                    <br />
                    <b>Rarity:</b> <p>{this.props.rarity}</p>
                    <b>Colors:</b> <p>{this.props.colors}</p>
                </div>
            </div>
        );
    }
}
