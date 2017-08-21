const Jasmine = require('jasmine');
const JasmineConsoleReporter = require('jasmine-console-reporter');

const reporter = new JasmineConsoleReporter({
    colors: 2,           // (0|false)|(1|true)|2
    cleanStack: 1,       // (0|false)|(1|true)|2|3
    verbosity: 4,        // (0|false)|1|2|(3|true)|4
    listStyle: 'indent', // "flat"|"indent"
    activity: false
});

const jasmine = new Jasmine();
jasmine.loadConfigFile('./specs/integrationTest/jasmine-integration.json');
jasmine.addReporter(reporter);
jasmine.execute();
