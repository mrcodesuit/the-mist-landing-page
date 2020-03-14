import React, { useEffect } from 'react';
import './App.scss';

import { homeAnimation } from './animations/animation';

function App() {
	useEffect(() => {
		homeAnimation();
	}, []);

	return (
		<div className='App'>
			{/* overlay */}
			<div className='overlay'>
				<h1>The Mist</h1>
				<span>man life</span>
			</div>
			{/*  */}

			<div className='wrapper'>
				<div className='nav'>
					<div className='logo'>
						<h1>
							<span>
								The <br /> mist
							</span>
							<br />
							man life
						</h1>
					</div>
				</div>

				<div className='menu-links'>
					<ul>
						<li>home.</li>
						<li>man life.</li>
						<li>contact.</li>
					</ul>
				</div>

				<div className='scrolldown'>scrolldown</div>
			</div>

			<div className='text'>
				<div className='title'>The mist</div>
				<p>
					Mauris elementum, dui ac sagittis <br /> cursus, libero elit sodales
					odio
				</p>
			</div>

			<div class='watchnow'>
				<i class='fa fa-play'></i>
				<a href='#'>watch now!</a>
			</div>

			<div class='media'>
				<ul>
					<li>
						<i class='fa fa-facebook'></i>
					</li>
					<li>
						<i class='fa fa-twitter'></i>
					</li>
					<li>
						<i class='fa fa-instagram'></i>
					</li>
				</ul>
			</div>

			<div class='ellipse-container'>
				<div class='ellipse thin'></div>
				<div class='ellipse thick'></div>
				<div class='ellipse yellow'></div>
				<div class='circle1'>
					<span>Maecenas purus at</span>
				</div>
				<div class='circle2'>
					<span>Fringilla Maecenas</span>
				</div>
			</div>
		</div>
	);
}

export default App;
