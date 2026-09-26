//first loop example
document.getElementById("btn-loop").onclick = (e) => {
    const loopresult = document.getElementById("loop-result");

    for (let i = 0; i < 10; i++) {
        let p = document.createElement("p");
        p.innerHTML = i;
        loopresult.append(p);
    }
}