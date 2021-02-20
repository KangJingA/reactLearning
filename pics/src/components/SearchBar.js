import React from 'react';

class SearchBar extends React.Component {

    // calls everything user types something, dont put (). () will call, but if you dont put - its just a reference. never put () in any even handlers
    // onInputChange(event){ // event object. contains info about event that occured
    //     console.log(event.target.value);
    // }
    state = { term:' '};

    // 2.calls function
    onFormSubmit = (event) => {
        event.preventDefault();
        //console.log(this.state.term)

        //app component makes API request instead.
        // you need to pass the prop from child to parent
        // when using class based component, reference to props via this.props
        this.props.onSubmit(this.state.term) // 3. grabs props that was from App.js
    }

    render(){
        return (
        <div className="ui segment">
            <form className ="ui form" onSubmit={this.onFormSubmit}> {/* 1. calls onFormSubmit when you press enter */}
                <div className = "field">
                    <label>Image Search</label>
                    <input type='text' value = {this.state.term} onChange = {(e) => this.setState({term : e.target.value})}></input>
                </div>
            </form>
        </div>)
    }
}

export default SearchBar;