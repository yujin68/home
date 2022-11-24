        var p; //전역변수
        function init() {
            p = document.getElementById("msg");
        //    p = document.querySelector('#msg') ;
            p.onmouseover = over;
            p.onmouseout = out;
        }
        function over() {
            p.style.backgroundColor = 'orchid' ;
        }
        function  out() {
            p.style.backgroundColor = 'black' ;
        }
         // 여기에 white가 아닌 다른 색을 주면 mouse로 건들기 전에는 색이 없다가 마우스가 지나고 나면 색이 바뀌네