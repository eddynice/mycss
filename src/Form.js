import React,{useState} from 'react'

export default function Form() {
    const [name, setname] = useState('')
    return (
        <div>
            <form>
                <input type="text" value="name" placeholder=" enter text"/>
                    <button type="submit">Submit</button>
            </form>
        </div>
    )
}
