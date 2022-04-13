import React, {useState, useRef} from 'react'
import { CSVLink, CSVDownload } from "react-csv";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const peopleContact = [
"Yadiel Mcknight",
"Edward Small",
"Madisyn Sims",
"Hayden Johnston",
"Camron Rodriguez",
"Jermaine Vasquez",
"Demetrius Avila",
"Gilberto Meza",
"Marely Stein",
"Alaina Stephenson",
"Osvaldo Alvarez",
"Ashly Trujillo",
"Zechariah Webb",
"Jaylyn Haney",
"Landin Holloway",
"Caroline Fuller",
"Cassidy Vance",
"Jovanny Hickman",
"Trinity Vance",
"Lamont Bray",
"Giovani Fernandez",
"Destiney Bright",
"Cheyenne Hill",
"Paxton Chan",
"Nikolai Mack",
"aston Santos",
"Isabella Buckley",
"Jaylen Carpenter",
"Hailee Key",
"Brenna Briggs",
"Celia Blackburn",
'Mohammed Parsons',
"Marin Molina",
    "Hallie Chandler",
"Ruby Warren",
"Virginia Thompson",
"Yadiel Mcknight",
"Edward Small",
"Madisyn Sims",
"Hayden Johnston",
"Camron Rodriguez",
"Jermaine Vasquez",
"Demetrius Avila",
"Gilberto Meza",
"Marely Stein",
"Alaina Stephenson",
"Osvaldo Alvarez",
"Ashly Trujillo",
"Zechariah Webb",
"Jaylyn Haney",
"Landin Holloway",
"Caroline Fuller",
"Cassidy Vance",
"Jovanny Hickman",
"Trinity Vance",
"Lamont Bray",
"Giovani Fernandez",
"Destiney Bright",
"Cheyenne Hill",
"Paxton Chan",
"Nikolai Mack",
"aston Santos",
"Isabella Buckley",
"Jaylen Carpenter",
"Hailee Key",
"Brenna Briggs",
"Celia Blackburn",
'Mohammed Parsons',
"Marin Molina",
    "Hallie Chandler",
"Ruby Warren",
"Virginia Thompson",
"Yadiel Mcknight",
"Edward Small",
"Madisyn Sims",
"Hayden Johnston",
"Camron Rodriguez",
"Jermaine Vasquez",
"Demetrius Avila",
"Gilberto Meza",
"Marely Stein",
"Alaina Stephenson",
"Osvaldo Alvarez",
"Ashly Trujillo",
"Zechariah Webb",
"Jaylyn Haney",
"Landin Holloway",
"Caroline Fuller",
"Cassidy Vance",
"Jovanny Hickman",
"Trinity Vance",
"Lamont Bray",
"Giovani Fernandez",
"Destiney Bright",
"Cheyenne Hill",
"Paxton Chan",
"Nikolai Mack",
"aston Santos",
"Isabella Buckley",
"Jaylen Carpenter",
"Hailee Key",
"Brenna Briggs",
"Celia Blackburn",
'Mohammed Parsons',
"Marin Molina",
]

 function Home() {
    const ref = useRef(null);
const [isOpen, setIsOpen] = useState(false);
const [isOpenCurrent, setIsOpenCurrent] = useState(true);
// const [checked, seChecked] = useState(false)
const [data, setData] = useState(peopleContact)
const [selected, setSelected] = useState([]);


const onClickHandlerCheckbox = (e) => {
    e.preventDefault()
setIsOpen(!isOpen)


}

const deleteAll = () => {
    setData([])
}

const checkItem = (index) => {

setSelected(
    [...selected,
    index]
)
}

const uncheck = index => {
    setSelected(selected.filter(item => item !== index))
}

const isCheckedAll = selected.length === data.length && data.length > 0

const checkAll = () => {
    if (isCheckedAll) setSelected([])
else setSelected(data.map((e, i) => i))
}




    return (
<div className="main--container">
 <div className="table--container">
     <table className="contact-list">
  <tr >
    <th><h1>Contacts</h1></th>
    <th className='icon-table-icons'>
        <div className="flex--container
        ">
            <div className="export">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20" height="20"> 
                <path d="M192 312C192 298.8 202.8 288 216 288H384V160H256c-17.67 0-32-14.33-32-32L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48v-128H216C202.8 336 192 325.3 192 312zM256 0v128h128L256 0zM568.1 295l-80-80c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L494.1 288H384v48h110.1l-39.03 39.03C450.3 379.7 448 385.8 448 392s2.344 12.28 7.031 16.97c9.375 9.375 24.56 9.375 33.94 0l80-80C578.3 319.6 578.3 304.4 568.1 295z" fill='#50C469'/>
                </svg>
                <CSVDownload data={peopleContact} target="_blank" />;
                </div>
        <div className="trash" onClick={deleteAll}>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20"><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z" fill='red'/></svg></div>
        </div></th>

    <th className='icon-table' >
        
        <label class="checkbox"  >
            <
            span class="checkbox__input">
            <input type="checkbox" name="checkbox" checked={isCheckedAll} onChange={checkAll}/>
            <span class="checkbox__control">
                <svg className={`${isOpen ? "show-tick" : "remove-tick"}`}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="3" d="M1.73 12.91l6.37 6.37L22.79 4.59"></path></svg></span></span></label>
    </th>
  
  </tr>
{data.map((item, indexed) => {
    const checked = selected.includes(indexed)
  return (
    
      <tr key={indexed } >
    <td>{item}</td>
    <td></td>
    <td className="icon-table">
        <label class="checkbox input-child" >
            <span class="checkbox__input " >
            <input type="checkbox" name="checkbox" checked={checked} onChange={(e) => {
            // onClickHandlerCurrent(e, indexed)
            if(checked) uncheck(indexed)
            else checkItem(indexed)
            // alert("click")
        }}  ref={ref}/>
            <span class="checkbox__control">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="3" d="M1.73 12.91l6.37 6.37L22.79 4.59"></path></svg></span></span></label>
    </td>
  </tr>
)
})}
 
</table>
 </div>
</div>
    )
}

export default Home