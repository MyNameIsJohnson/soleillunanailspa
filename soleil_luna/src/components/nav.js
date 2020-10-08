import React from 'react';

class Nav extends React.Component {
     
    render() {

        return (
            <nav className='nav' >
                <ul className='nav-list'>
                    <li>
                        <button className='nav-btn btn'> 
                        Manicure
                        </button>
                    </li>
                       
                    <li>
                        <button className='nav-btn btn'>
                        Pedicare
                        </button>
                    </li>
                    <li>
                        <button className='nav-btn btn'>
                        Nail Enhancement
                        </button>
                    </li>
                    <li>
                        <button className='nav-btn btn'>
                        Massage
                        </button>
                    </li>
                    <li>
                        <button className='nav-btn btn'>
                        Waxing
                        </button>
                    </li>                  
                </ul>
            </nav>
        );
    };
};

export default Nav;
