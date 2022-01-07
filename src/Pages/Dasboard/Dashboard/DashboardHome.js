import React, { useState } from 'react';
import Chart from 'react-apexcharts'

const DashboardHome = () => {
  const [state, setState] = useState({
    options: {
      colors: ["#E91E63", "#FF9800"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008],
      },
    },
    series: [
      {
        name: "Total Sale Till  Now",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "Status : Good",
        data: [3, 60, 35, 80, 49, 70, 20, 81],
      },
    ],
  });
  return(
        <>
    
    <h1>
        Total Sale Status <i className="fas fa-user"></i>{" "}
      </h1>
      <div className="row d-flex ">
     
        <div className="col-lg-6 border shadow-lg mb-5">
          <Chart
            options={state.options}
            series={state.series}
            type="area"
          />
        </div><br/>
        <div className="col-lg-6 border shadow-lg mb-5">
          <Chart
            options={state.options}
            series={state.series}
            type="radar"
          />
        </div><br/>
        <div class="col s12 m6 l8">
         <div class="card subscriber-list-card animate fadeRight">
            <div class="card-content pb-1">
               <h4 class="card-title mb-0">Subscriber List <i class="material-icons float-right">more_vert</i></h4>
            </div>
            <table class="subscription-table responsive-table highlight">
               <thead>
                  <tr>
                     <th>Name</th>
                     <th>Company</th>
                     <th>Start Date</th>
                     <th>Status</th>
                     <th>Amount</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Michael Austin</td>
                     <td>ABC Fintech LTD.</td>
                     <td>Jan 1,2019</td>
                     <td><span class="badge pink lighten-5 pink-text text-accent-2">Close</span></td>
                     <td>$ 1000.00</td>
                     <td class="center-align"><a href="#"><i class="material-icons pink-text">clear</i></a></td>
                  </tr>
                  <tr>
                     <td>Aldin Rakić</td>
                     <td>ACME Pvt LTD.</td>
                     <td>Jan 10,2019</td>
                     <td><span class="badge green lighten-5 green-text text-accent-4">Open</span></td>
                     <td>$ 3000.00</td>
                     <td class="center-align"><a href="#"><i class="material-icons pink-text">clear</i></a></td>
                  </tr>
                  <tr>
                     <td>İris Yılmaz</td>
                     <td>Collboy Tech LTD.</td>
                     <td>Jan 12,2019</td>
                     <td><span class="badge green lighten-5 green-text text-accent-4">Open</span></td>
                     <td>$ 2000.00</td>
                     <td class="center-align"><a href="#"><i class="material-icons pink-text">clear</i></a></td>
                  </tr>
                  <tr>
                     <td>Lidia Livescu</td>
                     <td>My Fintech LTD.</td>
                     <td>Jan 14,2019</td>
                     <td><span class="badge pink lighten-5 pink-text text-accent-2">Close</span></td>
                     <td>$ 1100.00</td>
                     <td class="center-align"><a href="#"><i class="material-icons pink-text">clear</i></a></td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
       
       
       
      </div>

        </>
    
  )  
};

export default DashboardHome;





