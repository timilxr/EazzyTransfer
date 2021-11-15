import React from "react";
import transaction_img from "../imgs/undraw_Annotation_re_h774 1.png"


const DashboardContent  = () => {
    
    
    return(
            <React.Fragment>
               <div className="dashboard_body">
                <img src={transaction_img} alt="" className="transaction_img"/>
                <h6 className="transaction_title">No transactions yet</h6>
                <h6 className="transaction_subtitle">After your first transaction you will be able to view it here</h6>
               </div>
            </React.Fragment>
    )
};
export default DashboardContent