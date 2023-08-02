import { useState, useEffect } from "react";
import Storage from "./Storage";
import PropTypes from "prop-types";
const AllContacts = ({ userId }) => {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        const getContacts = async () => {
            const data = await Storage.getContact(userId);
            setContacts(data);
        };
        getContacts();
    }, [userId]);
    return (
        <div className="event-form">
            <h2>All Contacts</h2>
            <div className="contact-card">
                {contacts.map((item) => (
                    <div key={item.id}>
                        <h3>Name: {item.name}</h3>
                        <p>Contact Number: {item.contactNumber}</p>
                        <p>Email Id: {item.email}</p>
                        <p>Address: {item.address}</p>
                    </div>
                ))}
            </div>
        </div>
    );

};
AllContacts.propTypes = {
    userId: PropTypes.string.isRequired,
};
export default AllContacts;