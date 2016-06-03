var text = '{"name":"John Johnson","street":"Oslo West 16","phone":"555 1234567" , "obj1" :{"str":"kak"}}';

var obj = JSON.parse(text);

console.log(obj.obj1.str);
