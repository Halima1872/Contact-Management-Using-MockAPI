import Storage from "./Storage";
import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './ShowContactCard.css'
const ContactCard = ({userId}) =>{
    const [items,setItems] = useState({});//[{},{}
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Storage.getItem(userId);
                setItems(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching contact data:', error);
            }
        };

        fetchData();
    }, [userId]);


    return(

<div className="container">
    
            <div className="card mycard"  >
  <div className="card-header">
    Contact Card
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Name : {items.username}</li>
    <li className="list-group-item">Email : {items.email}</li>
    <li className="list-group-item">Contact Number : {items.contactNumber}</li>
  </ul>
</div>
</div>
            
    )

}
ContactCard.propTypes = {
    userId: PropTypes.string.isRequired,
};
export default ContactCard;