// Access all the HTML paths
let statePath = document.querySelectorAll('path');

statePath[0].style.fill = 'green';

//access tooltip
let infoDiv = document.getElementById('infoDiv')
let stateLabel = document.getElementById('stateTag')
let lawLabel = document.getElementById('stateLaw')

console.log(stateLabel)
//stateLawObject
let stateLaw = [
	{
		state: 'Alabama',
		id: 'AL',
		openCarry: 'No permit required to open carry.',
	},

	{
		state: 'Alaska',
		id: 'AK',
		openCarry: 'No permit required to open carry.',
	},

	{
		state: 'Arizona ',
		id: 'AZ',
		openCarry: 'No permit required to open carry.',
	},

	{
		state: 'Arkansas',
		id: 'AR',
		openCarry: 'No permit required to open carry.',
	},

	{
		state: 'California',
		id: 'CA',
		openCarry: 'No open carry permitted.',
	},

	{
		state: 'Colorado',
		id: 'CO',
		openCarry: 'No permit required to open carry.',
	},

	{
		state: 'Connecticut',
		id: 'CT',
		openCarry: 'Permit required to open carry.',
	},

	{
		state: 'Delaware',
		id: 'DE',
		openCarry: 'Permit required to open carry.',
	},

	{
		state: 'Florida',
		id: 'FL',
		openCarry: 'No open carry permitted.',
	},
	{
		state: 'Georgia',
		id: 'GA',
		openCarry: 'Permit required to open carry.',
	},

	{
		state: 'Hawaii',
		id: 'HI',
		openCarry: 'Permit required to open carry.',
	},

	{
		state: 'Idaho',
		id: 'ID',
		openCarry: 'No permit required to open carry.',
	},

	{
		state: 'Illinois',
		id: 'IL',
		openCarry: 'No open carry permitted.',
	},

	{
		state: 'Indiana',
		id: 'IN',
		openCarry: 'Permit required to open carry.',
	},

	{
		state: 'Iowa',
		id: 'IA',
		openCarry: 'Permit required to open carry.',
	},

	{
		state: 'Kansas',
		id: 'KS',
		openCarry: 'No permit required to open carry.',
	},

	{
		state: 'Kentucky',
		id: 'KY',
		openCarry: 'No permit required to open carry.',
	},

	{
		state: 'Louisiana',
		id: 'LA',
		openCarry: 'No permit required to open carry.',
	},

	{
		state: 'Maine',
		id: 'ME',
		openCarry: 'No permit required to open carry.',
	},

	{
		state: 'Maryland',
		id: 'MD',
		openCarry: 'Permit required to open carry.',
	},

	{
		state: 'Massachusetts',
		id: 'MA',
		openCarry: 'Permit required to open carry.',
	},

	{
		state: 'Michigan',
		id: 'MI',
		openCarry: 'No permit required to open carry.',
	},

	{
		state: 'Minnesota',
		id: 'MN',
		openCarry: 'Permit required to open carry.',
	},

	{
		state: 'Mississippi',
		id: 'MS',
		openCarry: 'No permit required to open carry.',
	},

	{
		state: 'Missouri',
		id: 'MO',
		openCarry: 'No permit required to open carry.',
	},

	{
		state: 'Montana',
		id: 'MT',
		openCarry: 'No permit required to open carry.',
	},

	{
		state: 'Nebraska',
		id: 'NE',
		openCarry: 'No permit required to open carry.',
	},

	{
		state: 'Nevada',
		id: 'NV',
		openCarry: 'No permit required to open carry.',
	},

	{
		state: 'New Hampshire',
		id: 'NH',
		openCarry: 'No permit required to open carry.',
	},

	{
		state: 'New Jersey',
		id: 'NJ',
		openCarry: 'No permit required to open carry.',
	},

	{
		state: 'New Mexico',
		id: 'NM',
		openCarry: 'No permit required to open carry.',
	},

	{
		state: 'New York',
		id: 'NY',
		openCarry: 'No open carry permitted.',
	},

	{
		state: 'North Carolina',
		id: 'NC',
		openCarry: 'No permit required to open carry.',
	},

	{
		state: 'North Dakota',
		id: 'ND',
		openCarry: 'Permit required to open carry.',
	},

	{
		state: 'Ohio',
		id: 'OH',
		openCarry: 'No permit required to open carry.',
	},

	{
		state: 'Oklahoma',
		id: 'OK',
		openCarry: 'Permit required to open carry.',
	},

	{
		state: 'Oregon',
		id: 'OR',
		openCarry: 'No permit required to open carry.',
	},

	{
		state: 'Pennsylvania',
		id: 'PA',
		openCarry: 'No permit required to open carry.',
	},

	{
		state: 'Rhode Island',
		id: 'RI',
		openCarry: 'Permit required to open carry.',
	},

	{
		state: 'South Carolina',
		id: 'SC',
		openCarry: 'No open carry permitted.',
	},

	{
		state: 'South Dakota',
		id: 'SD',
		openCarry: 'No permit required to open carry.',
	},

	{
		state: 'Tennessee',
		id: 'TN',
		openCarry: 'Permit required to open carry.',
	},

	{
		state: 'Texas',
		id: 'TX',
		openCarry: 'Permit required to open carry.',
	},

	{
		state: 'Utah',
		id: 'UT',
		openCarry: 'Permit required to open carry.',
	},

	{
		state: 'Vermont',
		id: 'VT',
		openCarry: 'No permit required to open carry.',
	},

	{
		state: 'Virginia',
		id: 'VA',
		openCarry: 'No permit required to open carry.',
	},

	{
		state: 'Washington',
		id: 'WA',
		openCarry: 'No permit required to open carry.',
	},

	{
		state: 'West Virginia',
		id: 'WV',
		openCarry: 'No permit required to open carry.',
	},

	{
		state: 'Wisconsin',
		id: 'WI',
		openCarry: 'No permit required to open carry.',
	},

	{
		state: 'Wyoming',
		id: 'WY',
		openCarry: 'No permit required to open carry.',
	},
];

//Fills map with color related to state laws
function mapFill() {
	for (let i = 0; i < statePath.length; i++) {
		for (let j = 0; j < stateLaw.length; j++) {
			if (
				statePath[i].dataset.id === stateLaw[j].id &&
				stateLaw[j].openCarry === 'No permit required to open carry.'
			) {
				statePath[i].style.fill = 'rgb(66,29,214)';
			} else if (
				statePath[i].dataset.id === stateLaw[j].id &&
				stateLaw[j].openCarry === 'No open carry permitted.'
			) {
				statePath[i].style.fill = 'rgb(214,48,29)';
			} else if (
				statePath[i].dataset.id === stateLaw[j].id &&
				stateLaw[j].openCarry === 'Permit required to open carry.'
			) {
				statePath[i].style.fill = 'rgb(177,214,29)';
			}
		}
	}
}

$(statePath).mouseover(function (e) {
	for (let i = 0; i < stateLaw.length; i++) {
		if(this.id === stateLaw[i].id){
			infoDiv.style.opacity = 1;
			this.style.stroke ="yellow"
			infoDiv.style.top = e.pageY + 10 + "px";
			infoDiv.style.left = e.pageX + 10 + "px";
			stateLabel.textContent = "State: " + stateLaw[i].state;
			lawLabel.textContent = "Law: " + stateLaw[i].openCarry;		

		}
	}
});

$(statePath).mouseout(function(){
	infoDiv.style.opacity = 0;
	this.style.stroke = "black"
})

mapFill();
