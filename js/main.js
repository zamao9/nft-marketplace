document.addEventListener('DOMContentLoaded', () => {
	const header = document.querySelector('.header');
	const burger = document.querySelector('.burger');
	const navigation = document.querySelector('.navigation');
	const body = document.getElementsByTagName('body');
	const collectionButton = document.querySelector('.collection__button');
	const collectionItem = document.querySelectorAll('.collection__item');
	const creatorsButton = document.querySelector('.creators__button');
	const creatorsItem = document.querySelectorAll('.creators__item');

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

	/* Button On Click */
	const clickOnButton = (button, item) => {
		let count1 = 4;
		let count2 = 1;

		button.addEventListener('click', () => {
			count1 = count1 + 4;
			count2 = count2 + 1;

			item.forEach((element, index) => {
				if (item.length > 4 && index < count1) {
					return element.classList.remove('is-hidden');
				} else if (item.length < 4 && index < count2) {
					return element.classList.remove('is-hidden');
				}
			});
		});
	};

	/* Collection On Button Click */
	clickOnButton(collectionButton, collectionItem);
	/* Creators On Button Click */
	clickOnButton(creatorsButton, creatorsItem);
});