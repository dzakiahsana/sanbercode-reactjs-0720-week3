import React from 'react';


const Table = () => {
  const buahan = [
    {nama: "Semangka", harga: 10000, berat: "1 kg"},
    {nama: "Anggur", harga: 40000, berat: "0.5 kg"},
    {nama: "Strawberry", harga: 30000, berat: "0.4 kg"},
    {nama: "Jeruk", harga: 30000, berat: "1 kg"},
    {nama: "Mangga", harga: 30000, berat: "0.5 kg"},
  ]

  const renderBuah = (buah, index) => {
    return(
      <tr key={index}>
        <td>{buah.nama}</td>
        <td>{buah.harga}</td>
        <td>{buah.berat}</td>
      </tr>
    )
  }

  return (
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
          </tr>  
        </thead>  
        <div class="tabel2">
        <tbody>
          {buahan.map(renderBuah)}
        </tbody>
        </div>
        </div>
      </table>
      </div>
    </div>
    
  );
}



export default Table;