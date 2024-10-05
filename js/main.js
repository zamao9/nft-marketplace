document.addEventListener('DOMContentLoaded', () => {
	const burger = document.querySelector('.burger');
	const navigation = document.querySelector('.navigation');
	const body = document.getElementsByTagName('body');

	/* Burger On Click */
	burger.addEventListener('click', (element) => {
		element.currentTarget.classList.toggle('is-active');
		/* Navigation Is Active*/
		navigation.classList.toggle('is-active');
		/* Body Overflow Hidden */
		body[0].classList.toggle('is-block');
	});
});