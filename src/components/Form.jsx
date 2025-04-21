import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    render() {
        const {
            cardName,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardImage,
            cardRare,
            cardTrunfo,
            hasTrunfo,
            isSaveButtonDisabled,
            onInputChange,
            onSaveButtonClick } = this.props;

        function TrunfoValidation() {
            if (hasTrunfo) {
                return <p>Você já tem um Super Trunfo em seu baralho</p>;
            }
            return (
                <div>
                    <label htmlFor="trunfo-input">
                        Super Trybe Trunfo
                        <input
                            name="cardTrunfo"
                            data-testid="trunfo-input"
                            type="checkbox"
                            onChange={onInputChange}
                            checked={cardTrunfo}
                        />
                    </label>
                </div>
            );
        }
        return (
            <div>
                <form>
                    <label htmlFor="cardName">
                        <input
                            name="cardName"
                            type="text"
                            data-testid="name-input"
                            value={cardName}
                            onChange={onInputChange}
                        />
                    </label>
                    <div>
                        <label htmlFor="description">
                            Descrição
                            <textarea
                                name="cardDescription"
                                value={cardDescription}
                                onChange={onInputChange}
                                data-testid="description-input"
                                placeholder="Descrição da carta"
                            />
                        </label>
                    </div>
                    <input
                        name="cardAttr1"
                        type="number"
                        value={cardAttr1}
                        onChange={onInputChange}
                        data-testid="attr1-input"
                    />
                    <label htmlFor="attr2">
                        <input
                            name="cardAttr2"
                            type="number"
                            value={cardAttr2}
                            onChange={onInputChange}
                            data-testid="attr2-input"
                        />
                    </label>
                    <label htmlFor="attr3">
                        <input
                            name="cardAttr3"
                            type="number"
                            value={cardAttr3}
                            onChange={onInputChange}
                            data-testid="attr3-input"
                        />
                    </label>
                    <label htmlFor="image">
                        <input
                            name="cardImage"
                            type="text"
                            value={cardImage}
                            onChange={onInputChange}
                            data-testid="image-input"
                        />
                    </label>
                    <label htmlFor="rarity">
                        <select
                            value={cardRare}
                            onChange={onInputChange}
                            data-testid="rare-input"
                        >
                            <option value="normal">normal</option>
                            <option value="raro">raro</option>
                            <option value="muito raro">muito raro</option>
                        </select>
                    </label>
                    {TrunfoValidation()}
                    <button
                        type="button"
                        data-testid="save-button"
                        disabled={isSaveButtonDisabled}
                        onClick={onSaveButtonClick}
                    >
                        Salvar
                    </button>
                </form>
            </div>
        );
    }
}

Form.propTypes = {
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
    hasTrunfo: PropTypes.bool.isRequired,
    isSaveButtonDisabled: PropTypes.bool.isRequired,
    onInputChange: PropTypes.func.isRequired,
    onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
