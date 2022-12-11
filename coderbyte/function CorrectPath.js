function CorrectPath(str) { 

    var x = 0
    var y = 0
    var letters = []
    var qs = str.match(/[^\w]/g)
    
    str = str.split('')
    
    for (let i = 0; i < str.length; i++) {
      str[i] === 'r' ? y = y+1 : null
      str[i] === 'l' ? y = y-1 : null
      str[i] === 'u' ? x = x-1 : null
      str[i] === 'd' ? x = x+1 : null
    }
    
  function addXletters() {
    while (x !== 4) {
      if (x < 4){x += 1; letters.push('d')}
      else {x -= 1; letters.push('u')}
    }
  }
  function addYletters() {
    while (y !== 4) {
      if (y < 4){y += 1; letters.push('r')}
      else {y -= 1; letters.push('l')}
    }
  }
  
  if (y > x) {addYletters(); addXletters()}
  if (x >= y) {addXletters(); addYletters()}
  
    while (letters.length < qs.length) {
      if (letters[letters.length-1] === 'r') {y += 1; letters.push('r'); addYletters()}
      if (letters[letters.length-1] === 'l') {y -= 1; letters.push('l'); addYletters()}
      if (letters[letters.length-1] === 'd') {x += 1; letters.push('d'); addXletters()}
      if (letters[letters.length-1] === 'u') {x -= 1; letters.push('u'); addXletters()}
    }
    
    for (let i = 0; i < str.length; i++) {
      str[i] === '?' ? str[i] = letters.shift() : null
    }
    
    return str.join('')
           
  }
     
  // keep this function call here 
  CorrectPath(readline());