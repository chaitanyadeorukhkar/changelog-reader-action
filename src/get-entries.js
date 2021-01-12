const core = require("@actions/core");

const versionSeparator = "\n## ";

exports.getEntries = (rawData) => {
  const content = String(rawData);

  core.debug(`CHANGELOG content: ${content}`);

  return content.split(versionSeparator);
};
