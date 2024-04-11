export const NAV_ITEMS = [
  {
    en: 'info',
    kr: '회사소개',
    dropdownItems: [
      { kr: '인사말', en: 'greeting' },
      { kr: '회사연혁', en: 'history' },
      { kr: '조직도', en: 'organization' },
      { kr: '오시는 길', en: 'location' },
    ],
  },
  {
    en: 'business',
    kr: '사업분야',
    dropdownItems: [
      { id: '01', kr: '시스템 개발', en: 'si', desc: '김상현&김형도(투킴) 이끈다' },
      { id: '02', kr: '해도제작', en: 'chart', desc: '해도는 진짜 모르겠어' },
      { id: '03', kr: '위성 데이터', en: 'satellite', desc: '해양위성영상 알고리즘 연구 및 품질검증' },
      { id: '04', kr: '해양예보방송', en: 'media', desc: '해양예보방송 운영 및 영상물 제작' },
      { id: '05', kr: 'R&D', en: 'rnd', desc: '국가연구개발사업 및 자체 프로젝트 수행' },
    ],
  },
  {
    en: 'performance',
    kr: '사업실적',
    dropdownItems: [
      { kr: '주요 실적', en: 'major' },
      { kr: '전체 실적', en: 'all' },
    ],
  },
  {
    en: 'recruit',
    kr: '인재채용',
    dropdownItems: [
      { kr: '복지문화', en: 'welfare' },
      { kr: '채용안내', en: 'recruitInfo' },
      { kr: '채용공고', en: 'recruitNotice' },
    ],
  },
]

export default NAV_ITEMS
