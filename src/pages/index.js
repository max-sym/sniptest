import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const items = [
  {
    id: 'PRODUCT_ID',
    name: 'Product 1',
    price: 1.11,
    url: '/',
    quantity: 1,
  },{
      id: 'PRODUCT2_ID',
      name: 'Product 2',
      price: 2.11,
      url: '/',
      quantity: 1,
  }
]

const IndexPage = () => {
  
  const onClick = async () => {
    if (typeof window === "undefined") return

    await window.Snipcart.api.cart.update({
      metadata: { reservationToken: "TEST_TOKEN" },
    })

    if (!items.length) return

    try {
      await window.Snipcart.api.cart.items.add(...items).then(() => {
        window.Snipcart.api.theme.cart.open()
      })
    } catch (error) {
      console.log(error)
    }
  }

  return(
  <Layout>
    <Seo title="Home" />
    <div>
      <button onClick={onClick} >Add products</button>
    </div>
  </Layout>
)}

export default IndexPage
