import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import DefaultLayout from "../../Components/DefaultLayout";
import Template1 from "./Template1";
import Template2 from "./Template2";
import { Button } from "antd";
function Templates() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const params = useParams();
  const navigate = useNavigate()
  const gettemplate = () => {
    switch (params.id) {
      case "1": {
        return <Template1 />;
      }
      case "2": {
        return <Template2 />;
      }
    }
  };
  return (
    <DefaultLayout>
    
      <div className="d-flex justify-content-end my-5 mx-5">
        <Button className="back-btn" onClick={()=>navigate('/home')}>Back</Button>
        <Button className="mx-5" onClick={handlePrint}>Print</Button>
      </div>
      <div ref={componentRef}>{gettemplate()}</div>
    </DefaultLayout>
  );
}

export default Templates;