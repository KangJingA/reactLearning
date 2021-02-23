import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions'; //1. import action

class SongList extends Component {
    
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                        className="ui button primary" 
                        onClick={()=>this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
                )
        });
    }

    render() {
        
        return (
        <div className="ui divided list">{this.renderList()}</div>
        )
    };
};

// conventional name
// take the state object (redux store), compute it and change it into props
// any time redux state, this function reruns
const mapStateToProps = (state) =>{
    
    console.log(state);
    // returns the props
    return {songs: state.songs}
}

// 2. connect imported action to connect(), so redux knows its a function that will update reduxstore ,
// connect() returns a function
// connect()(SongList) invokes the function that was returned
// selectSong action now becomes a prop
export default connect(mapStateToProps, {selectSong})(SongList);