/* eslint-disable react/prop-types */
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Input} from "./components/forms/Input.jsx";
import { Checkbox } from './components/forms/Checkbox';
import { ProductCategoryRow } from './components/products/ProductCategoryRow';
import { ProductRow } from './components/products/productRow';
import { useState } from 'react';

const PRODUCTS = [  
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}  
]


function App() {

  const [showStockedOnly, setShowStockedOnly] = useState(false);
  const [searchStockedOnly, setSearchStockedOnly] = useState('');

  /* On va filtrer les produits */ 
  const visibleProduct = PRODUCTS.filter(products => {
    /* If stockedOnly est true && produits est différents de stocked */
    if(showStockedOnly && !products.stocked) 
    {
      /* On exclue le produits */
      return false;
    }

    /* If searchStockedOnly n'est pas vide, et que le nom du produits inclus ce qu'il y a dans la recherche*/
    if(searchStockedOnly && !products.name.includes(searchStockedOnly))
    {
      return false;
    }
    
    return true
    
  });


  /* Normalement, dans onShowStockedOnlyChanged  et onChangedSearchStockedOnly 
  on aurait du mettre du type (e)=>onXXX(e.target.value/checked)
  MAIS, cela on l'a déjà fait dans les components checkbox.jsx et input.jsx 
  ALORS, on leur passe juste la fonction callback */
  return (
    <div className='container my-3'>
      <SearchBar showStockedOnly={showStockedOnly} onShowStockedOnlyChanged = {setShowStockedOnly} search={searchStockedOnly} onChangedSearchStockedOnly={setSearchStockedOnly}></SearchBar>
      <ProductTable products={visibleProduct}></ProductTable>
    </div>
  )
}


  function SearchBar({showStockedOnly, onShowStockedOnlyChanged,search,onChangedSearchStockedOnly })
  {
    return (
      <div>
        <div className="mb-3">
          <Input value={search} onChange={onChangedSearchStockedOnly} placeholder = "Rechercher..."></Input>
          <Checkbox checked={showStockedOnly} onChange={onShowStockedOnlyChanged} label="N'afficher que les produits en stock"></Checkbox>
        </div>
      </div>
    )
  }

  function ProductTable({products})
  {
    /* On crée un tableau pour stocker les valeurs à afficher */
    const rows = [];
    /* Cette variable c'est pour savoir quelle est la derniere catégorie */
    let lastCategory = null;
    /* on va boucler sur la liste des produits */
    for (let product of products)
    {
      /* Si la catégorie est différent du last catégorie */
      if(product.category !== lastCategory)
      {
        /* ajouter une ligne de catégorie, n'oublie pas le KEY, on est dans un tableau*/
        rows.push(<ProductCategoryRow name={product.category} key={product.category}/>)
      }
      /* Changer la valeur de lastCategory*/
      lastCategory = product.category;
      /* Ajouter les lignes de produits, ne pas oublier le KEY*/
      rows.push(<ProductRow product={product} key={product.name}/>)
    }

    /* On va ensuite afficher dans le tbody les valeurs contenues dans rows*/
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }

   


export default App
