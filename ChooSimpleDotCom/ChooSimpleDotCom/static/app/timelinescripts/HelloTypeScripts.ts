class GirlFriend {
    HeartWords:string
    constructor(TheBoy:string){
        this.HeartWords = "I Love You,"+TheBoy+".";
    }
    TellHeartWords(){
        document.body.innerHTML = this.HeartWords;
    }
}

let MyGirlFriend = new GirlFriend("ChooSimple");
MyGirlFriend.TellHeartWords();
