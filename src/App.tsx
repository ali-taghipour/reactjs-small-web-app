import { useEffect, useState } from "react";

import Inputs from "./components/inputs";
import Arrows from "./components/arrows";

import "./App.css";

function App() {
  const [rows,setRows] = useState<number>(0);
  const [columns,setColumns] = useState<number>(0);

  const [elements,setElements] = useState<any>();

  const [xPosition,setXPosition] = useState<number>(0);
  const [yPosition,setYPosition] = useState<number>(0);

  const [triggerButton,setTriggerButton] = useState<boolean>(false);
  

  useEffect(() => {
    
    /** validation */
    if(isNaN(rows)){
      throw Error("please enter the numbers of rows in valid format")
    }
    if(isNaN(columns)){
      throw Error("please enter the numbers of columns in valid format")
    }

    /** creating dynamic table elements */
    const arr = [];
    let i:number,j:number;
    for(i = 0;i < rows;i++){
      const arr2 = [];
      for(j = 0;j < columns;j++){
        let className:string = "";
        if(yPosition === i && xPosition === j && triggerButton){
          className = "selected";
        }
        const tableColumns = <td key={j} className={className}></td>;
        arr2.push(tableColumns);
      }
      const tableRow = <tr key={i}>{arr2}</tr>;
      arr.push(tableRow);
    }
    setElements(<tbody>{arr}</tbody>);
  },[rows,columns,xPosition,yPosition,triggerButton])



  return (
    <div className="App">
      <Inputs rows={rows} setRows={setRows} columns={columns} setColumns={setColumns} />
      <Arrows rows={rows} columns={columns} xPosition={xPosition} yPosition={yPosition} setXPosition={setXPosition} setYPosition={setYPosition} setTriggerButton={setTriggerButton }/>
      <div>
        <table>
            {elements}
        </table>
      </div>
    </div>
  );
}

export default App;
