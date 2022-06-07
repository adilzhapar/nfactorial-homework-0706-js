let obj = document.querySelector(".object");

const add = () => {
    
    let cntry = document.querySelector("#cntry");
    let army = document.querySelector("#army");
    let cmdr = document.querySelector("#cmdr");

    if(cntry.value != "" && cmdr.value != "" && cmdr.value != ""){
        let v = document.createElement("div");
        v.className = "emp";

        let p1 = document.createElement("p");
        p1.innerHTML = cntry.value;
        p1.className = "jsp";

        let p2 = document.createElement("p");
        p2.innerHTML = army.value;
        p2.className = "jsp";

        let p3 = document.createElement("p");
        p3.innerHTML = cmdr.value;
        p3.className = "jsp";

        v.appendChild(p1);
        v.appendChild(p2);
        v.appendChild(p3);
        obj.appendChild(v);

        cntry.value = "";
        army.value = "";
        cmdr.value = "";
    }else{
        alert("Empty input");
    }

}

const add_wrw = () => {
    let wrw = document.querySelector("#wrw");
    let wrws = document.createElement("div");
    let v = document.querySelector(".emp");
    wrws.className = "warriors";

    if(wrw.value != ""){
        let pw = document.createElement("p");
        pw.innerHTML = wrw.value;
        pw.className = "jspw";
        
        wrws.appendChild(pw);
        v.appendChild(wrws);
        wrw.value = "";
    }
}

function adding(){
    if(event.key == 'Enter'){
        add();
    }
}

function adding_wrw(){
    if(event.key == 'Enter'){
        add_wrw();
    }
}

