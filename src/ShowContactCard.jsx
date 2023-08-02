import Storage from "./Storage";
import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
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

        <div>
            <h2> Contact Card</h2>

            <div>
                <h2> Name : {items.username}</h2>
                <h2> Email : {items.email}</h2>
                <h2> Contact Number : {items.contactNumber}</h2>
                </div>
        </div>
    )

}
ContactCard.propTypes = {
    userId: PropTypes.string.isRequired,
};
export default ContactCard;