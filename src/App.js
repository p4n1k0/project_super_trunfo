import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardTrunfo: false,
      button: true,
      hasTrunfo: false,
      newCard: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleHasTrunfo = this.handleHasTrunfo.bind(this);
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value }, () => {
      const { cardName, cardDescription, cardImage, cardAttr1,
        cardAttr2, cardAttr3, cardRare } = this.state;

      const maxAttrNumber = 90;
      const maxNumber = 210;

      const cases = [
        Number(cardAttr1) >= 0 && Number(cardAttr1) <= maxAttrNumber,
        Number(cardAttr2) >= 0 && Number(cardAttr2) <= maxAttrNumber,
        Number(cardAttr3) >= 0 && Number(cardAttr3) <= maxAttrNumber,
        (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxNumber),
        cardName !== '',
        cardDescription !== '',
        cardImage !== '',
        cardAttr1 !== '',
        cardAttr2 !== '',
        cardAttr3 !== '',
        cardRare !== false,
      ];

      const verifyStatus = cases.every((status) => status === true);
      this.setState({ button: !verifyStatus });
    });
  }

  handleSave(event) {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare } = this.state;

    this.setState((previous) => ({
      newCard: [...previous.newCard, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare
      }],
    }), () => {
      this.handleHasTrunfo();
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardTrunfo: false,
        cardImage: '',
        cardRare: false,
      });
    });
    event.preventDefault();
  }

  handleHasTrunfo = () => {
    const { cardTrunfo } = this.state;
    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
  }

  render() {
    const { cardName, cardDescription, cardImage, cardAttr1, cardAttr2,
      cardAttr3, cardTrunfo, cardRare, button, newCard, hasTrunfo } = this.state;


    return (
      <main>
        <Form
          isSaveButtonDisabled={button}
          cardName={cardName}
          cardDescription={cardDescription}
          cardImage={cardImage}
          cardAttr1={cardAttr1}
          cardAttr2={cardAttr2}
          cardAttr3={cardAttr3}
          cardRare={cardRare}
          cardTrunfo={cardTrunfo}
          hasTrunfo={hasTrunfo}
          onInputChange={this.handleChange}
          onSaveButtonClick={this.handleSave}
        />
        <Card
          cardName={cardName}
          cardDescription={cardDescription}
          cardImage={cardImage}
          cardAttr1={cardAttr1}
          cardAttr2={cardAttr2}
          cardAttr3={cardAttr3}
          cardRare={cardRare}
          cardTrunfo={cardTrunfo}
          onInputChange={this.handleChange}
        />
        <section>
          {newCard.map((card) => (
            <Card
              key={card.cardName}
              cardName={card.cardName}
              cardDescription={card.cardDescription}
              cardAttr1={card.cardAttr1}
              cardAttr2={card.cardAttr2}
              cardAttr3={card.cardAttr3}
              cardImage={card.cardImage}
              cardRare={card.cardRare}
              cardTrunfo={card.cardTrunfo}
            />))}
        </section>
      </main>
    );
  }
}

export default App;
