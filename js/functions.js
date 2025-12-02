function checkStringLength(text, len) {
  return text.length <= len;
}

function isPalindrome(text) {
  const formatted  = text.toLowerCase().split(' ').join('');
  return formatted === formatted.split('').reverse().join('');
}

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

function formatToMins(timeStr) {
  const [hours, minutes] = timeStr.split(':').map((item) => parseInt(item, 10));
  return hours * 60 + minutes;
}

function isDuringWorkTime(start, end, conversationStart, conversationTime) {

  const workStartMins = formatToMins(start);
  const workEndMins = formatToMins(end);
  const convStartMins = formatToMins(conversationStart);
  const convEndMins = convStartMins + conversationTime;

  return convStartMins >= workStartMins && convEndMins <= workEndMins;
}
