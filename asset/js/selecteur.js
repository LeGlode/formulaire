const selecteur = (id) => {
    const indicatifs =  [
	{pays: "Allemagne", iso: "DE", indicatif: 49, booleen: false},
	{pays: "Autriche", iso: "AT", indicatif: 43, booleen: false},
	{pays: "Belgique", iso: "BE", indicatif: 32, booleen: false},
	{pays: "Bulgarie", iso: "BG", indicatif: 359, booleen: false},
	{pays: "Chypre", iso: "CY", indicatif: 357, booleen: false},
	{pays: "Danemark", iso: "DK", indicatif: 45, booleen: false},
	{pays: "Espagne", iso: "ES", indicatif: 34, booleen: false},
	{pays: "Estonie", iso: "EE", indicatif: 372, booleen: false},
	{pays: "Finlande", iso: "FI", indicatif: 358, booleen: false},
	{pays: "France", iso: "FR", indicatif: 33, booleen: true},
	{pays: "Grèce", iso: "GR", indicatif: 30, booleen: false},
	{pays: "Hongrie", iso: "HU", indicatif: 36, booleen: false},
	{pays: "Irlande", iso: "IE", indicatif: 353, booleen: false},
	{pays: "Italie", iso: "IT", indicatif: 39, booleen: false},
	{pays: "Lettonie", iso: "LV", indicatif: 371, booleen: false},
	{pays: "Lituanie", iso: "LT", indicatif: 370, booleen: false},
	{pays: "Luxembourg", iso: "LU", indicatif: 352, booleen: false},
	{pays: "Malte", iso: "MT", indicatif: 356, booleen: false},
	{pays: "Pays-Bas", iso: "NL", indicatif: 31, booleen: false},
	{pays: "Pologne", iso: "PL", indicatif: 48, booleen: false},
	{pays: "Portugal", iso: "PT", indicatif: 351, booleen: false},
	{pays: "Roumanie", iso: "RO", indicatif: 40, booleen: false},
	{pays: "Slovaquie", iso: "SK", indicatif: 421, booleen: false},
	{pays: "Slovénie", iso: "SI", indicatif: 386, booleen: false},
	{pays: "Suède", iso: "SE", indicatif: 46, booleen: false},
	{pays: "Tchéquie", iso: "CZ", indicatif: 420, booleen: false}
    ];

    const nouvelleOption = ({pays, iso, indicatif, booleen}) => {
	let trueFalse = booleen ? true : false;
	let option = new Option(pays, indicatif, trueFalse, trueFalse);
	option.setAttribute("title",`+${indicatif}`);
	return option;
    };

    const ecouteurIndicatifs = (e) => {
	let valeur = e.target.options[e.target.selectedIndex].value;
	document.getElementById('indicatifs').dataset.indicatif = valeur;
	document.getElementById('panneauIndicatif').textContent = `+${valeur}`;
    }

    let select = document.getElementById(id);
    let panneauIndicatif = document.getElementById('panneauIndicatif');
    // Pays par  par défaut : France
    select.dataset.indicatif = indicatifs[9].indicatif;
    panneauIndicatif.nodeValue = indicatifs[9].indicatif;
	
    indicatifs.forEach(x => select.append(nouvelleOption(x)));
    select.addEventListener('change', ecouteurIndicatifs);
};

const lectureTaille = () => {

    const changementTaille = (e) => {
	console.log(e.target.options);
    }

    const taille = document.getElementById('taille');

    taille.addEventListener('input', changementTaille);
};


selecteur('indicatifs');
lectureTaille();
