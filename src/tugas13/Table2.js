import React, {Component} from "react"


class Table2 extends Component{

  constructor(props){
    super(props)
    this.state = {
     daftarBuah : [
        {nama: "Semangka", harga: 10000, berat: "1 kg"},
        {nama: "Anggur", harga: 40000, berat: "0.5 kg"},
        {nama: "Strawberry", harga: 30000, berat: "0.4 kg"},
        {nama: "Jeruk", harga: 30000, berat: "1 kg"},
        {nama: "Mangga", harga: 30000, berat: "0.5 kg"},
      ],
     
                    
     inputName : "", 
     inputHarga : "",
     inputBerat : "", 
     indexOfForm: -1

    }


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    /* this.handleDelete = this.handleDelete.bind(this); */
  } 

  handleEdit(event){
    let index = event.target.value
    let buahan = this.state.daftarBuah.find(daftarBuah => daftarBuah === index)
    this.setState({inputName: buahan, indexOfForm: index})
    
  }

  handleChange(event){
    this.setState({inputName: event.target.value, inputHarga: event.target.value, inputBerat: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault()
    /* let newDaftarBuah = this.state.daftarBuah
    let index = this.state.indexOfForm

    if (index === -1){  
      newDaftarBuah = [...newDaftarBuah, this.state.inputName]
    }else{
      newDaftarBuah[index] = this.state.inputName
    }
    newDaftarBuah[this.state.indexOfForm] = this.state.inputName, this.state.inputHarga, this.state.inputBerat */
    console.log(this.state.inputName)
    console.log(this.state.inputHarga)
    console.log(this.state.inputBerat)
    
    this.setState({
      /* daftarBuah: newDaftarBuah, */
      daftarBuah: [...this.state.daftarBuah, {nama: this.state.inputName, harga: this.state.inputHarga, berat: this.state.inputBerat,}],
      
      inputName: "",
      inputHarga: "",
      inputBerat: "",
    })
  }

  render(){
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
                this.state.daftarBuah.map ((buah)=>{
                  return(                    
                    <tr>
                      <td>{buah.nama}</td>
                      <td>{buah.harga}</td>
                      <td>{buah.berat}</td>
                      <td>
                        <button onClick={this.handleEdit} value={this.state.index}>Edit</button>
                        &nbsp;
                        <button onClick={this.handleDelete} value={this.state.index}>Delete</button>
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
        <form onSubmit={this.handleSubmit}>
          <label>
            <b>Nama Buah:</b>
          </label>
          <br/>         
          <input type="text" value={this.state.inputName} onChange={this.handleChange}/>
          <br />
          <label>
          <b>Harga Buah:</b>
          </label>  
          <br/>        
          <input type="text" value={this.state.inputHarga} onChange={this.handleChange}/>
          <br />
          <label>
            <b>Berat Buah:</b>
          </label>   
          <br/>       
          <input type="text" value={this.state.inputBerat} onChange={this.handleChange}/>
          <br />
          <button>submit</button>
        </form>
        </div>
        </div>
      
    )
  }
}

export default Table2