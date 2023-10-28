const words=document.querySelector('.animatedWord').children,
        textLen=words.length;
        let index=0;
        const wordTimer=3000,
        wordOutTimer=2700;

    function animateText(){
        for (let i=0; i<textLen; i++) {
            words[i].classList.remove('currentWord','leavingWord');   
        }
        setTimeout(() => {
            words[index].classList.add('leavingWord');
            
        },wordOutTimer);


        setTimeout(()=>{
            if (index==textLen-1) {
                index=0;
            }
            else{
                ++index;
            }

            animateText()
        },wordTimer)
        words[index].classList.add('currentWord');
    }
       
 window.onload=animateText;