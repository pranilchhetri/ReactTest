import React, {Component } from 'react';


class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state ={ term: 'heey you' };
    }

    render(){
        return (
        <div>
            <input 
            value = {this.state.term}
            onChange={event=> this.setState({term: event.target.value})} />
            
        </div>
         );
      }
};
//functional component
// const SearchBar = () => {
//     return <input />;
// };


export default SearchBar;