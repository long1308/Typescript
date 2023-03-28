
import Square from "./square"

const board = ({cells, onClick}) => {
  return <div className="grid grid-cols-3 gap-2">
    {cells.map((item, index) => <Square key={index} value={item} onClick={() =>onClick(index)}/>)}
  </div>
}

export default board