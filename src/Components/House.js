import React, { Component } from 'react'
import axios from 'axios'

export class House extends Component {
    constructor(props) {
        super(props)
        this.state = {
            houses: []
        }
        // this.deleteOne = this.deleteOne.bind(this)
    }

    componentDidMount() {
        setTimeout(() => {
        axios
        .get('/api/properties')
        .then(response => this.setState({ houses: response.data }))
        .catch(error => console.log(`House-axiosGet: ${error}`))
        }, 1000)
    }


    // deleteOne(id) {
    //     axios
    //         .delete(`/api/properties/${id}`)
    //         .then(() => this.componentDidMount())
    //         .catch(error => console.log(`House-axiosDelete: ${error}`))
    // }

    render() {
    let { houses } = this.state
    let displayHouses = houses.map(house => {
        return (
            <House 
            id={houses.id}
            name={houses.name}
            city={houses.city}
            state={houses.state}
            image={houses.image_url}
            zipcode={houses.zipcode}
            monthly_rent={houses.monthly_rent}
            monthly_mortgage={houses.monthly_mortgage}
            address={houses.address}
            // deleteOneFn={this.deleteOne}
            />
        )
    })
        return (
            <div className='House'>
                { displayHouses }
            </div>
        )
    }
}

export default House