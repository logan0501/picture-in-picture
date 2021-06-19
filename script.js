const videoElement = document.getElementById('video')
const button = document.getElementById('button')

async function selectMediaStream(){
    try{
       const mediastream = await navigator.mediaDevices.getDisplayMedia();
       videoElement.srcObject=mediastream;
       videoElement.onloadedmetadata = ()=>{
           videoElement.play();
       }
    }catch(error){
        console.log('Whoops error here:',error);
    }
}


button.addEventListener('click',async ()=>{
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
});
selectMediaStream();