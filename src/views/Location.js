import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import InputGroup from "../components/InputGroup";

const Location = () => {

  let [number, setNumber] = useState(1);
  const [info, setInfo] = useState([])
  const [results, setResults] = useState([])
  
  const { dimension, type, name } = info;
  let url = `https://rickandmortyapi.com/api/location/${number}`

  useEffect(() => {
    (async function () {
      let data = await fetch(url).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [url]);

  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-3">
          Location :
          <span className="text-primary">
            {" "}
            {name === "" ? "Unknown" : name}
          </span>
        </h1>
        <h5 className="text-center">
          Dimension: {dimension === "" ? "Unknown" : dimension}
        </h5>
        <h6 className="text-center">Type: {type === "" ? "Unknown" : type}</h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">Pick Location</h4>
          <InputGroup name="Location" changeId={setNumber} total={126} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Location;