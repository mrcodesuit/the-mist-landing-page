import React, { useEffect } from 'react';
import gsap from 'gsap';

import './App.scss';

function App() {
	useEffect(() => {
		gsap.to('.overlay h1', {
			duration: 2,
			opacity: 0,
			y: -90,
			ease: 'expo.inOut'
		});
		gsap.to('.overlay span', {
			duration: 2,
			opacity: 0,
			y: -60,
			delay: 0.25,
			ease: 'expo.inOut'
		});

		gsap.to('.overlay', {
			duration: 1.5,
			top: '-100%',
			delay: 0.5,
			ease: 'expo.inOut'
		});
		gsap.from('.ellipse-container', {
			duration: 1,
			opacity: 0,
			ease: 'expo.inOut',
			delay: 2
		});
		gsap.from('.ellipse-container .yellow', {
			duration: 1,
			opacity: 0,
			ease: 'expo.inOut',
			delay: 3.5
		});
		gsap.from('.ellipse-container .circle1', {
			duration: 1,
			opacity: 0,
			ease: 'expo.inOut',
			delay: 2.4
		});
		gsap.from('.ellipse-container .circle2', {
			duration: 1,
			opacity: 0,
			ease: 'expo.inOut',
			delay: 2.6
		});
		gsap.from('.logo', {
			duration: 1,
			opacity: 0,
			y: '-100px',
			ease: 'expo.inOut',
			delay: 3
		});
		gsap.from('.menu-links ul li', {
			duration: 1,
			opacity: 0,
			x: '-100%',
			ease: 'expo.inOut',
			delay: 3.2,
			stagger: { amount: 0.25 }
		});
		gsap.from('.scrolldown', {
			duration: 1,
			delay: 3.4,
			opacity: 0,
			y: 100,
			ease: 'expo.inOut'
		});
		gsap.from('.text .title', {
			duration: 1,
			delay: 3,
			opacity: 0,
			x: 200,
			ease: 'expo.inOut'
		});
		gsap.from('.text p', {
			duration: 1,
			delay: 3.2,
			opacity: 0,
			x: 200,
			ease: 'expo.inOut'
		});
		gsap.from('.watchnow', {
			duration: 1,
			delay: 3.4,
			opacity: 0,
			x: 200,
			ease: 'expo.inOut'
		});
		gsap.from('.media ul li', {
			duration: 1,
			opacity: 0,
			y: '-100px',
			ease: 'expo.inOut',
			delay: 3,
			stagger: { amount: 0.25 }
		});
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
