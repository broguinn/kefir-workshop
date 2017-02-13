$(function(){
  const messagesContainer = $('#filter .messages')
  const messageInput = $('#filter .message-input')

  const makeAlert = message => `<div class="alert alert-info">${message}</div>`;
  const isEnter = e => e.keyCode === 13;
  const extractValue = e => e.target.value;
  const emptyInput = input => e => input.val('');
  const updateContent = el => content => el.html(content);
  const addTime = message => `${makeTime(new Date())} - ${message}`;
  const makeTime = date =>
    `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  const messageStream = Kefir.fromEvents(messageInput, 'keyup')
    .filter(isEnter)
    .map(extractValue)
    .map(addTime)
    .map(makeAlert)
    .log('alert');

  messageStream.onValue(updateContent(messagesContainer));
  messageStream.onValue(emptyInput(messageInput));
});
