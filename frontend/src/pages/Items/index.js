import React from 'react';
import Header from '../../template/header';
import ListItems from './listItems';



export default class Items extends React.Component{

    render(){
        return(
            <>
                <Header name={"José Vieira"}/>
                <ListItems/>
                
            </>
            
        );

    }
}