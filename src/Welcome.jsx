import { useLocation } from "react-router-dom";
import { useState } from "react";
import ContactCard from "./ShowContactCard";
import AddContact from "./AddContact";
import AllContacts from "./AllContacts";
const Welcome = () => {
    const location = useLocation();
    const userId = location.state && location.state.userId;
    console.log(userId);
    const [showContactCard, setShowContactCard] = useState(true);
    const [showAddContact, setShowAddContact] = useState(false);
    const [showAllContacts, setShowAllContacts] = useState(false);
    return (
        <>
        <nav className="navbar mb-3 navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" >Contact Managment</a>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <button className="nav-link active" aria-current="page" onClick={() => {
            setShowContactCard(true)
            setShowAddContact(false) 
            setShowAllContacts(false)
            }}>View Your Contact Card</button>
        </li>
        <li className="nav-item">
        <button className="nav-link active" aria-current="page" onClick={() => {
            setShowAddContact(true)
            setShowContactCard(false) 
            setShowAllContacts(false)
        }}>Add New Contacts</button>
        </li>
        <li className="nav-item">
        <button className="nav-link active" aria-current="page" onClick={() => {
            setShowAllContacts(true)
            setShowContactCard(false) 
            setShowAddContact(false)
        }}>View All Contacts</button>
        </li>
        
      </ul>
    </div>
    
    </div>
    
        
      
    
</nav>
            

        {showContactCard && <ContactCard userId={userId} />}
        {showAddContact && <AddContact userId={userId} />}
        {showAllContacts && <AllContacts userId={userId} />}

        </>
    )
}
export default Welcome;