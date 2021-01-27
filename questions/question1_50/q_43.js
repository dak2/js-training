//「When」、「Where」、「Who」、「What」、「Why」、「How」の単語のみにマッチする正規表現を書きなさい

const string = 'How'

const regex = /^(Wh|H)((en|ere|at|y)|(ow))/

// answer
const regex1 = /Wh(en|ere|o|at|y|)|How/