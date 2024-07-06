import { Display } from "./display.js";

export class HomePage {
    constructor() {
        const navLinks= document.querySelectorAll(".nav-link");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                document.querySelector(".active")?.classList.remove("active")
                link.classList.add("active")
                
                this.getData(link.innerHTML)
                
            });
            this.display= new Display()
            this.getData("mmorpg")
        }

        )
    }

    async getData(game){
        const loading= document.querySelector(".loading")
        loading.classList.remove("d-none")
          const options = {
          method: 'GET',
          headers: {
              'x-rapidapi-key': 'bca035b0e3msh5bdfe25e2cff52dp1c6296jsn62adb4b27e62',
              'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
          }
          };
      
          const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${game}`,options);
          const data= await response.json()
          console.log(data);
          this.display.displayData(data)
          loading.classList.add("d-none")
      
}
}