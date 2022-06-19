class TinyURL {
    constructor(originalUrl, id, createdAt) {
        this.originalUrl = originalUrl
        this.id = id
        this.createdAt = createdAt
    }

    toJson() {
        return {
            "originalUrl": this.originalUrl,
            "id": this.id,
            "createdAt": this.createdAt
        }
    }
}