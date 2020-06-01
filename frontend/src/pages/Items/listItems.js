import React from 'react';
import './style.css';
import Item from './item';

export default function ListItems(){
    return(
        <div className="list-items">
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </div>
    );
}
