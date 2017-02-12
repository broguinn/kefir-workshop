$(function(){
  // We're downloading Kefir via a CDN
  // You can access it via the Kefir global
  // Make the code appear in the console

  // 1. Create a hide-and-go-seek stream that says “Mississippi”
  // while counting up to 10

  Kefir.sequentially(1000, _.times(10))
    .log("Mississippi");

  // 2. a stream of “Hello, Kefir” that logs every 300 milliseconds,
  // and then ends

  const hello = Kefir.interval(300, "Hello, Kefir").log();

  window.setTimeout(function () {
    hello.offLog();
  }, 1000);
  // - or -
  Kefir.later(1000).onValue(e => hello.offLog());

  // 3. Create a stream from a promise and log its value

  Kefir.fromPromise(new Promise(res => res('a wild value appears!')))
    .log('I came from a promise');

  // 4. Create a stream from click events and log the events

  const clickMe = $("#click-me");
  Kefir.fromEvents(clickMe, 'click').log('clicked');

});
