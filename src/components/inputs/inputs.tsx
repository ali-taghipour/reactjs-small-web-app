type propertes = {
  rows: number,
  columns: number,
  setRows: any,
  setColumns: any
}

const Inputs: React.FC<propertes> = (props) => {

  return (
    <div className="form">
    <div className="form-data">
      <label htmlFor="nRowsInput" style={{display:"block"}}>ROWS</label>
      <input id="nRowsInput" type="text" value={props.rows} onChange={(event) => props.setRows(+event.target.value)} />
    </div>
    <div className="form-data">
      <label htmlFor="nColumnsInput" style={{display:"block"}}>COLUMNS</label>
      <input id="nColumnsInput" type="text" value={props.columns} onChange={(event) => props.setColumns(+event.target.value)} />
    </div>
  </div>
  )
  
}

export default Inputs;