import "./Home.css"
const ListItem = ({umur,title,jenis_kelamin,id}) => {


    return (
        <tr data-key={id}>
            <td>{title}</td>
            <td>{umur}</td>
            <td>{jenis_kelamin}</td>
            {/* <td className="removeBorder" onClick={() => props.hapusPengunjung(id)}><button>Hapus</button></td> */}
        </tr>
    )
}

export default ListItem;