// call, apply, bind

// call
// call 메서드는 모든 함수에서 사용할 수 있으며, this를 특정 값으로 지정할 수 있다.
const mike = { name: 'Mike' };
const tom = { name: 'Tom '};

// 예시1
function showThisName() {
  console.log(this.name);
}

showThisName();
showThisName.call(mike);
showThisName.call(tom);

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation
}

update.call(mike, 1999, 'singer');
console.log(mike);

update.call(tom, 2002, 'developer');
console.log(tom);

// 예시2
var nums = [3, 10, 1, 6, 4];
// const minNum = Math.min(...nums);
// const maxNum = Math.max(...nums);

var minNum = Math.min.call(null, ...nums);
console.log(minNum); // 1

var maxNum = Math.max.call(null, ...nums);
console.log(maxNum); // 10



// apply
// apply는 함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같다.<br>
// call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, apply는 매개변수를 배열로 받는다.

// 예시1
update.apply(mike, [1999, 'singer']);
console.log(mike);

update.apply(tom, [2002, 'developer']);
console.log(tom);

// 예시2
var nums = [3, 10, 1, 6, 4];
var minNum = Math.min.apply(null, nums);
var maxNum = Math.max.apply(null, nums);

console.log(minNum);
console.log(maxNum);



// bind
// 함수의 this 값을 영구히 바꿀 수 있다.

// 예시1
const updateMike = update.bind(mike);
updateMike(1980, 'police');
console.log(mike); // {name: 'Mike', birthYear: 1980, occupation: 'police'}

// 예시2
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
