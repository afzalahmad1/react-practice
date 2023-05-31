import React,{ useState} from 'react'


function PhoneBook(){

    const [name,setName] = useState("");
    const [contact,setContact] = useState("");
    let arr = []


    function detailsSave(){
        arr.push({name,contact});
        console.log(arr);
    }


    return(
        <div>
            <h1>Phone Book</h1>

            <input  type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder='Enter Name'/>
            <span>Enter Name</span>
            <br />


            <input  type="text"
            value={contact}
            onChange={(e)=>setContact(e.target.value)}
            placeholder='Enter contact'/>
            <span>Enter the 10 digit Phone no</span>

            <br /><br/>

            <button onClick={detailsSave}>Add Contact</button>
            {arr.length ==0 ? arr.map((item)=>{
                return(
                    <ul>
                        <li>{item.name}</li>
                    </ul>
                )
            }) : ""}
        </div>
    )
}
export default PhoneBook;