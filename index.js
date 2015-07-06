var defaultGetPrinter = require('./utils/default-get-printer');
var getOptionsUtil = require('./utils/get-options-util');

module.exports = function logObservablesObject(observables, providedOptions) {
  var options = providedOptions || {};
  var optionsUtil = getOptionsUtil(options);
  var getPrinter = options.getPrinter || defaultGetPrinter;

  for (var key in observables) {
    var observable = observables[key];
    var printer = getPrinter(key);

    if (optionsUtil.streamIsIgnored(key)) {
      // no operation
    } else if (optionsUtil.streamIsDebounced(key)) {
      observable.debounce(optionsUtil.getDebounceTime(key)).subscribe(printer);
    } else {
      observable.subscribe(printer);
    }
  }
};
