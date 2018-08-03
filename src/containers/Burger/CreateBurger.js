import React, { Component } from 'react';
import axios from '../../axios';
import './CreateBurger.css';

class CreateBurger extends Component {
    componentDidMount = () => {
        axios.get("/ingredients.json")
            .then(response => {
                const data = response.data;
                const ingredients = Object.keys(data).map(key => {
                    return {
                        ...data[key],
                        id: key,
                        quantity: 0
                    }
                });
                this.setState({ ingredients });
            })
            .catch(error => console.log(error));
    }

    handleCreateBurger = evt => {
        evt.preventDefault();
    }

    handleCancelChanges = evt => {
        evt.preventDefault();
        this.props.history.goBack();
    }

    handleAddIngredient = ingredientId => {

    }

    handleRemoveIngredient = ingredientId => {
        
    }

    render() {
        let ingredients = <p>loading...</p>
        if(this.state.ingredients) {
            ingredients = this.state.ingredients.map(ingredient => {
                return (
                    <div 
                        className="BurgerIngredientItem"
                        key={ingredient.id}>
                        <button 
                            className="BurgerButton BurgerButtonAdd"
                            onClick={ ingredientId => this.handleAddIngredient(ingredientId)}
                            >+</button>
                        <span className="IngredientQuantity">{ingredient.quantity}</span>
                        <button
                            className="BurgerButton BurgerButtonRemove" 
                            onClick={ ingredientId => this.handleRemoveIngredient(ingredientId)}
                            >-</button>
                        <span className="IngredientName">{ingredient.name}, </span>
                        <span className="IngredientPrice">{ingredient.price} грн</span>
                    </div>
                );        
            });
        }

        return (
            <div className="CreateBurger">
                <form onSubmit={ evt => this.handleCreateBurger(evt) }>
                    <div className="">
                        <p>
                            <label>Назва: </label>
                            <input 
                                onChange={ evt => this.handleNameChange(evt) }
                                type="text" 
                                name="name"/>
                        </p>
                        <p>
                            <span>Ціна: {this.state.burger && this.state.burger.price}</span>
                        </p>

                        <input 
                            className="BurgerButton BurgerButtonSave" 
                            type="submit" 
                            value="зберегти" />
                        <button 
                            className="BurgerButton BurgerButtonCancel"
                            onClick={ evt => this.handleCancelChanges(evt) }
                            >відмінити
                        </button>

                        <div className="">
                            <hr />
                            <p>інгредієнти</p>
                            { ingredients }
                        </div>
                    </div>
                    <hr />
                </form>
            </div>
        );
    }

    state = {
        burger: null,
        ingredients: null,
        saving: false
    }
}

export default CreateBurger;