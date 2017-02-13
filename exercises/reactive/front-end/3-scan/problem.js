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

  /*  In the commented out code below, in an imperative style, we add a message
    to the ".messages" element with the value of the input when the user presses
    <enter>. We've added a timestamp to the messages so you can see when they
    were created */

  // messageInput.on('keypress', function(e){
  //   if (isEnter(e)){
  //     var message = e.target.value
  //     message = addTime(message)
  //     var content = makeAlert(message)
  //     messagesContainer.append(content)
  //     emptyInput(messageInput)
  //   }
  // })

  /*  Rewrite the above in a functional reactive style, starting with an
    EventStream from the ".message-input". You can reuse some of the helper
    functions below

    Solution: On enter press, we add the new content to the messagesContainer
    appending it to existing input. Begin, like before, with creating the input
    stream.*/

  var inputStream;

  /*  You can use the .map, .filter and .onValue methods from the "map" and
    "filter" examples */

  /*  You can use the inputStream's .scan(accumulator, combiner) method to
    to create a stream whose members are a reduced value derived from the
    members of the input stream. You might use this to build up an array of
    messages, or a string containing all the messages */

})
