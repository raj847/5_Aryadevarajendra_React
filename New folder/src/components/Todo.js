import {useState } from 'react'
import { gql, useQuery, useLazyQuery , useMutation} from '@apollo/client';

export default function Todo(
  
  // props //props digunakan jika ingin melakuka destructuring di dalam function
  
  {
  id,
  title,
  checked,
  onClickItem,
  onDeleteItem,
}

) 

{
  //desctructuring 
  // const {
  //     id,
  //     title,
  //     checked,
  //     onClickItem,
  //     onDeleteItem,
  //   } = props
  
  // pembuatan variable manual
    // const id = props.id
    // const title = props.title
    // const checked = props.checked
    // const onClickItem = props.onClickItem
    // const onDeleteItem = props.onDeleteItem

    const GetTodo = gql`
    query MyQuery {
      todolist {
        is_done
        id
        title
      }
    }
  `;
    const InserTitle = gql`
    mutation MyMutation($title: String!, $id: Int!) {
      update_todolist(where: {id: {_eq: $id}}, _set: {title: $title}) {
        affected_rows
      }
    }    
    `

const [TitleStatus, setTitleStatus] = useState(false)
const [TitleBaru, setTitleBaru] = useState('')
    const clickTitle = () => {
      return setTitleStatus(!TitleStatus)
    }
    const SubmitTitle = () => {
      // alert(id+"+"+ title)
      inserTitleFunction({variables :{
          title : TitleBaru,
          id : id
      }})
      // console.log(id,"+",title)
    }
    const onEditTitle = (e) =>{
      setTitleBaru(e.target.value)
      console.log("TitleBaru = ", TitleBaru)

    }


    const [inserTitleFunction, {loading:loadingInsert}] = useMutation(InserTitle, {
      refetchQueries: [GetTodo]
    })

  return (
    <li className={checked ? 'done todo-item' : 'todo-item'} data-key={id}>
      <input onChange={onClickItem} id={id} type="checkbox" />
      <label htmlFor={id} className="tick js-tick"></label>
      <span onClick={clickTitle}>{title}</span>
      {TitleStatus ? <form onSubmit={SubmitTitle}><input onChange={onEditTitle} placeholder={title}/> </form> : ""}
      <button onClick={onDeleteItem} className="delete-todo js-delete-todo">
        <svg>
          <use href="#delete-icon"></use>
        </svg>
      </button>
    </li>
  );
}
