//Работа с concat
//Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
var arr1 = [1, 2, 3],
    arr2 = [4, 5, 6];
var arr = arr1.concat(arr2);
console.log(arr);

//Работа с reverse
//Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
arr = [1, 2, 3];
console.log(arr.reverse());

//Работа с push, unshift
//Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);
//Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
arr = [1, 2, 3];
arr.unshift(4, 5, 6);
console.log(arr);

//Работа с shift, pop
//Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
//Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
arr = ['js', 'css', 'jq'];
alert(arr.shift());
alert(arr.pop());

//Работа с slice
//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
arr = [1, 2, 3, 4, 5];
arr1 = arr.slice(0, 3);
arr2 = arr.slice(3);
console.log(arr1);
console.log(arr2);

//Работа с splice
//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr);
//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
arr = [1, 2, 3, 4, 5];
arr1 = arr.splice(1, 3);
console.log(arr1);
//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, 'a', 'b', 'c');
console.log(arr);
//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
arr = [1, 2, 3, 4, 5];
arr.splice(1, 4, 'a', 'b', 2, 3, 4, 'c', 5, 'e');
console.log(arr);
//или
arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b');
arr.splice(6, 0, 'c');
arr.splice(8, 0, 'e');
console.log(arr);

//Работа с sort
//Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
arr = [3, 4, 1, 2, 7]; 
arr.sort();
console.log(arr);
//или
arr = [3, 4, 1, 2, 7];
arr.sort(function(a, b){
    if(a>b) return 1;
    if(a<b) return -1;
});
console.log(arr);

//Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл
function reverseStr(str){
    var arr = str.split('');
    arr.reverse();
    str = arr.join('');
    return str;
}
str = '123456';
//str = '654321';
console.log(reverseStr(str));

//Проверьте, что строка начинается на http://. Ввод через prompt.
function checkStrStart(str){
    var arr = str.split('://');
    return (arr[0] == 'http') ? 'OK' : 'neOK';
}
var str = prompt('Введите ссылку, начиная с http://', 'http://');
//var str = 'http://';
//var str = 'https://';
//var str = 'http.';
console.log(checkStrStart(str));

//Проверьте, что строка заканчивается на .html. Ввод через prompt.
function checkStrEnd(str){
    var arr = str.split('.');
    return (arr[arr.length - 1] == 'html') ? 'OK' : 'neOK';
}
str = prompt('Введите ссылку, которая заканчивается на .html');
//var str = 'index.html';
//var str = 'index.xml';
//var str = 'dbgharether';
console.log(checkStrEnd(str));