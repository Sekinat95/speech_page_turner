window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;

const words = document.querySelector('.speech');
const book = document.querySelector('.book');
const page = document.querySelector('page');
; 
function listen(e){
   
        const transcript = Array.from(e.results)
        
            .map(result=>result[0])
            .map(result=>result.transcript)
            .join('')
    
            if (transcript.includes('go to page')){
                console.log(transcript)
               
            }
            
        }
recognition.addEventListener('result', listen);
   // console.log(transcript)   
recognition.start();
recognition.addEventListener('end', recognition.start);

