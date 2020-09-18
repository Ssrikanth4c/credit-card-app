import React from 'react';

class InputBox extends React.Component{
    constructor(props){
        super(props);
        this.values= new Array(props.inputBoxCount).fill('');
        this.inputElements=[];
    }
    componentDidMount(){
        this.inputElements[0].focus();
        console.log(this.values)
        console.log(this.props)
    }
    componentDidUpdate(){
        this.props.getCreditCardNum(this.values.join(' '))
    }
    handleChange=(e, ind)=>{
        console.log(e.target.value, ind);
        this.values[ind]= e.target.value;
    }
    render(){
        const {inputBoxCount}= this.props;
        return(
            <>
            {  
                this.values.map((item, ind)=>(
                    <input 
                        type='text'
                        key={ind}
                        ref={(n)=>this.inputElements[ind]=n}
                        onChange={(e)=>this.handleChange(e, ind)}
                    />
                ))
            }
            </>
        );
    }
}

export default InputBox;