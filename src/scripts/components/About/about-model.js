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
    "I’m Máximo Fassnacht (@mbfassnacht), an Engineering Manager and Staff Software Engineer with " +
      workExperience +
      " years of experience building web, mobile and backend products in TypeScript, from startups to Audi.",
    "At Taxfix I lead the team behind the new product for Germany’s self-employed, which we took from research to launch in 6 months. I hire and grow engineers, drive org-wide architecture through RFCs, and design event-driven microservices on AWS.",
    "I ship AI in production: LLM agents, anomaly detection and Model Context Protocol (MCP) servers, and I help teams adopt AI-native ways of working.",
    "Based in Germany, German & Uruguayan citizen, working in English, German and Spanish. Let’s connect and build something meaningful together!",
  ],
  phrase: "Stay Hungry, Stay Foolish",
  author: "Steve Jobs - Stanford 2005",
  signature: "./images/signature.png",
};
