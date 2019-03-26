import React, {Component } from 'react';


class SearchBar extends Component{
    render(){
        return <input onChange={this.onInputChange} />;
    }

onInputChange(event){
    console.log(event.target.value);
    }
}
//functional component
// const SearchBar = () => {
//     return <input />;
// };


export default SearchBar;