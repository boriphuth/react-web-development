import React, {Component} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductList from "../../components/product/ProductList";
import axios from "axios";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {products: null};
  }

  componentDidMount() {
    axios.get("http://localhost:3001/products").then(res => {
        this.setState({products : res.data});
    });
  }
}

export default Product;
