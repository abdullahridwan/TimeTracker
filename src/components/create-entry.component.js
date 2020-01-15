// (1) import basics
import React, { Component } from 'react';
//import axios from 'axios'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

//(2) Export 
export default class CreateEntry extends Component{
/*---------------------------------------------------------
                    Make Constructor 
---------------------------------------------------------*/
    //(1) create a construct and app the super portion. 
    constructor(props){
        super(props)

        //Do we have methods? If so, then bind this 

        //Create the nesc variables
        this.state={
            timeStart: 0,
            timeEnd: 0,
            duration: 0,
            description:'',
            date: new Date()
        }
    }
/*---------------------------------------------------------
                    Make Methods 
---------------------------------------------------------*/
    

}