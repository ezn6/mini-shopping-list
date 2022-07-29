# mini-shopping-list

### JS

- 함수 loadItems : 브라우저 api인 fetch를 이용하여 data.json의 데이터들을 가져온다.
- 함수 displayItems : innerHTML은 ``으로 태그들을 묶어준 문자열 이므로 map으로 배열을 만든 후에 모든 태그들을 문자열로 join해주어야한다. join을 해주지 않으면 []안에 으로 묶인 태그들이 있는것이다.
- 버튼들로 카테고리 분류할때 : 버튼 <section>의 모든 버튼들을 querySelector로 가져온다. HTML의 dataset 속성을 이용하여 어떤 버튼이 눌렸는지 감지한다.
- 리팩토링1🔅 : filter함수를 사용하려면 내가 사용한 방법같이 type,color을 따로 dataset을 나눠서 사용하기 보단(그리고 if문에서 코드의 중복이 이루어짐) HTML에서 dataset을 (key,value)이런식으로 하는게 좋다. `data-key="type" data-value="tshirt"`. 그래야 코드 중복을 피해 오브젝트 특성을 이용하여 `items.filter((item) => item[key] === value);` 로 짤수 있게 된다!
- 리팩토링2🔅 : 하지만 filter함수를 사용하면 사용할때마다 createHTMLString함수가 사용되어 innerHTML을 계속해서 작성하게 된다. 계속해서 새로운 리스트를 만들어 보여주는것 보다는 맨 처음에 불러온 데이터에서 필터링을 하면 `display : none;`으로 css설정이 되게끔 하는것이 더 좋을것 같다. -> querySelectorAll('.item') 각각의 아이템들을 불러오고, <li>태그에 dataset type, dataset color을 지정해주고, forEach함수로 type, color을 판별한다.
