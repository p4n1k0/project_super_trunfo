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
            onSaveButtonClick,
        } = this.props;

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
                    <label htmlFor="attr1">
                        <input
                            name="cardAttr1"
                            type="number"
                            value={cardAttr1}
                            onChange={onInputChange}
                            data-testid="attr1-input"
                        />
                    </label>
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
                            name="cardRare"
                            value={cardRare}
                            onChange={onInputChange}
                            data-testid="rare-input"
                        >
                            <option value="normal">normal</option>
                            <option value="raro">raro</option>
                            <option value="muito raro">muito raro</option>
                        </select>
                    </label>
                    <label className="label" htmlFor="trunfo">
                        Super Trybe Trunfo
                        {hasTrunfo
                            ? <p>Você já tem um Super Trunfo em seu baralho</p>
                            : (
                                <input
                                    type="checkbox"
                                    data-testid="trunfo-input"
                                    name="cardTrunfo"
                                    checked={cardTrunfo}
                                    onChange={onInputChange}
                                    id="trunfo"
                                />
                            )}
                    </label>
                    <button
                        type="button"
                        data-testid="save-button"
                        disabled={isSaveButtonDisabled}
                        value={isSaveButtonDisabled}
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
