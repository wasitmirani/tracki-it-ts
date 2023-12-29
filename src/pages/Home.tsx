import React, { useEffect, useState } from 'react';
import { HistoryComponent } from '../components/HistoryComponent';
import axios from 'axios';


export const Home: React.FC = () => {
    const rowStyle = {
        justifyContent: 'center',
    };
    const [order, setOrder] = useState<any>(null); // Replace 'any' with the actual type of your order data
    const company_guid = "30741123-4b0d-4c5d-bd7a-721d7de8f3ce";
    const host_url="https://dashboard-api-dev.storfox.com/v1";
    const [order_number, setOrderNumber] = useState<string>('');
    const [is_error,setIsError] = useState<boolean> (false);
    const [is_loading,setIsLoading] = useState<boolean> (false);

    const handleTrackOrder = (event: React.FormEvent) => {
        event.preventDefault();
        const order_number_WithoutTag =encodeURIComponent(order_number);
        setIsLoading(true);

        // Make your API call here using the entered order number and phone number
        axios.get(`${host_url}/company/${company_guid}/order/${order_number_WithoutTag}`)
          .then((res) => {
            // Handle the response data as needed
         
            setIsError(false);
        
            setOrder(res.data.result)
            setIsLoading(false);
          })
          .catch((error) => {
            // Handle errors
            setIsError(true);
            console.error(error);
            setIsLoading(false);
          });
      };
    return (
        <div className="container tracker-container">
            {/* style="justify-content: center" */}
            <div className="row" style={rowStyle}>
                <div className="col-sm-8">
                    <form onSubmit={handleTrackOrder}>
                        <div className="row">
                            <div className="col-sm-12">
                                <h3 className="tracker-heading text-center">Track Your Order</h3>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-7">
                                <div className="form-group">
                                    <input type="text" className="form-control" 
                                     value={order_number}
                                     onChange={(e) => setOrderNumber(e.target.value)}
                                    id="order_id" name="order_no"

                                        placeholder="Please enter your order number here" required />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-3">
                                <button type="submit" className="trck_btn w-100">Track</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


            <div className="row mt-5">
                <div className="col-sm-12">
                 
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    
                    </ul>
                    {is_loading  &&
                        <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                            </div>
                    </div>
                    }

                    {!is_error && order && <HistoryComponent data={order} />}
                    {
                        is_error && (
                            // JSX or component to render when is_error is true
                            <div className="alert alert-danger" role="alert">
                                Order is not found
                            </div>
                            // Replace the above line with your actual JSX or component
                        )
                        
                    }

                </div>
            </div>
        </div>
    )
}

