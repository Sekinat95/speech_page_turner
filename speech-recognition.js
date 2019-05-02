window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
const book = document.querySelector('.book');
const page = document.querySelector('page')
words.appendChild(p);

recognition.addEventListener('result', e=>{
    const transcript = Array.from(e.results)
        .map(result=>result[0])
        .map(result=>result.transcript)
        .join('')
    
        console.log(transcript)
    
    
        //not what I want to do but imma do this first
    // p.textContent = transcript;
    // if(e.results[0].isFinal){
    //     p = document.createElement('p');
    //     words.appendChild(p);
    // }
   
//what i really want to do
    /**
     * speech to action
     * speech = recognition starts from the word"go to page"
     * action = turn page(div of class 'page')
     */
   


    });
    
 console.log()    
recognition.start();
recognition.addEventListener('end', recognition.start);

