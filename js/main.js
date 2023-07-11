window.onload = () => {
   let userInput = document.querySelector(`#user_input`);
   let button = document.querySelectorAll(`button`)[2];
   let select = document.querySelector(`select`);
   let pause = document.querySelector(`#pause`);
   let play = document.querySelector(`#play`);
   let microphone = document.querySelector(`.fa-microphone`);
   let audio = new Audio();
   audio.src = `https://cdn.pixabay.com/download/audio/2022/03/10/audio_c8c8a73467.mp3?filename=correct-2-46134.mp3`;
   let audioError = new Audio();
   audioError.src = `https://cdn.pixabay.com/download/audio/2022/11/21/audio_136661e554.mp3?filename=error-126627.mp3`;

   let getVoices;

   // () call to load on start.
   name();
   optionMaker();

   // Start Event Listeners
   button.addEventListener(`click`, () => {
      startSpeech();
   });

   pause.addEventListener(`click`, () => {
      responsiveVoice.pause();
   });

   play.addEventListener(`click`, () => {
      responsiveVoice.resume();
      blink();
   });

   //End.

   /*CASE 1: A () that is triggered when you click the button
      **its function**
      1) it first select the current value of the select element and save it to getVoices element;
      2) it calls the responsiveVoice.speak() from their API;
   */

   function startSpeech() {
      try {
         getVoices = select.value;

         if (userInput.value.trim() !== ``) {
            responsiveVoice.speak(userInput.value, getVoices);
            blink();
            audio.play();
         } else {
            audioError.play();
         } // End of If;
      } catch (err) {
         console.log(`${err}`);
      } //End of try/catch();
   } // End of CASE 1, startSpeech();

   /* CASE 2: A () that loads all voices got from Api.
      **its function***
      1) its gets all voices from api.
      2) it loops through the voices array,creates a new Element(option) and saves them inside arrDiv array.
      3) its appends all the option div created to select element
   */
   function optionMaker() {
      try {
         let voices = responsiveVoice.getVoices();

         for (let i = 0; i < voices.length; i++) {
            let arrDiv = [];

            arrDiv[i] = document.createElement(`option`);

            arrDiv[i].textContent = voices[i].name;

            arrDiv[i].setAttribute(`value`, `${voices[i].name}`);

            select.appendChild(arrDiv[i]);
         } //End of for loop.
      } catch (err) {
         console.log(`${err}`);
      } //End of try/catch();
   } // End of Case 2,optionMaker();

   // CASE 3: A () that toggles microphone's visibilty mode

   function blink() {
      microphone.style.visibility = `visible`;

      setTimeout(() => {
         microphone.style.visibility = `hidden`;
      }, 1500);
   } // End of Case 3,blink();

   //CASE 4: A () that request user's name and prints it out in text area box.

   function name() {
      let name = prompt(`Please Enter Your Name🖋️`);

      while (name === `` || name === null) {
         name = prompt(`Please Enter your name`);
      }

      userInput.value = ` Hi ${name}, welcome.
         i'm Jason. i wish you a great coding career. if you find this my little project interesting, hit the upvote aggresively. Thank you.`.trim();
   } // Emd of Case 4, name();
}; // End of General()✅
