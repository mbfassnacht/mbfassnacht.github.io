function diff_years(dt2, dt1) {
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60 * 60 * 24;
  return Math.floor(Math.abs(Math.round(diff)) / 365);
}

var today = new Date();
var startWorking = new Date(2011, 3, 25);

var workExperience = diff_years(today, startWorking);

module.exports = {
  title: "@mbfassnacht",
  subtitle: "Object-Oriented Analysis, Design and Development",
  description:
    "Innovative Software Engineer having more than " +
    workExperience +
    " years of experience in the full software development lifecycle – from concept through delivery of next-generation applications and customizable solutions.",
};
