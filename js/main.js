document.addEventListener('DOMContentLoaded', () => {
	const header = document.querySelector('.header');
	const burger = document.querySelector('.burger');
	const navigation = document.querySelector('.navigation');
	const body = document.getElementsByTagName('body');
	const collectionButton = document.querySelector('.collection__button');
	const collectionItem = document.querySelectorAll('.collection__item');
	const creatorsButton = document.querySelector('.creators__button');
	const creatorsItem = document.querySelectorAll('.creators__item');

	/* Header On Scroll And Load */
	const scrollLoad = () => {
		let scrollY = window.scrollY;
		if (scrollY >= 1) {
			if (window.innerWidth >= 768) {
				header.classList.add('is-active');
			}
			burger.classList.add('is-active');
		} else {
			header.classList.remove('is-active');
			burger.classList.remove('is-active');
		}
	};
	window.onscroll = () => {
		scrollLoad();
	};
	window.onload = () => {
		scrollLoad();
	};

	/* Burger On Click */
	burger.addEventListener('click', (element) => {
		element.currentTarget.classList.toggle('is-clicked');
		navigation.classList.toggle('is-active');
		burger.classList.toggle('is-active');
		if (navigation && window.scrollY < 1) {
			burger.classList.remove('is-active');
		}
		body[0].classList.toggle('is-block'); // body block
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
			if (count1 === item.length || count2 === item.length) {
				button.style.display = 'none';
			}
		});
	};
	clickOnButton(collectionButton, collectionItem); // collection on button click
	clickOnButton(creatorsButton, creatorsItem); //  creators on button click
});