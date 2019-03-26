import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDGfFJ1CybRVDuzt40j6abXaAy81wufubQ';

//create a new component.producing some html
const App= function(){
    return (
    <div>
        <SearchBar />
    </div>
    );
}


//take this component generated html and put it on the page in the DOM

ReactDOM.render(<App />,document.querySelector('.container'));