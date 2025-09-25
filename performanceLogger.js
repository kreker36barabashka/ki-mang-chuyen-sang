const fs = require('fs');

class PerformanceLogger {
    logPerformance(data) {
        const logMessage = `Thời gian: ${new Date().toISOString()}, Dữ liệu: ${JSON.stringify(data)}\n`;
        fs.appendFile('performance.log', logMessage, (err) => {
            if (err) throw err;
            console.log('Đã ghi lại hiệu suất!');
        });
    }
}

module.exports = PerformanceLogger;
