// imports
import React from 'react';

export default class Search extends React.Component {
constructor(props) {
    super(props);
    this.handleCardSearchTerm = this.handleCardSearchTerm.bind(this);
}

handleCardSearchTerm(){
    const app = this;
    let phrase = app.refs.searchTerm.value;
    app.props.onSearchTerm(phrase);
}

    render() {
        const app = this;

        return (
            <div className="[ search ]">
                <input className="[ search__input ]" type="text" 
                       ref="searchTerm" 
                       onChange={app.handleCardSearchTerm} 
                       class="form-control" 
                       placeholder="Search for a card" 
                />
            </div>
        );
    }
}
