/* eslint-disable react-hooks/rules-of-hooks */

// import { useState } from "react";

const square = ({value, onClick}) => {
  // const [value,setValue] = useState(null);
  return <button onClick={onClick} className="w-[50px] h-[50px] bg-[#14bdac] text-3xl text-red-300 square ">{value}</button>
}

export default square 