export interface Player {
    accountNo: string; // 계정 고유 식별자 
    characterName: string; // 닉네임
    character: string; // 캐릭터
    kart: string; // 아이템(카트) 
    license: ""; // 라이선스
    pet: string; // 아이템(펫) 
    flyingPet: string; // 아이템(플라잉펫) 
    partsEngine: string; // 파츠 엔진
    partsHandle: string; // 파츠 핸들
    partsWheel: string; // 파츠 바퀴
    partsKit: string; // 파츠 킷
    rankinggrade2: string; // 리뉴얼 라이선스(플레이어의 라이센스입니다. 0은 없음, 1~6은 초보부터 PRO까지입니다.)
    matchRank: string | number; // 해당 매치에서의 순위, 리타이어시 99입니다. 게임 종료시 ""입니다. 매치에 따라 값의 타입이 int나 string입니다.
    matchRetired: "0" | "1"; // 리타이어시 1, 아닐시 0입니다.
    matchWin: string; // 승리 여부 
    matchTime: string; //매치 진행 시간 
}