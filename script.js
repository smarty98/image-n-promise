const imageContainer = document.querySelector('.images');

function createImage(path){
  return new Promise((resolve,reject)=>{
    const img = document.createElement('img');
    img.src = path;
    img.addEventListener('load',()=>{
      imageContainer.append(img);
      resolve(img);
    })
    img.addEventListener('error',()=>{
      reject(new Error('image not found'))
    })
  })
}
createImage('https://wallpapercave.com/wp/wp12458198.jpg').then(img=>{
  console.log('loaded')
}).catch(err=>console.log('image not found'));
