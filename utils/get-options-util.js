module.exports = function getOptionsUtil(options) {
  return {
    streamIsIgnored: function (key) {
      return options.ignoreStreams && options.ignoreStreams.indexOf(key) !== -1;
    },
    streamIsDebounced: function (key) {
      if (options.debounceAllStreams) {
        return true;
      }
      return options.debounceStreams && options.debounceStreams.indexOf(key) === -1;
    },
    getDebounceTime: function (key) {
      var defaultDebounceTime = options.defaultDebounceTime || 100;
      if (options.debounceTimes) {
        var debounceTimeForKey = options.debounceTime[key];
        if (debounceTimeForKey) {
          return debounceTimeForKey;
        }
      } else {
        return defaultDebounceTime;
      }
    }
  };
};
