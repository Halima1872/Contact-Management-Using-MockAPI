import { useLocation } from "react-router-dom";
import { useState } from "react";
import ContactCard from "./ShowContactCard";
import AddContact from "./AddContact";
import AllContacts from "./AllContacts";
const Welcome = () => {
    const location = useLocation();
    const userId = location.state && location.state.userId;
    console.log(userId);
    const [showContactCard, setShowContactCard] = useState(false);
    const [showAddContact, setShowAddContact] = useState(false);
    const [showAllContacts, setShowAllContacts] = useState(false);
    return (
        <>
        <h1>Welcome User {userId}</h1>
        <button onClick={() => {
            setShowContactCard(true)
            setShowAddContact(false) 
            setShowAllContacts(false)
            }}>View Your Contact Card</button>
        <button onClick={() => {
            setShowAddContact(true)
            setShowContactCard(false) 
            setShowAllContacts(false)
        }}>Add New Contacts</button>
        <button onClick={() =>{
            setShowAllContacts(true)
            setShowContactCard(false) 
            setShowAddContact(false)
        }}>View All Contacts</button>

        {showContactCard && <ContactCard userId={userId} />}
        {showAddContact && <AddContact userId={userId} />}
        {showAllContacts && <AllContacts userId={userId} />}

        </>
    )
}
export default Welcome;