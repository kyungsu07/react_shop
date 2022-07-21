import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
  let { id } = useParams();
  id = Number(id);
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);

  useEffect(() => {
      let a = setTimeout(()=>{setAlert(false)},2000)
      console.log("test2");
      return()=>{
        console.log('test1')
        clearTimeout(a)
      }
  });

  return (
    <div className="list_con">
      {alert == true ? (
        <div className="alert alert-warning" onClick={()=>{setAlert(false)}}>
          2초 이내로 클릭하지 않으면 몰
        </div>
      ) : null}
      <p>{count}</p>
      <button
        onClick={() => {setCount(count + 1);}}>버튼</button>
      <p>{props.shoes[id].title}</p>
      <img src={`${process.env.PUBLIC_URL}/img/product0${id + 1}.jpg`} />
      <p>{props.shoes[id].price}</p>
    </div>
  );
}

export default Detail;
