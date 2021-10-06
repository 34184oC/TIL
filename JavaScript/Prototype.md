<br>

# Prototype

<br>

## 프로토타입(prototype)
어떠한 객체가 만들어지기 위해 객체의 모태가 되는 원형

- 자바스크립트는 일반적인 객체지향 언어와 다르게, 프로토타입을 이용한 복사(Cloning)을 통해 새로운 객체 생성

- 일반적인 객체 생성 방식: 속성은 생성자, 메서드는 프로토타입에서 정의
```js
// 생성자 속성 정의
function person(name, age) {
  this.name = name;
  this.age = age;
}

// prototype을 이용한 메서드 정의
person.prototype.isAudult = function() {
  return this.age > 18;
}

// 객체 생성
const p1 = new person("bob", 26);
const p2 = new person("alice", 16);

// 객체 메서드 호출
console.log(p1.isAudult()); // true
console.log(p2.isAudult()); // false
```