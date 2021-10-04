import {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


const GifExpertApp = () => {

   // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Evangelion'])

    // const handleAdd = ()=>{
    //     setCategories([...categories, 'HunterXHunter']) //operador spread
    // }

    return (
        <div style={{
            textAlign:"center"
            }}>
        <h2>Gif Expert App</h2>  
        <AddCategory setCategories={setCategories}/>
        <hr />


        {/* {
            categories.map( category => {
                return <li key={category}>{category}</li> //No se recomienda usar index es mejor usar un id
            })
        } */}

{
            categories.map( category =>( 
                <GifGrid 
                    key = {category}
                    category={category}
                />))
        }
        </div>
    )
}

export default GifExpertApp
