document.addEventListener('DOMContentLoaded', () => {
	const header = document.querySelector('.header');
	const burger = document.querySelector('.burger');
	const navigation = document.querySelector('.navigation');
	const body = document.getElementsByTagName('body');

	/* Header On Scroll */
	window.onscroll = () => {
		let scrollY = window.scrollY;

		if (scrollY > 0) {
			if (window.innerWidth >= 768) {
				header.classList.add('is-active');
			}
			burger.style.background = '#404040';
			burger.style.border = '1px solid #595959';
			burger.style.borderRight = '0';
		} else {
			if (window.innerWidth >= 768) {
				header.classList.remove('is-active');
			}
			burger.style.background = 'transparent';
			burger.style.borderRadius = '';
			burger.style.border = '0';
		}
	};

	/* Burger On Click */
	burger.addEventListener('click', (element) => {
		element.currentTarget.classList.toggle('is-active');
		/* Navigation Is Active*/
		navigation.classList.toggle('is-active');
		if (navigation.classList.contains('is-active')) {
			burger.style.background = 'transparent';
			burger.style.borderRadius = '';
			burger.style.border = '0';
		} else if (navigation && window.scrollY > 0) {
			burger.style.background = '#404040';
			burger.style.border = '1px solid #595959';
			burger.style.borderRight = '0';
		}
		/* Body Overflow Hidden */
		body[0].classList.toggle('is-block');
	});
});