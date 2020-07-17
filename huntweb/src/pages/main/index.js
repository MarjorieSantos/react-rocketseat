import React, { Component } from "react";
import api from '../../services/api'

export default class Main extends Component {
  componentDidMount() {
    this.loadProducts()
  }

  loadProducts = async () => {
    const responde = await api.get('/products')
    console.log(responde.data.docs)
  }

  render() {
    return <h1>Hello</h1>
  }

}
