import React from 'react';
import ReactDOM from 'react-dom';
import Main from './github-components/Main.jsx'

if (typeof window !== 'undefined') {
    window.React = React;
}

ReactDOM.render(<Main/>, document.getElementById('app'));