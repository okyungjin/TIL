# JavaScript
## [call, apply, bind](./call-apply-bind.js)
### call
call 메서드는 모든 함수에서 사용할 수 있으며, this를 특정 값으로 지정할 수 있다.
```js
const mike = { name: 'Mike' };
const tom = { name: 'Tom '};

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation
}

update.call(mike, 1999, 'singer');
console.log(mike); // {name: 'Mike', birthYear: 1999, occupation: 'singer'}

update.call(tom, 2002, 'developer');
console.log(tom); // {name: 'Tom ', birthYear: 2002, occupation: 'developer'}
```
```js
const nums = [3, 10, 1, 6, 4];
// const minNum = Math.min(...nums);
// const maxNum = Math.max(...nums);

const minNum = Math.min.call(null, ...nums);
console.log(minNum); // 1

const maxNum = Math.max.call(null, ...nums);
console.log(maxNum); // 10
```

### apply
apply는 함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같다. call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, apply는 매개변수를 배열로 받는다.
```js
const mike = { name: 'Mike' };
const tom = { name: 'Tom '};

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation
}

update.apply(mike, [1999, 'singer']);
console.log(mike); // {name: 'Mike', birthYear: 1999, occupation: 'singer'}

update.apply(tom, [2002, 'developer']);
console.log(tom); // {name: 'Tom ', birthYear: 2002, occupation: 'developer'}
```
```js
const nums = [3, 10, 1, 6, 4];
const minNum = Math.min.apply(null, nums);
console.log(minNum); // 1

const maxNum = Math.max.apply(null, nums);
console.log(maxNum); // 10
```

### bind
함수의 this 값을 영구히 바꿀 수 있다.
```js
const mike = { name: 'Mike' };

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation
}

const updateMike = update.bind(mike);
updateMike(1980, 'police');
console.log(mike); // {name: 'Mike', birthYear: 1980, occupation: 'police'}
```
```js
const user = {
  name: 'Mike',
  showName: function() {
    console.log(`hello, ${this.name}`);
  },
};
user.showName(); // hello, Mike

const fn = user.showName;
fn(); // hello,
fn.call(user); // hello, Mike
fn.apply(user); // hello, Mike

const boundFn = fn.bind(user);
boundFn(); // hello, Mike
```
