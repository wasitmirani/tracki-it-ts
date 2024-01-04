import React, { useEffect, useState } from 'react';
import { StatusItemComponent } from './StatusItemComponent';

export const HistoryComponent: React.FC<any> = (props) => {
    console.log("props", props.data);
    const [order_data,setOrderData] = useState<any>(props.data.order);
    const [order_history,setOrderHistory] = useState<any>(props.data.order_history.slice().reverse());
    const sub_total = order_data.line_items.reduce((accumulator:any, item:any) => accumulator + (item.price * item.quantity), 0);
    const checkStatus = (status: string) => {

        const statusArray = ["draft", "pick", "pack", "ship", "in_transit", "delivered"];
        const index = statusArray.indexOf(status.replace(/"/g, ''));
        if (index !== -1) {
            return true;
        } else {
            return false;
        }
        
    }
     // useEffect to update state when props.data changes
        useEffect(() => {
            // Update orderData and orderHistory when props.data changes
            setOrderData(props.data.order);
            setOrderHistory(props.data.order_history.slice().reverse());
        }, [props.data]); // Only re-run the effect if props.data changes
    return (
        <div className="tab-content" id="pills-tabContent">

            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div className="row">

                    <div className="col-lg-12">

                        <div id="tracking">
                            <div className="tracking-list">
                                <div className="row">

                                    <div className="col-lg-6">

                                
                                        {order_history.map((item: any, index: any) => (

                                            checkStatus(item.new_value) &&
                                            <StatusItemComponent
                                                key={index}
                                                item={item}
                                                active={index === order_history.length - 1 ? "status-active" : " status-complete"}
                                            />
                                        ))}




                                    </div>


                                    {/* Order Summary */}
                                    <div className="col-lg-6 col-sm-12 trac-sec table-responsive">
                                        <div className="summary-box">
                                            <h3 className="summary-title">Order Summary</h3>
                                            <p className="divider-new"></p>
                                            <p className="Summary-content2">
                                                <b>Order No: </b>{order_data.reference_number}<br />
                                                <b>Name: </b>{order_data?.billing_address?.first_name + " " + order_data?.billing_address?.last_name}  <br />

                                                <b> Billing City: </b> {order_data?.billing_address?.city} <br />

                                                <b> Courier: </b> Rider <br />
                                                <b> Tracking Number: </b> {order_data?.tracking_number}</p> <br />

                                            <table className="table table-condensed table-striped">
                                                <thead>
                                                    <tr>
                                                        <td className="text-left"><strong></strong></td>
                                                        <td className="text-left"><strong>Item</strong></td>

                                                        <td className="text-right"><strong>Price</strong></td>

                                                        <td className="text-right"><strong>Qty</strong></td>

                                                        <td className="text-center"><strong>Total</strong></td>
                                                    </tr>
                                                </thead>
                                                <tbody>



                                                    {order_data.line_items.map((item: any, index: any) => (
                                                        <tr key={index}>
                                                            <td className="text-right">{/* Add your content here if needed */}</td>
                                                            <td className="text-right">{item.variant.name}</td>
                                                            <td className="text-right">{item.price}</td>
                                                            <td className="text-right">{item.quantity}</td>
                                                            <td className="text-right">{(item.price * item.quantity).toFixed(2)}</td>
                                                        </tr>
                                                    ))}
                                                    <tr>
                                                    <td className="no-line"></td>
                                                    <td className="no-line"></td>
                                                    <td className="no-line"></td>
                                                    <td className="no-line text-center"><strong>Subtotal: </strong></td>
                                                    <td className="no-line text-right"> { sub_total}</td>
                                                    </tr>
                                                    <tr>
                                                    <td className="no-line"></td>
                                                    <td className="no-line"></td>
                                                    <td className="no-line"></td>
                                                    <td className="no-line text-center"><strong>Shipping Charges: </strong></td>
                                                    <td className="no-line text-right"> { order_data.shipping_fee}</td>
                                                    </tr>
                                                    <tr>
                                                    <td className="no-line"></td>
                                                    <td className="no-line"></td>
                                                    <td className="no-line"></td>
                                                    <td className="no-line text-center"><strong>Discount:	 </strong></td>
                                                    <td className="no-line text-right"> { order_data.order_discount}</td>
                                                    </tr>
                                                    <tr>
                                                    <td className="no-line"></td>
                                                    <td className="no-line"></td>
                                                    <td className="no-line"></td>
                                                    <td className="no-line text-center"><strong>Total: </strong></td>
                                                    <td className="no-line text-right"> { order_data.total_price}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">


                <h2 className="header">No history found for this phone number</h2>

                {/* <table className="table table-hover">
                    <thead>
                        <tr>
                            <tr>
                                <th scope="col">Order Reference Number</th>
                                <th scope="col">Order Date</th>
                                <th scope="col">Order Courier</th>
                                <th scope="col">Order Tracking Number</th>
                                <th scope="col">Order Amount</th>

                            </tr>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table> */}
            </div>
        </div>
    );
}