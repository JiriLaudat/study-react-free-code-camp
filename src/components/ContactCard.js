import React from "react";

const ContactCard = (props) => {
    return (
        <div classname="contact-card">
            <img src={props.imgUrl}/>
            <h3>{props.name}</h3>
            <p>{props.phone}</p>
            <p>{props.email}</p>
        </div>
    )
}

export default ContactCard