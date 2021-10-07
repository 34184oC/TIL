<br>

# 접근성 높은 테이블 만들기
 > 기존에 웹 문서를 제작할 때는 tale관련 요소를 사용했으나 이는 구조적인 마크업을 해치며 웹접근성 관점에서도 바람직하지 않은 사용 사례이다. <br> 따라서 가능하면 데이터 표현에 CSS를 사용하고 테이블을 만들어야하는 경우 각 행과 열에 올바른 머리글을 사용 해야한다! 이번 경우는 table을 사용해보았다.

<br>

## 버스 시간표 다시 구성하기
[양산시 광역버스정보시스템](http://bus.yangsan.go.kr/yangsan_2016/yangsan_mobile/busline/bus_search_time.php?lineID=0010009002&lineName=10%B9%F8)

<br>

- __선정 사유__
급할 때 자주 들어가서 보는 사이트인데 매번 보기가 불편하여 선택했다. 

<br>

- __기존 문제점__
1. 요일A(출발지1, 출발지2), 요일B(출발지1, 출발지2)로 나뉘어져있어 출발지를 우선으로 봐야함에 어려움이 있다.
<br>
2. 첫 배차시간부터 마지막 배차시간까지 세로, 가로 일렬로 나열되어있는 것이 아니라 표 형태로 되어있기 때문에 차례로 시간을 보기에 시선 흐름상 적절하지 않다.
<br>
3. WCAG 가이드라인
  - 인식 : 아이콘에 title이 없어 반응이 없다.
  - 운용 : 표엔 기능이 없으므로 제외한 나머지 동작은 키보드로 사용이 가능하다.
  - 이해 : 명확하지만 한 눈에 이해할 수 없다. 검색 등 명시된 아이콘을 눌러도 반응이 없으며 따로 검색 해야한다.
  - 견고 : IE, 크롬 등에서 작동한다.
4. light house 
: 점수가 되게 높다...별거 없는 홈페이지라 그런가?ㅠㅠ 잘 만들어졌나보다. 코드는 좋고 가시적인 접근성만 별로인 것 같다.


<br>

- __문제 해결__
1. 4개로 나뉘어져있던 컨텐츠를 크게 두 개로 나누었다.
1-1. 다시 출발지별로 나누어 시간표를 세로로 정렬하였다.
2. 아이콘에 title 부여

<br>

- 결론
1. 보기 좋지 않은 사이트여도 코드자체가 접근성, SEO가 좋을 수 있다...
2. lighthouse라는 것을 처음 알았다. 자주 애용할 수 있을 것 같다.
3. 선정할 때 어떤 사이트를 어떻게 하라는거지? 싶어서 헤맸다...그리고 분명 보기엔 별로였는데 막상 골라서 해보니 괜찮은 곳이어서 별로 고칠 것이 없었다ㅠㅠ
심지어 테이블 내용의 양도 적은 편이어서(생각난게 여기밖에 없었다..) 사이트 자체 선택을 잘못한 것 같다.😥😥