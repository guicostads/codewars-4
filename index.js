function count (string) {
 let splitted = string.split('')
 let obj = {}
 
 for (let i = 0; i < splitted.length; i++) {
   obj[splitted[i]] = (obj[splitted[i]] || 0) + 1
 }
 return obj
} 