import React from "react";
import { Product } from "../../models/productModel.js";
import Counter from '../buttons/buttonsComp.js';
//PADRE
export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      products: [
        new Product(1, "La locomotiva", "F.Guccini", "images/locomotiva.jpg",10,0),
        new Product(2, "Zombie", "The cranberries", "images/zombie.jpg",10,0),
        new Product(3, "Marmellata #25", "C.Cremonini", "images/marm.jpg",10,0),
        new Product(4, "Nicotina", "Mostro", "images/mostro.jpg",10,0),
      ],
    };
  }

  // funzione per cambiare stato al padre
  select = (prod) => {
    //se la canzone è presente nell'array eliminala
    
    const selected = [...this.state.selected];
      if(!selected.includes(prod)){ //se l'array NON include l'oggetto param passato
        selected.push(prod);  //allora inserisci param in array
        prod.quantity ++;
        this.setState({selected});
      }else{ //se il prodotto è già nell'array allora aumenta la prop counter del prodotto
        prod.quantity ++;
        this.setState({selected});
      }
  };
total = () =>{
  var tot = 0;
  this.state.selected.forEach(e=>{
    tot += e.quantity
  })
  return(<h3>Total item {tot}</h3>)
}
  render() {
    // const totals = this.state.total.reduce((total, amount) => total+amount);

    const sel = this.state.selected.map((selectedS) => (
      <div key={selectedS.id}>
        <div>
          item: {selectedS.name} €: {selectedS.price} qty: {selectedS.quantity}
        </div>
      </div>
    ));
    const item = this.state.products.map((song) => (
      <div key={song.id} className='flexRow'>
        <div className='img'><img src={song.cover}></img></div>
        <div className='cardCon'>
          <span className='title'>{song.name}</span>
          <p>{song.desc}</p>
        </div>
        <div className='priceCon'>
          <div>{song.price}</div>
          <span><Counter product ={song} select={this.select} /></span>
          {/* select = {this.select}  */}
          {/* <span onClick={() => this.select(song)}><Counter product={song}/></span> */}
        </div>
      </div>
    ));

    return (
      <div className="flexCol">
        <div className="productPage">
          {item}
        </div>
        <div className="cart">
          <div>
            {this.total()}
          </div>
          {sel}
        </div>
      </div>
    );
  }
}
