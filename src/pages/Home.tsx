import React from 'react';

export const Home: React.FC = ()=>{
    const rowStyle = {
        justifyContent: 'center',
      };
    return (
        <div className="container tracker-container">
            {/* style="justify-content: center" */}
        <div className="row"  style={rowStyle}>
            <div className="col-sm-8">
                <form action="#" method="GET">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="tracker-heading text-center">Track Your Order</h3>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-5">
                            <div className="form-group">
                                <input type="text" className="form-control" id="order_id" name="order_no"
                                 
                                    placeholder="Please enter your order number here" required />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-5">
                            <div className="form-group">
                                <input type="text" className="form-control" id="order_id" name="phone_number"
                                
                                    placeholder="Please enter your phone number here" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-2">
                            <button type="submit" className="trck_btn w-100">Track</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        {/* @if (session('error'))
            <div className="alert alert-danger">
                {{ session('error') }}
            </div>
        @endif */}

        <div className="row mt-5">
            <div className="col-sm-12">
                {/* @if (isset($data)) */}
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    {/* @if(isset($history))
                    @if(isset($data))
                    <li className="nav-item">
                        <a className="nav-link active border-radius-right border-nav" id="pills-home-tab" data-toggle="pill"
                        href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Order</a>
                    </li>
                    @endif
                    @endif */}
                    {/* @if(isset($history))
                    <li className="nav-item">
                        <a className="nav-link border-radius-left border-nav" id="pills-profile-tab " data-toggle="pill"
                                href="#pills-profile" role="tab" aria-controls="pills-profile"
                                aria-selected="false">Order History</a>
                    </li>
                    @endif */}
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="row">

                            <div className="col-lg-12">

                                {/* @if (!empty($data))
                                    @component('layouts.tracking.components.statustimeline', [
                                        'discount_amount' => $data->cart_discount,
                                        'amount' => $data->total_amount,
                                        'order' => $data,
                                        'order_history'=>$order_history,
                                        'items' => $data->orderItems,
                                    ])
                                    @endcomponent
                                @endif */}
                            </div>
                        </div>
                    </div>
                    {/* @if(isset($history)) */}
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

                        {/* @if(count($history) == 0) */}
                        <h2 className="header">No history found for this phone number</h2>
                  
                        <table className="table table-hover">
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
                                {/* @foreach ($history as $item) */}
                                {/* <tr>
                                    <th scope="row">{{ $item->reference_number }}</th>
                                    <td>{{ $item->created_at }}</td>
                                    <td>{{ $item->courier ?? 'N/A' }}</td>

                                    <td>{{ $item->tracking_number ?? 'N/A' }}</td>
                                    <td>{{ $item->total_amount ?? 'N/A' }}</td>
                                </tr>
                                @endforeach */}
                            </tbody>
                        </table>
                    
                    </div>
                  
                </div>
             
               
              

        </div>

       </div>
       </div>
    )
}

