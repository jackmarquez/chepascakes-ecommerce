import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './directory-menu.styles.scss'

class DirectoryMenu extends React.Component  {

    constructor(){
    super();

    this.state = {
        products : [
            {
                title: 'Tortas',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'tortas'
              },
              {
                title: 'Tortas frías',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: ''
              },
              {
                title: 'Besitos de coco',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                id: 3,
                linkUrl: ''
              },
              {
                title: 'Cup cakes',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                id: 4,
                linkUrl: ''
              },
              {
                title: 'Chesse cakes',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                id: 5,
                linkUrl: ''
              },      
            ]
        }   
    
    }

    render (){

    return (
    <div className= 'directory-menu'>
    { this.state.products.map (({id, ...otherSectionPropos}) => (
        <MenuItem key = {id} {...otherSectionPropos}/>
    ))}
    </div>
    );
}
}

export default DirectoryMenu;