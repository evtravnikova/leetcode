'use strict'
var decodeMessage = function (key, message) {
    let keySet = new Set(key);
    let arr = [];
    let answer = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz ';
    keySet.delete(' ');
    keySet.add(' ');
    const keyStr = Array.from(keySet).join('');

    for (let i = 0; i < message.length; i++) {
        arr.push(keyStr.search(message[i]))
        answer += alphabet[arr[i]]
    }
    return answer
};

console.log(decodeMessage("eljuxhpwnyrdgtqkviszcfmabo", "zwx hnfx lqantp mnoeius ycgk vcnjrdb"))