const key = document.getElementById('#key');

const ring = (key) => {
    const audio = new Audio();
    audio.src = key + ".mp3";
    audio.play();
};

document.addEventListener('keypress', (e) => {
    if(e.key === 'd'){
        const note1 = document.querySelector('.do');
        note1.style.background = 'red'
    }else if(e.key === 'r'){
        const note2 = document.querySelector('.re');
        note2.style.background = 'green'
    } else if(e.key === 'm'){
        const note3 = document.querySelector('.mi');
        note3.style.background = 'gray'
    } else if(e.key === 'f'){
        const note4 = document.querySelector('.fa');
        note4.style.background = 'yellow'
    } else if(e.key === 's'){
        const note5 = document.querySelector('.sol');
        note5.style.background = 'blue'
    } else if(e.key === 'l'){
        const note6 = document.querySelector('.la');
        note6.style.background = 'white'
    } else{
        const note7 = document.querySelector('.si');
        note7.style.background = 'pink'
        note7.classList.add('scale')
    }
    ring(e.key);
    
});
