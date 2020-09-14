export class ShortenerDetail {
    constructor(
        public url: string,
        public shortUrl: string,
        public creationTime: Date,
        public expirationTime: Date,
    ){}
}
