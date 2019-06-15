import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

// const App = () => {                
//         window.navigator.geolocation.getCurrentPosition(
//             (position) => console.log(position) , 
//             (err) => console.log(err)
//         ); 
//         return <div>Latitude: </div>;
// };


class App extends React.Component {

    // constructor(props) {
    //     super(props);

    //     // this is the only place where is allowed to do direct assignment 
    //     // a not use SetState() method
    //     this.state = {
    //         lat: null
    //     };

    //     // window.navigator.geolocation.getCurrentPosition(
    //     //     (position) => {
    //     //         console.log(position);
    //     //         this.setState({lat: position.coords.latitude})
    //     //     } , 
    //     //     (err) => {
    //     //         this.setState({errorMessage: err.message});
    //     //     }
    
    //     // );

    // }

    state = { lat: null , errorMessage: ''};


    render() {        

        if (this.state.errorMessage && !this.state.lat) {
           return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat){
            // return <div>Latitude: {this.state.lat}</div>
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <div>Loading ...</div>;
    }


    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}) , 
            (err) => this.setState({errorMessage: err.message})            
        );
    }

    componentDidUpdate() {
        console.log('My component did update - rerendered');
    }
    




}

ReactDOM.render(
        <App /> , 
        document.querySelector('#root')
);