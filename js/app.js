let botao = document.querySelector(".btn");
let botaoDiv = document.getElementById("buttons");
let cartaAberta = null; 
let pontos = 0; 
let pausado = false;

function main(amount) {
  let mainDiv = document.querySelector(".memory-game");
  mainDiv.innerHTML = "";

  for (let index = 0; index < amount; index++) {
    let div = document.createElement("div");
    div.className = "memory-card";
    div.dataset.framework = `card${index}`;
    div.innerHTML = `<img class="front-face" src="jiwoong.jpg" alt="Jiwoong">
                <img class="back-face" src="zb1.jpg" alt="Verso da Carta">`;
    mainDiv.appendChild(div);
  }

  let carta = document.querySelectorAll(".memory-card");

  let pack = [
    "./jiwoong.jpg",
    "./jiwoong.jpg",
    "./hanbin.jpg",
    "./hanbin.jpg",
    "./zhanghao.jpg",
    "./zhanghao.jpg",
    "./matthew.jpg",
    "./matthew.jpg",
    "./taerae.jpg",
    "./taerae.jpg",
    "./gyuvin.jpg",
    "./gyuvin.jpg",
    "./ricky.jpg",
    "./ricky.jpg",
    "./gunwook.jpg",
    "./gunwook.jpg",
    "./yujin.jpg",
    "./yujin.jpg",
  ];

  function shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  let shuffledPack = shuffle(pack);

  for (let index = 0; index < carta.length; index++) {
    carta[index].querySelector(".front-face").src = shuffledPack[index];
    carta[index].addEventListener("click", function () {
      if (pausado) {
        return;
      }
      if (!this.classList.contains("flip")) {
        this.classList.add("flip");

        if (cartaAberta === null) {
          cartaAberta = this;
        } else {
          if (this !== cartaAberta) {
            if (
              this.querySelector(".front-face").src ===
              cartaAberta.querySelector(".front-face").src
            ) {
              cartaAberta = null;
              pontos++;
              document.getElementById('pontos').textContent = pontos;
            } else {
              pausado = true;
              setTimeout(function () {
                cartaAberta.classList.remove("flip");
                carta[index].classList.remove("flip");
                cartaAberta = null;
                pausado = false;
              }, 1500);
            }
          } else {
            cartaAberta = null;
          }
        }
      }
    });
  }
}

main(18);
