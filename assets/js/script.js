fetch('./data.json').then((response) => response.json()).then((json) => {if (!localStorage.data) {
    localStorage.setItem("data",JSON.stringify(json))
}});
    


function formtiongen(){
    let forma = document.getElementById("formation").value
    switch(forma){
        case "433":
            document.getElementById("st").classList.value="z-10 relative w-full h-28 col-start-5 translate-y-4 hover:scale-125"
            document.getElementById("lw").classList.value="z-10 relative w-full col-start-2 row-start-1 h-28 translate-y-5 hover:scale-125"
            document.getElementById("rw").classList.value="z-10 relative w-full col-start-8 row-start-1 h-28 translate-y-5 hover:scale-125"
            document.getElementById("cmc").classList.value="z-10 relative w-full col-start-5 row-start-2 h-28 translate-y-14 hover:scale-125"
            document.getElementById("cml").classList.value="z-10 relative w-full col-start-3 row-start-2 h-28 translate-y-5 hover:scale-125"
            document.getElementById("cmr").classList.value="z-10 relative w-full col-start-7 row-start-2 h-28 translate-y-5 hover:scale-125"
            document.getElementById("lb").classList.value="z-10 relative w-full col-start-2 row-start-4 h-28  hover:scale-125"
            document.getElementById("cbl").classList.value="z-10 relative w-full col-start-4 row-start-4 h-28 -translate-y-5 hover:scale-125"
            document.getElementById("cbr").classList.value="z-10 relative w-full col-start-6 row-start-4 h-28 -translate-y-5 hover:scale-125"
            document.getElementById("rb").classList.value="z-10 relative w-full col-start-8 row-start-4 h-28  hover:scale-125"
            document.getElementById("gk").classList.value="z-10 relative w-full col-start-5 row-start-5 h-28  hover:scale-125"
            break;
        case "352":
            document.getElementById("st").classList.value="z-10 relative w-full h-28 col-start-4 translate-y-4 hover:scale-125"
            document.getElementById("lw").classList.value="z-10 relative w-full col-start-6 row-start-1 h-28 translate-y-5 hover:scale-125"
            document.getElementById("rw").classList.value="z-10 relative w-full col-start-2 row-start-2 h-28 translate-y-5 hover:scale-125"
            document.getElementById("cmc").classList.value="z-10 relative w-full col-start-3 row-start-2 h-28 translate-x-6 translate-y-20 hover:scale-125"
            document.getElementById("cml").classList.value="z-10 relative w-full col-start-5 row-start-2 h-28 translate-y-5 hover:scale-125"
            document.getElementById("cmr").classList.value="z-10 relative w-full col-start-7 row-start-2 h-28 -translate-x-6 translate-y-20 hover:scale-125"
            document.getElementById("lb").classList.value="z-10 relative w-full col-start-8 row-start-2 h-28 translate-y-5 hover:scale-125"
            document.getElementById("cbl").classList.value="z-10 relative w-full col-start-2 row-start-4 h-28  hover:scale-125"
            document.getElementById("cbr").classList.value="z-10 relative w-full col-start-5 row-start-4 h-28 -translate-y-2 hover:scale-125"
            document.getElementById("rb").classList.value="z-10 relative w-full col-start-8 row-start-4 h-28  hover:scale-125"
            document.getElementById("gk").classList.value="z-10 relative w-full col-start-5 row-start-5 h-28  hover:scale-125"
            break;
        case "442":
            document.getElementById("st").classList.value="z-10 relative w-full h-28 col-start-4 translate-y-4 hover:scale-125"
            document.getElementById("lw").classList.value="z-10 relative w-full col-start-6 row-start-1 h-28 translate-y-5 hover:scale-125"
            document.getElementById("rw").classList.value="z-10 relative w-full col-start-2 row-start-2 h-28 translate-y-10 hover:scale-125"
            document.getElementById("cmc").classList.value="z-10 relative w-full col-start-4 row-start-2 h-28 translate-y-20 hover:scale-125"
            document.getElementById("cml").classList.value="z-10 relative w-full col-start-6 row-start-2 h-28 translate-y-20 hover:scale-125"
            document.getElementById("cmr").classList.value="z-10 relative w-full col-start-8 row-start-2 h-28 translate-y-10 hover:scale-125"
            document.getElementById("lb").classList.value="z-10 relative w-full col-start-2 row-start-4 h-28  hover:scale-125"
            document.getElementById("cbl").classList.value="z-10 relative w-full col-start-4 row-start-4 h-28 translate-y-5 hover:scale-125"
            document.getElementById("cbr").classList.value="z-10 relative w-full col-start-6 row-start-4 h-28 translate-y-5 hover:scale-125"
            document.getElementById("rb").classList.value="z-10 relative w-full col-start-8 row-start-4 h-28  hover:scale-125"
            document.getElementById("gk").classList.value="z-10 relative w-full col-start-5 row-start-5 h-28  hover:scale-125"
            break;
        case "532":
            document.getElementById("st").classList.value="z-10 relative w-full h-28 col-start-4 translate-y-4 hover:scale-125"
            document.getElementById("lw").classList.value="z-10 relative w-full col-start-6 row-start-1 h-28 translate-y-5 hover:scale-125"
            document.getElementById("rw").classList.value="z-10 relative w-full col-start-2 row-start-4 h-28 -translate-y-14 -translate-x-6 hover:scale-125"
            document.getElementById("cmc").classList.value="z-10 relative w-full col-start-3 row-start-2 h-28 translate-y-14 hover:scale-125"
            document.getElementById("cml").classList.value="z-10 relative w-full col-start-5 row-start-2 h-28 translate-y-14 hover:scale-125"
            document.getElementById("cmr").classList.value="z-10 relative w-full col-start-7 row-start-2 h-28 translate-y-14 hover:scale-125"
            document.getElementById("lb").classList.value="z-10 relative w-full col-start-8 row-start-4 h-28 -translate-y-14 translate-x-6 hover:scale-125"
            document.getElementById("cbl").classList.value="z-10 relative w-full col-start-3 row-start-4 h-28 hover:scale-125"
            document.getElementById("cbr").classList.value="z-10 relative w-full col-start-5 row-start-4 h-28 -translate-y-2 hover:scale-125"
            document.getElementById("rb").classList.value="z-10 relative w-full col-start-7 row-start-4 h-28  hover:scale-125"
            document.getElementById("gk").classList.value="z-10 relative w-full col-start-5 row-start-5 h-28  hover:scale-125"
            break;
    }
}


let posid ="";
function add(idpl){
    document.getElementById("addpop").classList.toggle("hidden")
    document.getElementById("noclick").classList.toggle("hidden")
    document.getElementById("addpop").classList.toggle("flex")
    document.getElementById("mainpage").classList.toggle("blur-md")
    posid=idpl;
}
let players = JSON.parse(localStorage.data).players;
function playeradder(id) {
    document.getElementById("playerSelect").innerHTML = '';
    players.forEach(player => {
        divid= players.indexOf(player);
        if(player.position !=="GK" && id.toUpperCase()==player.position || player.position !=="GK" && posid.includes("sb")){
            document.getElementById("playerSelect").innerHTML +=`<button id="card"><div onClick= "replace(this.id)" id=${divid} class="bg-[url('/assets/images/rush.webp')] bg-cover bg-no-repeat w-40 h-52 justify-items-center pl-3 pr-3 pt-7 pb-2">
            <div class="flex ">
                <div class="mr-[-10px] mt-5 text-xl font-bold text-white leading-3">
                    <p>${player.rating}</p>
                    <p class="text-lg">${player.position}</p>
                </div>
                
                <img class="ml-[-9px] mt-1 mb-[-10px] z-10" src="${player.photo}" style="mask-image: linear-gradient(to top, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 8%);" width="100" alt="">
            </div>
            
            <h1 class="font-bold text-white z-20 text-sm">${player.name}</h1>
            <div class="text-white text-[8px] flex gap-1 font-black justify-items-center">
                <ul>
                    <li>PAC</li>
                    <li>${player.pace}</li>
                </ul>
                <ul>
                    <li>SHO</li>
                    <li>${player.shooting}</li>
                </ul>
                <ul>
                    <li>PAS</li>
                    <li>${player.passing}</li>
                </ul>
                <ul>
                    <li>DRI</li>
                    <li>${player.dribbling}</li>
                </ul>
                <ul>
                    <li>DEF</li>
                    <li>${player.defending}</li>
                </ul>
                <ul>
                    <li>PHY</li>
                    <li>${player.physical}</li>
                </ul>
            </div>
            <div class="flex gap-3 mt-1">
                <img src="${player.flag}" width="12" alt="">
                <img src="${player.logo}" width="12" alt="">
            </div>
        </div></button>`
        }else if(player.position ==="GK" && id.toUpperCase()==player.position || posid.includes("sb")){
            document.getElementById("playerSelect").innerHTML +=`<button id="card"><div onClick= "replace(this.id)" id=${divid} class="bg-[url('/assets/images/rush.webp')] bg-cover bg-no-repeat w-40 h-52  justify-items-center pl-3 pr-3 pt-7 pb-2"  id="${player.name}">
            <div class="flex ">
                <div class="mr-[-10px] mt-5 text-xl font-bold text-white leading-3">
                    <p>${player.rating}</p>
                    <p class="text-lg">${player.position}</p>
                </div>
                
                <img class="ml-[-9px] mt-1 mb-[-10px] z-10" src="${player.photo}" style="mask-image: linear-gradient(to top, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 8%);" width="100" alt="">
            </div>
            
            <h1 class="font-bold text-white z-20 text-sm">${player.name}</h1>
            <div class="text-white text-[8px] flex gap-1 font-black justify-items-center">
                <ul>
                    <li>DIV</li>
                    <li>${player.diving}</li>
                </ul>
                <ul>
                    <li>REF</li>
                    <li>${player.reflexes}</li>
                </ul>
                <ul>
                    <li>SPD</li>
                    <li>${player.speed}</li>
                </ul>
                <ul>
                    <li>POS</li>
                    <li>${player.positioning}</li>
                </ul>
                <ul>
                    <li>KIC</li>
                    <li>${player.kicking}</li>
                </ul>
                <ul>
                    <li>HAN</li>
                    <li>${player.handling}</li>
                </ul>
            </div>
            <div class="flex gap-3 mt-1">
                <img src="${player.flag}" width="12" alt="">
                <img src="${player.logo}" width="12" alt="">
            </div>
        </div></button>`
        }
    });
    
}


function replace(id) {
    document.getElementById(id).classList.add("scale-50","-ml-7","-mt-9","hover:scale-75","hover:z-[100]","transition-all", "duration-300")
    let first_child= document.getElementById(posid).firstElementChild;
    document.getElementById(id).classList.add("-translate-x-3","-translate-y-8")
    first_child.replaceWith(document.getElementById(id));
    posid="0";
    Array.from(document.getElementById("teamleyout").children).forEach(element => {
        if(element.childElementCount==0){
            element.innerHTML=`<div class="h-full grid">
                                <img class="absolute z-10 w-9/12 justify-self-center" src="assets/images/cardplace.webp" alt="">
                                <div class="">
                                    <div class="relative z-20 text-[#7600BC] hover:text-white cursor-pointer fill-none card flex items-center justify-center align-middle row-start-4 mt-8 stroke-[#7600BC] hover:stroke-white hover:fill-[#7600BC]">
                                        <span class="absolute"><svg class="w-7 z-10" viewBox="0 0 36 42" width="36"><path d="M18.6275 41.711L18.3137 41.0298C18.1146 41.1215 17.8854 41.1215 17.6863 41.0298L17.3726 41.711L17.6863 41.0298L1.18627 33.4311C0.920355 33.3087 0.75 33.0427 0.75 32.7499V8.7248C0.75 8.42506 0.928458 8.15411 1.20383 8.03575L17.7038 0.943648C17.8929 0.862375 18.1071 0.862375 18.2962 0.943648L34.7962 8.03575C35.0715 8.15411 35.25 8.42506 35.25 8.7248V32.7499C35.25 33.0427 35.0796 33.3087 34.8137 33.4311L18.3137 41.0298L18.6275 41.711Z" stroke-width="1.5"></path></svg></span>
                                        <div class="font-large z-30">+</div>
                                    </div>
                                </div>
                            </div>`
        }
    });
}
function cancle(event) {
    let tar = event.target.id;
    
    if(tar!=="playerSelect"){
        document.getElementById("addpop").classList.toggle("hidden")
        document.getElementById("addpop").classList.toggle("flex")
        document.getElementById("noclick").classList.toggle("hidden")
        document.getElementById("mainpage").classList.toggle("blur-md")
    }
}
function newplayer() {
    const name = document.getElementById("name").value
    const photo = document.getElementById("photo").value
    const pos = document.getElementById("position").value.toUpperCase()
    const national = document.getElementById("nationality").value
    const flag = document.getElementById("flag").value
    const logo = document.getElementById("logo").value
    const club = document.getElementById("club").value
    const pac = Number(document.getElementById("pac").value)
    const sho = Number(document.getElementById("sho").value)
    const pas = Number(document.getElementById("pas").value)
    const dri = Number(document.getElementById("dri").value)
    const def = Number(document.getElementById("def").value)
    const phy = Number(document.getElementById("phy").value)
    const rat = parseInt((pac+sho+pas+dri+def+phy)/6)
    let nplayer={
        "name": name,
        "photo": photo,
        "position": pos,
        "nationality": national,
        "flag": flag,
        "club": club,
        "logo": logo,
        "rating": rat,
        "pace": pac,
        "shooting": sho,
        "passing": pas,
        "dribbling": dri,
        "defending": def,
        "physical": phy
    }
    let newdata= JSON.parse(localStorage.data);
    if (!newdata.players.some(player => JSON.stringify(player) === JSON.stringify(nplayer))) {
        newdata.players.push(nplayer)
        localStorage.setItem("data",JSON.stringify(newdata))
        document.getElementById(document.getElementById("position").value).innerHTML = '';
        document.getElementById(document.getElementById("position").value).innerHTML +=`<div onClick= "replace(this.id)" id="${name}" class="-translate-x-3 -translate-y-8 bg-[url('/assets/images/rush.webp')] bg-cover bg-no-repeat w-40 h-52 justify-items-center pl-3 pr-3 pt-7 pb-2 scale-50 -ml-7 -mt-9 hover:scale-75 hover:z-[100] transition-all duration-300">
                <div class="flex ">
                    <div class="mr-[-10px] mt-5 text-xl font-bold text-white leading-3">
                        <p>${rat}</p>
                        <p class="text-lg">${pos}</p>
                    </div>
                    
                    <img class="ml-[-9px] mt-1 mb-[-10px] z-10" src="${photo}" style="mask-image: linear-gradient(to top, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 8%);" width="100" alt="">
                </div>
                
                <h1 class="font-bold text-white z-20 text-sm">${name}</h1>
                <div class="text-white text-[8px] flex gap-1 font-black justify-items-center">
                    <ul>
                        <li>PAC</li>
                        <li>${pac}</li>
                    </ul>
                    <ul>
                        <li>SHO</li>
                        <li>${sho}</li>
                    </ul>
                    <ul>
                        <li>PAS</li>
                        <li>${pas}</li>
                    </ul>
                    <ul>
                        <li>DRI</li>
                        <li>${dri}</li>
                    </ul>
                    <ul>
                        <li>DEF</li>
                        <li>${def}</li>
                    </ul>
                    <ul>
                        <li>PHY</li>
                        <li>${phy}</li>
                    </ul>
                </div>
                <div class="flex gap-3 mt-1">
                    <img src="${flag}" width="12" alt="">
                    <img src="${logo}" width="12" alt="">
                </div>
            </div>`;
    }else{
        alert("player already exicte")
    }
}
