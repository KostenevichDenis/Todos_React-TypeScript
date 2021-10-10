import React, { useRef } from 'react'

interface TodoFormProps {
    onAdd(title:string): void
}

const TodoForm = ({onAdd}: TodoFormProps):JSX.Element => {

/*     const [title, setTitle] = useState<string>('')
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    } */

    const ref = useRef<HTMLInputElement>(null)

    const keyPressHandler = (event:React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            onAdd(ref.current!.value)
            /* console.log(ref.current!.value) */
            ref.current!.value = ''
            /* setTitle('') */
        }
    }


    return (
        <div className="input-field mt2">
            <input 
                type="text" 
                id="title" 
                placeholder="Enter todo name"
                ref={ref}
                /* value={title}
                onChange={changeHandler} */
                onKeyPress={keyPressHandler}
            />
            <label htmlFor="title" className="active">Enter todo name</label>
        </div>
    )
}

export default TodoForm
