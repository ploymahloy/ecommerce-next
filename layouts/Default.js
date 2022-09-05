import React from 'react';
import { GiSoap } from 'react-icons/gi';

export default function DefaultLayout(props) {
	const { children } = props;

	return (
		<>
			<nav
				style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
					margin: '0px',
					padding: '5px',
					backgroundColor: 'rgb(204, 51, 130)'
				}}
			>
				<GiSoap size={40} color={'white'} style={{ margin: '5px' }} />
				<a href="#" style={{margin: '0 5px', color: 'white'}}>Checkout</a>
			</nav>
			<div>{children}</div>
		</>
	);
}
