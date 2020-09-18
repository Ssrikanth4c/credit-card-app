import React from 'react';

class InputBox extends React.Component{
    constructor(props){
        super(props);
        this.values= new Array(props.inputBoxCount).fill('');
        this.inputElements=[];
        this.flag=0
    }
    componentDidMount(){
        this.inputElements[0].focus();
        console.log(this.values)
        // console.log(this.props)
    }
    
    
    handleChange=(e, ind)=>{
        this.values[ind]= e.target.value;
        this.props.getCreditCardNum(this.values.join("  "));
        console.log(this.values.join("").length)
        
        let inputEle= document.querySelectorAll('input')
        // added some styles  if card num entered
        if(this.values.join("").length == 16){
                this.flag=1;
                console.log( document.querySelectorAll('input'))
                inputEle.forEach(ele=>{
                    ele.classList.add('changeBorderColor')
                })
        }
        else{
            inputEle.forEach(ele=>{
                ele.classList.remove('changeBorderColor')
            })
        }
        
        if(this.inputElements[ind].value.length == 4 && ind!=3){
            this.inputElements[ind+1].focus()
        }
        else{
            let temp=e.target.value.substring(0,4)
            if(e.target.value.length == 4){
                console.log(e.target.value+ '//')
                temp=e.target.value;
                // e.target.value=''
            }
            e.target.value=temp;
        }
        // if()

    }
    
    handleDelete=(e, ind)=>{
        console.log(e.target.value)
        if(e.keyCode === 8 && ind>=1 && e.target.value=='' ){
            this.inputElements[ind-1].focus()
        }
    }
    render(){
        const {inputBoxCount}= this.props;
        return(
            <>
            {  
                this.values.map((item, ind)=>(
                    <input 
                        type='tel'
                        key={ind}
                        ref={(n)=>this.inputElements[ind]=n}
                        onChange={(e)=>this.handleChange(e, ind)}
                        onKeyDown={(e)=>this.handleDelete(e, ind)}
                    />
                ))
            }
            </>
        );
    }
}

export default InputBox;