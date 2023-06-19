const box = document.querySelector('.radial');

// box.addEventListener("touchmove", function(event) {
//     var rotation = event.rotation;

//     // This isn't a fun browser!
//     if ( ! rotation) {
//         console.log(event)
//         console.log(event.touches[0].pageY)
//          rotation = Math.atan2(event.touches[0].pageY - event.touches[1].pageY,
//                event.touches[0].pageX - event.touches[1].pageX) * 180 / Math.PI;
//         console.log(rotation)
        
//     }

//     // Take into account vendor prefixes, which I haven't done.
//     // box.style.transform = "rotateX(rotation + 'deg')";
//     // console.log(rotation)
// });