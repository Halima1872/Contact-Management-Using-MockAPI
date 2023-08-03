import Storage from "./Storage";
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './ShowContactCard.css'
const ContactCard = ({ userId }) => {
    const [items, setItems] = useState({});//[{},{}
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


    return (

        <div className="maindiv">
            <div className="thisdiv border border-3 rounded-1">

                <div  >
                    <div className="border-bottom border-3 thisis " >
                        Contact Card
                    </div>
                    <div className="mt-2 mb-2">
                        <div className="ms-3 ">Name : {items.username}</div>
                        <div className="ms-3">Email : {items.email}</div>
                        <div className="ms-3 ">Contact Number : {items.contactNumber}</div>
                    </div>


                </div>
            </div>
        </div>

    )

}
ContactCard.propTypes = {
    userId: PropTypes.string.isRequired,
};
export default ContactCard;