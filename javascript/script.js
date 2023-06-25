const adviceNumber = document.querySelector('.advice-number span');
const adviceElement = document.querySelector('.advice p span');

function toggleSpinner() {
	document.querySelectorAll('.advice > *').forEach((elem) => {
		elem.classList.toggle('hidden');
	});
}

async function getAdvice() {
	if (!adviceElement.parentElement.classList.contains('hidden'))
		toggleSpinner();
	try {
		const advice = await fetch('https://api.adviceslip.com/advice')
			.then((res) => res.json())
			.then((a) => a);

		adviceNumber.textContent = advice.slip.id;
		adviceElement.textContent = advice.slip.advice.trim();
	} catch (err) {
		adviceElement.textContent = `Oops! Something went wrong. Please try again`;
	}
	toggleSpinner();
}
getAdvice();

const buttonContainer = document.querySelector('.button-container');
buttonContainer.addEventListener('click', getAdvice);
