import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDGfFJ1CybRVDuzt40j6abXaAy81wufubQ';

YTSearch({key: API_KEY, term})

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