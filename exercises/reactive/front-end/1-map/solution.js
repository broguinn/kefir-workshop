$(function(){
  const extractValue = e => e.target.value;
  const makeAlert = message => `<div class="alert alert-info">${message}</div>`;
  const updateContent = el => content => el.html(content);

  const messageContent = $('#map .messages')
  const messageInput = $('#map .message-input')

  Kefir.fromEvents(messageInput, 'keyup')
  .map(extractValue)
  .map(makeAlert)
  .onValue(updateContent(messageContent))
});
