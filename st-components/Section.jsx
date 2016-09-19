import React from 'react'

 export default class Section extends React.Component {
	render(){
		return(
			<tr>
				<td>{this.props.data.name} </td>
				<td>{this.props.data.price} </td>
			</tr>
		);
	}
}