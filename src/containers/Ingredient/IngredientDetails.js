import React, { Component } from 'react';
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
                const ingredients = Object.keys(data).map(key => {
                    return data[key];
                });
                let ingredient = ingredients.filter(ing => {
                    return ing.id === ingredientId;
                });
                ingredient = ingredient && ingredient[0];

                this.setState({
                    ingredient,
                    loading: false
                })
            })
            .catch(error => console.log("error"));
    }
    render() {
        console.log("IngredientDetails.render");

        let ingredient = <p>loading...</p>;
        if(this.state.ingredient) {
            ingredient = (
                <div>
                    <h1>{this.state.ingredient.name}</h1>
                </div>
            )
        }
        return(
            <div>
                {ingredient}
            </div>
        );
    }

    state = {
        ingredient: null,
        loading: false
    }
}

export default IngredientDetails;