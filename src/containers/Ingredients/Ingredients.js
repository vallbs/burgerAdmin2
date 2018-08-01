import React, { Component } from 'react';

class Ingredients extends Component {

    state = { ingredients: 
        [
            {id: 'i1', name: "пшенична булочка", price: 20},
            {id: "i2", name: "житня булочка", price: 25},
            {id: "i3", name: "солодова булочка", price: 25},
            {id: "i4", name: "індича котлета", price: 45},
            {id: "i5", name: "куряча котлета", price: 30},
            {id: "i6", name: "яловича котлета", price: 50},
            {id: "i7", name: "сир чеддер", price: 10},
            {id: "i8", name: "сир рокфор", price: 15},
            {id: "i9", name: "сир сулугуні", price: 10},
            {id: "i10", name: "томат", price: 8},
            {id: "i11", name: "огірок", price: 5},
            {id: "i12", name: "айсберг", price: 8},
            {id: "i13", name: "руккола", price: 7},
            {id: "i14", name: "карамелізована цибуля", price: 5},
            {id: "i15", name: "соус барбекю", price: 10},
            {id: "i16'", name: "соус медовий", price: 12},
            {id: "i17", name: "соус біф", price: 14}
        ]
    }

    render () {
        const ingredients = this.state.ingredients.map(ing => {
            return (
                <li key={ing.id}>
                    <span>{ing.name}: </span>
                    <span>{ing.price} грн</span>
                    <button>Редагувати</button>
                    <button>Видалити</button>
                </li>
            );
        });
        return (
            <div>
                <h1>Ingredients</h1>
                <button>новий інгредієнт</button>
                <ul>{ingredients}</ul>                    
            </div>
        );
    }
};

export default Ingredients;