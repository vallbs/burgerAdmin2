import React, { Component } from 'react';
import './IngredientDetails.css';
import axios from '../../axios';

class IngredientDetails extends Component {
    componentDidMount() {
        console.log("IngredientDetails.componentDidMount");
        let data = null;
        const ingredients = null;
        axios.get("/ingredients.json")
            .then(response => {
                const ingredientId = this.props.match.params.id;
                const data = response.data;

                //fetcihng data from firebase with id-templale 'i10'
                // const ingredients = Object.keys(data).map(key => {
                //     return data[key];
                // });

                //fetcihng data from firebase with firebase id 'LItuAvKa42Bmw9HfU4'
                const ingredients = Object.keys(data).map(key => {
                    return {
                        ...data[key],
                        id: key
                    }
                });
                let ingredient = ingredients.filter(ing => {
                    return ing.id === ingredientId;
                });
                ingredient = ingredient && ingredient[0];
                //console.log(ingredient);
                this.setState({
                    ingredient,
                    loading: false
                });

            })
            .catch(error => console.log("error"));
    }

    handleSaveIngredient = (evt) => {
        evt.preventDefault();
        console.log(evt);
        console.log("IngredientDetails.handleSaveIngredient");

    }

    handleCancelChanges = (evt) => {
        evt.preventDefault();
        console.log("IngredientDetails.handleCancelChanges");
        console.log(this.props);
        console.log(evt);
        this.props.history.goBack();
    }

    render() {
        console.log("IngredientDetails.render");

        let ingredient = <p>loading...</p>;
        let ingredientNameInput = <span>loading...</span>;
        let ingredientPriceInput = <span>loading...</span>;
        if(this.state.ingredient) {
            ingredient = (
                <div>
                    <h1>{this.state.ingredient.name}</h1>
                </div>
            );

            ingredientNameInput = <input type="text" name="name" value={this.state.ingredient.name}/>
            ingredientPriceInput = <input type="text" name="price" value={this.state.ingredient.price}/>
        }
        return(
            <div>
                <form 
                    className="IngredientDetailsForm"
                    onSubmit={ evt => this.handleSaveIngredient(evt) }>
                    
                    <div className="IngredientDetailsData">
                        <p>
                            <label>Назва: </label>
                            {ingredientNameInput}
                        </p>
                        <p>
                            <label>Ціна: </label>
                            {ingredientPriceInput}
                        </p>
                    </div>

                    <input 
                        className="IngredientButton IngredientButtonSave"
                        type="submit" 
                        value="зберегти" />
                    <button
                        className="IngredientButton IngredientButtonCancel"
                        onClick={ evt => this.handleCancelChanges(evt) }
                        >відмінити
                    </button>
                </form>
                {/* {ingredient} */}
            </div>
        );
    }

    state = {
        ingredient: null,
        loading: false
    }
}

export default IngredientDetails;