// 국가/지역 선택에 따라 다른 selsect box 내용 발생
// 상세주소는 필수가 아님
// 우편번호, 통관번호, 이름, 전화번호, select 모두 value값이 있어야
// 제출 가능함
// 비어있으면 창 발생 ' Alert창 발생 빈칸이 있습니다. 확인해주세요"
// 통관번호 -> checkbox 표시 안되있으면 못넘어감.
// 라디오버튼은 둘중에 하나만 체크되어야함
// 저장되어진 내용은 앞 모달창에 보여줘야함

// 다중 선택

// 국가/ 시도/ 시군구

let si = [
  { name: seoul, Kname: `서울특별시` },
  { name: busan, Kname: `부산광역시` },
  { name: daegu, Kname: `대구광역시` },
  { name: incheon, Kname: `인천광역시` },
  { name: gwangju, Kname: `광주광역시` },
  { name: daejeon, Kname: `대전광역시` },
  { name: ulsan, Kname: `울산광역시` },
  { name: gyeonggi, Kname: `경기도` },
  { name: gangwon, Kname: `강원특별자치도` },
  { name: jeollabukdo, Kname: `전북특별자치도` },
  { name: jeollanamdo, Kname: `전라남도` },
  { name: chungcheongbukdo, Kname: `충청북도` },
  { name: chungcheongnamdo, Kname: `충청남도` },
  { name: jeju, Kname: `제주도` },
];

let guKun = {
  seoul: [
    강남구,
    강동구,
    강북구,
    강서구,
    관악구,
    광진구,
    구로구,
    금천구,
    노원구,
    도봉구,
    동대문구,
    동작구,
    마포구,
    서대문구,
    서초구,
    성동구,
    성북구,
    송파구,
    양천구,
    영등포구,
    용산구,
    은평구,
    종로구,
    중구,
    중랑구,
  ],
  busan: [
    강서구,
    기장군,
    남구,
    동구,
    동래구,
    부산진구,
    북구,
    사상구,
    사하구,
    서구,
    서면구,
    수영구,
    연제구,
    영도구,
    중구,
    해운대구,
  ],
  daegu: [남구, 달서구, 달성군, 동구, 북구, 서구, 수성구, 중구],
  incheon: [
    강화군,
    옹진군,
    계양구,
    남구,
    동구,
    미추홀구,
    부평구,
    서구,
    송도구,
    연수구,
    중구,
  ],
  gwangju: [광산구, 남구, 북구, 서구, 동구],
  daejeon: [대덕구, 동구, 서구, 유성구, 중구],
  ulsan: [남구, 동구, 북구, 중구, 울주군, 울산광역시],
  gyeonggi: [
    고양시,
    과천시,
    광명시,
    광주시,
    구리시,
    군포시,
    김포시,
    남양주시,
    동두천시,
    부천시,
    성남시,
    수원시,
    시흥시,
    안산시,
    안성시,
    안양시,
    양주시,
    양평군,
    여주시,
    오산시,
    용인시,
    의왕시,
    의정부시,
    이천시,
    파주시,
    평택시,
    포천시,
    하남시,
    화성시,
    가평군,
    가평군,
    양평군,
    여주군,
    연천군,
    포천군,
  ],
  gangwon: [
    강릉시,
    고성군,
    동해시,
    삼척시,
    속초시,
    원주시,
    정선군,
    철원군,
    춘천시,
    태백시,
    평창군,
    홍천군,
    화천군,
    횡성군,
  ],
  jeollabukdo: [
    군산시,
    김제시,
    남원시,
    전주시,
    정읍시,
    익산시,
    고창군,
    무주군,
    부안군,
    순창군,
    임실군,
    진안군,
  ],
  jeollanamdo: [
    목포시,
    나주시,
    여수시,
    순천시,
    광양시,
    강진군,
    고흥군,
    곡성군,
    구례군,
    담양군,
    장성군,
    장흥군,
    진도군,
    해남군,
    화순군,
  ],
  chungcheongbukdo: [
    제천시,
    청주시,
    충주시,
    괴산군,
    단양군,
    보은군,
    옥천군,
    영동군,
    영죽군,
    음성군,
    진천군,
  ],
  chungcheongnamdo: [, 금산군, 부여군, 서천군, 연기군, 예산군, 청양군, 태안군],
};
