import "./Home.css"
const ListItem = (props) => {

    const { id, title, umur, jenis_kelamin } = props.data

    return (
        <tr data-key={props.data.id}>
            {/*<td>{id}</td>*/}
            <td>{props.title}</td>
            <td>{props.umur}</td>
            <td>{props.jenis_kelamin}</td>
             <td className="removeBorder" onClick={() => props.hapusPengunjung(props.data.id)}><button>Hapus</button></td>
        </tr>
    )
}

export default ListItem;
