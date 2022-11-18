const chars = gsap.utils.toArray("#myText path");
const tl = gsap.timeline()
               .from(chars, {scale:0, 
                             ease:"elastic", 
                             duration:1.4,
                             transformOrigin:"50% 50%", 
                             stagger: 0.1}, 0);

document.getElementById("restart-btn").onclick = ()=> tl.restart();