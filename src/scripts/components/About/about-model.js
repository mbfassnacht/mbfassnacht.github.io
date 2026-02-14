function diff_years(dt2, dt1) {
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60 * 60 * 24;
  return Math.floor(Math.abs(Math.round(diff)) / 365);
}

var today = new Date();
var startWorking = new Date(2011, 3, 25);

var workExperience = diff_years(today, startWorking);

module.exports = {
  title: "about me",
  description: [
    "I'm @mbfassnacht.",
    "Staff Software Engineer with " +
      workExperience +
      " years of experience in the full software development lifecycle.",
    "Skilled in JavaScript, React, React Native, TypeScript, Node.js, GCP and AWS.",
    "Contact me!.",
  ],
  phrase: "Stay Hungry, Stay Foolish",
  author: "Steve Jobs - Stanford 2005",
  signature: "./images/signature.png",
};
