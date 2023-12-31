import { defineStore } from 'pinia'
//show the type of product
interface Product{
  title:string
  id:string
}

//a object to return products and others
type State = {
  products: Product[],
  product?: Product,
  new?: Product[],
  count: number,
}
//difin and add product
export const useProductStore = defineStore('product', {
  state: (): State => {
    return { 
        products:[
            {title:"a" ,id:"0" ,},
            {title:"b" ,id:"1" ,},
            {title:"c" ,id:"2" },
            {title:"d" ,id:"3" },
            {title: "e" ,id:"4"}
        ],

        new:[],

        product : Object,

        count:0
    }
  },
  //our methods
  actions: {
    add(){
        this.new[this.count]=this.product
        this.count++
    }, 
     removed(id:string){
      this.new  =  this.new.filter((product: { id: string }) => product.id!==id)
      this.count--
     },
  },
})