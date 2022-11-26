const inputData = [
	"Viña Ardanza Reserva 2015",
	"Jackson Vintage Widow Pinot Noir 2017",
	"Gobelsburger Grüner Veltliner Renner 2020",
	"Klein Constantia Vin de Constance 2015",
	"Bell's Original",
	"London Hill Dry Gin",
	"Einstök Icelandic Pale Ale",
	"BFM 225 Saison",
	"Gassier 946 Rosé 2018",
	"Roblin Origine Sancerre Rosé 2021",
	"La Ciboise Blanc 2020",
	"Ch. Sainte Roseline Cru Classé 2020",
	"Chatellier Pouilly Fumé Argile 2021",
	"Yellow Tail Rosé 2019",
	"Secret de Léoube Rosé",
	"Saint Germain Rhub IPA",
	"Baladin Nazionale 3.3",
	"Page 24 Bière Brune",
	"Wettre India Pale Ale",
	"Garnier Chablis 2019",
	"Allegrini La Poja 2016",
	"Massaya Gold Reserve 2011",
	"Félix Solis Viña Albali Tempranillo 2020",
	"Marchesi di Barolo Coste di Rose 2016",
	"Lhéraud Cuvée 20",
	"Talisker Storm Single Malt",
	"Glengoyne 12 YO",
	"Powers Gold Label Irish Whiskey",
	"Danzka Vodka Red",
	"Woodford Reserve Distiller's Select"
]

export default function InputFilter() {
	let filterString = '';
	let caseSensitive = false;
	
	const container = document.querySelector('.grid');
	const input = container.querySelector('.header__input-filter');
	const contentContainer = container.querySelector('.grid__filter-content');

	if (container) {
		input.addEventListener('input', handleInputChange);
	}

	function handleInputChange(event) {
		updateFilterString(event.currentTarget.value);
		renderHTML();
	}

	function updateFilterString(currentInput) {
		filterString = currentInput;
	}
	
	function renderHTML() {
		contentContainer.innerHTML = '';
		
		for (const string of inputData) {
			const stringToCompare = caseSensitive ? string : string.toLowerCase();
			const filterToComare = caseSensitive ? filterString : filterString.toLowerCase();
			const indexOfMatch = stringToCompare.indexOf(filterToComare);
	
			// filterString = 'sa'
			
		   //  01234567
			// 'versatile'.indexOf('sa');
			// indexOf returnerer 3

			// beforeMatch = slice(0, 3)
			// match			= slice(3, 3 + 2)
			// afterMatch  = slice(3 + 2)
			
			if (indexOfMatch > -1) {
				const item = document.createElement('div');

				item.className = 'input-filter__item';
				
				const beforeMatch = string.slice(0, indexOfMatch);
				const match = string.slice(indexOfMatch, indexOfMatch + filterString.length);
				const afterMatch = string.slice(indexOfMatch + filterString.length);
							
				item.innerHTML = `${beforeMatch}<mark>${match}</mark>${afterMatch}`;

				contentContainer.appendChild(item);
			}
		}
	}

	renderHTML();
}