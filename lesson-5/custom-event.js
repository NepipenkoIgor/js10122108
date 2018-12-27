document.body.addEventListener('needAlert', customEvent);
setTimeout(() => {
  console.log('stage 3');
  const event = new CustomEvent('needAlert', { detail: { text: 'I love JS . It is excellent' } });
  document.body.dispatchEvent(event);
}, 15000);
setTimeout(() => {
  console.log('stage 2');
  document.body.removeEventListener('needAlert', customEvent);
}, 10000);
setTimeout(() => {
  console.log('stage 1');
  const event = new CustomEvent('needAlert', { detail: { text: 'I lova JS . It is excellent' } });
  document.body.dispatchEvent(event);
}, 5000);
function customEvent(event) {
  console.log(event)
  console.log(`${event.detail.text}`);
}