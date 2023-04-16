
const myButton = document.getElementById("boton");
const nombre = document.getElementById("nombre");
const imagen = document.getElementById("imagen");
let numero;

var campeones = [
    {nombre: "Arhi", imagen: "https://liquipedia.net/commons/images/9/98/WR_Infobox_Ahri.jpg" },
    {nombre: "Zed", imagen: "https://liquipedia.net/commons/images/b/b6/League_Infobox_Zed.jpg" },
    {nombre: "Kassadim", imagen: "https://liquipedia.net/commons/images/3/39/League_Infobox_Kassadin_2022.jpg" },
    {nombre: "Vex", imagen: "https://liquipedia.net/commons/images/c/c3/League_Infobox_Vex.jpg" },
    {nombre: "Katarina", imagen: "https://liquipedia.net/commons/images/5/59/League_Infobox_Katarina.jpg" },
    {nombre: "Qiyana", imagen: "https://liquipedia.net/commons/images/e/e2/League_Infobox_Qiyana.jpg" },
    {nombre: "Anivia", imagen: "https://liquipedia.net/commons/images/e/e9/League_Infobox_Anivia.jpg" },
    {nombre: "LeBlanc", imagen: "https://liquipedia.net/commons/images/f/f5/League_Infobox_LeBlanc.jpg" },
    {nombre: "Annie", imagen: "https://liquipedia.net/commons/images/7/76/League_Infobox_Annie.jpg" },
    {nombre: "Twisted Fate", imagen: "https://liquipedia.net/commons/images/b/b8/League_Infobox_Twisted_Fate.jpg" },
    {nombre: "Yasuo", imagen: "https://liquipedia.net/commons/images/6/61/League_Infobox_Yasuo.jpg" },
    {nombre: "Yone", imagen: "https://liquipedia.net/commons/images/a/a5/League_Infobox_Yone.jpg" },
    {nombre: "Sylas", imagen: "https://liquipedia.net/commons/images/1/1a/League_Infobox_Sylas.jpg" },
    {nombre: "Talon", imagen: "https://liquipedia.net/commons/images/d/d2/League_Infobox_Talon.jpg" },
    {nombre: "Akali", imagen: "https://liquipedia.net/commons/images/f/ff/League_Infobox_Akali.jpg" },
    {nombre: "Xerath", imagen: "https://liquipedia.net/commons/images/1/10/League_Infobox_Xerath.jpg" },
    {nombre: "Veigar", imagen: "https://liquipedia.net/commons/images/a/ae/League_Infobox_Veigar.jpg" },
    {nombre: "Lissandra", imagen: "https://liquipedia.net/commons/images/c/c5/League_Infobox_Lissandra.jpg" },
    {nombre: "Fizz", imagen: "https://liquipedia.net/commons/images/d/d1/League_Infobox_Fizz.jpg" },
    {nombre: "Zoe", imagen: "https://liquipedia.net/commons/images/7/73/League_Infobox_Zoe.jpg" },
    {nombre: "Syndra", imagen: "https://liquipedia.net/commons/images/e/e2/League_Infobox_Syndra.jpg" },
    {nombre: "Cassiopeia", imagen: "https://liquipedia.net/commons/images/6/61/League_Infobox_Cassiopeia.jpg" },
    {nombre: "Irelia", imagen: "https://liquipedia.net/commons/images/4/44/League_Infobox_Irelia.jpg" },
    {nombre: "Lux", imagen: "https://liquipedia.net/commons/images/b/be/League_Infobox_Lux.jpg" },
    {nombre: "Malzahar", imagen: "https://liquipedia.net/commons/images/a/ac/League_Infobox_Malzahar.jpg" },
    {nombre: "Diana", imagen: "https://liquipedia.net/commons/images/3/34/League_Infobox_Diana.jpg" },
    {nombre: "Vel'Koz", imagen: "https://liquipedia.net/commons/images/1/16/League_Infobox_Vel%27Koz.jpg" },
    {nombre: "Corki", imagen: "https://liquipedia.net/commons/images/1/14/League_Infobox_Corki.jpg" },
    {nombre: "Ekko", imagen: "https://liquipedia.net/commons/images/3/37/League_Infobox_Ekko.jpg" },
    {nombre: "Galio", imagen: "https://liquipedia.net/commons/images/1/15/League_Infobox_Galio.jpg" },
    {nombre: "Orianna", imagen: "https://liquipedia.net/commons/images/9/93/Orianna_Large.png" },
    {nombre: "Aurelion Sol", imagen: "https://liquipedia.net/commons/images/6/6f/League_Infobox_Aurelion_Sol.jpg" },
    {nombre: "Phanteon", imagen: "https://liquipedia.net/commons/images/a/a5/League_Infobox_Pantheon_2019.jpg" },
    {nombre: "Azir", imagen: "https://liquipedia.net/commons/images/1/1d/League_Infobox_Azir.jpg" },
    {nombre: "Jayce", imagen: "https://liquipedia.net/commons/images/c/cf/League_Infobox_Jayce.jpg" },
    {nombre: "Lucian", imagen: "https://liquipedia.net/commons/images/7/78/League_Infobox_Lucian.jpg" },
    {nombre: "Viktor", imagen: "https://liquipedia.net/commons/images/9/97/League_Infobox_Viktor.jpg" },
    {nombre: "Vladimir", imagen: "https://liquipedia.net/commons/images/f/f1/League_Infobox_Vladimir.jpg" },
    {nombre: "Ryze", imagen: "https://liquipedia.net/commons/images/6/6c/League_Infobox_Rumble.jpg" },
    {nombre: "Rumble", imagen: "https://liquipedia.net/commons/images/1/1a/League_Infobox_Ryze.jpg" },
]




myButton.addEventListener("click", function() {
    numero = Math.floor(Math.random() * 40) + 1;
    for(let i = 0; i < campeones.length; i++){
        
        if((i+1) == numero){
            nombre.innerHTML = campeones[numero].nombre;
            imagen.setAttribute('src', campeones[numero].imagen);
        }
    }
  });
  


