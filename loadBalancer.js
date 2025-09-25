class LoadBalancer {
    constructor(servers) {
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
