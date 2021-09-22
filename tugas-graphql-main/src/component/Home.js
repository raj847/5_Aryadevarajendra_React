import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import {gql,useQuery,useLazyQuery} from "@apollo/client";
import LoadingSVG from "./LoadingSVG";


const initialValue = [
    {
        id: uuidv4(),
        nama: 'Yoga',
        umur: 22,
        jenisKelamin: 'Pria'
    },
    {
        id: uuidv4(),
        nama: 'Ria',
        umur: 19,
        jenisKelamin: 'Wanita'
    },
    {
        id: uuidv4(),
        nama: 'Fahmi',
        umur: 25,
        jenisKelamin: 'Pria'
    },
    {
        id: uuidv4(),
        nama: 'Lala',
        umur: 21,
        jenisKelamin: 'Wanita'
    },
    {
        id: uuidv4(),
        nama: 'Ivan',
        umur: 25,
        jenisKelamin: 'Pria'
    }
]



const GetAnggota = gql`
    query MyQuery {
        kampus_merdeka_anggota {
            id
            jenis_kelamin
            nama
            umur
        }
    }
`

const GetByID = gql `
    query MyQuery($id: Int) {
        kampus_merdeka_anggota(where: {id: {_eq: $id}}) {
            id
            jenis_kelamin
            nama
            umur
        }
    }
`

const GetByjenis_kelamin = gql`
    query MyQuery($jenis_kelamin: String) {
        kampus_merdeka_anggota(where: {jenis_kelamin: {_eq: $jenis_kelamin}}) {
            id
            jenis_kelamin
            nama
            umur
        }
    }

`



function Home() {
    const [dataLocal,setData] = useState(initialValue);
    const [getData,{data,loading,error}] = useLazyQuery(GetByID)
    const [getDatajenis_kelamin,{datajenis_kelamin}] = useLazyQuery(GetByjenis_kelamin)
    const [id_anggota,setIDAnggota] = useState(0)
    const [jenisjenis_kelamin,setJenisjenis_kelamin] = useState("")
    const [radioState,setRadioState] = useState(false)
    if (error) {
        console.log(error)
        return null
    }

    if (loading) {
        <LoadingSVG/>
    }



    const hapusPengunjung = id => {
         setData((oldData) => oldData.filter(item => {
             return item.id !== id;
            })
         )
    };
    
    const tambahPengunjung = newUser => {
        const newData = {
            id: uuidv4(),
            ...newUser
        }; 
        setData((oldData) => [...oldData, newData])
    };
    
    // const testGQL = () => {
    //     console.log("test",data)
    //     let gqlData
    //     setTimeout(function () {
    //         gqlData = data
    //     },2000)
    //
    //     return gqlData
    // }


    const onChangeIDAnggota = e => {
        if (e.target) {
            setIDAnggota(e.target.value)
        }
    }

    const onChangejenis_kelamin = e => {
        if (e.target) {
            setJenisjenis_kelamin(e.target.value)
        }
    }


    const onGetData = e => {
        console.log(id_anggota)
        getData({variables:{
            id:id_anggota
            }})
        setIDAnggota(data?.kampus_merdeka_anggota)
    }

    const onGetDatajenis_kelamin = e => {
        getDatajenis_kelamin({variables:{
            jenis_kelamin:"laki-laki"
            }})
        setJenisjenis_kelamin(datajenis_kelamin?.kampus_merdeka_anggota)
        // console.log(datajenis_kelamin)
    }

    const handleChange=(e)=>{
        setRadioState(e.target.value);
        console.log(e.target.value);
    }

    return (
        <div>
            {/*{(console.log(testGQL()))}*/}
            <Header/>
            <input type="radio" value={true} id="id-anggota"
                   onChange={handleChange} name="pilih" />
            <label htmlFor="id-anggota">anggota</label>
            <input type="radio" value={false} id="jenis_kelamin-via"
                   onChange={handleChange} name="pilih" />
            <label htmlFor="jenis_kelamin-via">jenis_kelamin</label>

            <input value={id_anggota} onChange={onChangeIDAnggota}/>
            <button onClick={onGetData}>GETBYID</button>

            <input value={jenisjenis_kelamin} onChange={onChangejenis_kelamin}/>
            <button onClick={onGetDatajenis_kelamin}>GETBYjenis_kelamin</button>
            <p>{jenisjenis_kelamin}</p>
            {/*{console.log(radioState?data:datajenis_kelamin)}*/}
            {/*{console.log(jenisjenis_kelamin)}*/}
            <ListPassenger
                data={data}
                hapusPengunjung={hapusPengunjung}
            />
            <PassengerInput
                tambahPengunjung={tambahPengunjung}
            />
        </div>
    )

}

export default Home;