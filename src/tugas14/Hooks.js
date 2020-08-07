import React, {useState, useEffect} from "react"
import axios from "axios"


const Hooks = () => {

    const [daftarBuah, setDaftarBuah] = useState(null)
    const [inputNama, setInputNama] = useState("")
    const [inputHarga, setInputHarga] = useState("")
    const [inputBerat, setInputBerat] = useState("")
    const [indexOfForm, setIndexOfForm] = useState(-1)

    useEffect( () => {
      if(daftarBuah === null){
      axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
      .then(res => {
        console.log("masuk")
        setDaftarBuah(res.data.map(el => {return {id:el.id, nama:el.nama, harga:el.harga, berat:el.berat}}))
      })
    }
    }, [daftarBuah]) 
     
  } 

  const handleEdit = (event) => {
    let idBuah = parseInt(event.target.value)
    let buah = daftarBuah.find(x => x.id === idBuah)
    console.log(buah)
    setInputNama(buah.nama)
    setInputHarga(buah.harga)
    setInputBerat(buah.berat)
    setID_FRUIT(idBuah)
    setStatusForm('edit')
  }

  const handleChangeNama = (event) => {
    setInputNama(event.target.value)
  }

  const handleChangeHarga = (event) => {
    setInputNama(event.target.value)
  }

  const handleChangeBerat = (event) => {
    setInputNama(event.target.value)
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
   
    let nama=inputNama
    let harga=inputHarga
    let berat=inputBerat

    if (nama.replace(/\s/g,'') !== "" && harga.replace(/\s/g,'') !== "" && berat.replace(/\s/g,'') !== ""){
      if (statusForm === "create"){
        axios.post(`http://backendexample.sanbercloud.com/api/fruits` , {nama,harga,berat})
        .then(res => {
          console.log(res)
            setDaftarBuah([...daftarBuah, {id: res.data.id, nama: nama, harga: harga, berat: berat}])
        })
      }else if(statusForm === "edit"){
        axios.put(`http://backendexample.sanbercloud.com/api/fruits/${selectedId}`, {nama,harga,berat})
        .then(res => {
          console.log(res)
          let daftarBuah = daftarBuah.find(el=> el.id === selectedId)
          daftarBuah.nama = nama
          setDaftarBuah([...daftarBuah])
        })
      }

      setStatusForm("create")
      setSelectedId(0)
      setInputNama: ("")
      setInputHarga: ("")
      setInputBerat: ("")
    
  }

  const handleDelete = (event) => {
    let idBuah = parseInt(event.target.value)
    let newDaftarBuah = daftarBuah.filter(el => el.id !== idBuah)

    axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
    .then(res => {
      console.log(res)
    })
    setDaftarBuah([...newDaftarBuah])
  }
    return(
      
      <div className="App">
      <div class="tabel">
        <h1>Tabel Harga Buah</h1>

        <table class="tabel1">
        <div class="tbuah">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <div class="tabel2">
          <tbody>
              {
                daftarBuah != null && daftarBuah.map((buah)=>{
                  return(                    
                    <tr>
                      <td>{buah.nama}</td>
                      <td>{buah.harga}</td>
                      <td>{buah.berat}</td>
                      <td>
                        <button onClick={handleEdit} value={index}>Edit</button>
                        &nbsp;
                        <button onClick={handleDelete} value={index}>Delete</button>
                      </td>
                    </tr>
                  )
                })
              }
          </tbody>
          </div>
        </div>
        </table>
        </div>
    
        {/* Form */}
        <h1>Form Buah</h1>
        <div class='form'>
        <form onSubmit={handleSubmit}>
          <label>
            <b>Nama Buah:</b>
          </label>
          <br/>         
          <input type="text" name="nama" value={inputName} onChange={handleChangeNama}/>
          <br />
          <label>
          <b>Harga Buah:</b>
          </label>  
          <br/>        
          <input type="text" name="harga" value={inputHarga} onChange={handleChangeHarga}/>
          <br />
          <label>
            <b>Berat Buah:</b>
          </label>   
          <br/>       
          <input type="text" name="berat" value={inputBerat} onChange={handleChangeBerat}/>
          <br />
          <button>Submit</button>
        </form>
        </div>
        </div>
      
    )
      }


export default Hooks