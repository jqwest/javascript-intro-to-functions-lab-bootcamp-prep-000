function shout(string) {
  return 'Hello'.toUpperCase()
}

function whisper(string) {
  return 'Hello'.toLowerCase()
}

function logShout(string) {
  console.log('Hello'.toUpperCase())
}

function logWhisper(string) {
  console.log('Hello'.toLowerCase())
}

function sayHiToGrandma(string) {
  if(string.toLowerCase() === string) {
    return 'I can\'t hear you!';
  }else if (string.toUpperCase() === string) {
    return 'YES INDEED!';
  }else if (string === 'I love you, Grandma.') {
    return 'I love you, too.';
  }
};
