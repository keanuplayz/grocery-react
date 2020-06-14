import React, { Component } from "react";
import ShoppingItems from "./ShoppingItems";
import "./ShoppingList.css";

class ShoppingList extends Component {

    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.state = {
            items: []
        }
    };

    addItem(e) {
        if(this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";
        }
        console.log(this.state.items)

        e.preventDefault();
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });
        this.setState({
            items: filteredItems
        });
    }

    render() {
        return (
            <div className="ShoppingListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a} placeholder="Item Name">
                        </input>
                        <button type="submit">Add</button>
                    </form>
                    <ShoppingItems entries={this.state.items} delete={this.deleteItem}/>
                </div>
            </div>
        );
    }
}

export default ShoppingList;