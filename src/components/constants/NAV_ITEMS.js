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
      { id: '01', kr: '시스템 개발', en: 'si', desc: '시스템 개발에 대한 설명문구' },
      { id: '02', kr: '해도제작', en: 'chart', desc: '해도제작에 대한 설명문구' },
      { id: '03', kr: '위성사업', en: 'satellite', desc: '위성사업에 대한 설명문구' },
      { id: '04', kr: '해양예보방송', en: 'media', desc: '해양예보방송에 대한 설명문구' },
      { id: '05', kr: 'R&D', en: 'rnd', desc: '연구사업에 대한 설명문구' },
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
