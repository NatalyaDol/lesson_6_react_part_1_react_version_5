import React from 'react';

export default class Contacts extends React.Component
{
	render()
	{	
		console.log(this.props)
		return (
			<div>
				<h1>Контакты</h1>
				<p>+7 (000) 000-00-00</p>
				<p>Номер страницы: {this.props.match.params.number}</p>
			</div>
		);
	}
}
