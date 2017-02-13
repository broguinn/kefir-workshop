$(function(){
  const messageContent = $('#filter .message');
  const messageInput = $('#filter .message-input');

  const makeAlert = message => `<div class="alert alert-info">${message}</div>`;
  const isEnter = e => e.keyCode === 13;
  const extractValue = e => e.target.value;
  const emptyInput = input => input.val('');
  const updateContent = el => content => el.html(content);
  const addTime = message => `${makeTime(new Date())} - ${message}`;
  const makeTime = date =>
    `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  /*  In the commented out code below, in an imperative style, we update the
    content of ".message" with the value of the input when the user presses
    <enter>. We've added a timestamp to the message so you can see when they
    changed */

  // messageInput.on('keypress', function(e){
  //   if (isEnter(e)){
  //     var message = e.target.value
  //     message = addTime(message)
  //     var content = makeAlert(message)
  //     messageContent.html(content)
  //     emptyInput(messageInput)
  //   }
  // })

  /*  Rewrite the above in a functional reactive style, starting with an
    EventStream from the ".message-input". You can reuse some of the helper
    functions below

    solution: Time content appears only on enter keypress*/

  const inputStream;

  /*  You can use the inputStream's .filter(filterer) method to filter out
    non-<enter> key presses */

  /*  You can use the .map and .onValue methods from the "map" example */

})
