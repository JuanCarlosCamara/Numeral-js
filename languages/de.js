/*! 
 * numeral.js language configuration
 * language : German (de) – generally useful in Germany, Austria, Luxembourg, Belgium
 * author : Marco Krage : https://github.com/sinky
 */
(function () {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            return '.';
        },
        currency: {
            symbol: '€',
            format: '0,0.00$'
        },
        temperature : {
            farenheit : false,
            format : '0,0.0'
        },
        distance : {
            milles : false
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numeral && this.numeral.language) {
        this.numeral.language('de-de', language);
    }
}());