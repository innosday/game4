function start() {
    const $sbutton = document.querySelector("#start_button");
    const $rbutton = document.querySelector("#reset_button");
    $sbutton.disabled = true;
    $rbutton.disabled = true;
    const candidate = Array(45).fill().map((v,i) => i+1);
    const shuffle = [];
    for (let i = candidate.length; i > 0; i--) {
        const random = Math.floor(Math.random() * i);
        const spliceArray = candidate.splice(random,1);
        const value = spliceArray[0];
        shuffle.push(value);
    }
    console.log(shuffle);
    const winballs = shuffle.slice(0,6).sort((a,b) => a - b);
    const bonus = shuffle[6];
    console.log(winballs,bonus);

    const $result = document.querySelector("#result");
    for (let i = 0; i< winballs.length; i++) {
        setTimeout(() => {
            drawball(winballs[i],$result);
        },1000*(i+1));
    }

    const $bonus = document.querySelector("#bonus");
    setTimeout(() => {
        // const $ball = document.createElement('div');
        // $ball.className='ball';
        // $ball.textContent = bouns;
        // $bonus.appendChild($ball);
        drawball(bonus,$bonus);
        $rbutton.disabled = false
    },7000);
}

function reset() {
    const $p = document.querySelector("#fake");
    const $body = document.querySelector("#bm");
    $p.textContent = "그런거 없다 ㅋㅋㅋㅋㅋㅋㅋ";
    $body.style.backgroundImage = "url(./images/image.jpg)";

}

// for (let i = 0; i < winballs.length; i++) {
//     setTimeout(() => {
//         const $ball = document.createElement("div");
//         $ball.className = 'ball';
//         $ball.textContent = winballs[i];
//         $result.appendChild($ball);
//     },1000 * (i + 1));
// }
function drawball(number,$parent) {
    const $ball = document.createElement('div');
    $ball.className = "ball";
    $ball.textContent = number;
    $parent.appendChild($ball);
    if(number < 10) {
        $ball.style.backgroundColor='red';
    }
    else if(number < 20) {
        $ball.style.backgroundColor = 'yellow';
        $ball.style.color = 'black';
    }
    else if(number <30) {
        $ball.style.backgroundColor = 'orange';
    }
    else if(number <= 45) {
        $ball.style.backgroundColor = 'green';
    }
}



