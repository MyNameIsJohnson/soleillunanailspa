import React, { Component } from 'react';
import { FaAlignRight } from 'react-icons/fa';


 class Nav extends Component {
  state = {
      toggle:false
  }
  Toggle = () => {
      this.setState({toggle:!this.state.toggle})
  }
  render() {
    const li = [
        {
            link: "/",
            text:"Manicure"
        },
        {
            link: "/about/",
            text:"Pedicure"
        },
        {
            link: "/",
            text:"Massage"
        },
        {
            link: "/about/",
            text:"Waxing"
        },      {
            link: "/",
            text:"Nail Enhancement"
        },
        {
            link: "/",
            text:"DIY Soleil Kit"
        },
        {
            link: "/contact/",
            text:"About Us"
        },
        {
            link: "/",
            text:"Gift Cards"
        }
      
    ];
    return (
    <>
        <div className="navBar">
                <button onClick={this.Toggle}>
                    <FaAlignRight />
                </button>
                <ul className={this.state.toggle ? "links show-nav" : "links"}>
                    {
                        li.map((objLink, i) => {
                            return ( <li><a href={objLink.link}>{objLink.text}</a></li> )
                        })
                    }
                </ul>
        </div>
    </>
    );
  }
}

export default Nav;
