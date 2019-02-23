function diff_years(dt2, dt1) {

	var diff =(dt2.getTime() - dt1.getTime()) / 1000;
	diff /= (60 * 60 * 24);
	return Math.floor( Math.abs(Math.round(diff)) / 365);

}

var today = new Date();
var startWorking = new Date(2011, 3, 25);
var birthday = new Date(1990, 11, 13);

var yearsOld = diff_years(today, birthday);
var workExperience = diff_years(today, startWorking);

module.exports = {
	'title': 'about me',
	'description': [
		'My name is Máximo Belén Fassnacht and I\'m ' + yearsOld + ' years old. I\'m from Montevideo, Uruguay.',
		'I started my studies in 2009, and in 2015 I graduated as Computer Engineer from Universidad Católica del Uruguay. I have been working the last ' + workExperience + ' years in IT performing tasks as developer and analayst and also beeing the leader of a production team.',
		'My first job was on a company called STATUM. There I gain experience in development and analysis of different software solutions. Particularly there I develop in Java and Javascript and also using SQL, so there I learned a lot about databases (queries, views, procedures, etc). After that I worked on an Argentinian enterprise called Globant, there I learn more about Java and Javascript, and also I developed skills as Team Leader.',
		'Recently I worked for a year on Jam3 a Canadian Digital Agency performing tasks as Frontend Engineer using the most recently javascript technologies and frameworks.',
		'Nowadays I\'m working on a German Digital Agency called Exozet improving my skills and also learning and exploring Europe culture and history.'
	],
	'phrase': 'Stay Hungry, Stay Foolish',
	'author': 'Steve Jobs - Stanford 2005',
	'signature': './images/signature.png'
};
