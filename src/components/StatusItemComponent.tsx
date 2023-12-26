import React, { useState } from "react";

export const StatusItemComponent: React.FC<any> = (props)=>{
    const [item] = useState<any>(props.item);
    const active=props.active;
    console.log("Active", active);
    const setDateFormat=(date:any)=>{
        const dateObject = new Date(date);
        // Format the date as a string
        const formattedDate = dateObject.toLocaleDateString();
        return formattedDate;
    }
    const setTimeFormat=(date:any)=>{
        const dateObject = new Date(date);
        // Format the date as a string
        const formattedDate = dateObject.toLocaleTimeString();
        return formattedDate;
    }
    const getImgIcon = (img:string)=>{

    }
    const setStatusMessage=(status:string)=>{
        switch (status.replace(/"/g, '')) {
            case "draft":
            case "unshipped":
            case "unshipped":
            case "unfulfilled":
                return "Order received at bachaaparty facility for fulfilment.";
            break;
            case "pick":
                return "Order items are being picked at facility.";
            break;
            case "pick":
                return "Order items are being picked at facility.";
            break;
            case "pack":
                return "Your order will be dispatched shortly";
            break;
            case "ship":
                return "Package is ready and set for shipping.";
            break;
            case "pre_transit":
            case "in_transit":
                return "Order is in transit.";
            break;
            case "delivered":
                return "Order is delivered to consignee. ";
            break;
            
            default:
                break;
        }
    }
        const setStatusImg=(status:string)=>{
            switch (status.replace(/"/g, '')) {
                case "draft":
                case "unshipped":
                case "unshipped":
                case "unfulfilled":
                    // return "Initialized.png";
                   return "orderreceivedwh.png"
                break;
                // orderreceivedwh.png
                case "pick":
                    return "pickingstarted.png";
                break;
                case "pack":
                    return "packed.png";
                break;
                case "ship":
                    return "shipped.png";
                break;
                case "pre_transit":
                case "in_transit":
                    return "intransit.png";
                break;
                case "delivered":
                    return "delivered.png";
                break;
                
                default:
                    break;
            }
    }
    return (
        <div className={'tracking-item '+ active}>
        <div className={'tracking-icon '+active}>
            <img src={'/img/icons/'+setStatusImg(item.new_value)} width="30draft" height="30" />
        </div>

        <div className="tracking-date">{setDateFormat(item.created_at)}
            <span>{setTimeFormat(item.created_at)}</span>
        </div>

        <div className="tracking-content tooltip">

            <strong> {item.new_value.replace(/"/g, '')}</strong>
            <span>{setStatusMessage(item.new_value)}</span>
            <span className="tooltiptext">{setStatusMessage(item.new_value)}</span>

        </div>
    </div>

    );
}