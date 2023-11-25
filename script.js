function calc(e){
    if (e == "C"){
        act.innerText = "";
        res.innerText = "";
        return;
    }
    if (e == "=") {
        calculated = true;
        result = eval(act.innerText);
        res.innerText = "=" + result;
        return;
    }
    if (
        ["+", "-", "*", "/"].includes(e) &&
        ["+", "-", "*", "/"].includes(act.innerText.slice(-1))
    ) {
        console.log(act.innerText.slice(0, -1));
        act.innerText = act.innerText.slice(0, -1) + e;
        return;
    }
    if (e == "Del") {
        act.innerText = act.innerText.slice(0, -1);
        return;
    }
    if (caluated){
        act.innerText = result;
        res.innerText = "";
        calculated = false;
    }
    act.innerText += e;
}


