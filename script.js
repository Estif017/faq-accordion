document.querySelectorAll('.question').forEach((question) => {
	document.addEventListener('click', (e) => {
		if (e.target.parentElement.id === question.id) {
			const parent = question.parentElement;
			parent.className.includes('active')
				? parent.classList.remove('active')
				: parent.classList.add('active');
		}
	});
});
