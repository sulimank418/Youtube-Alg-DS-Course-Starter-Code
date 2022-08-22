// function Node(data,next=null){
//     this.data = data;
//     this.next = next;
// }

// class LList{
//     constructor(){
//         this.head = null;
//     }
//     insert(data){
//         if(!this.head) return this.head = new Node(data);
//         let current  = this.head;
//         while(current.next){
//             current = current.next
//         }
//         current.next = new Node(data);
//     }
//     print(){
//         let current  = this.head;
//         while(current){
//             console.log(current.data)
//             current = current.next
//         }

//     }
// }

// var ll = new LList();
// ll.insert(10)
// ll.insert(20)

// ll.print()
// function fizzBuzz(n) {
//     // for(let i=1;i<=n;i++){
//     //   if(i%3==0 &&i%5==0){
//     //     console.log('fizzbuzz');
//     //   }else if(i%3==0){
//     //     console.log('fizz');
//     //   }else if(i%5==0){
//     //     console.log('buzz');
//     //   }else{
//     //     console.log(i);
//     //   }
//     // }
//     for(let i=1;i<=n;i++){
//         var str = '';
//         if(i%3 == 0){
//             str +='fizz';
//         }
//         if(i%5==0){
//             str +='buzz';
//         }
//         if(str == ''){
//             str = i;
//         }
//         console.log(str)
//     }
// }

//   fizzBuzz(30)

// function chunk(array, size) {
//     let res = [];
//     for(let i=0;i<array.length;i++){
//       let last  = res[res.length-1];
//       console.log(last)
//       const item = array[i]

//       if(!last || last.length ===  size){
//         res.push([item])
//       }else{
//         last.push(item)
//       }
//     }
//     return res;
//   }
//   console.log(chunk(["a", "b", "c", "d","e"],2))

// var roman = new Array();
// roman['I'] = 1;
// roman['V'] = 5;
// roman['X'] = 10;
// roman['L'] = 50;
// roman['C'] = 100;
// roman['D'] = 500;
// roman['M'] = 1000;

// var roman = (s) => {
//   var value = 0;
//   switch (s) {
//     case 'I': value = 1; break;
//     case 'V': value = 5; break;
//     case 'X': value = 10; break;
//     case 'L': value = 50; break;
//     case 'C': value = 100; break;
//     case 'D': value = 500; break;
//     case 'M': value = 1000; break;
//   }
//   return value;
// }

// function romanToInt(s) {
//   var romStr = s.toUpperCase();
//   var res = 0;

//   /*for (let i = 0; i < romStr.length; i++) {
//     var item = romStr[i];
//     var currValue = 0;
//     var prevItem = romStr[i - 1];
//     for (var key in roman) {
//       if (item == key) {
//         currValue = roman[key];
//       }}
//     for (var key in roman) {
//       if (prevItem == key) {
//         var preValue = roman[key];
//         if (preValue > currValue) {
//           res += currValue + preValue;
//         } else {
//           res += currValue - preValue;
//         }
//         console.log("pre:", preValue, "curr", currValue,"res")
//       }
//     }
//   } */
//   var preValue = 0;
//   //traversing for the end...
//   for (let i = romStr.length - 1; i >= 0; i--) {
//     var curValue = roman(romStr[i])
//     if (i + 1 < romStr.length) {
//       if (curValue < preValue) {
//         res -= curValue;
//       } else {
//         res += curValue
//       }
//     } else {
//       res += curValue;
//     }
//     preValue = curValue;
//   }
//   return res;
// }

// var romanInt = 'vi';

// console.log(romanToInt(romanInt));
// function vowels(str) {
//   var count = 0;
//   var vowelStr = 'aeiou';
//   str = str.toLowerCase();
//   for(let i=0;i<str.length;i++){
//     if(vowelStr.includes(str[i])){
//       count++
//     }
//   }

//   return count;
// }

// console.log(vowels('aE'));

// var sortArr =[-1,0,3,5,5,6,-2,-3]

// var test = sortArr.sort((a,b)=>{
//   if(a<b){
//     return -1;
//   }else if(a>b){
//     1
//   }else{
//     return 0
//   }
// })
// console.log(test)
// // console.log(sortArr.sort())
// sortArr.forEach((el,index)=>{
//   console.log(el)
//   // if(el==5){
//   //   console.log(el)
//   // }
// })
// var arr = "4 73 67 38 33".split(' ');
// function gradingStudents(grades) {
//   var finalG = [];
//   grades.forEach(el => {
//     var e = Number(el)
//     var test = e+2;
//     if(test>=40){
//       if(test % 5 ==0){
//         finalG.push(test);
//       }else{
//         finalG.push(e)
//       }
//     }else{
//       finalG.push(e)
//     }
//   })
//   return finalG;
// }

// console.log(gradingStudents(arr))


var lengthOfLongestSubstring = (s)=>{
  var max = 0;
  var subString = []
  var char = ''
  for(let i=0;i<s.length;i++){
    char = s[i]
    var lengthofSubString = 1;
    for(let j=i+1;j<s.length;j++){
      if(char.includes(s[j])){
        subString.push(char)
        break;
      }
      lengthofSubString++
      char += s[j]  
      subString.push(char)
    }
    subString.push(char)
    max= Math.max(max,lengthofSubString)
  }
  // console.log('Arr:',subString,'SubString:',subString.find(e=>e.length==max))
  return max;
}

var longestPalindrome = (s)=>{
  var obj = {}
  var palindrome = '';
  max = lengthOfLongestSubstring(s)
  return palindrome;
}

console.log(longestPalindrome("babad"))

function merge(sortedArr1, sortedArr2) {
  /*             Solution-1                */
  // var arr = [...sortedArr1,...sortedArr2]
  // arr.sort((a,b)=>a-b);
  // return arr

  /*             Solution-2                */

  var p1 = 0;
  var p2 = 0;
  var result = [];

  while (p1 < sortedArr1.length && p2 < sortedArr2.length) {
    if (sortedArr1[p1] < sortedArr2[p2]) {
      result.push(sortedArr1[p1]);
      p1++
    } else {
      result.push(sortedArr2[p2]);
      p2++;
    }
  }

  while (p1 < sortedArr1.length) {
    result.push(sortedArr1[p1]);
    p1++;
  }

  while (p2 < sortedArr2.length) {
    result.push(sortedArr2[p2]);
    p2++;
  }
  
  return result;
}
console.log(merge([1,3],[2,4]))

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}
	unshift(data){
		this.head = new Node(data,this.head)
		this.length++
	}
	getFirst(){
		return this.head
	}
	getLast(){
		var current = this.head
		while(current && current.next){
			current = current.next
		}
		return current
	}
  shift(){
		if(!this.head){
			return;
		}
		var current = this.head
		this.head = this.head.next
		this.length--
		return current
	}
  pop(){
		if(!this.head){
			return;
		}
    var current = this.head
    var last = this.getLast()
    if(this.length == 1){
      this.head = null
      return last
    }
		while(current.next !== last){
			current = current.next
		}
		current.next = null
    console.log("Current", this)
		this.length--
		return last
	}
  push(data){
		var current= this.head
		if(!this.head){
			this.head = new Node(data)
			this.length++
      return;
		}
		while(current.next){
			current = current.next
		}
		current.next = new Node(data)
		this.length++
	}
}
var car = new LinkedList();
// car.unshift("toyota");
// car.unshift("Car");
// console.log(car.shift())
console.log(car.push('bmw'))
console.log(car)