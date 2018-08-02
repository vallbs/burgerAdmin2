import React, { Component } from 'react';
import '../Burgers/Burgers.css';

import axios from '../../axios';

class BurgerDetails extends Component {
    componentWillMount() {
        console.log("BurgerDetails.componentWillMount");
    }
    componentDidMount() {
        console.log("BurgerDetails.componentDidMount");
        //console.log(this.props.match.params.id);
        this.setState({ loading: true });
        axios.get("/burgers.json")
            .then(response => {
                //console.log(Object.keys(response.data));
                const burgerId = this.props.match.params.id;
                const data = response.data;
                const burgers = Object.keys(data).map(key => {
                    return data[key];
                });
                const burger = burgers.filter(bur => {
                    return bur.id === burgerId;
                });
                //console.log(burger);
                this.setState({ burger: burger[0], loading: false });
            })
            .catch(error => console.log(error));
    }

    render() {
        console.log("render");
        let burgerEl = <p>Loading</p>
        if(this.state.burger) {
            burgerEl = (
                <div
                    className="BurgerItem"
                    key={this.state.burger.id}>
                    <div >
                        <span className="BurgerItemName">{this.state.burger.name}</span>
                    </div>
                    <div>
                        <p className="BurgerItemIngredients">
                            {this.state.burger.ingredients.reduce((accum, curValue, index, array) => {
                                let endChar = (index === array.length-1) ? "" : ", ";
                                return accum + curValue.name + endChar;
                            }, "")}
                        </p>
                    </div>
                    <div className="BurgerItemPrice">
                        <span>{this.state.burger.price} грн</span>
                    </div>
                </div>
            )
        }

        return (
            <div>
               {burgerEl}
            </div>
        );
    }

    state = {
        burger: null,
        loading: false
    };
}

export default BurgerDetails;