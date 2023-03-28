import gameType from "../assets/gameType.json"
import character from "../assets/character.json"
import flyingPet from "../assets/flyingPet.json"
import kart from "../assets/kart.json"
import pet from "../assets/pet.json"
import track from "../assets/track.json"
import channel from "../assets/channel.json"

const data = {
    gameType,
    character,
    flyingPet,
    kart,
    pet,
    track,
    channel
} as const;

export const getName = (type: keyof typeof data, id: string) => {
    return data[type].filter(i => i.id === id)[0].name;
}