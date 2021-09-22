import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import PassengerInput from "./PassengerInput";
import { useState } from "react";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { gql, useQuery, useLazyQuery, useMutation,useSubscription } from "@apollo/client";
import ListItem from "./ListItem";

const getData = gql`
    query MyQuery {
        anggota {
            id
            jenis_kelamin
            nama
            umur
        }
    }
`;
// {variables:{jenis_kelamin:{_eq:male}}}
// const get1=gql`
// query MyQuery($_eq: String = "") {
//   anggota(where: {jenis_kelamin: {_eq: $_eq}}) {
//     id
//     nama
//     umur
//   }
// }`
// // {variabless:{_eq:male}}

const getIns=gql`
    mutation MyMutation($jenis_kelamin: String = "", $umur: Int = 10, $nama: String = "") {
        insert_anggota_one(object: {jenis_kelamin: $jenis_kelamin, nama: $nama, umur: $umur}) {
            id
        }
    }`

const delIns=gql`
    mutation MyMutation($_name: String = "bar") {
        delete_anggota(where: {nama: {_eq: $_name}}) {
            returning {
                nama
            }
        }
    }`


const delID=gql`
    mutation MyMutation($id: Int!) {
        delete_anggota(where: {id: {_eq: $id}}) {
            returning {
                id
            }
        }
    }   
`

const IncUmur=gql`mutation MyMutation2($_eq: String = "") {
    update_anggota(where: {nama: {_eq: $_eq}}, _inc: {umur: 1}) {
        returning {
            nama
            umur
        }
    }
}`

const checkSubs=gql`
    subscription MySubscription {
        anggota {
            id
            jenis_kelamin
            nama
            umur
        }
    }

`


function Home() {
    // const { data, loading, error } = useQuery(getData);
    const {data, loading, error} = useSubscription(checkSubs)
    const [insertData, { data:dataInsert }] = useMutation(getIns);
    const [deleteData, { data:dataDelete }] = useMutation(delIns);
    const [addAge, { data:dataUmur }] = useMutation(IncUmur);
    const [deleteDataBYID, { data:dataDeleteID }] = useMutation(delID);

    const [list, setList] = useState([]);
    const [UserId, setUserId] = useState(0);
    const [title, setTitle] = useState("");
    const [umur, setUmur] = useState("");
    const [gen, setGen] = useState("");





    const onChangeTitle = (e) => {
        if (e.target) {
            setTitle(e.target.value);
        }
    };

    const onChangeUmur = (e) => {
        if (e.target) {
            setUmur(e.target.value);
        }
    };

    const onChangeGen = (e) => {
        if (e.target) {
            setGen(e.target.value);
        }

    };

    function handleSubmit(e) {
        e.preventDefault();
        insertData({variables:{
                    nama:title,
                    umur:umur,
                    jenis_kelamin:gen


                }}
            ,setGen("")
            ,setTitle("")
            ,setUmur("")
        )
    }

    const GetID = (e) => {
        if (e.target) {
            setUserId(e.target.value);
        }
    };

//   const getFalse = () => {
//     getTodo({
//       variables: {
//        jenis_kelamin:{_eq: 'male'}
//       },
//     });
//     // setList(data?.anggota);
//   };
    function getDelete(){
        deleteData({variables: {
                    _name:UserId
                }}
            ,setUserId("")
        )
    }

    const getDeleteByID = idIn => {
        // console.log(idIn)
        deleteDataBYID({variables: {
                    id:idIn
                }}
            ,setUserId("")
        )
    }

    function getTambah(){
        addAge({variables: {
                    _eq:UserId
                }}
            ,setUserId("")
        )

    }

    if (loading) {
        console.log("loading");
    }
    if (error) {
        console.log(error);
        return null;
    }
    return (
        <div>
            <Header />
            <input type="text" onChange={GetID} value={UserId} />
            <button onClick={getTambah}>tambah umur by name</button>
            {/* <button onClick={getFalse}>get false</button> */}
            <button onClick={getDelete}>Delete by name</button>
            {/* <button onClick={handleClick}>getData</button> */}
            <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
                <thead bgcolor="red">
                <td>Nama</td>
                <td>Umur</td>
                <td>Jenis Kelamin</td>
                <td bgcolor="white" className="removeBorder"></td>
                </thead>
                {/*{console.log(data)}*/}
                {data?.anggota.map((v) => (
                    <tr data-key={v.id}>
                        {/*<td>{id}</td>*/}
                        <td>{v.nama}</td>
                        <td>{v.umur}</td>
                        <td>{v.jenis_kelamin}</td>
                        <td className="removeBorder" onClick={() => getDeleteByID(v.id)}><button>Hapus</button></td>
                    </tr>
                ))}
            </table>
            <div onSubmit={handleSubmit}>
                <p>Masukkan Nama Anda</p>
                <input type="text" className="input-text" placeholder="Nama anda ..." value={title} onChange={onChangeTitle} name="nama"/>
                <p>Masukkan Umur Anda</p>
                <input type="number" className="input-text" placeholder="Umur anda ..." value={umur} onChange={onChangeUmur} name="umur" />
                <p>Masukkan jenis_kelamin</p>
                <input type="text" className="input-text" placeholder="jenis_kelamin anda ..." value={gen}  onChange={onChangeGen} name="jenis_kelamin" />

                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default Home;
