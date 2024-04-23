document.querySelector('#privacy').addEventListener('click',function(){
        document.querySelector('.privacy').style.display = 'block'
        document.querySelector('.content').style.display = 'none'
        
    })
document.querySelector('#term').addEventListener('click',function(){
        document.querySelector('.termUse').style.display = 'block'
        document.querySelector('.content').style.display = 'none'
        
    })
document.querySelector('#about').addEventListener('click',function(){
        document.querySelector('.about').style.display = 'block'
        document.querySelector('.content').style.display = 'none'
        
    })


var $ = function (id) {
        return document.getElementById(id);
};
function getNumber(num) {
        var a = $('input');
        switch (num) {
                case 1: a.value += '1';
                        break;
                case 2: a.value += '2';
                        break;
                case 3: a.value += '3';
                        break;
                case 4: a.value += '4';
                        break;
                case 5: a.value += '5';
                        break;
                case 6: a.value += '6';
                        break;
                case 7: a.value += '7';
                        break;
                case 8: a.value += '8';
                        break;
                case 9: a.value += '9';
                        break;
                case 0: a.value += '0';
                        break;
        }
}
function clearScreen() {
        $('input').value = "";
        $('output').value = "";
}
function getOperand(o) {
        var a = $('input');
        switch (o) {
                case '+': a.value += '+';
                        break;
                case '-': a.value += '-';
                        break;
                case 'x': a.value += '*';
                        break;
                case '/': a.value += '/';
                        break;
                case '+/-': a.value += '-' + a.value;
                        break;
        }
}
function backspace() {
        var a = $('input');
        var x = a.value;
        if (x.length > 0) {
                x = x.substring(0, x.length - 1);
                a.value = x;
        }
}
function compute() {
        var a = $('input');
        var ans = eval(a.value);
        $('output').value = '=' + ans;
}
var i = 0;
function brackets() {
        var a = $('input');
        if (i == 0) {
                a.value += '(';
                i = 1;
        }
        else if (i == 1) {
                a.value += ')';
                i = 0;
        }
}
function pi() {
        var a = $('input');
        a.value += Math.PI;
}
function sin() {
        var a = $('input');
        var ans = Math.sin(a.value * Math.PI / 180);
        $('output').value = '=' + ans;
}
function cos() {
        var a = $('input');
        var ans = Math.cos(a.value * Math.PI / 180);
        $('output').value = '=' + ans;
}
function tan() {
        var a = $('input');
        var ans = Math.tan(a.value * Math.PI / 180);
        $('output').value = '=' + ans;
}
function ln() {
        var a = $('input');
        var ans = Math.log(a.value);
        $('output').value = '=' + ans;
}
function squrt() {
        var a = $('input');
        var ans = Math.sqrt(a.value);
        $('output').value = '=' + ans;
}
function sqr() {
        var a = $('input');
        var ans = Math.pow(a.value, 2);
        $('output').value = '=' + ans;
}
function expo() {
        var a = $('input');
        var ans = Math.exp(a.value);
        $('output').value = '=' + ans;
}
function per() {
        var a = $('input');
        var ans = a.value / 100;
        $('output').value = '=' + ans;
}


let navLink = document.querySelectorAll('.nav-link')
let tl = gsap.timeline()
tl.from(navLink, {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 1,
        stagger: 0.5
}, 'nav')
tl.from('.logo', {
        scale: 0,
        duration: 2,
        delay: 1,
        opacity: 0,
        stagger: 0.3,
}, 'nav')
let tl2 = gsap.timeline({
        scrollTrigger: {
                trigger: "#section-2",
                scroll: "body",
                start: "10% 40%",
                end: "10% 40%",
                scrub: 2,
        }
})
tl2.to('#section-2',{
        backgroundColor: '#d3d3d3',
},'cal')
tl2.to('.navbar ',{
        backgroundColor: '#000',
       
},'cal')

tl2.to('.cal-p',{
        color:'#000', 
},'cal')
let tl3 = gsap.timeline({
        scrollTrigger: {
                trigger: "#section-2",
                scroll: "body",
                // markers:true,
                start: "20% 40%",
                end: "20% 40%",
                scrub: 2,
        }
})
tl3.to('.scintific',{
        y:'-50px',
        scale:1,
},'call')

let tl4 = gsap.timeline({
        scrollTrigger: {
                trigger: "#section-3",
                scroll: "body",
                start: "22% 40%",
                end: "22% 40%",
                scrub: 2,
                // markers:true
        }
},'collist')
tl4.to('.calculator-list',{
        backgroundColor:'#000',       
})
tl4.to('.cal-list',{
        borderBottom: '2px solid #fff'        
},'collist')
tl4.to('.b-top',{
        borderTop: '2px solid #fff'        
},'collist')
tl4.to('.cal-list a h3',{
        color:'#fff'        
},'collist')
tl4.to('nav',{
        backgroundColor:'#d3d3d3',
},'collist')
document.querySelectorAll('.cal-list').forEach(function(elem){
        elem.addEventListener('mouseleave',function(dets){
                gsap.to(elem.querySelector('img'),{
                        opacity: 0,
                })
        })
});
document.querySelectorAll('.cal-list').forEach(function(elem){
        let rotate = 0;
        let moverot = 0;
        elem.addEventListener('mousemove',function(dets){
                let move = dets.clientY - elem.getBoundingClientRect().top;
                moverot = dets.clientX - rotate;
                rotate = dets.clientX;


                gsap.to(elem.querySelector('img'),{
                        opacity: 1,
                        ease: Power3,
                        // transform : `translate3d(calc(${dets.clientX}px - 50%), calc(${dets.clientY}px - 50%), 0)`
                        
                        top: move,
                        left: dets.clientX,
                        rotate: gsap.utils.clamp(-20 ,10 , moverot)
                });
        });
});

document.addEventListener('mousemove', function(e){
        var x = e.clientX;
        var y = e.clientY;
        cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
      });


let tl5 = gsap.timeline({
        scrollTrigger: {
                trigger: ".blog-container",
                scroll: "body",
                start: "22% 50%",
                end: "22% 30%",
                scrub: 2,
                // markers:true
        } 
})
tl5.to('.blog, .read-blog',{
        y:-100
});


