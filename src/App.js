import './App.css';
import FormInput from './components/FormInput';
import { useState } from 'react';
import Purple_cart from './components/Purple_cart';
import Gray_cart from './components/Gray_cart';
import Thank from './components/Thank';
import Main from './images/bg-main-desktop.png';

function App() {
  const [deleteform,setDeleteform]= useState(false)
  const [values,setValues] = useState({
    cardholdername:"",
    cardnumber:"",
    date:"",
  })
  const [personName,setPersonName] = useState("")
  const [number,setNumber] = useState("")
  const[date,setDate] = useState("")
const inputs = [
  {
    id:1,
    name:"cardholdername",
    type:"text",
    placeholder:"Name",
    errorMassage:"Card name shouldn't include any special character,nor space at the end!",
    label:"cardholdername",
    // pattern:"^[A-Za-z0-9]{3,25}$",
    pattern:"^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
    required:true,
  },
{
    id:2,
    name:"cardnumber",
    type:"text",
    placeholder:"Number",
    label:"cardnumber",
    pattern:"^[0-9]+$",
    required:true,
    errorMassage:"Card number contains number only!"
    
  },
{
    id:3,
    name:"date",
    type:"date",
    placeholder:"date",
    label:"date",
  },
]

const handleSubmit =(e) =>{
  e.preventDefault();
};

const onChange =(e) =>{
  setValues({...values,[e.target.name]:e.target.value})
  
 
    if([e.target.name] == "cardholdername"){

      setPersonName(e.target.value)
      

        // console.log(personName)
  }
 if([e.target.name] == "cardnumber"){

      setNumber(e.target.value)
      

        // console.log(personName)
  }
if([e.target.name] == "date"){

      setDate(e.target.value)
      

        // console.log(personName)
  }




   
   

// console.log(values);
  
}
 



return (
    <div className='App'>
    <div className="main-section">

      <div className="purple-part">
        <img src={Main} alt="" />
      </div>
      <div className="white-part">
        <Thank deleteform={deleteform}/>
        <form className={deleteform?'delete':'show'}  onSubmit={handleSubmit}>
        {inputs.map((input)=>(

        <FormInput  deleteform = {deleteform}  key ={input.id} {...input} valuee = {values[input.name]} onChange  ={onChange}/>
          
        ))}
        <button className={deleteform?'delete':'button'} onClick={() =>setDeleteform(!deleteform)}>Confirm</button>
        </form>
      </div>

    <Purple_cart personName = {personName} number = {number} date = {date}/>
    
    <Gray_cart/>
    </div>
    </div>
  );
}


export default App;
