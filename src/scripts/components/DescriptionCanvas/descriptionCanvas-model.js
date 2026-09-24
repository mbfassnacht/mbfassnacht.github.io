function diff_years(dt2, dt1) {
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60 * 60 * 24;
  return Math.floor(Math.abs(Math.round(diff)) / 365);
}

var today = new Date();
var startWorking = new Date(2011, 3, 25);

var workExperience = diff_years(today, startWorking);

module.exports = {
  title: "Máximo Fassnacht",
  subtitle: "Engineering Manager · Staff Software Engineer · AI Builder",
  description:
    "Engineering Manager and Staff Software Engineer with " +
    workExperience +
    " years of experience building web, mobile and backend products in TypeScript, from startups to Audi. I lead teams, drive architecture and ship AI in production: LLM agents and MCP servers.",
};
