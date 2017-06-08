/**
 * Created by liang on 2017/5/13.
 */
window.onload = function () {
    search();
    timeAction();
    scrollPic();
};

function search() {
    var header = document.getElementById("id_jd_header_content");

    var height = document.getElementById("id_jd_banner").offsetHeight;

    window.onscroll = function () {
        var scroll = document.body.scrollTop;
        if (scroll > height) {
            header.style.backgroundColor = "rgba(201,21,35,0.85)";
        } else {
            var a = scroll/height * 0.85;
            header.style.backgroundColor = "rgba(201,21,35,"+a+")";
        }
    }


}

function timeAction() {
   var time = document.getElementById("id_sk_time");
   var numArr = time.getElementsByClassName("num");
   var test = 9 * 60 * 60;
   setInterval(function () {
       test--;
       var h = Math.floor(test/60/60);
       var m = Math.floor(test/60%60);
       var s = Math.floor(test%60);

       numArr[0].innerHTML = h>10?Math.floor(h/10):0;
       numArr[1].innerHTML = h%10;

       numArr[2].innerHTML = m>10?Math.floor(m/10):0;
       numArr[3].innerHTML = m%10;

       numArr[4].innerHTML = s>10?Math.floor(s/10):0;
       numArr[5].innerHTML = s%10;

   }, 1000)
}

function scrollPic() {
    var banner = document.getElementById("id_jd_banner").getElementsByTagName("ul")[0];
    var width = banner.offsetWidth/10;
    var dots = document.getElementById("id_jd_banner").getElementsByTagName("ul")[1];
    function addTransform() {
        banner.style.transition = "all .3s ease 0s";
        banner.style.webkitTransition = "all .3s ease 0s";
    }

    function removeTransform() {
        banner.style.transition = "none";
        banner.style.webkitTransition = "none";
    }

    function setTransform(t) {
        banner.style.transform = "translateX("+t+"px)";
        banner.style.webkitTransform = "translateX("+t+"px)";
    }

    var timer;
    var index = 1;

    timer = setInterval(function () {
        ++index;
        addTransform();
        setTransform(-index*width);
        // console.log(width);

    }, 1000);

    banner.addEventListener('transitionEnd',function () {
        if (index >= 9){
            index = 1;
        }else if(index <= 0){
            index = 8;
        }
        removeTransform();
        setTransform(-width*index);

        console.log("cc");
    },false);

    banner.addEventListener('webkitTransitionEnd',function () {
        if (index >= 9){
            index = 1;
        }else if(index <= 0){
            index = 8;
        }
        removeTransform();
        setTransform(-width*index);
    },false);

}