import gsap from 'gsap';

// homeAnimation
function homeAnimation() {
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
}
export { homeAnimation };
