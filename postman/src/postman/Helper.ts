

export class Helper {

    static currentName: string

    static getCurrentName() : string {
        return Helper.currentName
    }

    static setCurrentName(name: string){
        Helper.currentName = name;
    }

    static isCollectionVariable(str: string){

        if(str.startsWith('{')) str = str.replace('{', '').replace('}', '')

        return str == 'accountId' ||
        str == 'siteId' ||
        str == 'userId' ||
        str == 'sipPeerId' ||
        str == 'MessagingApplicationId' ||
        str == 'VoiceApplicationId' ||
        str == 'NumbersApplicationId'
    }

}