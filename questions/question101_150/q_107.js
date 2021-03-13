getAsync("fileA.txt", (error, result) => {
  if (error) { // 取得失敗時の処理
      throw error;
  }
  // 取得成功の処理
});
