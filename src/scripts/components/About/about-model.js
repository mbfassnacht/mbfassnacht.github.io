function diff_years(dt2, dt1) {

	var diff =(dt2.getTime() - dt1.getTime()) / 1000;
	diff /= (60 * 60 * 24);
	return Math.floor( Math.abs(Math.round(diff)) / 365);

}

var today = new Date();
var startWorking = new Date(2011, 3, 25);

var workExperience = diff_years(today, startWorking);

module.exports = {
	'title': 'about me',
	'description': [
		'I\'m @mbfassnacht. I\'m German and oringinally from Uruguay.',
		'I have been working for the last ' + workExperience + ' years in Web-Development.'
	],
	'phrase': 'Stay Hungry, Stay Foolish',
	'author': 'Steve Jobs - Stanford 2005',
	'signature': './images/signature.png'
};
