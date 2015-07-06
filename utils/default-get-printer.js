module.exports = function defaultGetPrinter(key) {
  return function defaultPrinter (e) {
    console.log(key + ':', e);
  }
};
