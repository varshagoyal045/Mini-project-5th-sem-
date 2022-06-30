console.log("welcome to spotify");

// initializing the variables

let songIndex =0;
let audioElement = new Audio("songs/dil mera chahe.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let gif = document.getElementById('gif');



 
let songs = [
    { songName: "Akh_Lad_Jaave", filePath:"songs/Akh_Lad_Jaave.mp3", coverPath: "cover/img1.jpg"},
    { songName: "dheeme dheeme", filePath:"songs/dheeme dheeme.mp3", coverPath: "cover/img2.jpg"},
    { songName: "deewana kr rha h", filePath:"songs/deewana kr rha h.mp3", coverPath: "cover/img3.jpg"},
    { songName: "dil mera chahe jb bhi tu aye", filePath:"songs/dil mera chahe.mp3", coverPath: "cover/img4.jpg"},
    { songName: "humnava_mere", filePath:"songs/humnava_mere.mp3", coverPath: "cover/img5.jpg"},
    { songName: "huye_bechain", filePath:"songs/huye_bechain.mp3", coverPath: "cover/img6.jpg"},
    { songName: "meri aashiqi pasand aaye", filePath:"songs/meri aashiqi.mp3", coverPath: "cover/img7.jpg"},
    { songName: "tum hi ana", filePath:"songs/tum hi ana.mp3", coverPath: "cover/img8.jpg"},
    { songName: "naino ki jo bat", filePath:"songs/naino ki jo bat.mp3", coverPath: "cover/img9.jpg"},
    { songName: "Pehla_Pyaar", filePath:"songs/Pehla_Pyaar.mp3", coverPath: "cover/img10.jpg"},
    { songName: "saki saki", filePath:"songs/saki saki.mp3", coverPath: "cover/img11.jpg"},
    { songName: "Tera_Fitoor", filePath:"songs/Tera_Fitoor.mp3", coverPath: "cover/img12.jpg"},
    { songName: "Teri_Mitti", filePath:"songs/Teri_Mitti.mp3", coverPath: "cover/img13.jpg"},
    { songName: "tujhe_kitna_chahne_lge", filePath:"songs/tujhe kitna chahne lge.mp3", coverPath: "cover/img14.jpg"},
    { songName: "zara zara bahkata h", filePath:"songs/zara zara bahkata h.mp3", coverPath: "cover/img15.jpg"},
    { songName: "_Filhaal_", filePath:"songs/filhal.m4a", coverPath: "image3.webp"}
    
    

]


songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})


// handle play/ pause click


masterPlay.addEventListener('click',()=>{
    console.log('fuction check');
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }

    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity=0;
    }
})

// listen to event
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeUpdate');
    // update seekBar

    progress = parseInt(audioElement.currentTime/audioElement.duration * 100);
    myProgressBar.value = progress;
    console.log(progress);
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})



const makeAllPlays = ()=>{

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
        
    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        // audioElement.src= `songs/${index+1}.mp3`;
        // audioElement.src = 'songs/tum hi ana.mp3';
        audioElement.src = songs[index-1].filePath;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        masterSongName.innerText = songs[index-1].songName;
    });
})



document.getElementById('next').addEventListener('click',()=>{
  if(index>15){
    index =1;
  }
  else{
    index +=1;
  }
  
  audioElement.src = songs[index-1].filePath;
  audioElement.currentTime=0;
  audioElement.play();
  gif.style.opacity=1;
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');
  masterSongName.innerText = songs[index-1].songName;

})

document.getElementById('previous').addEventListener('click',()=>{
    if(index<1){
        index =1;
    }
    else{
        index -=1;
    }

    audioElement.src = songs[index-1].filePath;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    masterSongName.innerText = songs[index-1].songName;
})