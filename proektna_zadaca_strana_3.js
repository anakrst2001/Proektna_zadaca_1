var roditel;
        var nov;
        var tekst;
        var komentiraj;
        var liked=[0, 0, 0, 0, 0, 0];
        var name;
        var ime;
        var slika_src;
        var slika_alt;
        var card_title;
        var card_text;
        var brojac=6;
        function dodadi_slika(event)
        {
            if(event.target.getAttribute("class")=="btn btn-secondary")
            {
                slika_src=window.prompt("Vnesi src za slikata!");
                slika_alt=window.prompt("Vnesi alt za slikata!");
                card_title=window.prompt("Vnesi card title!");
                card_text=window.prompt("Vnesi card text!");
                roditel=document.getElementById("card");
                nov=document.createElement("img");
                nov.setAttribute("class", "card-img-top rounded");
                nov.setAttribute("src", slika_src);
                nov.setAttribute("alt", slika_alt);
                nov.style.width="100%";

                var nov_div=document.createElement("div");
                nov_div.setAttribute("class", "card-body");
                nov_div.setAttribute("id", "div"+brojac);
                
                var tekst_card_title=document.createTextNode(card_title);
                var card_title_node=document.createElement("h4");
                card_title_node.setAttribute("class", "card-title");
                card_title_node.appendChild(tekst_card_title);

                var tekst_card_text=document.createTextNode(card_text);
                var card_text_node=document.createElement("p");
                card_text_node.setAttribute("class", "card-text");
                card_text_node.appendChild(tekst_card_text);

                var see_profile_tekst=document.createTextNode("See Profile");
                var see_profile=document.createElement("a");
                see_profile.setAttribute("href", "#");
                see_profile.setAttribute("class", "btn btn-primary btn-lg");
                see_profile.appendChild(see_profile_tekst);

                var blank=document.createElement("br");

                var komentari_nova_slika=document.createElement("div");
                komentari_nova_slika.setAttribute("id", "komentari"+brojac);

                var lajkovi_nova_slika=document.createElement("div");
                lajkovi_nova_slika.setAttribute("id", "lajkovi"+brojac);

                var forma=document.createElement("form");
                forma.setAttribute("name", "forma"+brojac);
                forma.setAttribute("method", "post");
                forma.setAttribute("action", "#");

                var oznaka=document.createElement("label");
                var oznaka_tekst=document.createTextNode("Name: ");
                oznaka.appendChild(oznaka_tekst);

                var vnesi=document.createElement("input");
                vnesi.setAttribute("id", "ime"+brojac);
                vnesi.setAttribute("type", "text");
                vnesi.setAttribute("size", "30");
                vnesi.setAttribute("name", "nom"+brojac);

                var oznaka_komentar=document.createElement("label");
                var oznaka_komentar_tekst=document.createTextNode("Comment: ");
                oznaka_komentar.appendChild(oznaka_komentar_tekst);
                oznaka_komentar.appendChild(blank);

                var tekst_area=document.createElement("textarea");
                tekst_area.setAttribute("id", "komentar"+brojac);
                tekst_area.setAttribute("name", "pisuvaj"+brojac);
                tekst_area.setAttribute("rows", "4");
                tekst_area.setAttribute("cols", "40");
                tekst_area.appendChild(blank);

                var kopce_post=document.createElement("button");
                var kopce_post_tekst=document.createTextNode("Post");
                kopce_post.setAttribute("id", "kopce"+brojac);
                kopce_post.setAttribute("type", "button");
                kopce_post.setAttribute("class", "btn btn-primary");
                kopce_post.appendChild(kopce_post_tekst);
                kopce_post.appendChild(blank);
                kopce_post.appendChild(blank);

                var kopce_like=document.createElement("button");
                var kopce_like_tekst=document.createTextNode("Like");
                kopce_like.setAttribute("id", "l"+brojac);
                kopce_like.setAttribute("type", "button");
                kopce_like.setAttribute("class", "btn btn-success");
                kopce_like.style.marginLeft="50px";
                kopce_like.appendChild(kopce_like_tekst);

                forma.appendChild(oznaka);
                forma.appendChild(vnesi);
                forma.appendChild(blank);
                forma.appendChild(oznaka_komentar);
                forma.appendChild(tekst_area);
                forma.appendChild(kopce_post);
                forma.appendChild(kopce_like);

                nov_div.appendChild(card_title_node);
                nov_div.appendChild(card_text_node);
                nov_div.appendChild(see_profile);
                nov_div.appendChild(blank);
                nov_div.appendChild(komentari_nova_slika);
                nov_div.appendChild(blank);
                nov_div.appendChild(lajkovi_nova_slika);
                nov_div.appendChild(blank);
                nov_div.appendChild(forma);

                roditel.appendChild(nov);
                roditel.appendChild(nov_div);

                brojac++;
            }
        }
        function like_comment(event)
        {
            if(event.target.getAttribute("class")=="btn btn-primary")
            {
                if(event.target.getAttribute("id")=="kopce1")
                {
                    roditel=document.getElementById("komentari1");
                    tekst=document.forms["forma1"]["pisuvaj1"].value;
                    komentiraj=document.createTextNode(tekst);
                    name=document.forms["forma1"]["nom1"].value;
                    ime=document.createTextNode(name+": ");
                    nov=document.createElement("p");
                    nov.setAttribute("class", "klasa");
                    nov.appendChild(ime);
                    nov.appendChild(komentiraj);
                    roditel.appendChild(nov);
                }
                if(event.target.getAttribute("id")=="kopce2")
                {
                    roditel=document.getElementById("komentari2");
                    tekst=document.forms["forma2"]["pisuvaj2"].value;
                    komentiraj=document.createTextNode(tekst);
                    name=document.forms["forma2"]["nom2"].value;
                    ime=document.createTextNode(name+": ");
                    nov=document.createElement("p");
                    nov.setAttribute("class", "klasa");
                    nov.appendChild(ime);
                    nov.appendChild(komentiraj);
                    roditel.appendChild(nov);
                }
                if(event.target.getAttribute("id")=="kopce3")
                {
                    roditel=document.getElementById("komentari3");
                    tekst=document.forms["forma3"]["pisuvaj3"].value;
                    komentiraj=document.createTextNode(tekst);
                    name=document.forms["forma3"]["nom3"].value;
                    ime=document.createTextNode(name+": ");
                    nov=document.createElement("p");
                    nov.setAttribute("class", "klasa");
                    nov.appendChild(ime);
                    nov.appendChild(komentiraj);
                    roditel.appendChild(nov);
                }
                if(event.target.getAttribute("id")=="kopce4")
                {
                    roditel=document.getElementById("komentari4");
                    tekst=document.forms["forma4"]["pisuvaj4"].value;
                    komentiraj=document.createTextNode(tekst);
                    name=document.forms["forma4"]["nom4"].value;
                    ime=document.createTextNode(name+": ");
                    nov=document.createElement("p");
                    nov.setAttribute("class", "klasa");
                    nov.appendChild(ime);
                    nov.appendChild(komentiraj);
                    roditel.appendChild(nov);
                }
                if(event.target.getAttribute("id")=="kopce5")
                {
                    roditel=document.getElementById("komentari5");
                    tekst=document.forms["forma5"]["pisuvaj5"].value;
                    komentiraj=document.createTextNode(tekst);
                    name=document.forms["forma5"]["nom5"].value;
                    ime=document.createTextNode(name+": ");
                    nov=document.createElement("p");
                    nov.setAttribute("class", "klasa");
                    nov.appendChild(ime);
                    nov.appendChild(komentiraj);
                    roditel.appendChild(nov);
                }
                if(event.target.getAttribute("id")=="kopce6")
                {
                    roditel=document.getElementById("komentari6");
                    tekst=document.forms["forma6"]["pisuvaj6"].value;
                    komentiraj=document.createTextNode(tekst);
                    name=document.forms["forma6"]["nom6"].value;
                    ime=document.createTextNode(name+": ");
                    nov=document.createElement("p");
                    nov.setAttribute("class", "klasa");
                    nov.appendChild(ime);
                    nov.appendChild(komentiraj);
                    roditel.appendChild(nov);
                }
            }
            if(event.target.getAttribute("class")=="btn btn-success")
            {
                if(event.target.getAttribute("id")=="l1")
                {
                    if(liked[0]==0)
                    {
                        roditel=document.getElementById("lajkovi1");
                        liked[0]++;
                        nov=document.createElement("span");
                        nov.setAttribute("class", "badge badge-info zgolemi_badge");
                        tekst=document.createTextNode("Likes: "+liked[0]);
                        nov.appendChild(tekst);
                        roditel.appendChild(nov);
                    }
                    else
                    {
                        roditel=document.getElementById("lajkovi1");
                        liked[0]++;
                        nov=document.createElement("span");
                        nov.setAttribute("class", "badge badge-info zgolemi_badge");
                        tekst=document.createTextNode("Likes: "+liked[0]);
                        nov.appendChild(tekst);
                        roditel.replaceChild(nov, roditel.childNodes[0]);
                    }
                }
                if(event.target.getAttribute("id")=="l2")
                {
                    if(liked[1]==0)
                    {
                        roditel=document.getElementById("lajkovi2");
                        liked[1]++;
                        nov=document.createElement("span");
                        nov.setAttribute("class", "badge badge-info zgolemi_badge");
                        tekst=document.createTextNode("Likes: "+liked[1]);
                        nov.appendChild(tekst);
                        roditel.appendChild(nov);
                    }
                    else
                    {
                        roditel=document.getElementById("lajkovi2");
                        liked[1]++;
                        nov=document.createElement("span");
                        nov.setAttribute("class", "badge badge-info zgolemi_badge");
                        tekst=document.createTextNode("Likes: "+liked[1]);
                        nov.appendChild(tekst);
                        roditel.replaceChild(nov, roditel.childNodes[0]);
                    }
                }
                if(event.target.getAttribute("id")=="l3")
                {
                    if(liked[2]==0)
                    {
                        roditel=document.getElementById("lajkovi3");
                        liked[2]++;
                        nov=document.createElement("span");
                        nov.setAttribute("class", "badge badge-info zgolemi_badge");
                        tekst=document.createTextNode("Likes: "+liked[2]);
                        nov.appendChild(tekst);
                        roditel.appendChild(nov);
                    }
                    else
                    {
                        roditel=document.getElementById("lajkovi3");
                        liked[2]++;
                        nov=document.createElement("span");
                        nov.setAttribute("class", "badge badge-info zgolemi_badge");
                        tekst=document.createTextNode("Likes: "+liked[2]);
                        nov.appendChild(tekst);
                        roditel.replaceChild(nov, roditel.childNodes[0]);
                    }
                }
                if(event.target.getAttribute("id")=="l4")
                {
                    if(liked[3]==0)
                    {
                        roditel=document.getElementById("lajkovi4");
                        liked[3]++;
                        nov=document.createElement("span");
                        nov.setAttribute("class", "badge badge-info zgolemi_badge");
                        tekst=document.createTextNode("Likes: "+liked[3]);
                        nov.appendChild(tekst);
                        roditel.appendChild(nov);
                    }
                    else
                    {
                        roditel=document.getElementById("lajkovi4");
                        liked[3]++;
                        nov=document.createElement("span");
                        nov.setAttribute("class", "badge badge-info zgolemi_badge");
                        tekst=document.createTextNode("Likes: "+liked[3]);
                        nov.appendChild(tekst);
                        roditel.replaceChild(nov, roditel.childNodes[0]);
                    }
                }
                if(event.target.getAttribute("id")=="l5")
                {
                    if(liked[4]==0)
                    {
                        roditel=document.getElementById("lajkovi5");
                        liked[4]++;
                        nov=document.createElement("span");
                        nov.setAttribute("class", "badge badge-info zgolemi_badge");
                        tekst=document.createTextNode("Likes: "+liked[4]);
                        nov.appendChild(tekst);
                        roditel.appendChild(nov);
                    }
                    else
                    {
                        roditel=document.getElementById("lajkovi5");
                        liked[4]++;
                        nov=document.createElement("span");
                        nov.setAttribute("class", "badge badge-info zgolemi_badge");
                        tekst=document.createTextNode("Likes: "+liked[4]);
                        nov.appendChild(tekst);
                        roditel.replaceChild(nov, roditel.childNodes[0]);
                    }
                }
                if(event.target.getAttribute("id")=="l6")
                {
                    if(liked[5]==0)
                    {
                        roditel=document.getElementById("lajkovi6");
                        liked[5]++;
                        nov=document.createElement("span");
                        nov.setAttribute("class", "badge badge-info zgolemi_badge");
                        tekst=document.createTextNode("Likes: "+liked[5]);
                        nov.appendChild(tekst);
                        roditel.appendChild(nov);
                    }
                    else
                    {
                        roditel=document.getElementById("lajkovi6");
                        liked[5]++;
                        nov=document.createElement("span");
                        nov.setAttribute("class", "badge badge-info zgolemi_badge");
                        tekst=document.createTextNode("Likes: "+liked[5]);
                        nov.appendChild(tekst);
                        roditel.replaceChild(nov, roditel.childNodes[0]);
                    }
                }
            }
        }
        document.addEventListener("click", like_comment, false);
        document.addEventListener("click", dodadi_slika, false);