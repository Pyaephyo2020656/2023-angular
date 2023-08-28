
const RRODUCTS = [
    { cat: "Foods", name: "Potato Chips"},
    { cat: "Foods", name: "Hot Dogs"},
    { cat: "Drinks", name: "Pepsi"},
    { cat: "Drinks", name: "Cocacola"},
    { cat: "Snacks", name: "Candy"},
    { cat: "Snacks", name: "Chocalat"},
    { cat: "Foods", name: "Humberger"}
  ]

export class ProductService{

    search(category:string){
        return RRODUCTS.filter(a => a.cat == category)
    }


    getCategory(){

        return [... new Set(RRODUCTS.map(a => a.cat).sort())]
    }
}