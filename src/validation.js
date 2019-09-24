 const alphaNumRegex = (value) => {
    let reg = RegExp(/^[a-zA-Z0-9]+$/)
    return reg.test(value)
 }

 export const validate = (errors = [],event) => {
    const { name,value } = event.target
    switch(name){
      case 'code':
        errors.code.push(!value ? 'cookie code is required': '') 
        errors.code.push(value.length > 10 ? 'cookie Code must not be more than 10 characters':'')
        console.log(errors)
        return
      break;
      case 'cookieType':
        errors.cookieType = ''
    }
 }