const fs = require('fs');

class PerformanceLogger {
    logPerformance(data) {
        const logMessage = `Time: ${new Date().toISOString()}, Data: ${JSON.stringify(data)}\n`;
        fs.appendFile('performance.log', logMessage, (err) => {
            if (err) throw err;
            console.log('Performance logged!');
        });
    }
}

module.exports = PerformanceLogger;