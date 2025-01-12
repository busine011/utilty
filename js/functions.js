var CharsessionId = "abcdefghijklmnopqrstuvwxyz0123456789";
var CharRandomText = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const sleep = async (seconds) => new Promise((resolve) => setTimeout(resolve, seconds * 1000));
const randomText = length => [...Array(length)].map(() => CharRandomText.charAt(Math.floor(Math.random() * 62))).join('');
const sessionId = () => [...Array(32)].map((_, i) => (i === 8 || i === 12 || i === 16 || i === 20 ? '-' : '') + CharsessionId.charAt(Math.floor(Math.random() * 36))).join('');
