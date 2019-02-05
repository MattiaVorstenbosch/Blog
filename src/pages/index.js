import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogPreview from '../components/BlogPreview'
import delayUnmounting from '../components/delayUnmounting'
import '../styles/styles.scss'


const Menu = (props) => {
  const { isMounted } = props;
  return (
    <div className={`menu ${isMounted ? 'menuOpening' : 'menuClosing'}`}>
      <ul className="navMenu">
        <li className={`menuItem ${isMounted ? 'menuItemOpening' : 'menuItemClosing'}`}>
          <Link className={`menuItemLink ${isMounted ? 'menuItemLinkOpening' : 'menuItemLinkClosing'}`} to="/">Home</Link>
        </li>
        <li className={`menuItem ${isMounted ? 'menuItemOpening' : 'menuItemClosing'}`}>
          <Link className={`menuItemLink ${isMounted ? 'menuItemLinkOpening' : 'menuItemLinkClosing'}`} to="/posts">Posts</Link>
        </li>
        <li className={`menuItem ${isMounted ? 'menuItemOpening' : 'menuItemClosing'}`}>
          <Link className={`menuItemLink ${isMounted ? 'menuItemLinkOpening' : 'menuItemLinkClosing'}`} to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

const DelayedComponent = delayUnmounting(Menu);

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
        <button className={`hamburger hamburger--collapse-r ${openMenu && 'is-active'}`} type="button" onClick={this.handleMenuToggle}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <DelayedComponent delayTime={1000} isMounted={this.state.openMenu} />
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