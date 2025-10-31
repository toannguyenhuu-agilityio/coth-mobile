const { withAppBuildGradle } = require('expo/config-plugins');

module.exports = function withWidgetDexFix(config) {
  return withAppBuildGradle(config, (config) => {
    const exclusion = `
configurations.all {
  exclude group: "expo.modules.widgets"
}
`;

    if (!config.modResults.contents.includes('exclude group: "expo.modules.widgets"')) {
      config.modResults.contents = config.modResults.contents.replace(
        /dependencies\s?{/,
        `dependencies {
${exclusion}`,
      );
    }

    return config;
  });
};
