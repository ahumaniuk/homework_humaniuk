const objMy = {name: 'Nastia', age: '100'}
const testDataEnv1 = {
  url: 'url1', 
  username: 'username1',
  getThisPro(){
    return this.url
  },
  server: {
    url: '127.0.0.01',
    protocol: 'https',
    showFullAddres(){
      return this.protocol + '://' + this.url
    }
  },
  mailaddress: [{
    mail_server: 'gmail',
    mail_user: 'blah_blah',
    mail_pass: '12345'
  }]
}

let urlForTest = testDataEnv1.server.protocol();
console.log(urlForTest);


let getValueFromObject = testDataEnv1.getThisPro()
console.log(getValueFromObject)

function addColor (){
  this.color = 'red'
}

console.log(Object.values(objMy2))


function getAllProp(){
  return this;
}

objMy.getAllProp = getAllProp();
testDataEnv2.getAllProp = getAllProp();

const testDataEnv2 = {url: 'url2', username: 'username2'}

console.log(Object.keys(testDataEnv1))
testDataEnv1.pass = 'password1'
console.log(Object.keys(testDataEnv1))
console.log(Object.values(testDataEnv1))

for (let data in testDataEnv1) {
  console.log(`${data}: ${testDataEnv1[data]}`)
}

delete testDataEnv1.pass;
console.log(testDataEnv1)
console.log(Object.hasOwn(testDataEnv1, 'url'))