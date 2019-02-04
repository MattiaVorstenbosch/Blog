import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import BlogPreview from '../components/BlogPreview'
import '../styles/styles.scss'

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
      <React.Fragment>
        <button class={`hamburger hamburger--collapse-r ${openMenu && 'is-active'}`} type="button" onClick={this.handleMenuToggle}>
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
        {openMenu &&
          <div className="menu">
            <ul className="navMenu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/posts">Posts</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        }
        <Layout>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <div className="title">
            <div className="title__wrapper">
              <h1>Coming Soon</h1>
              <p>Seeing code come to life gets my heart pumping.</p>
            </div>
          </div>
          {/* <BlogPreview /> */}
        </Layout>
      </React.Fragment>
    );
  }
}