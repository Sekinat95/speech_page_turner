window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;

const words = document.querySelector('.speech');
const book = document.querySelector('.book');
const page = document.querySelector('page');

recognition.addEventListener('result', e=>{
    const transcript = Array.from(e.results)      
    .map(result=>result[0])
    .map(result=>result.transcript)
    .join('')
    
    if (transcript.includes('page')){
        console.log(transcript)
        var isnum = /^\d+$/.test(transcript[transcript.length-1]);
        console.log(transcript[transcript.length-1])
        console.log(isnum);
    }
});
   // console.log(transcript)   
recognition.start();
recognition.addEventListener('end', recognition.start);

