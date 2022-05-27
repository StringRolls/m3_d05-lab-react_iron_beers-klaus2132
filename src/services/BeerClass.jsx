import axios from "axios"

class BeerApi {
    app = axios.create({
        baseURL: "https://ih-beers-api2.herokuapp.com"
    }) 


    getAllBeers = ()=>{
        return this.app.get("/beers")
        .then(response =>  response.data)
        .catch(err=>{
        console.log(err)
        return {error: err}
        });
    }



    getOneBeer = (id)=>{
        return this.app.get(`/beers/${id}`)
        .then(response=>response.data)
        .catch(err =>{
            console.log(err)
            return {error: err}})
    }

}

export default new BeerApi()