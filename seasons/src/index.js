import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// functional component
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position)=> console.log(position), // success
//         (error) => console.log(error)       // error
//     )

//     return(
//         <div>Latitude:</div>
//     )
// }

class App extends React.Component { // borrowing other methods from React.component

    // automatically and intstantly called everytime instance of the class is created 
    // good to set state
    // constructor(props) {
    //     super(props); // refenence parent constructor function

    //     // init state
    //     // state is one object by itself
    //     //set lat to null cos you dont the the value yet
    //     // this is the only time we do a direct assignment to this
    //     this.state = {lat: 40, errorMessage:''}; // just to initalize the state

    // }
 
    state = {lat: 40, errorMessage:''}; // same as constructor function, babel converts it to the traditional code

    componentDidMount() {

        window.navigator.geolocation.getCurrentPosition(
            (position)=> {
                this.setState({lat: position.coords.latitude}); // use .setState whenever you want to update the state
            }, // success
            (error) => {
                console.log(error)
                this.setState({errorMessage: error.message});
            }      
        )
    }

    componentDidUpdate(){
        console.log('Component was just updated, it rerendered.')
    }

    // help function
    
    renderContent() {
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat = {this.state.lat}></SeasonDisplay>
        } // take the state of the current component and pass it as a prop

        return <Spinner message ="Please accept location request"></Spinner>
    }



    // requirement of react
    render() {

        return(
            <div className ="border-red">
                {this.renderContent()}
            </div>
        )  
    }   
}

ReactDOM.render(<App />, document.querySelector('#root'));
