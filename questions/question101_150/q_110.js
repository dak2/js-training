// 引数にgithubのUser名を渡すとgithubのuser情報を取得して返す関数fetchGithubUserを定義しなさい。
// *エラーの場合はコンソールにステータスとエラーログの出力とアラートを出しなさい

const fetchGithubUser = (name) => {
  return fetch(`https://api.github.com/users/${name}`)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
      alert("error while fetching");
    });
};
