const preLoader = document.querySelector('.pre-loader');
const counters = document.querySelectorAll('.counter');
const counterContainer = document.querySelector('.counter-container');
// after 3s pre-loader is gone.
setTimeout(() => {
	gone();
}, 3000);

function gone() {
	preLoader.classList.add('disappear');
}

function counting() {
	counters.forEach((counter) => {
		counter.innerText = '0';
		const updateCounter = () => {
			const target = +counter.getAttribute('data-target');
			const c = +counter.innerText;
			const increment = target / 500;
			if (c < target) {
				counter.innerText = `${Math.ceil(c + increment)}`;
				setTimeout(updateCounter, 1);
			} else {
				counter.innerText = target;
			}
		};
		updateCounter();
	});
}

// You can change string to number type with (1)+ (2)parseInt() (3)Number()

window.addEventListener('scroll', () => {
	const currentCounter = Math.ceil(
		+counterContainer.getBoundingClientRect().top,
	);
	const compare = 885;
	// console.log(currentCounter);
	if (700 < currentCounter < 890) {
		// counting();
		console.log('true');
	} else {
		console.log('false');
	}
});

window.addEventListener('load', () => {
	counting();
});
