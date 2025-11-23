function checkStringLength(text, len) {
  return text.length <= len;
}
// Cтрока короче 20 символов
console.log(checkStringLength('проверяемая строка', 20)); // true
// Длина строки ровно 18 символов
console.log(checkStringLength('проверяемая строка', 18)); // true
// Строка длиннее 10 символов
console.log(checkStringLength('проверяемая строка', 10)); // false

function isPalindrome(text) {
  const formatted  = text.toLowerCase().split(' ').join('');
  return formatted === formatted.split('').reverse().join('');
}
// Строка является палиндромом
console.log(isPalindrome('топот')); // true
// Несмотря на разный регистр, тоже палиндром
console.log(isPalindrome('ДовОд')); // true
// Это не палиндром
console.log(isPalindrome('Кекс'));  // false
// Это палиндром
console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true


function parsePosivtiveNums(value) {
  const str = typeof value === 'number' ? value.toString() : value;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i], 10))) {
      result += str[i];
    }
  }
  if (result.length === 0) {
    return NaN;
  }
  const num = Number(result);

  return num > 0 ? num : NaN;
}

console.log(parsePosivtiveNums('2023 год'));            // 2023
console.log(parsePosivtiveNums('ECMAScript 2022'));     // 2022
console.log(parsePosivtiveNums('1 кефир, 0.5 батона')); // 105
console.log(parsePosivtiveNums('агент 007'));           // 7
console.log(parsePosivtiveNums('а я томат'));           // NaN
console.log(parsePosivtiveNums(1.5));
console.log(parsePosivtiveNums(''));
console.log(parsePosivtiveNums(-323));
