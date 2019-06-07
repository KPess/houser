import React, { Component } from 'react'
import axios from 'axios'


export class House extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
        // this.deleteOne = this.deleteOne.bind(this)
    }

    componentDidUpdate() {
        setTimeout(() => {
        axios
        .get('/api/properties')
        .then(response => this.setState({ houses: response.data }))
        .catch(error => console.log(`House-axiosGet: ${error}`))
        }, 1000)
    }




    render() {
    let { houses } = this.props
    let displayHouses = houses.map((property, index) => {
        return (
            <div className="productbox">
            <header className="productimage">
              <img style={{width: "25vw"}} src={property.image_url} alt={property.product_name}></img>
            </header>
            <div key={index}>
              <h1 key="product_name">{property.name}</h1>
              <h2>
               Address: {property.address}
              </h2>
              <h2>
               City:  {property.city}
              </h2>
              <h2>
               State: {property.state}
              </h2>
              <h2>
               ZIP: {property.zipcode}
              </h2>
              <h2>
               Monthly Rent: ${property.monthly_rent}
              </h2>
              <h2>
               Monthly Mortgage ${property.monthly_mortgage}
              </h2>
            </div>
            <button
                onClick={() => {
                  axios
                  .delete("/api/products/" + property.id)
                  .then(response => {
                    this.state.delete(response.data);
                  })
                  .catch(error => {
                    console.log(error);
                  });
                }}
              >
                Delete
              </button>
          </div>
        )});
        return (
            <div className='House'>
                { displayHouses }
            </div>
        )
    }
}

export default House