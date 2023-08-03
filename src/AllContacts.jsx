import { useState, useEffect } from "react";
import Storage from "./Storage";
import PropTypes from "prop-types";
import EditContact from "./EditContact";
import './AllContacts.css'
const AllContacts = ({ userId }) => {
    const [contacts, setContacts] = useState([]);
    const [edit, setEdit] = useState(false);
    const [contactId, setContactId] = useState("");

    useEffect(() => {
        const getContacts = async () => {
            const data = await Storage.getContacts(userId);
            setContacts(data);
        };
        getContacts();
    }, [userId]);

    const handleDelete = async (key) => {
        const isDeleted = await Storage.deleteItem(userId, key);
        if (isDeleted) {
            const data = await Storage.getContacts(userId);
            setContacts(data);
            alert("Contact Deleted Successfully");
        }
    };
    const handleEdit = async (key) => {
        console.log(key);
        setEdit(true);
    };

    return (
        <>

            <div className="event-form">

                <div className="contact-card div1">
                    
                    {contacts.map((item) => (
                        <div className="card allcards mb-3 " key={item.id}>
                            
                            <div className="card-header mt-0 mb-0">
                                <h5 className="card-title mb-0">{item.name}</h5>
                            </div>
                            

                            <div className="card-body">
                                <div className="row mb-2">
                                <div className="col-6">Contact Number : {item.contactNumber}</div>
                                <div className="col-6">Email : {item.email}</div>
                                </div>
                                <div className="col-12">Address: {item.address}</div>
  
                            </div>
                            <div className="card-footer text-muted">
                            <button className="form-element btn btn-primary ms-3 " onClick={() => {
                                    setContactId(item.id);
                                    handleEdit(item.id)
                                }}>Edit</button>
                                <button className="form-element btn btn-danger ms-3 " onClick={() => handleDelete(item.id)}>Delete</button>
                                
                            </div>
                            {edit && <EditContact userId={userId} contactId={contactId} setContacts={setContacts}
                        setEdit={setEdit} />}
                                 
                        </div>
                    ))}
                </div>
            </div>
        </>
    );

};
AllContacts.propTypes = {
    userId: PropTypes.string.isRequired,
};
export default AllContacts;