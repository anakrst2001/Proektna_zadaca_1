var roditel;
        var nov;
        var tekst;
        var komentar;
        var datum;
        var date;
        var br;
        function add_comment(event)
        {
            if(event.target.getAttribute("class")=="button")
            {
                if(event.target.getAttribute("id")=="kopce1")
                {
                    roditel=document.getElementById("dodadi1");
                    tekst=document.forms["forma1"]["tekst1"].value;
                    const d = new Date();
                    br = document.createElement("br");
                    datum="Posted on: "+d;
                    date=document.createTextNode(datum);
                    komentar=document.createTextNode(tekst);
                    nov=document.createElement("p");
                    nov.setAttribute("class", "komentar");
                    nov.appendChild(date);
                    nov.appendChild(br);
                    nov.appendChild(komentar);
                    roditel.appendChild(nov);
                }
                if(event.target.getAttribute("id")=="kopce2")
                {
                    roditel=document.getElementById("dodadi2");
                    tekst=document.forms["forma2"]["tekst2"].value;
                    const d = new Date();
                    br = document.createElement("br");
                    datum="Posted on: "+d;
                    date=document.createTextNode(datum);
                    komentar=document.createTextNode(tekst);
                    nov=document.createElement("p");
                    nov.setAttribute("class", "komentar");
                    nov.appendChild(date);
                    nov.appendChild(br);
                    nov.appendChild(komentar);
                    roditel.appendChild(nov);
                }
                if(event.target.getAttribute("id")=="kopce3")
                {
                    roditel=document.getElementById("dodadi3");
                    tekst=document.forms["forma3"]["tekst3"].value;
                    const d = new Date();
                    br = document.createElement("br");
                    datum="Posted on: "+d;
                    date=document.createTextNode(datum);
                    komentar=document.createTextNode(tekst);
                    nov=document.createElement("p");
                    nov.setAttribute("class", "komentar");
                    nov.appendChild(date);
                    nov.appendChild(br);
                    nov.appendChild(komentar);
                    roditel.appendChild(nov);
                }
                if(event.target.getAttribute("id")=="kopce4")
                {
                    roditel=document.getElementById("dodadi4");
                    tekst=document.forms["forma4"]["tekst4"].value;
                    const d = new Date();
                    br = document.createElement("br");
                    datum="Posted on: "+d;
                    date=document.createTextNode(datum);
                    komentar=document.createTextNode(tekst);
                    nov=document.createElement("p");
                    nov.setAttribute("class", "komentar");
                    nov.appendChild(date);
                    nov.appendChild(br);
                    nov.appendChild(komentar);
                    roditel.appendChild(nov);
                }
                if(event.target.getAttribute("id")=="kopce5")
                {
                    roditel=document.getElementById("dodadi5");
                    tekst=document.forms["forma5"]["tekst5"].value;
                    const d = new Date();
                    br = document.createElement("br");
                    datum="Posted on: "+d;
                    date=document.createTextNode(datum);
                    komentar=document.createTextNode(tekst);
                    nov=document.createElement("p");
                    nov.setAttribute("class", "komentar");
                    nov.appendChild(date);
                    nov.appendChild(br);
                    nov.appendChild(komentar);
                    roditel.appendChild(nov);
                }
                if(event.target.getAttribute("id")=="kopce6")
                {
                    roditel=document.getElementById("dodadi6");
                    tekst=document.forms["forma6"]["tekst6"].value;
                    const d = new Date();
                    br = document.createElement("br");
                    datum="Posted on: "+d;
                    date=document.createTextNode(datum);
                    komentar=document.createTextNode(tekst);
                    nov=document.createElement("p");
                    nov.setAttribute("class", "komentar");
                    nov.appendChild(date);
                    nov.appendChild(br);
                    nov.appendChild(komentar);
                    roditel.appendChild(nov);
                }
                if(event.target.getAttribute("id")=="kopce7")
                {
                    roditel=document.getElementById("dodadi7");
                    tekst=document.forms["forma7"]["tekst7"].value;
                    const d = new Date();
                    br = document.createElement("br");
                    datum="Posted on: "+d;
                    date=document.createTextNode(datum);
                    komentar=document.createTextNode(tekst);
                    nov=document.createElement("p");
                    nov.setAttribute("class", "komentar");
                    nov.appendChild(date);
                    nov.appendChild(br);
                    nov.appendChild(komentar);
                    roditel.appendChild(nov);
                }
                if(event.target.getAttribute("id")=="kopce8")
                {
                    roditel=document.getElementById("dodadi8");
                    tekst=document.forms["forma8"]["tekst8"].value;
                    const d = new Date();
                    br = document.createElement("br");
                    datum="Posted on: "+d;
                    date=document.createTextNode(datum);
                    komentar=document.createTextNode(tekst);
                    nov=document.createElement("p");
                    nov.setAttribute("class", "komentar");
                    nov.appendChild(date);
                    nov.appendChild(br);
                    nov.appendChild(komentar);
                    roditel.appendChild(nov);
                }
                if(event.target.getAttribute("id")=="kopce9")
                {
                    roditel=document.getElementById("dodadi9");
                    tekst=document.forms["forma9"]["tekst9"].value;
                    const d = new Date();
                    br = document.createElement("br");
                    datum="Posted on: "+d;
                    date=document.createTextNode(datum);
                    komentar=document.createTextNode(tekst);
                    nov=document.createElement("p");
                    nov.setAttribute("class", "komentar");
                    nov.appendChild(date);
                    nov.appendChild(br);
                    nov.appendChild(komentar);
                    roditel.appendChild(nov);
                }
            }
        }
        document.addEventListener("click", add_comment, false);