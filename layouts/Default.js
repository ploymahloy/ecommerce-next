import React from 'react';
import { BsCart3 } from 'react-icons/bs';
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
					padding: '5px 15px',
					backgroundColor: 'rgb(244, 63, 94)'
				}}
			>
				<a href="/" style={{display: 'flex', alignItems: 'center'}} >
          <GiSoap size={40} color={'white'} style={{ margin: '5px' }} />
            <h1 style={{
              fontSize: '20px', 
              fontFamily: 'sans-serif', 
              fontWeight: '900', 
              textDecoration: 'none',
              color: 'white'}}
            >
              Soapity
            </h1>
        </a>
				<a href="/checkout" style={{margin: '0 5px'}}><BsCart3 size={30} color={'white'} /></a>
			</nav>
			<div>{children}</div>
		</>
	);
}
