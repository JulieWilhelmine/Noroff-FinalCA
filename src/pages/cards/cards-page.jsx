// imports
import React from "react";
import Layout from "../../components/Layout/Layout";
import CardComponent from "../../components/card-component/Card-Component";
import Search from "../../components/search/Search";
import NavigationComponent from "../../components/navigation/Navigation";

export default class CardsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      magicObj: [],
      magicCards: [],
      cardArray: [],
      cardSearch: []
    };
    this.getData = this.getData.bind(this);
    this.handleSearchTerm = this.handleSearchTerm.bind(this);
  }

  componentDidMount() {
    const app = this;
    app.getData();
  }

  getData() {
    const app = this;
    fetch("https://api.magicthegathering.io/v1/cards")
      .then(response => {
        return response.json();
      })
      .then(result => {
        app.setState({
          cardSearch: result.cards,
          cardArray: result.cards
        });
      });
  }

  handleSearchTerm(searchTerm) {
    const app = this;
    let cardObj = app.state.cardSearch;

    let cards = cardObj.filter(card => {
      return card.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    app.setState({
      magicCards: [],
      cardArray: cards
    });
  }

  render() {
    const app = this;
    let magicArray = app.state.cardArray;
    if (magicArray !== undefined) {
      magicArray.forEach((value, key) => {
        let image;
        if (value.imageUrl !== undefined) {
          image = value.imageUrl;
        } else {
          image = "https://via.placeholder.com/300";
        }
        app.state.magicCards.push(
          <CardComponent
            name={value.name}
            image={image}
            id={value.id}
            text={value.text}
            rarity={value.rarity}
            colors={value.colors}
            key={key}
          ></CardComponent>
        );
      });
    }

    return (
      <div className="[ row ]">
        <div className="[ col-sm-12 ]">
          <NavigationComponent></NavigationComponent>
        </div>
        <div className="[ col-sm-12 ]">
          <Search onSearchTerm={app.handleSearchTerm}></Search>
        </div>
        <div className="[ col-sm-12 ]">{app.state.magicCards}</div>
      </div>
    );
  }
}
