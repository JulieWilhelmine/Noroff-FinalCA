// imports
import React from 'react';

export default class CardComponent extends React.Component {
    render() {
        return (
            <div className="[ col-sm-4 ]">
                <div className="[ card ]">
                        <h3 className="[ card__name ]">{this.props.name}</h3>
                        <div><img src={this.props.image} /></div>
                        <a href={'#/card-specific-page/'+this.props.id} >
                        <button className="[ card__button ]">View more</button></a>
                </div>
            </div>
        );
    }
}
