import React from 'react';

class ImageCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {spans:0};
        this.imageRef = React.createRef(); //create Ref and assigns it to instance variable. reference it to grab info
    }

    setSpans = () => {
        //console.log(this.imageRef.current.clientHeight);
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height  /10);

        this.setState({spans: spans});
    }
    componentDidMount() {
        
        // need to add event listener because load is asynchronus
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    render(props){

        const {description,urls} = this.props.image;
        return (
            <div style = {{gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                ref = {this.imageRef}
                alt={description} 
                src={urls.regular}
                ></img>
            </div>
            )
    }
}

export default ImageCard;