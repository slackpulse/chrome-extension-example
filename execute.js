const video = document.querySelector("#video")
const showInfo = function(event) {
  const backInfoTxt1 = document.querySelector(".backInfoTxt1")
  const backInfoTxt2 = document.querySelector(".backInfoTxt2")
  const backInfoTxt3 = document.querySelector(".backInfoTxt3")

  console.log(`backInfoTxt1: ${backInfoTxt1.textContent}`)
  console.log(`backInfoTxt2: ${backInfoTxt2.textContent}`)
  console.log(`backInfoTxt3: ${backInfoTxt3.textContent}`)
}

video.addEventListener('ended', showInfo)

showInfo()