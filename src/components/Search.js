import React, { useState } from 'react'

const Search = ({cities}) => {
    const [filteredCities, setFilteredCities] = useState([])
    const [searchTerm, setSearchTerm] = useState('') 
    function filterCities(search){
        if(search=='') return
        setFilteredCities(cities.filter(el=>el.toLowerCase().includes(search.toLowerCase())))
    }
    function handleChange(e){
        filterCities(e.target.value)
        setSearchTerm(e.target.value)
    }
    function handleClick(listText){
        setSearchTerm(listText)
        setFilteredCities([])
    }
  return (
    <div style={{
        display:"flex",
        flexDirection:"column"
    }} >
        <input value={searchTerm} type="text" onChange={handleChange} />
        <ul style={{
            listStyle:"none",
            display:"flex",
            flexDirection:"column",
            gap:"5px",
            padding:"0"
        }} >
            {
                filteredCities.map(el=>{
                    return(
                        <li style={{backgroundColor:"lightgrey"}} 
                        onClick={e=>handleClick(e.target.innerText)}
                        >{el}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Search