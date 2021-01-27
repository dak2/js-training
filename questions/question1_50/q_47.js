// 1. 今現在の時間帯において時間だけを取得してください
// 2. 今現在の時間帯において分だけを取得してください
// 3. 今現在の時間帯において秒だけを取得してください

// ans
const date = new Date();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();