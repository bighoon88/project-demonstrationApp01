import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Animated, TouchableHighlight, TouchableOpacity, Dimensions, Picker } from 'react-native';
import { LinearGradient } from 'expo';

const ListData = [
    {id: 1, dateInfo01: '10시~16시', dateInfo02: '(총 6시간/1회)', locationInfo: '청와대사랑채 -> 국회본회의장 -> 헌정기념관', target: '초1~초6', countInfo01: '40', countInfo02: '(선착순)', offerInfo: '입장료, 차량비, 워크지, 여행자보험료', keywordInfo: '#민주주의 #선거 # 삼권분립 #견제와 균형 #입법부 #사법부 #행정부', point: '450'},
    {id: 2, dateInfo01: '10시~16시', dateInfo02: '(총 6시간/1회)', locationInfo: '서울 시청 신관동 시민청 -> 본관동 서울도서관 -> 경찰박물관', target: '초1~초6', countInfo01: '40', countInfo02: '(선착순)', offerInfo: '입장료, 차량비, 워크지, 여행자보험', keywordInfo: '#공공기관 #지역문제 #주민참여 #시민단체 #대화 #타협 #공청회', point: '450'},
    {id: 3, dateInfo01: '10시~16시', dateInfo02: '(총 6시간/1회)', locationInfo: '화폐박물관 -> 통인시장 -> 인사동', target: '초1~초6', countInfo01: '40', countInfo02: '(선착순)', offerInfo: '입장료, 차량비, 워크지, 여행자보험료', keywordInfo: '#경제활동 #희소성 #현명한선택 #생산 #소득 #소비 #화폐', point: '450'},
    {id: 4, dateInfo01: '10시~16시', dateInfo02: '(총 6시간/1회)', locationInfo: '한국관광공사 서울센터 -> 국립민속박물관', target: '초1~초6', countInfo01: '40', countInfo02: '(선착순)', offerInfo: '입장료, 차량비, 워크지, 여행자보험료', keywordInfo: '#문화 #세계문화유산 #관혼상제 #의 #식 #주 #한류', point: '450'},
    {id: 5, dateInfo01: '10시~16시', dateInfo02: '(총 6시간/1회)', locationInfo: '남산타워 봉수대 -> 교육청과학전시관 남산분관', target: '초1~초6', countInfo01: '40', countInfo02: '(선착순)', offerInfo: '입장료, 차량비, 워크지, 여행자보험료', keywordInfo: '#광원 #빛의성질 #물질의상태 #물질 #물체 #뉴튼의운동법칙 #봉수제도', point: '450'},
    {id: 6, dateInfo01: '10시~16시', dateInfo02: '(총 6시간/1회)', locationInfo: '서대문자연사박물관 -> 디지털파빌리온', target: '초1~초6', countInfo01: '40', countInfo02: '(선착순)', offerInfo: '입장료, 차량비, 워크지, 여행자보험료', keywordInfo: '#습곡 #단층 #암석 #태양계 #화석 #지구의구조 #유비쿼터스', point: '450'},
    {id: 7, dateInfo01: '10시~16시', dateInfo02: '(총 6시간/1회)', locationInfo: '국립생물자원관 -> 수도권매립지', target: '초1~초6', countInfo01: '40', countInfo02: '(선착순)', offerInfo: '입장료, 차량비, 워크지, 여행자보험료', keywordInfo: '#자원 #생태계 #고유종 #생물 #생산자 #소비자 #분해자', point: '450'},
    {id: 8, dateInfo01: '10시~16시', dateInfo02: '(총 6시간/1회)', locationInfo: '한국과학문명관 -> 첨단기술관', target: '초1~초6', countInfo01: '40', countInfo02: '(선착순)', offerInfo: '입장료, 차량비, 워크지, 여행자보험료', keywordInfo: '#온돌 #항공우주 #로켓 #대동여지도 #천상열차분야지도 #양부일구 #측우기', point: '450'},
    {id: 9, dateInfo01: '10시~16시', dateInfo02: '(총 6시간/1회)', locationInfo: '암사동선사주거지 -> 몽촌토성', target: '초1~초6', countInfo01: '40', countInfo02: '(선착순)', offerInfo: '입장료, 차량비, 워크지, 여행자보험료', keywordInfo: '#문자 #선사시대 #역사시대 #구석기 #신석기 #청동기 # 철기', point: '450'},
    {id: 10, dateInfo01: '10시~16시', dateInfo02: '(총 6시간/1회)', locationInfo: '전쟁기념관전쟁역사실 -> 전쟁기념관6.25전쟁실', target: '초1~초6', countInfo01: '40', countInfo02: '(선착순)', offerInfo: '입장료, 차량비, 워크지, 여행자보험료', keywordInfo: '#살수대첩 #안시성전투 #고려의대외전쟁 #임진왜란 #병자호란 #6.25전쟁 #남북통일', point: '450'},
    {id: 11, dateInfo01: '10시~16시', dateInfo02: '(총 6시간/1회)', locationInfo: '경복궁 -> 고궁박물관', target: '초1~초6', countInfo01: '40', countInfo02: '(선착순)', offerInfo: '입장료, 차량비, 워크지, 여행자보험료', keywordInfo: '#이성계 #한양 #유교 #조선의왕실 #조선왕조실록 #조선왕조의궤 #자격루', point: '450'},
    {id: 12, dateInfo01: '10시~16시', dateInfo02: '(총 6시간/1회)', locationInfo: '덕수궁 -> 중명전 -> 러시아공사관터 -> 서대문형무소 역사관', target: '초1~초6', countInfo01: '40', countInfo02: '(선착순)', offerInfo: '입장료, 차량비, 워크지, 여행자보험료', keywordInfo: '#아관파천 #대한제국 #광무개혁 #을사늑약 #헤이그특사 #일제강점기 #독립운동', point: '450'},
    {id: 13, dateInfo01: '10시~16시', dateInfo02: '(총 6시간/1회)', locationInfo: '곤충식물원 -> 서울숲', target: '초1~초6', countInfo01: '40', countInfo02: '(선착순)', offerInfo: '입장료, 차량비, 워크지, 여행자보험료', keywordInfo: '#곤충 #곤충의구조 #곤충의한살이 #곤충의겨울나기 #완전탈바꿈 #불완전탈바꿈 #번데기', point: '450'},
    {id: 14, dateInfo01: '10시~16시', dateInfo02: '(총 6시간/1회)', locationInfo: '서울어린이대공원 동물원 -> 서울어린이대공원 숲', target: '초1~초6', countInfo01: '40', countInfo02: '(선착순)', offerInfo: '입장료, 차량비, 워크지, 여행자보험료', keywordInfo: '#동물의한살이 #식물의한살이 #겨울나기 #겨울철새 #여름철새 #텃새 #알', point: '450'},
    {id: 15, dateInfo01: '10시~16시', dateInfo02: '(총 6시간/1회)', locationInfo: '국립중앙박물관 -> 용산가족공원', target: '초1~초6', countInfo01: '40', countInfo02: '(선착순)', offerInfo: '입장료, 차량비, 워크지, 여행자보험료', keywordInfo: '#도자기 #청자 #분청사기 #백자 #전통회화 #불교문화 #탑', point: '450'},
    {id: 16, dateInfo01: '10시~16시', dateInfo02: '(총 6시간/1회)', locationInfo: '월드컵공원 디자인 서울 갤러리 -> 에너지드림 센터 -> 월드컵공원', target: '초1~초6', countInfo01: '40', countInfo02: '(선착순)', offerInfo: '입장료, 차량비, 워크지, 여행자보험료', keywordInfo: '#화석에너지 #신재생에너지 #에너지절약 #재활용 #쓰레기 #분리수거 #환경문제', point: '450'},
]

const StudyGuideList = [
    {id: 1, guideInfo01: '민주주의와 삼권분립', guideInfo02: '민주주의를 실현하는 민주선거', guideInfo03: '국회 진기록관: 국회의사당의 변천', guideInfo04: '-국회 의장관: 국회의장이 하는 일', guideInfo05: '-의회 민주주의관: 국회의 기능과 역활'},
    {id: 2, guideInfo01: '공공기관의 의미와 역활을 알아봅니다.', guideInfo02: '공공기관의 종류와 하는 일을 알아봅니다.', guideInfo03: '시청이 하는 일을 살펴보고 지역의 문제와 해결 방법에 대해 이야기 해봅니다.', guideInfo04: '도서관 등 공공기관 이용 방법을 살펴봅니다.', guideInfo05: '경찰의 하는 일과 종류를 알아봅니다.'},
    {id: 3, guideInfo01: '경제활동은 무엇이며 누가 하는 것인지 알아봅니다.', guideInfo02: '현명한 소비를 위해 알아야 할 점과 실천 방법을 이야기해봅니다.', guideInfo03: '한국은행과 조폐공사의 하는 일을 구분해봅니다.', guideInfo04: '경제 활동의 발생과 더불어 생겨난 화폐의 역사를 살펴봅니다.', guideInfo05: '직접 경제 활동을 체험하며 희소성과 선택의 기준을 배웁니다.'},
    {id: 4, guideInfo01: '문화가 무엇인지 알아보고 우리 문화에 대해 생각해봅니다.', guideInfo02: '세계문화유산에 등재된 자랑스런 우리 문화를 살펴봅니다.', guideInfo03: '전통 문화의 아름다움을 느껴보고 체험해봅니다.', guideInfo04: '옛날과 오늘 날의 달라진 생활모습을 비교하고 문화는 어떻게 변화되었는지 살펴봅니다.', guideInfo05: '한류 열풍이 우리 문화에 미치는 영향을 생각해봅니다.'},
    {id: 5, guideInfo01: '우리 주위에 작용하고 있는 과학의 원리들을 살펴봅니다.', guideInfo02: '조선의 의사소통 수단인 봉수제도에 대해 알아봅니다.', guideInfo03: '광원이 무엇인지 알고 종류를 생각해봅니다.', guideInfo04: '빛의 성질을 알고 그림자가 생기는 이유를 이해합니다.', guideInfo05: '물체와 물질의 관계를 이해합니다.'},
    {id: 6, guideInfo01: '우주의 탄생에 대해 알아봅니다.', guideInfo02: '태양계의 형성과 지구의 구조를 살펴봅니다.', guideInfo03: '화산과 지진의 원인을 알아봅니다.', guideInfo04: '암석의 종류와 화석이 만들어 지는 과정을 이해합니다.', guideInfo05: '도시의 형성과 발전 과정을 살펴보고 미래 도시를 상상해봅니다.'},
    {id: 7, guideInfo01: '생물자원의 종류와 우리나라 고유종을 알아봅니다.', guideInfo02: '생물의 분류와 특징을 알아봅니다.', guideInfo03: '생태계의 구성과 역활을 알아봅니다.', guideInfo04: '생물자원의 이용을 알아봅니다.', guideInfo05: '환경의 소중함과 자원의 재생 방법을 생각해봅니다.'},
    {id: 8, guideInfo01: '우리 전통 과학의 쓰임새와 오늘날의 변화를 알아봅니다.', guideInfo02: '항공우주의 발달 과정을 살펴봅니다.', guideInfo03: '로켓의 원리를 알아봅니다.', guideInfo04: '우주정거장의 역활과 우주 생활 모습을 알아봅니다.', guideInfo05: '우주 개발에 중요성을 생각해봅니다.'},
    {id: 9, guideInfo01: '여러 기준을 가지고 시대를 구분하여 봅니다.', guideInfo02: '도구를 기준으로 나눈 시대별 특징을 살펴봅니다.', guideInfo03: '벼농사의 시작으로 전쟁이 일어나고 나라가 만들어지는 과정을 이해합니다.', guideInfo04: '삼국의 탄생과 발전 멸망 과정을 알아봅니다.', guideInfo05: '한강의 중요성과 전성기의 관계를 알아봅니다.'},
    {id: 10, guideInfo01: '삼국의 위치를 파악하고 고구려와 수/당의 전쟁 과정을 알아봅니다.', guideInfo02: '전쟁이 많았던 고려의 역사를 살펴봅니다.', guideInfo03: '임진왜란과 병자호란의 원인과 결과를 알아봅니다.', guideInfo04: '해방 이후 우리나라의 상황을 살펴보고 6.25전쟁의 과정을 알아봅니다.', guideInfo05: '통일을 위한 우리의 노력과 마음가짐에 대해 생각해봅니다.'},
    {id: 11, guideInfo01: '조선의 건국 과정에 대해 알아봅니다.', guideInfo02: '유교를 바탕으로 한 조선의 문화를 알아봅니다.', guideInfo03: '한양의 위치와 구조를 살펴봅니다.', guideInfo04: '조선의 역대 왕들의 업적을 살펴봅니다.', guideInfo05: '조선왕조실록과 조선왕조의궤에 대해 알아봅니다.'},
    {id: 12, guideInfo01: '고종의 아관파천과 대한제국 선포 과정을 알아봅니다.', guideInfo02: '대한제국의 개혁정치와 실패 원인을 알아봅니다.', guideInfo03: '을사늑약의 부당함과 우리의 저항에 대해 알아봅니다.', guideInfo04: '조선 말 의병이 일어난 이유와 활동에 대해 알아봅니다.', guideInfo05: '일제의 탄압과 독립을 향한 민족의 저항에 대해 알아봅니다.'},
    {id: 13, guideInfo01: '곤충의 구조와 특징을 알아보고, 거미류 다지류와 다른점을 이해합니다.', guideInfo02: '곤충의 한살이를 살펴보고 완전탈바꿈과 불완전탈바꿈을 구별합니다.', guideInfo03: '곤충이 사는 곳과 겨울나기 방법을 알아봅니다.', guideInfo04: '곤충이 하는 일과 샌존 전략에 대해 알아봅니다.', guideInfo05: '숲 체험과 놀이를 통해 스스로 배우고 관찰합니다.'},
    {id: 14, guideInfo01: '동물과 식물의 차이점을 살펴보고 특징을 이해합니다.', guideInfo02: '동,식물의 한살이를 알아봅니다.', guideInfo03: '동,식물의 겨울나기를 알아봅니다.', guideInfo04: '알을 낳는 동물과 새끼를 낳는 동물을 구분하여 봅니다.', guideInfo05: '숲 체험과 놀이를 통해 스스로 배우고 관찰합니다.'},
    {id: 15, guideInfo01: '도자기의 역사를 알아봅니다.', guideInfo02: '고려 청자의 종류와 우수성을 알아봅니다.', guideInfo03: '전통 화와의 종류와 보관법을 알아봅니다.', guideInfo04: '불교문화의 발달과 특징을 살펴봅니다.', guideInfo05: '숲 체험과 놀이를 통해 스스로 배우고 관찰합니다.'},
    {id: 16, guideInfo01: '환경오염과 쓰레기 문제에 대해 알아봅니다.', guideInfo02: '재활용을 위한 부리수거 방법을 배워봅니다.', guideInfo03: '화석에너지의 문제점을 알아봅니다.', guideInfo04: '신재생에너지의 종류와 특징을 살펴봅니다.', guideInfo05: '숲 체험과 놀이를 통해 스스로 배우고 관찰합니다.'},
]

const RelatedSubjectList = [
    {id: 1, RelatedSubject01: '[사회 3-1] 2. 고장의 성립과 마을의 변천사', RelatedSubject02: '[국어 4-2] 1. 청와대는 무슨일을 할까요?', RelatedSubject03: '[사회 4-1] 3. 지역의 공공기관과 주민 참여'},
    {id: 2, RelatedSubject01: '[사회 4-1] 3. 지역의 공공기관과 주민 참여'},
    {id: 3, RelatedSubject01: '[사회 4-2] 2. 필요한 것의 생산과 교환'},
    {id: 4, RelatedSubject01: '[사회 3-2] 1. 환경에 따라 다른 생활 모습',RelatedSubject02: '[사회 3-2] 2. 시대마다 다른 삶의 모습'},
    {id: 5, RelatedSubject01: '[과학 3-1] 2. 물질의 성질', RelatedSubject02: '[과학 3-1] 4. 자석의 이용', RelatedSubject03: '[과학 4-2] 3. 그림자와 거울'},
    {id: 6, RelatedSubject01: '[과학 3-1] 5. 지구의 모습', RelatedSubject02: '[과학 4-1] 2. 지층과 화석', RelatedSubject03: '[과학 4-2] 4. 화산과 지진'},
    {id: 7, RelatedSubject01: '[과학 5-1] 5. 다양한 생물과 우리 생활', RelatedSubject02: '[과학 6-1] 4. 식물의 구조와 기능', RelatedSubject03: '[과학 6-2] 1. 생물과 우리 생활'},
    {id: 8, RelatedSubject01: '[과학 5-1] 3. 태양계와 별', RelatedSubject02: '[과학 3-1] 교통과 통신수단의 변화'},
    {id: 9, RelatedSubject01: '[사회 5-2] 1. 우리 역사의 시작과 발전'},
    {id: 10, RelatedSubject01: '[사회 5-2] 1. 우리 역사의 시작과 발전', RelatedSubject02: '[사회 5-2] 2. 세계와 활발하게 교류한 고려', RelatedSubject03: '[사회 5-2] 2-3. 북방민족의 침입과 극복', RelatedSubject04: '[사회 5-2] 3. 유교문화가 발달한 조선', RelatedSubject05: '[사회 5-2] 3-4. 임진왜란과 병자호란', RelatedSubject06: '[사회 6-1] 1. 사회의 새로운 변화와 오늘 날의 우리', RelatedSubject07: '[사회 6-1] 1-3. 대한민국 정부의 수립과 6.25전쟁'},
    {id: 11, RelatedSubject01: '[사회 5-2] 3. 유교 문화가 발달한 조선'},
    {id: 12, RelatedSubject01: '[사회 6-1] 1. 사회의 새로운 변화와 오늘날의 우리', RelatedSubject02: '[사회 6-1] 1-2. 일제의 침략과 광복을 위한 노력'},
    {id: 13, RelatedSubject01: '[과학 3-1] 3. 동물의 한살이'},
    {id: 14, RelatedSubject01: '[과학 3-1] 3. 동물의 한살이', RelatedSubject03: '[과학 3-2] 2. 동물의 생활', RelatedSubject03: '[과학 4-1] 3. 식물의 한살이'},
    {id: 15, RelatedSubject01: '[사회 5-2] 2. 세계와 활발히 교류한 고려', RelatedSubject03: '[사회 5-2] 2-4. 고려 문화의 발전', RelatedSubject03: '[사회 6-1] 1. 사회의 새로운 변화와 오늘날의 우리', RelatedSubject04: '[사회 6-1] 1-3. 서민 문화에 나타난 사람들의 생활모습'},
    {id: 16, RelatedSubject01: '[사회 6-2] 4. 변화하는 세계 속의 우리', RelatedSubject03: '[사회 6-2] 4-3. 함께 해결하는 지구촌 문제'},
]

const KeyKeywordList = [
    {id: 1, KeyKeyword: '공공기관, 지역문제, 주민참여, 시민단체, 대화타협, 공청회'},
    {id: 2, KeyKeyword: '공공기관, 지역문제, 주민참여, 시민단체, 대화, 타협, 공청회'},
    {id: 3, KeyKeyword: '문화, 세계문화유산, 관혼상제, 의, 식, 주, 한류'},
    {id: 4, KeyKeyword: '문화, 세계문화유산, 관혼상제, 의, 식, 주, 한류'},
    {id: 5, KeyKeyword: '광원, 빛의 성질, 물질의 상태, 물질, 물체, 뉴튼의 운동법칙, 봉수제도'},
    {id: 6, KeyKeyword: '습곡, 단층, 암석, 태양계, 화석, 지구의 구조, 유비쿼터스'},
    {id: 7, KeyKeyword: '자원, 생태계, 고유종, 생물, 생산자, 소비자, 분해자'},
    {id: 8, KeyKeyword: '온돌, 항공우주, 로켓, 대동여지도, 천상열차분야지도, 앙부일구, 측우기'},
    {id: 9, KeyKeyword: '문자, 선사시대, 역사시대, 구석기, 신석기, 청동기, 철기'},
    {id: 10, KeyKeyword: '살수대첩, 안시성 전투, 고려의 대외전쟁, 임진왜란, 병자호란, 6.25전쟁, 남북통일'},
    {id: 11, KeyKeyword: '이성계, 한양, 유고, 조선의 왕실, 조선왕조실록, 조선왕조의궤, 자격루'},
    {id: 12, KeyKeyword: '아관파천, 대한제국, 광무개혁, 을사늑약, 헤이그특사, 일제강점기, 독립운동'},
    {id: 13, KeyKeyword: '곤충, 곤충의 구조, 곤충의 한살이, 곤충의 겨울나기, 완전탈바꿈, 불완전탈바꿈, 번데기'},
    {id: 14, KeyKeyword: '동물의 한살이, 식물의 한살이, 겨울나기, 겨울 철새, 여름 철새, 텃새, 알'},
    {id: 15, KeyKeyword: '도자기, 청자, 분청사기, 백자, 전통 회화, 불교문화 ,탑'},
    {id: 16, KeyKeyword: '화석에너지, 신재생에너지, 에너지 절약, 재활용, 쓰레기, 분리수거, 환경문제'},
]

const MissionActivityList = [
    {id: 1, MissionActivity: '팀별 게임으로 알아가는 핵심키워드 미션활동'},
    {id: 2, MissionActivity: ''},
    {id: 3, MissionActivity: '팀별 게임으로 알아가는 핵심키워드 미션활동'},
    {id: 4, MissionActivity: '팀별 게임으로 알아가는 핵심키워드 미션활동'},
    {id: 5, MissionActivity: '팀별 게임으로 알아가는 핵심키워드 미션활동'},
    {id: 6, MissionActivity: '팀별 게임으로 알아가는 핵심키워드 미션활동'},
    {id: 7, MissionActivity: '팀별 게임으로 알아가는 핵심키워드 미션활동'},
    {id: 8, MissionActivity: '팀별 게임으로 알아가는 핵심키워드 미션활동'},
    {id: 9, MissionActivity: '팀별 게임으로 알아가는 핵심키워드 미션활동'},
    {id: 10, MissionActivity: '팀별 게임으로 알아가는 핵심키워드 미션활동'},
    {id: 11, MissionActivity: '팀별 게임으로 알아가는 핵심키워드 미션활동'},
    {id: 12, MissionActivity: '팀별 게임으로 알아가는 핵심키워드 미션활동'},
    {id: 13, MissionActivity: '팀별 게임으로 알아가는 핵심키워드 미션활동'},
    {id: 14, MissionActivity: '팀별 게임으로 알아가는 핵심키워드 미션활동'},
    {id: 15, MissionActivity: '팀별 게임으로 알아가는 핵심키워드 미션활동'},
    {id: 16, MissionActivity: '팀별 게임으로 알아가는 핵심키워드 미션활동'},
]

const PickerList = [
    {id: 1, PickerInfo: '오전 10시'},
    {id: 2, PickerInfo: '오전 10시'},
    {id: 3, PickerInfo: '오전 10시'},
    {id: 4, PickerInfo: '오전 10시'},
    {id: 5, PickerInfo: '오전 10시'},
    {id: 6, PickerInfo: '오전 10시'},
    {id: 7, PickerInfo: '오전 10시'},
    {id: 8, PickerInfo: '오전 10시'},
    {id: 9, PickerInfo: '오전 10시'},
    {id: 10, PickerInfo: '오전 10시'},
    {id: 11, PickerInfo: '오전 10시'},
    {id: 12, PickerInfo: '오전 10시'},
    {id: 13, PickerInfo: '오전 10시'},
    {id: 14, PickerInfo: '오전 10시'},
    {id: 15, PickerInfo: '오전 10시'},
    {id: 16, PickerInfo: '오전 10시'},
]

const basicCourseList = [
    {id: 1, basicCourse01: '인천 출발', basicCourse02: '청와대', basicCourse03: '점심', basicCourse04: '국회본회의장', basicCourse05: '헌정기념관', basicCourse06: '인천 도착' },
    {id: 2, basicCourse01: '출발', basicCourse02: '서울시청 신관동', basicCourse03: '본관동 서울도서관', basicCourse04: '식사', basicCourse05: '경찰박물관', basicCourse06: '도착' },
    {id: 3, basicCourse01: '인천 출발', basicCourse02: '화폐박물관', basicCourse03: '점심', basicCourse04: '북인사마당', basicCourse05: '인사동길', basicCourse06: '인천 도착' },
    {id: 4, basicCourse01: '출발', basicCourse02: '한국관광공사', basicCourse03: '점심', basicCourse04: '청계천', basicCourse05: '국립민속박물관', basicCourse06: '도착' },
    {id: 5, basicCourse01: '출발', basicCourse02: '남산 봉수대', basicCourse03: '점심', basicCourse04: '이동', basicCourse05: '서울특별시교육청과학전시관 남산분관', basicCourse06: '도착' },
    {id: 6, basicCourse01: '출발', basicCourse02: '서대문자연사박물관', basicCourse03: '점심', basicCourse04: '이동', basicCourse05: '디지털파빌리온', basicCourse06: '도착' },
    {id: 7, basicCourse01: '출발', basicCourse02: '국립생물자원관', basicCourse03: '점심', basicCourse04: '이동', basicCourse05: '수도권매립지', basicCourse06: '도착' },
    {id: 8, basicCourse01: '출발', basicCourse02: '국립과천과학관 한국과학문명관', basicCourse03: '점심', basicCourse04: '이동', basicCourse05: '국립과천과학관 첨단기술관', basicCourse06: '도착' },
    {id: 9, basicCourse01: '출발', basicCourse02: '암사동선사주거지', basicCourse03: '점심', basicCourse04: '이동', basicCourse05: '몽촌토성', basicCourse06: '도착' },
    {id: 10, basicCourse01: '출발', basicCourse02: '전쟁기념관 전쟁역사실', basicCourse03: '점심', basicCourse04: '이동', basicCourse05: '전쟁기념관 6.25전쟁실', basicCourse06: '도착' },
    {id: 11, basicCourse01: '출발', basicCourse02: '경복궁', basicCourse03: '점심', basicCourse04: '이동', basicCourse05: '고궁박물관', basicCourse06: '도착' },
    {id: 12, basicCourse01: '출발', basicCourse02: '덕수궁', basicCourse03: '중명전', basicCourse04: '러시아공사관터', basicCourse05: '서대문형무소 역사관', basicCourse06: '도착' },
    {id: 13, basicCourse01: '출발', basicCourse02: '곤충식물원', basicCourse03: '점심', basicCourse04: '이동', basicCourse05: '서울숲', basicCourse06: '도착' },
    {id: 14, basicCourse01: '출발', basicCourse02: '서울어린이대공원 동물원', basicCourse03: '점심', basicCourse04: '이동', basicCourse05: '서울어린이대공원 숲', basicCourse06: '도착' },
    {id: 15, basicCourse01: '출발', basicCourse02: '국립중앙박물관', basicCourse03: '점심', basicCourse04: '이동', basicCourse05: '용산가족공원', basicCourse06: '도착' },
    {id: 16, basicCourse01: '출발', basicCourse02: '월드컵공원 디자인 서울 갤러리', basicCourse03: '에너지드림 센터', basicCourse04: '점심', basicCourse05: '월드컵 공원', basicCourse06: '도착' },
]

export default class CardDetail extends React.Component {


    static navigationOptions = {
        header: null,
    };

    constructor() {
        super() 
        this.state = {
            animation: new Animated.Value(0),
            animatedDate: '프로그램을 선택하세요',
            count: 1,
            Payment: '',
            testPrice:'',
            like: false,
        }
    }

    updateUser = (animatedDate) => {
        this.setState({ animatedDate: animatedDate })
    }

    handleOpen = () => {
        Animated.timing(this.state.animation, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };
    handleClose = () => {
        Animated.timing(this.state.animation, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    updateCountAddition(count) {
        this.setState({ 
            count: this.state.count + 1
        })
    }

    updateCountSubstraction(count) {
        this.setState({ 
            count: this.state.count - 1
        })
    }

    calculatePay(count, price) {
        let Payment;
        this.setState({
            Payment: count * price
        })
    }

    LikeButton() {
        let like = this.state.like;
        if (like === false) {
            this.setState({like: true})
        } else {
            this.setState({like: false})
        }
    }

    button() {
        Alert.alert(
            'Alert Title',
            'Alert message here...',
        );
    }

    render() {
        const { navigation } = this.props;
        const cardData = navigation.getParam('CardData');
        const date = cardData.date
        const id = cardData.id
        const image = cardData.image
        const name = cardData.name
        const place = cardData.place
        const price = cardData.price
        let count = this.state.count
        let payment = this.state.Payment
        console.log(this.state.testPrice)
        console.log(payment)
        console.log(this.state.animatedDate)
        let dateInfo01;
        let dateInfo02;
        let locationInfo;
        let point;
        let target;
        let countInfo01;
        let countInfo02;
        let offerInfo;
        let keywordInfo;
        ListData.map((item, i) => {
            if (id === item.id) {
                dateInfo01 = item.dateInfo01
                dateInfo02 = item.dateInfo02
                locationInfo = item.locationInfo
                target = item.target
                countInfo01 = item.countInfo01
                countInfo02 = item.countInfo02
                offerInfo = item.offerInfo
                keywordInfo = item.keywordInfo
                point = item.point
            }
        })
        let guideInfo01;
        let guideInfo02;
        let guideInfo03;
        let guideInfo04;
        let guideInfo05;
        StudyGuideList.map((item, i) => {
            if (id === item.id) {
                guideInfo01 = item.guideInfo01
                guideInfo02 = item.guideInfo02
                guideInfo03 = item.guideInfo03
                guideInfo04 = item.guideInfo04
                guideInfo05 = item.guideInfo05
            }
        })
        let RelatedSubject01;
        let RelatedSubject02;
        let RelatedSubject03;
        let RelatedSubject04;
        let RelatedSubject05;
        let RelatedSubject06;
        let RelatedSubject07;
        RelatedSubjectList.map((item, i) => {
            if (id === item.id) {
                RelatedSubject01 = item.RelatedSubject01
                RelatedSubject02 = item.RelatedSubject02
                RelatedSubject03 = item.RelatedSubject03
                RelatedSubject04 = item.RelatedSubject04
                RelatedSubject05 = item.RelatedSubject05
                RelatedSubject06 = item.RelatedSubject06
                RelatedSubject07 = item.RelatedSubject07
            }
        })
        let KeyKeyword;
        KeyKeywordList.map((item, i) => {
            if (id === item.id) {
                KeyKeyword = item.KeyKeyword
            }
        })
        let MissionActivity;
        MissionActivityList.map((item, i) => {
            if (id === item.id) {
                MissionActivity = item.MissionActivity
            }
        })
        let PickerInfo;
        PickerList.map((item, i) => {
            if (id === item.id) {
                PickerInfo = item.PickerInfo
            }
        })
        let basicCourse01;
        let basicCourse02;
        let basicCourse03;
        let basicCourse04;
        let basicCourse05;
        let basicCourse06;
        basicCourseList.map((item, i) => {
            if (id === item.id) {
                basicCourse01 = item.basicCourse01
                basicCourse02 = item.basicCourse02
                basicCourse03 = item.basicCourse03
                basicCourse04 = item.basicCourse04
                basicCourse05 = item.basicCourse05
                basicCourse06 = item.basicCourse06
            }
        })
        

        const screenHeight = Dimensions.get("window").height;
        const backdrop = {
            transform: [
                {
                    translateY: this.state.animation.interpolate({
                        inputRange: [0, 0.01],
                        outputRange: [screenHeight, 0],
                        extrapolate: "clamp",
                    }),
                },
            ],
            opacity: this.state.animation.interpolate({
                inputRange: [0.01, 0.5],
                outputRange: [0, 1],
                extrapolate: "clamp",
            }),
        };
      
        const slideUp = {
            transform: [
                {
                    translateY: this.state.animation.interpolate({
                        inputRange: [0.01, 1],
                        outputRange: [0, -1 * screenHeight],
                        extrapolate: "clamp",
                    }),
                },
            ],
        };
        
        var likeState;
        if(this.state.like === true) {
            likeState = (<Image source={require('../images/like.png')} style={{width: 22, height: 22, resizeMode: 'stretch'}}/>)
        } else {
            likeState = (<Image source={require('../images/heart.png')} style={{width: 22, height: 22, resizeMode: 'stretch'}}/>)
        }

        const { goBack } = this.props.navigation;

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{flexDirection: 'row', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{width: '14%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableOpacity onPress={() => goBack()}>
                                <Image source={require('../images/left-arrow4.png')} style={{width: 22, height: 22, resizeMode: 'stretch'}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{width: '60%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 18}} numberOfLines={1}>{name}</Text>
                        </View>
                        <View style={{width: '13%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableOpacity onPress={() => this.LikeButton()}>
                                {likeState}
                            </TouchableOpacity>
                        </View>
                        <View style={{width: '13%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableOpacity onPress={() => this.button()}>
                                <Image source={require('../images/share.png')} style={{width: 22, height: 22, resizeMode: 'stretch'}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.content}>
                    <ScrollView>
                        <View style={{height: 160, backgroundColor: 'green'}}>
                            <Image source={image} style={{height: 160, width: '100%', resizeMode: 'stretch'}}/>
                        </View>
                        <View style={{backgroundColor: 'grey'}}>
                            <Text style={{fontSize: 10, margin: 5}}>시대별 대표 유물을 통해선사에서 현대에 이르는 우리 역사의 흐름을 이해하고 핵심을 배웁니다.</Text>
                        </View>
                        <View style={{backgroundColor: 'white'}}>
                            <View style={{margin: 5, alignItems: 'center'}}>
                                <Text style={{fontWeight: 'bold', fontSize: 15, paddingTop: 5}}>{name}</Text>
                            </View>
                            <View style={{alignItems: 'center', paddingTop: 5}}>
                                <LinearGradient colors={['#ffbe04', '#fff']}>
                                    <View style={{margin: 5, width: '100%'}}>
                                        <View style={{ flexDirection: 'row', width: '100%'}}>
                                            <View style={{width: '50%', height: 80, justifyContent: 'center', alignItems: 'center', borderColor: '#ffbe04', borderWidth: 1, borderLeftWidth:0}}>
                                                <Text>{date}</Text>
                                                <Text>{dateInfo01}</Text>
                                                <Text>{dateInfo02}</Text>
                                            </View>
                                            <View style={{width: '50%', height: 80, justifyContent: 'center', alignItems: 'center', borderColor: '#ffbe04', borderWidth: 1, borderLeftWidth:0, borderRightWidth: 0}}>
                                                <Text>{place}</Text>
                                                <Text style={{textAlign: 'center'}}>{locationInfo}</Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', width: '100%'}}>
                                            <View style={{width: '50%', height: 80, justifyContent: 'center', alignItems: 'center', borderColor: '#ffbe04', borderWidth: 1, borderTopWidth: 0, borderBottomWidth: 0, borderLeftWidth:0}}>
                                                <Text>{target}</Text>
                                            </View>
                                            <View style={{width: '50%', height: 80, justifyContent: 'center', alignItems: 'center', borderColor: '#ffbe04', borderWidth: 1, borderLeftWidth:0, borderTopWidth: 0, borderBottomWidth: 0, borderRightWidth: 0}}>
                                                <Text>{countInfo01} 명</Text>
                                                <Text>{countInfo02}</Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', width: '100%'}}>
                                            <View style={{width: '50%', height: 80, justifyContent: 'center', alignItems: 'center', borderColor: '#ffbe04', borderWidth: 1, borderLeftWidth:0}}>
                                                <Text style={{textAlign: 'center'}}>{offerInfo}</Text>
                                            </View>
                                            <View style={{width: '50%', height: 80, justifyContent: 'center', alignItems: 'center', borderColor: '#ffbe04', borderWidth: 1, borderLeftWidth:0, borderRightWidth: 0}}>
                                                <Text style={{textAlign: 'center'}}>{keywordInfo}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </LinearGradient>
                            </View>
                            <View style={{margin: 5, alignItems: 'center'}}>
                                <View style={{ flexDirection: 'row', width: '100%'}}>
                                    <View style={{width: '50%', height: 30, justifyContent: 'center', alignItems: 'flex-start'}}>
                                        <Text style={{marginLeft: 20, fontSize: 20}}>가격</Text>
                                    </View>
                                    <View style={{width: '50%', height: 30, justifyContent: 'center', alignItems: 'flex-end'}}>
                                        <Text style={{marginRight: 10, fontSize: 20, fontWeight: 'bold'}}>{price} 원</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', width: '100%'}}>
                                    <View style={{width: '50%', height: 30, justifyContent: 'center', alignItems: 'flex-start'}}>
                                        <Text style={{marginLeft: 20, fontSize: 16}}>적립포인트</Text>
                                    </View>
                                    <View style={{width: '50%', height: 30, justifyContent: 'center', alignItems: 'flex-end'}}>
                                        <Text style={{marginRight: 10, fontSize: 16, fontWeight: 'bold'}}>{point} P</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <Text style={{fontSize: 25}}>수업 안내</Text>
                            <View style={{backgroundColor: 'green', width: '100%', height: 175}}>
                                <Image source={image} style={{height: 175, width: '100%', resizeMode: 'stretch'}}/>
                            </View>
                            <View>
                                <Text style={{fontSize: 20}}>{name}</Text>
                            </View>
                            <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 15}}>
                                <Text>기본코스안내</Text>
                                <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 15}}>
                                    <View style={{ flexDirection: 'row', width: '90%'}}>
                                        <View style={{width: '28%', height: 50, justifyContent: 'center', alignItems: 'center', borderColor: '#ffbe04', borderWidth: 1}}>
                                            <Text style={{textAlign: 'center'}}>{basicCourse01}</Text>
                                        </View>
                                        <View style={{width: '10%', height: 50, justifyContent: 'center', alignItems: 'center'}}>
                                            <Image source={require('../images/right-arrow.png')} style={{width: 20, height: 20}}/>
                                        </View>
                                        <View style={{width: '28%', height: 50, justifyContent: 'center', alignItems: 'center', borderColor: '#ffbe04', borderWidth: 1}}>
                                            <Text style={{textAlign: 'center'}}>{basicCourse02}</Text>
                                        </View>
                                        <View style={{width: '10%', height: 50, justifyContent: 'center', alignItems: 'center'}}>
                                            <Image source={require('../images/right-arrow.png')} style={{width: 20, height: 20}}/>
                                        </View>
                                        <View style={{width: '28%', height: 50, justifyContent: 'center', alignItems: 'center', borderColor: '#ffbe04', borderWidth: 1}}>
                                            <Text style={{textAlign: 'center'}}>{basicCourse03}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', width: '90%'}}>
                                        <View style={{width: '28%', height: 50, justifyContent: 'center', alignItems: 'center'}}>

                                        </View>
                                        <View style={{width: '10%', height: 50, justifyContent: 'center', alignItems: 'center'}}>

                                        </View>
                                        <View style={{width: '28%', height: 50, justifyContent: 'center', alignItems: 'center'}}>

                                        </View>
                                        <View style={{width: '10%', height: 50, justifyContent: 'center', alignItems: 'center'}}>

                                        </View>
                                        <View style={{width: '28%', height: 50, justifyContent: 'center', alignItems: 'center'}}>
                                            <Image source={require('../images/down-arrow.png')} style={{width: 20, height: 20}}/>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', width: '90%'}}>
                                        <View style={{width: '28%', height: 50, justifyContent: 'center', alignItems: 'center', borderColor: '#ffbe04', borderWidth: 1}}>
                                            <Text style={{textAlign: 'center'}}>{basicCourse06}</Text>
                                        </View>
                                        <View style={{width: '10%', height: 50, justifyContent: 'center', alignItems: 'center'}}>
                                            <Image source={require('../images/back.png')} style={{width: 20, height: 20}}/>
                                        </View>
                                        <View style={{width: '28%', height: 50, justifyContent: 'center', alignItems: 'center', borderColor: '#ffbe04', borderWidth: 1}}>
                                            <Text style={{textAlign: 'center'}}>{basicCourse05}</Text>
                                        </View>
                                        <View style={{width: '10%', height: 50, justifyContent: 'center', alignItems: 'center'}}>
                                            <Image source={require('../images/back.png')} style={{width: 20, height: 20}}/>
                                        </View>
                                        <View style={{width: '28%', height: 50, justifyContent: 'center', alignItems: 'center', borderColor: '#ffbe04', borderWidth: 1}}>
                                            <Text style={{textAlign: 'center'}}>{basicCourse04}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 15}}>
                                <Text>세부일정안내</Text>
                                <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 15}}>
                                    <View style={{ flexDirection: 'row', width: '95%'}}>
                                        <View style={{width: '20%', height: 50, justifyContent: 'center', alignItems: 'center', borderColor: 'black', borderWidth: 1, backgroundColor: '#ffbe04', borderRightWidth: 0, borderBottomWidth:0}}>
                                            <Text>시간</Text>
                                        </View>
                                        <View style={{width: '30%', height: 50, justifyContent: 'center', alignItems: 'center', borderColor: 'black', borderWidth: 1, backgroundColor: '#ffbe04', borderRightWidth: 0, borderBottomWidth:0}}>
                                            <Text>장소</Text>
                                        </View>
                                        <View style={{width: '50%', height: 50, justifyContent: 'center', alignItems: 'center', borderColor: 'black', borderWidth: 1, backgroundColor: '#ffbe04', borderBottomWidth:0}}>
                                            <Text>학습내용</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', width: '95%'}}>
                                        <View style={{width: '20%', borderColor: 'black', borderWidth: 1, justifyContent: 'center', borderRightWidth: 0, borderBottomWidth:0, padding:2}}>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>8:00~8:30</Text>
                                        </View>
                                        <View style={{width: '30%', borderColor: 'black', borderWidth: 1, justifyContent: 'center', borderRightWidth: 0, borderBottomWidth:0, padding:2}}>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>인천 연수구청(미정)</Text>
                                        </View>
                                        <View style={{width: '50%', borderColor: 'black', borderWidth: 1, justifyContent: 'center', borderBottomWidth:0, padding:2}}>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>-인원점검 및 도서배포 등</Text>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>-팀구성 및 담당강사와 인사나누기</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', width: '95%'}}>
                                        <View style={{width: '20%', borderColor: 'black', borderWidth: 1, justifyContent: 'center', borderRightWidth: 0, borderBottomWidth:0, padding:2}}>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>9:30~10:00</Text>
                                        </View>
                                        <View style={{width: '30%', borderColor: 'black', borderWidth: 1, justifyContent: 'center', borderRightWidth: 0, borderBottomWidth:0, padding:2}}>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>청와대 입장대기 사전 수업</Text>
                                        </View>
                                        <View style={{width: '50%', borderColor: 'black', borderWidth: 1, justifyContent: 'center', borderBottomWidth:0, padding:2}}>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>-민주주의란?</Text>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>-삼권분립이란?</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', width: '95%'}}>
                                        <View style={{width: '20%', borderColor: 'black', borderWidth: 1, justifyContent: 'center', borderRightWidth: 0, borderBottomWidth:0, padding:2}}>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>10:00~11:30</Text>
                                        </View>
                                        <View style={{width: '30%', borderColor: 'black', borderWidth: 1, justifyContent: 'center', borderRightWidth: 0, borderBottomWidth:0, padding:2}}>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>청와대</Text>
                                        </View>
                                        <View style={{width: '50%', borderColor: 'black', borderWidth: 1, justifyContent: 'center', borderBottomWidth:0, padding:2}}>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>-행정부란?</Text>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>-행정부가하는 일은?</Text>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>-행정부의 수장, 대통령</Text>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>-청와대 둘러보기</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', width: '95%'}}>
                                        <View style={{width: '20%', borderColor: 'black', borderWidth: 1, justifyContent: 'center', borderRightWidth: 0, borderBottomWidth:0, padding:2}}>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>11:30~12:00</Text>
                                        </View>
                                        <View style={{width: '30%', borderColor: 'black', borderWidth: 1, justifyContent: 'center', borderRightWidth: 0, borderBottomWidth:0, padding:2}}>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>이동 및 차량이동간 학습</Text>
                                        </View>
                                        <View style={{width: '50%', borderColor: 'black', borderWidth: 1, justifyContent: 'center', borderBottomWidth:0, padding:2}}>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>-퀴즈풀기를 통한 핵심키워드 정리</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', width: '95%'}}>
                                        <View style={{width: '20%', borderColor: 'black', borderWidth: 1, justifyContent: 'center', borderRightWidth: 0, borderBottomWidth:0, padding:2}}>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>12:00~13:00</Text>
                                        </View>
                                        <View style={{width: '30%', borderColor: 'black', borderWidth: 1, justifyContent: 'center', borderRightWidth: 0, borderBottomWidth:0, padding:2}}>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>점심식사</Text>
                                        </View>
                                        <View style={{width: '50%', borderColor: 'black', borderWidth: 1, justifyContent: 'center', borderBottomWidth:0, padding:2}}>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>-국회식당</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', width: '95%'}}>
                                        <View style={{width: '20%', borderColor: 'black', borderWidth: 1, justifyContent: 'center', borderRightWidth: 0, borderBottomWidth:0, padding:2}}>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>13:00~14:00</Text>
                                        </View>
                                        <View style={{width: '30%', borderColor: 'black', borderWidth: 1, justifyContent: 'center', borderRightWidth: 0, borderBottomWidth:0, padding:2}}>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>국회본회의장</Text>
                                        </View>
                                        <View style={{width: '50%', borderColor: 'black', borderWidth: 1, justifyContent: 'center', borderBottomWidth:0, padding:2}}>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>-국회의사당 둘러보기</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', width: '95%'}}>
                                        <View style={{width: '20%', borderColor: 'black', borderWidth: 1, justifyContent: 'center', borderRightWidth: 0, borderBottomWidth:0, padding:2}}>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>14:00~15:00</Text>
                                        </View>
                                        <View style={{width: '30%', borderColor: 'black', borderWidth: 1, justifyContent: 'center', borderRightWidth: 0, borderBottomWidth:0, padding:2}}>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>헌정기념관</Text>
                                        </View>
                                        <View style={{width: '50%', borderColor: 'black', borderWidth: 1, justifyContent: 'center', borderBottomWidth:0, padding:2}}>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>-입법부란?</Text>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>-국회가 하는 일은 무엇일까요?</Text>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>-국민을 대표하는 국회의원</Text>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>-선거의 4대 원칙</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', width: '95%'}}>
                                        <View style={{width: '20%', borderColor: 'black', borderWidth: 1, justifyContent: 'center', borderRightWidth: 0, borderBottomWidth:0, padding:2}}>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>15:00~15:30</Text>
                                        </View>
                                        <View style={{width: '30%', borderColor: 'black', borderWidth: 1, justifyContent: 'center', borderRightWidth: 0, borderBottomWidth:0, padding:2}}>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>사후활동 및 핵심정리</Text>
                                        </View>
                                        <View style={{width: '50%', borderColor: 'black', borderWidth: 1, justifyContent: 'center', borderBottomWidth:0, padding:2}}>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>-워크지를 통한 핵심내용 정리</Text>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>-미션활등을 통한 핵심키워드 정리</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', width: '95%'}}>
                                        <View style={{width: '20%', borderColor: 'black', borderWidth: 1, justifyContent: 'center', borderRightWidth: 0, padding:2}}>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>15:30~16:30</Text>
                                        </View>
                                        <View style={{width: '30%', borderColor: 'black', borderWidth: 1, justifyContent: 'center', borderRightWidth: 0, padding:2}}>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>인천 연수구청 도착</Text>
                                        </View>
                                        <View style={{width: '50%', borderColor: 'black', borderWidth: 1, justifyContent: 'center', padding:2}}>
                                            <Text style={{fontSize: 10, marginLeft: 3}}>-인사 후 귀가</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{alignItems: 'center', padding: 10}}>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{alignItems: 'center', justifyContent: 'center', width: '20%', borderColor: '#C0C0C0', borderWidth: 3}}>
                                        <Text style={{textAlign: 'center'}}>학습안내</Text>
                                    </View>
                                    <View style={{width: '80%', borderColor: '#C0C0C0', borderWidth: 3, borderLeftWidth: 0}}>
                                        <View style={{marginLeft: 5}}>
                                            <Text>{guideInfo01}</Text>
                                            <Text>{guideInfo02}</Text>
                                            <Text>{guideInfo03}</Text>
                                            <Text>{guideInfo04}</Text>
                                            <Text>{guideInfo05}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{alignItems: 'center', padding: 10}}>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{alignItems: 'center', justifyContent: 'center', width: '20%', borderColor: '#C0C0C0', borderWidth: 3}}>
                                        <Text style={{textAlign: 'center'}}>관련교과</Text>
                                    </View>
                                    <View style={{width: '80%', borderColor: '#C0C0C0', borderWidth: 3, borderLeftWidth: 0}}>
                                        <View style={{marginLeft: 5, justifyContent: 'center'}}>
                                            <Text>{RelatedSubject01}</Text>
                                            <Text>{RelatedSubject02}</Text>
                                            <Text>{RelatedSubject03}</Text>
                                            <Text>{RelatedSubject04}</Text>
                                            <Text>{RelatedSubject05}</Text>
                                            <Text>{RelatedSubject06}</Text>
                                            <Text>{RelatedSubject07}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{alignItems: 'center', padding: 10}}>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{alignItems: 'center', justifyContent: 'center', width: '20%', borderColor: '#C0C0C0', borderWidth: 3}}>
                                        <Text style={{textAlign: 'center'}}>핵심 키워드</Text>
                                    </View>
                                    <View style={{width: '80%', borderColor: '#C0C0C0', borderWidth: 3, borderLeftWidth: 0}}>
                                        <View style={{marginLeft: 5}}>
                                            <Text>{KeyKeyword}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{alignItems: 'center', padding: 10}}>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{alignItems: 'center', justifyContent: 'center', width: '20%', borderColor: '#C0C0C0', borderWidth: 3}}>
                                        <Text style={{textAlign: 'center'}}>미션활동</Text>
                                    </View>
                                    <View style={{width: '80%', borderColor: '#C0C0C0', borderWidth: 3, borderLeftWidth: 0}}>
                                        <View style={{marginLeft: 5}}>
                                            <Text>{MissionActivity}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{width: '100%', height: 400, alignItems: 'center', backgroundColor: '#E5E4E2', marginTop: 10}}>
                                <View style={{alignItems: 'center'}}>
                                    <Text style={{display: 'none'}}>신청 및 환불</Text>
                                </View>
                                <View style={{width: '93%', paddingTop: 15}}>
                                    <Text>환불규정</Text>
                                    <View>
                                        <Text style={{fontSize: 12}}>무통장입금의 경우 행사<Text style={{color: '#FFA62F'}}>3일 전</Text>까지 입금하지 않으면<Text style={{color: 'red'}}>자동 취소</Text>됩니다. 꼭 <Text style={{color: '#FFA62F'}}>3일 전까지 입금 부탁</Text>드리겠습니다.</Text>
                                        <Text style={{fontSize: 12}}>최소 인원 미달로 행사가 취소 될 경우, 출발일 기준 2일전까지 연락을 드리며, 전액 환불해 드립니다.</Text>
                                        <Text style={{fontSize: 12}}>프로그램 신청 후 다른 날짜로 변경은 반나절프로그램은 3일 전까지 가능합니다.</Text>
                                        <Text style={{fontSize: 12, fontWeight: 'bold'}}>개인적인 사정으로 행사가 취소시 공제율은 다음과 같습니다.</Text>
                                        <Text style={{fontSize: 12, color: '#FFA62F'}}>- 근무시간: 월~금 9:30~18:00 (토,일,법정공휴일 휴무)</Text>
                                        <Text style={{fontSize: 12, color: '#FFA62F'}}>(근무시간 이외에는 취소 및 변경은 처리되지 않으며, 휴뮤가 연달아 있는 경우 첫째날 휴무 기준으로 환불요율이 적용)</Text>
                                        <Text style={{fontSize: 12, color: '#FFA62F'}}>예) 일요일 행사의 경우 토요일 행사 기준으로 환불요율이 적용</Text>
                                        <Text style={{fontSize: 12, color: '#1589FF'}}>* 이용권 사용시 행사진행 주 목요일 오전까지만 변경 가능하며, 이후에는 자동소멸됩니다.</Text>
                                        <Text style={{fontSize: 12}}>행사 취소시 공제율은 당사 환불규정과 같습니다.</Text>
                                        <Text style={{fontSize: 12}}><Text style={{color: '#1589FF'}}>[반나절 프로그램]</Text> 3일전취소-전액환불 / 2일전 80%환불 / 1일전 70% 환불 / 당일취소-50%환불 / 당일 미통보-환불없음</Text>
                                        <Text style={{fontSize: 12}}>전액 환불시점(3일전 취소)이 공휴일인 경우, 공휴일 전날(18:00)까지 연락을 주셔야 전액환불처리됩니다.</Text>
                                    </View>
                                    <View style={{backgroundColor: '#FFA62F', width: 120, height: 25, alignItems: 'center', justifyContent: 'center', elevation: 1}}>
                                        <Text style={{fontSize: 12, color: 'white', fontWeight: 'bold'}}>환불규정 자세히 보기</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{width: '100%', height: 300, alignItems: 'center', backgroundColor: '#E5E4E2', marginTop: 10, paddingTop: 15}}>
                                <View style={{alignItems: 'center'}}>
                                    <Text style={{display: 'none'}}>안내사항</Text>
                                </View>
                                <View style={{width: '93%'}}>
                                    <View>
                                        <Text style={{fontSize: 12}}>수업시간은 오전 10시부터 4시까지입니다.</Text>
                                        <Text style={{fontSize: 12}}>강사는 경복궁 주차장앞에서 대기하고 있습니다.</Text>
                                        <Text style={{fontSize: 12}}>교육비는 1회당 45,000원입니다. 강사비, 차량비, 사후워크지, 입장료, 보험료가 일체포함된 가격입니다.</Text>
                                        <Text style={{fontSize: 12}}>16명당 1명의 강사가 진행하는 프로그램입니다. 팀별 미션수행을 하는 수업입니다.</Text>
                                        <Text style={{fontSize: 12}}>대상은 초등 전학년입니다.</Text>
                                        <Text style={{fontSize: 12}}>준비물은 필기도구입니다.</Text>
                                        <Text style={{fontSize: 12}}>신청자가 12명 이하일 경우, 행사가 취소될 수 있습니다.</Text>
                                        <Text style={{fontSize: 12}}>무통장 입금의 경우 ,3일 전까지 입금바라며, 행사 취소시 전액환불됩니다.</Text>
                                    </View>
                                    <View style={{marginTop: 15}}>
                                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#1589FF'}}>학부모 참관은 가능하나, 입장료와 점심식대 등 소요되는 비용은 개인부담입니다.</Text>
                                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#1589FF'}}>본 상품은 참가학생별로 여행자보험에 가입되어 진행됩니다.</Text>
                                    </View>
                                </View>
                            </View>
                        </View>                        
                    </ScrollView>
                </View>
                <View style={styles.bottom}>
                    <TouchableHighlight style={{width: '97%', height: '80%', margin: 10, backgroundColor: 'black', borderRadius: 4, alignItems: 'center', justifyContent: 'center'}} onPress={this.handleOpen}>
                        <View>
                            <Text style={{color: 'white'}}>신청하기</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <Animated.View style={[StyleSheet.absoluteFill, styles.cover, backdrop]}>
                    <View style={[styles.sheet]}>
                        <Animated.View style={[styles.popup, slideUp]}>
                            <View style={{alignItems: 'flex-end', marginTop: 10, marginRight: 10}}>
                                <TouchableOpacity onPress={this.handleClose}>
                                    <Image source={require('../images/cancel.png')} style={{width: 15, height: 15}} />
                                </TouchableOpacity>
                            </View>
                            <View style={{margin: 10, alignItems: 'center'}}>
                                
                                <View style={{width: '100%', height: 40, borderColor: '#C0C0C0', borderWidth: 1, borderRadius: 4, justifyContent: 'center'}}>
                                    <Picker selectedValue = {this.state.animatedDate} onValueChange = {this.updateUser} itemTextStyle={{fontSize: 10}}>
                                        <Picker.Item label = "프로그램을 선택하세요" value = "프로그램을 선택하세요" />
                                        <Picker.Item label = {date} value = {date} />
                                    </Picker>
                                </View>
                                <View style={{flexDirection: 'row', width: '100%', paddingTop: 10 }}>
                                    <View style={{width: '60%'}}>
                                        <Text>{name}</Text>
                                        <View style={{paddingTop: 15}}>
                                            <Text style={{fontSize: 15, textAlign: 'left'}}>{price}</Text>
                                        </View>
                                    </View>
                                    <View style={{width: '40%', justifyContent: 'center', alignItems: 'flex-end'}}>
                                        <View style={{width: '80%', height: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                            <View style={{width: '25%', height: 30, borderColor: 'gray', borderWidth: 1}}>
                                                <TouchableOpacity style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}} onPress={(count) => this.updateCountSubstraction(this.state.count)}>
                                                    <Text>-</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{width: '50%', height: 30, borderColor: 'gray', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                                                <Text>{this.state.count}</Text>
                                            </View>
                                            <View style={{width: '25%', height: 30, borderColor: 'gray', borderWidth: 1}}>
                                                <TouchableOpacity style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}} onPress={(count) => this.updateCountAddition(this.state.count)}>
                                                    <Text>+</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={{width: '100%', height: 40, margin: 10, backgroundColor: 'green', borderRadius: 4, alignItems: 'center', justifyContent: 'center'}}>
                                    <TouchableOpacity style={{width: '100%', height: 40, alignItems: 'center', justifyContent: 'center'}} onPress={() => this.props.navigation.navigate('Pay', {
                                        animatedDate: this.state.animatedDate,
                                        name: name,
                                        place: place,
                                        price: price,
                                        count: this.state.count
                                    })}>
                                        <Text style={{color: 'white'}}>신청하기</Text>
                                    </TouchableOpacity>
                                </View>
                                
                            </View>
                        </Animated.View>
                    </View>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 24,
    },
    header: {
        height: 50,
        backgroundColor: 'white',
    },
    content: {
        flex: 8,
    },
    bottom: {
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    cover: {
        backgroundColor: "rgba(0,0,0,.5)",
    },
    sheet: {
        position: "absolute",
        top: Dimensions.get("window").height,
        left: 0,
        right: 0,
        height: "100%",
        justifyContent: "flex-end",
    },
    popup: {
        backgroundColor: "#FFF",
        marginHorizontal: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        minHeight: 190,
    },
});
