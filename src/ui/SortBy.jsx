import { useSearchParams } from "react-router-dom"
import { Select } from "./Select"

export const SortBy = ({options}) => {
    const[searchParams,setSearchParams]=useSearchParams()
    const sortBy=searchParams.get('sortBy')||''
    const handleChange=(e)=>{
        searchParams.set('sortBy',e.target.value)
        setSearchParams(searchParams)
    }
  return (
    <Select options={options} type='white' onChange={(e)=>handleChange(e)} value={sortBy}/>
  )
}
