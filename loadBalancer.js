class LoadBalancer {
    constructor(servers) {
        if (!Array.isArray(servers) || servers.length === 0) {
            throw new Error('Servers must be a non-empty array.');
        }
        this.servers = servers;
        this.currentIndex = 0;
    }

    getNextServer() {
        const server = this.servers[this.currentIndex];
        this.currentIndex = (this.currentIndex + 1) % this.servers.length;
        return server;
    }
}

module.exports = LoadBalancer;
