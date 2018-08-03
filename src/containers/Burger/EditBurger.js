import React, { Component } from 'react';
import axios from '../../axios';
import './CreateBurger.css';

class EditBurger extends Component {
    componentDidMount = () => {
        const burgerId = this.props.match.params.id;

        //fetch burger data
        axios.get("/burgers/" + burgerId + ".json")
            .then(response => {
                const burger = {
                    ...response.data,
                    id: burgerId
                }
                console.log(burger);
                this.setState({ 
                    burger, 
                    burgerName: burger.name 
                });
            })
            .catch(error => console.log(error));
    }

    handleNameChanges = (evt) => {
        console.log(evt.target.value);
        this.setState({ burgerName: evt.target.value });
    }

    render() {
        let burger = <p>loading...</p>
        if(this.state.burger) {
            burger = (
                <div>
                    <p>
                        <label>Назва: </label>
                        <input 
                            onChange={ evt => this.handleNameChanges(evt) }
                            type="text" 
                            name="name"
                            value={this.state.burgerName}/>
                    </p>
                    <p>
                        <span>Ціна: {this.state.burger.price}</span>
                    </p>

                </div>
            )
        }

        return (
            <div className="CreateBurger">
                { burger }
                <input 
                    className="BurgerButton BurgerButtonSave" 
                    type="submit" 
                    value="зберегти" />
                <button 
                    className="BurgerButton BurgerButtonCancel"
                    onClick={ evt => this.handleCancelChanges(evt) }
                    >відмінити
                </button>
            </div>
        );
    }

    state = {
        burgerName: null,
        burger: null,
        burgerPrice: 0,
        ingredients: null,
        saving: false
    }
}

export default EditBurger;