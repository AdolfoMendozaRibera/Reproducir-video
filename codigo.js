const video=document.getElementById("mi_video");
const boton_play=document.getElementById("boton_play");
const boton_pause=document.getElementById("boton_pause");

boton_play.addEventListener("click",function()
{
    video.play();
})

boton_pause.addEventListener("click",function()
{
    video.pause();
})