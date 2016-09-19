import React from 'react'
import Section from './Section.jsx'

 export default class Table extends React.Component {


	render(){
		let sections = [];
		let data = this.props.data;
		
		data.forEach(function(product){
			if (product.name.indexOf(this.props.filterText) === -1) {
				return;
			}
			sections.push(<Section key={product.name} data={product} />);
		}.bind(this))

		return(
			<table><tbody>{sections}</tbody></table>
		);
	}
}