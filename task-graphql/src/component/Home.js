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
        anggota {
            id
            jenis_kelamin
            nama
            umur
        }
    }
`

const GetByID = gql `
    query MyQuery($id: Int) {
        anggota(where: {id: {_eq: $id}}) {
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
    const [id_anggota,setIDAnggota] = useState(0)

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

    const onGetData = e => {
        getData({variables:{
            id:id_anggota
            }})
        setIDAnggota(data?.kampus_merdeka_anggota)
}

    return (
        <div>
            {/*{(console.log(testGQL()))}*/}
            <Header/>
            <input value={id_anggota} onChange={onChangeIDAnggota}/>
            <button onClick={onGetData}>GETBYID</button>
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