import gameType from "../assets/gameType.json"
import character from "../assets/character.json"
import flyingPet from "../assets/flyingPet.json"
import kart from "../assets/kart.json"
import pet from "../assets/pet.json"
import track from "../assets/track.json"

export const getName = (type: string, id : string) => {
    if (type === 'gameType') {
        return gameType.filter(i => i.id === id)[0].name;
    }
    else if (type === 'character') {
        return character.filter(i => i.id === id)[0].name;
    }
    else if (type === 'flyingPet') {
        return flyingPet.filter(i => i.id === id)[0].name;
    }
    else if (type === 'kart') {
        return kart.filter(i => i.id === id)[0].name;
    }
    else if (type === 'pet') {
        return pet.filter(i => i.id === id)[0].name;
    }
    else if (type === 'track') {
        return track.filter(i => i.id === id)[0].name;
    }
    else null;
}