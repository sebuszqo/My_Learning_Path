class IpCheck {
    constructor() {
        this.ipThatVoted = new Set();
    }

    check(ip) {
        if (this.ipThatVoted.has(ip)) {
            return false;
        }
        this.ipThatVoted.add(ip);
        return true;
    }
}

module.exports = {
    IpCheck,
}
