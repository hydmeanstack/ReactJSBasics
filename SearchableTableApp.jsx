import React from 'react';
import ReactDOM from 'react-dom';
import SearchableTable from './st-components/SearchableTable.jsx'
import {data} from './st-components/data.js'

 
ReactDOM.render(<SearchableTable data={data}/>, document.getElementById('app'));