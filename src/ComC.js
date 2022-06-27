import React from "react";

import { ContextApi ,LastName} from "./App";
const ComC = () => {
  return (
    <>
      <ContextApi.Consumer>
        {(data) => {
          return (<LastName.Consumer>
            {(data1)=>{return (<h1> Hii My code {data} is {data1}</h1>)}}
          </LastName.Consumer>)
        }}
      </ContextApi.Consumer>
    </>
  );
};

export default ComC;
