document.addEventListener("DOMContentLoaded",
    function (event) {
        function say_hello(event) {
            this.textContent = "said" ;
            console.log(event) ;
            var name = document.getElementById("name").value ;
            var message = "<h2> Hello " + name + "</h2>" ;

            document.getElementById("content").innerHTML = message ;

            if (name == 'student') {
                var title = document.getElementById("title").textContent ;
                title += " & Loving it!" ;
                document.getElementById("title").textContent = title ;
            }
        }
        document.querySelector("button").addEventListener("click", say_hello) ;
        // document.querySelector("button").onclick = say_hello;
        document.querySelector("body").addEventListener("mousemove",
            function (event) {
            if (event.shiftKey === true)
                console.log("mouse position (x,y) :" + event.clientX + ", " + event.clientY+ ")") ;
            }

        )

    }
    )