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
    "I’m @mbfassnacht—a Staff Software Engineer with a passion for solving complex problems and building impactful solutions.",
    "I thrive in collaborative environments, where I enjoy coaching and mentoring others to grow in their careers and technical skills.",
    "With expertise in JavaScript, React, and cloud technologies, I focus on creating scalable, user-centric applications that make a difference.",
    "Let’s connect and build something meaningful together!"
  ],
  phrase: "Stay Hungry, Stay Foolish",
  author: "Steve Jobs - Stanford 2005",
  signature: "./images/signature.png",
};
