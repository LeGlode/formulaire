const section = document.querySelector('section');
const ecouteur = (e) => {
    if(e.target.classList.contains('jaune') || e.target.classList.contains('blanche')){
	e.target.classList.toggle('blanche');
	e.target.classList.toggle('jaune');
    };
}
section.addEventListener('click', ecouteur);

