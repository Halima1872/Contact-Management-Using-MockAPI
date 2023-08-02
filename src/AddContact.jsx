import Storage from "./Storage";
import PropTypes from 'prop-types';
const AddContact = ({userId}) => {
    const handleSubmit = async(e) => {
        e.preventDefault();
        const newItem = {
            name: e.target[0].value,
            contactNumber: e.target[1].value,
            email: e.target[2].value,
            address: e.target[3].value,
            };
            e.target.reset();

            const response = await Storage.setContact(userId,newItem)
            if(response){
            alert('Contact added successfully!');

            }


    }
    return(
        <div className="event-form">
      <form onSubmit={handleSubmit}>
      <h2>Add Contact</h2>
      <div>
        <label className="form-element" htmlFor="name">Name:</label>
        <input className="form-element" type="text" id="name" name="name" required
         />
        </div>
        <div>
        <label className="form-element" htmlFor="contactNumber">Contact Number:</label>
        <input className="form-element" type="number" id="contactNumber" name="contactNumber" required
        />
        </div>
        <div>
        <label className="form-element" htmlFor="email">Email:</label>
        <input className="form-element" type="email" id="email" name="email" required
        />
        </div>
        <div>
        <label className="form-element" htmlFor="time">Address:</label>
        <input className="form-element" type="text" id="address" name="address" required
        />
        </div>
        
        <div>
          <button className="form-element" type="submit">Add Contact</button>
          
        </div>
      </form>
    </div>
    )


}
AddContact.propTypes = {
    userId: PropTypes.string.isRequired,
    };
export default AddContact;