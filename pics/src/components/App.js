import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

// const App = () => {
//     return (
//     <div className="container" style = {{marginTop:'10px'}}>
//         <SearchBar></SearchBar>
//     </div>)
// }

class App extends React.Component {

    state = {images: []};
    //define callback that goes into SearchBar to receive Props
    // 5. callback function to be passed down to the child is defined
    onSearchSubmit  = async (term) => {
        const response = await unsplash.get('/search/photos', { 
            params: {query: term}, 
        });

        //console.log(response.data.results)
        this.setState({images: response.data.results});
    }

    render() {
        return (
            <div className="container" style = {{marginTop:'10px'}}>
            <SearchBar onSubmit = {this.onSearchSubmit}></SearchBar> 
            <ImageList images = {this.state.images}></ImageList>
            {/* 4. callback gets passed down to the child via onSubmit. in the child, you reference the callback via props.onSubmit */}
            </div>)
        
    }
}

export default App;