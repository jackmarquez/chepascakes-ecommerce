import React from 'react';
import MenuItem from '../menu-item/menu-item.component';



class DirectoryMenu extends React.Component  {

    constructor(){
    super();

    this.state = {
        products : [
            {
                title: 'Tortas',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'shop/hats'
              },
              {
                title: 'Tortas frías',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: 'shop/jackets'
              },
              {
                title: 'Besitos de coco',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: 'shop/mens'
              },
              {
                title: 'Cup cakes',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: 'shop/mens'
              },
              {
                title: 'Chesse cakes',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: 'shop/mens'
              },
            
            ]
        }   
    
    }

    render (){

    return (
    <div className= 'directory-menu'>
    {this.state.products.map (({ title, imageUrl, id}) => (
        <MenuItem key = {id} title = {title} imageUrl = {imageUrl}/>
    ))}
    </div>
    );
}
}

export default DirectoryMenu;