class GirlFriend {
    constructor(TheBoy) {
        this.HeartWords = "I Love You," + TheBoy + ".";
    }
    TellHeartWords() {
        document.body.innerHTML = this.HeartWords;
    }
}
let MyGirlFriend = new GirlFriend("ChooSimple");
MyGirlFriend.TellHeartWords();
//# sourceMappingURL=HelloTypeScripts.js.map