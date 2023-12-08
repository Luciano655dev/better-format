const RemoveCurseWords = require('../utils/RemoveCurseWords');

describe('RemoveCurseWords', () => {
  test('remove palavrões padrões', () => {
    const inputString = 'This is a bitch example with a dick and a motherfucker.';
    const expectedOutput = 'This is a ##### example with a #### and a ############.';
    
    const result = RemoveCurseWords(inputString);
    
    expect(result).toEqual(expectedOutput);
  });

  test('remove palavrões customizados', () => {
    const inputString = 'This is a bad example with a naughty word.';
    const obscenities = ['bad', 'naughty'];
    const expectedOutput = 'This is a ### example with a ####### word.';
    
    const result = RemoveCurseWords(inputString, obscenities);
    
    expect(result).toEqual(expectedOutput);
  });
  
  test('remove usando um caractere de censura customizado', () => {
    const inputString = 'This is a bitch example with a dick and a motherfucker.';
    const censorshipChar = '*';
    const expectedOutput = 'This is a ***** example with a **** and a ************.';
    
    const result = RemoveCurseWords(inputString, [], censorshipChar);
    
    expect(result).toEqual(expectedOutput);
  });

  test('remove palavrões com leetspeak', () => {
    const inputString = 'H3r3 1s 4 1337 3x4mpl3 with s0m3 l33t sp34k.';
    const leetspeak = true;
    const expectedOutput = 'H3r3 1s 4 #### 3x4mpl3 with s0m3 l33t sp34k.';
    
    const result = RemoveCurseWords(inputString, [], '#', leetspeak);
    
    expect(result).toEqual(expectedOutput);
  });
});
