import { Player } from "./player";

export interface Match {
    accountNo: string; // 계정 고유 식별자 
    matchId: string; // 매치 고유 식별자 
    matchType: string; // 매치 종류 
    teamId: "0" | "1" | "2"; 	//"2" 블루팀, "1" 레드팀, "0" 개인전
    character: string; // 캐릭터 
    startTime: Date | string; // 게임 시작 시간 
    endTime: Date | string; // 게임 종료 시간 
    channelName: string; //	채널 
    trackId: string; // 트랙 고유 식별자 
    playerCount: number; // 참여 유저 수 
    matchResult: "0" | "1"; // 해당 매치에서 승리시 "1", 패배시 "0"입니다.
    seasonType: "";
    player: Player; // 참여 유저 정보 
}