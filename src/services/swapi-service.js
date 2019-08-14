export default class SwappiService {

    _apiBase = 'https://swapi.co/api';

   async getResourse(url) {
       const res = await fetch(`${this._apiBase}${url}`);
       if(!res.ok){
           throw new Error (`Cont fetch ${this._apiBase}${url}`)
       }
       return res.json();
   };

   // people
   async getAllPeople(){
       const res = await this.getResourse(`/people/`);
       return res.results;
   }
   getPeople(id){
       return this.getResourse(`/people/${id}`);
   }

   // planet
   async getAllPlanets(){
       const res = await this.getResourse(`/planets/`);
       return res.results;
   }
   getPlanet(id){
       return this.getResourse(`/planets/${id}`);
   }

   //starships
   async getAllStarships(){
       const res = await this.getResourse(`/starships/`);
       return res.results;
   }
   getStarship(id){
       return this.getResourse(`/starships/${id}`);
   }
}
/*
const swapi = new SwappiService();

swapi.getAllPlanets()
.then((res) => {
   res.forEach(element => {
       console.log(element);
   });
   
});
*/