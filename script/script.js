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
       
 //window.onload=animateText;



//  toTop button action 
let prograssToTop = ()=>{
    let scrollProgress=document.getElementById('progress');
    let progressValue=document.getElementById('progresValue');

    let pos=document.documentElement.scrollTop;

    let calcHeight=document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let scrollValue=Math.round((pos*100)/calcHeight)
    console.log(scrollValue);

    if(pos>100){
        scrollProgress.style.display="grid";
    }
    else{
        scrollProgress.style.display="none";
    }
    

    scrollProgress.addEventListener('click', ()=>{
        document.documentElement.scrollTop=0;
    });
}

window.onscroll=prograssToTop;
window.onload=()=>{
    prograssToTop();
    animateText();
}

