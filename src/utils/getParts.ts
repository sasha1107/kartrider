import partsEngine from "../assets/partsEngine.json"
import partsHandle from "../assets/partsHandle.json"
import partsKit from "../assets/partsKit.json"
import partsWheel from "../assets/partsWheel.json"

const data = {
    partsEngine,
    partsHandle,
    partsKit,
    partsWheel
} as const;

export const getParts = (type: keyof typeof data, Key: string) => {
    return data[type].filter(i => i.Key === +Key)[0];
}