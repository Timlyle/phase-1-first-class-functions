function callBacker(){
 console.log('dont call it a callback!')
};


function receivesAFunction(callBacker){
  return callBacker();
};

function returnsANamedFunction(){
  return callBacker
};


function returnsAnAnonymousFunction(){
 return () => 'This function is anonymous'
};



















/*function receivesAFunction(callback1) {
  callback1();
}

function callback1() {
  return "dont call it a callback!"
}

function returnsANamedFunction() {
  return callback1
}

function returnsAnAnonymousFunction() {
  return () => console.log("this is an anonymous function");
}

function returnsAnAnonymousFunction() {
  return () => console.log("boooooooo")
};*/