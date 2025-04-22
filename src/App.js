import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';

const INITIAL = {
  cardName: '',
  cardDescription: '',
  cardImage: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardRare: 'normal',
  cardTrunfo: false,
  isSaveButtonDisabled: true,
  hasTrunfo: false,
  newCard: [],
};

const maxAttrNumber = 90;
const maxNumber = 210;
let filter = false;

class App extends Component {
  constructor() {
    super();

    this.state = INITIAL;
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.filterName = this.filterName.bind(this);
    this.filterRare = this.filterRare.bind(this);
    this.filterTrunfo = this.filterTrunfo.bind(this);
  }


  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value }, () => {
      const { cardName, cardDescription, cardImage, cardAttr1,
        cardAttr2, cardAttr3, cardRare, newCard } = this.state;

      const verifyTrunfo = newCard.some(({ cardTrunfo }) => cardTrunfo === true);
      if (verifyTrunfo || target.checked) {
        this.setState({ hasTrunfo: true });
      } else {
        this.setState({ hasTrunfo: false });
      }

      const cases = [
        Number(cardAttr1) >= 0 && Number(cardAttr1) <= maxAttrNumber,
        Number(cardAttr2) >= 0 && Number(cardAttr2) <= maxAttrNumber,
        Number(cardAttr3) >= 0 && Number(cardAttr3) <= maxAttrNumber,
        (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxNumber),
        cardName !== '',
        cardDescription !== '',
        cardImage !== '',
        cardRare !== '',
      ];

      const verifyStatus = cases.every((status) => status === true);
      if (verifyStatus) {
        this.setState({ isSaveButtonDisabled: false });
      } else {
        this.setState({ isSaveButtonDisabled: true });
      }
    });
  }

  onSaveButtonClick() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, newCard } = this.state;
    const savedCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      newCard,
    };
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      isSaveButtonDisabled: true,
      cardTrunfo: false,
    });
    this.setState(({ newCard }) => (
      {
        newCard: [...newCard, savedCard],
      }));
  }

  deleteCard({ target }) {
    const { newCard } = this.state;
    const removeCard = newCard.filter(({ cardName }) => cardName !== target.value);
    this.setState(({ newCard: removeCard, hasTrunfo: false }));
  }

  filterName({ target }) {
    const { newCard } = this.state;
    const getName = newCard.filter(({ cardName }) => cardName.includes(target.value));
    this.setState({ newCard: getName, hasTrunfo: false });
  }

  filterRare({ target }) {
    if (target.value !== 'todas') {
      const { newCard } = this.state;
      const getRare = newCard.filter(({ cardRare }) => cardRare === target.value);
      this.setState({ newCard: getRare, hasTrunfo: false });
    }
  }

  filterTrunfo({ target }) {
    if (target.checked) filter = true;
    const { newCard } = this.state;
    const getTrunfo = newCard.filter(({ cardTrunfo }) => cardTrunfo === true);
    this.setState({ newCard: getTrunfo });
  }


  render() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
      cardRare,
      isSaveButtonDisabled,
      newCard,
      hasTrunfo,
    } = this.state;

    return (
      <main className="mainContainer">
        <Form
          isSaveButtonDisabled={isSaveButtonDisabled}
          cardName={cardName}
          cardDescription={cardDescription}
          cardImage={cardImage}
          cardAttr1={cardAttr1}
          cardAttr2={cardAttr2}
          cardAttr3={cardAttr3}
          cardRare={cardRare}
          hasTrunfo={hasTrunfo}
          cardTrunfo={cardTrunfo}
          onInputChange={this.onInputChange}
          onSaveButtonClick={this.onSaveButtonClick}
        />
        <p>Pré-visualização da carta</p>
        <Card
          cardName={cardName}
          cardDescription={cardDescription}
          cardImage={cardImage}
          cardAttr1={cardAttr1}
          cardAttr2={cardAttr2}
          cardAttr3={cardAttr3}
          cardRare={cardRare}
          cardTrunfo={cardTrunfo}
          hasTrunfo={hasTrunfo}
        />
        <span className="allCards">
          Filtros de Busca
          <label htmlFor="name-filter">
            <input
              disabled={filter}
              type="text"
              data-testid="name-filter"
              onChange={this.filterName}
            />
          </label>
          <label htmlFor="filter-rare">
            <select
              disabled={filter}
              data-testid="rare-filter"
              onChange={this.filterRare}
            >
              <option>todas</option>
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <label htmlFor="filter-trunfo">
            Super Trunfo
            <input
              type="checkbox"
              data-testid="trunfo-filter"
              onChange={this.filterTrunfo}
              id="filter-trunfo-filter"
            />            
          </label>
          Todas as cartas
          {newCard.map((card, index) => (
            <div key={`${card.cardName}${index}`}>
              <Card
                cardName={card.cardName}
                cardDescription={card.cardDescription}
                cardAttr1={card.cardAttr1}
                cardAttr2={card.cardAttr2}
                cardAttr3={card.cardAttr3}
                cardImage={card.cardImage}
                cardRare={card.cardRare}
                cardTrunfo={card.cardTrunfo}
                hasTrunfo={card.hasTrunfo}
              />
              <button
                id={card.cardName}
                type="button"
                data-testid="delete-button"
                onClick={this.deleteCard}
                value={card.cardName}
              >
                Excluir
              </button>
            </div>
          ))}
        </span>
      </main>
    );
  }
}

export default App;
