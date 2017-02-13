$(function(){
  const messagesContainer = $('#hold-when .messages');
  const messageInput = $('#hold-when .message-input');
  const valveContainer = $('#hold-when .valve-indicator');

  const makeAlert = message => `<div class="alert alert-info">${message}</div>`;
  const makeIndicator = closed => closed ?
    '<span class="label label-danger">the valve is closed</span>' :
    '<span class="label label-success">the valve is open</span>';

  const isEnter = e => e.keyCode === 13;
  const extractValue = e => e.target.value;
  const emptyInput = input => e => input.val('');
  const updateContent = el => content => el.html(el.html() + content);
  const updateValve = (valve, content) => valve.html(content);

  const addTime = message => `${makeTime(new Date())} - ${message}`;
  const makeTime = date =>
    `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  const add = (a, b) => a + b;
  const zeroOrOne = prev => (prev + 1) % 2;

  const messageStream = messageInput.asEventStream('keypress')
    .filter(isEnter)
    .map(extractValue)
    .map(addTime)
    .map(makeAlert)
    .scan('', concat)
    .toEventStream();

  const valve = openCloseValve(3000)

  valve.map(makeIndicator)
  .onValue(updateValve(valveContainer))

  messageStream.onValue(emptyInput(messageInput))

  messageStream.holdWhen(valve)
  .onValue(updateContent(messagesContainer))

  function openCloseValve(freq){
    return Bacon.fromPoll(freq, alwaysOne)
    .scan(0, zeroOrOne)
    .map(Boolean)
  }
  function alwaysOne(){ return Bacon.Next(1) }
  function zeroOrOne(prev){ return (prev + 1) % 2 }

  function isEnter(e){
    return e.keyCode === 13
  }

  function extractValue(e){
    return e.target.value
  }

  function addTime(message){
    var d = new Date(),
    hours = d.getHours(),
    minutes = d.getMinutes(),
    seconds = d.getSeconds()
    return hours + ':' + minutes + ':' + seconds + ' - ' + message
  }

  function makeAlert(message){
    return '<div class="alert alert-info">' + message + '</div>'
  }

  function makeIndicator(isClosed){
    if (isClosed) return '<span class="label label-danger">the valve is closed</span>'
    else return '<span class="label label-success">the valve is open</span>'
  }

  function updateContent(el){
    return function(content){
      el.html(content)
      return content
    }
  }

  function updateValve(el){
    return function(content){
      el.html(content)
    }
  }

  function emptyInput(input){
    return function(){
      input.val('')
    }
  }

  function concat(str1, str2){
    return str1 + str2
  }
})
