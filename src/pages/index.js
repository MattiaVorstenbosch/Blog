import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import BlogPreview from '../components/BlogPreview'
import '../styles/base.scss'

export default class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openMenu: false,
    };
    
    this.handleMenuToggle = this.handleMenuToggle.bind(this);
  }

  handleMenuToggle = () => {
    this.setState({ openMenu: !this.state.openMenu });
  }

  render() {
    const { openMenu } = this.state;
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <button class={`hamburger hamburger--elastic ${openMenu && 'is-active'}`} type="button" onClick={this.handleMenuToggle}>
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
        <div className="title">
          <div className="title__wrapper">
            <h1>Coming Soon</h1>
            <p>Seeing code come to life gets my heart pumping.</p>
          </div>
        </div>
        {/* <BlogPreview /> */}
      </Layout>
    );
  }
}