import { Match } from "./match";

export interface Matches {
    nickName: string;
    matches: {
        matches: Match[];
        matchType: string;
    }[];
}