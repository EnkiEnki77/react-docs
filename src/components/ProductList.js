import React from 'react'

const ProductList = () => {
    const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
    ];
    
    const listItems = products.map(item => {
       return <li key={item.id}>{ item.title}</li>
    })

  return (
      <ul>{ listItems}</ul>
  )
}

export default ProductList