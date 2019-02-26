import React from "react";

const ContactCard = (props) => {
    return (
        <div classname="contact-card">
            <img src={props.imgUrl}/>
            <h3>{props.name}</h3>
            <p style={{ display: !props.phone && 'none' }}>Phone: {props.phone}</p>
            <p style={{ display: !props.phone && 'none' }}>Email: {props.email}</p>
        </div>
    )
}

export default ContactCard