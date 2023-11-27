const bf = require('better-format')
const string = 'You J3rk $#son of a b1tch! %&* I will fuck you, $ p0rr4!' // <-- string toda ferrada

bf.FormatString(string, { obscenities: ['porra'], censorshipChar: '*', leetspeak: false })
// you****sonofa*****iwill****youp0rr4

bf.RemoveCurseWords(string, ['porra'], '*', true )
// You **** $#son of a *****! %&* I will **** you, $ *****!
