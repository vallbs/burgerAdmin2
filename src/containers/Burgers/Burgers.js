import React, {Component} from 'react';
import  './Burgers.css';

class Burgers extends Component {

    render () {
        const burgers = this.state.burgers.map(burger => {
            return (
                <li key={burger.id}>
                    <div>
                        <span>{burger.name}: </span>
                        <span>{burger.price} грн</span>
                    </div>
                </li>
            );
        });

        return (
            <div className="Burgers">
            {/* // <div> */}
                <h1>Burgers</h1>
                <button>новий бургер</button>
                <ul>{burgers}</ul>
            </div>
        );
    }

    state = {
        burgers: [
            {
                id: "b1",
                name: "Бургер БІФ",
                ingredients: [
                    {id: "i1", name: "пшенична булочка", quantity: 1},
                    {id: "i6", name: "яловича котлета", quantity: 1},
                    {id: "i7", name: "сир чеддер", quantity: 2},
                    {id: "i10", name: "томат", quantity: 1},
                    {id: "i12", name: "айсберг", quantity: 1},                    
                    {id: "i17", name: "соус біф", quantity: 1}
                ],
                price: 100
            },
            {
                id: "b2",
                name: "Чікен Бургер",
                ingredients: [
                    {id: "i1", name: "пшенична булочка", quantity: 1},
                    {id: "i5", name: "куряча котлета", quantity: 1},
                    {id: "i7", name: "сир чеддер", quantity: 2},
                    {id: "i11", name: "огірок", quantity: 1},
                    {id: "i15", name: "соус барбекю", quantity: 1}
                ],
                price: 97
            },
            {
                id: "b3",
                name: "Копчений індіанець",
                ingredients: [
                    {id: "i2", name: "житня булочка", quantity: 1},
                    {id: "i4", name: "індича котлета", quantity: 1},
                    {id: "i9", name: "сир сулугуні", quantity: 2},
                    {id: "i10", name: "томат", quantity: 1},
                    {id: "i14", name: "карамелізована цибуля", quantity: 1},                    
                    {id: "i15", name: "соус барбекю", quantity: 1}
                ],
                price: 106
            }
        ]
    }
}

export default Burgers;