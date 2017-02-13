$(function(){
  const messagesContainer = $('#scan .messages');
  const messageInput = $('#scan .message-input');

  const makeAlert = message => `<div class="alert alert-info">${message}</div>`;
  const isEnter = e => e.keyCode === 13;
  const extractValue = e => e.target.value;
  const emptyInput = input => e => input.val('');
  const updateContent = el => content => el.html(el.html() + content);
  const addTime = message => `${makeTime(new Date())} - ${message}`;
  const makeTime = date =>
    `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  const add = (a, b) => a + b;

  const messageStream = Kefir.fromEvents(messageInput, 'keypress')
    .filter(isEnter)
    .map(extractValue)
    .map(addTime)
    .map(makeAlert)
    .scan(add, '');

  messageStream.onValue(emptyInput(messageInput));
  messageStream.onValue(updateContent(messagesContainer));
});
