import React from "react";
import { useSelector } from "react-redux";


function Alert() {
    const alerts = useSelector(state => state.alert)
    const alertHandler = () =>
      alerts !== null && alerts.length>0 ? (
        alerts.map((alert) => (
          <div key={alert.id} className={`alert alert--${alert.alertType}`}>
            {alert.msg}
          </div>
        ))):null
    
    return (
      <>
        {alertHandler()}
      </>
    );
}
export default Alert
