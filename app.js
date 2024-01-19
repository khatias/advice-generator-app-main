const advice = document.getElementById("advice");
const adviceId = document.getElementById('advice-id')



function generateAdvice(){
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
 
        const randomAdvice = data.slip.advice;
        const randomId = data.slip.id;
     
        advice.textContent = `"${randomAdvice}"`;
        adviceId.textContent =`#ADVICE ${randomId}`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}