function ImageRatio(width, height) {
  return Math.abs(width/height)
} 

function checkImage((image1, image2) {
let photo1 = ImageRatio(image1)
let photo2 = ImageRatio(image2)
}
if(photo1 == photo2){
   return 'same ratio compare widths of images'
}else {
  return 'the largest ratio value'
}


export default { ImageRatio, checkImage}