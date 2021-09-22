import ListItem from './ListItem';


const ListPassenger = props => {

    return (
        <div>
            {/*{console.log("test",data)}*/}
            <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
                <thead bgcolor="red">
                    <td>Nama</td>
                    <td>Umur</td>
                    <td>Jenis Kelamin</td>
                    <td bgcolor="white" className="removeBorder"></td>
                </thead>
                {/*{console.log(props.data)}*/}
                {
                    props.data?.kampus_merdeka_anggota.map((item,index) => (
                    <ListItem
                        key={item.id}
                        data={item}
                        hapusPengunjung={props.hapusPengunjung}
                    />
                ))

                }
            </table>
        </div>
    )
  }

export default ListPassenger;