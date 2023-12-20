import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://json-server-review-backend.adaptable.app";

function CreateProjectPage() {
  const [name, setName] = useState ("");
  const [image_url, setImageUrl] = useState (""); 
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {                          // <== ADD
    e.preventDefault();

    const requestBody = { name, image_url, description};
    axios
      .post(`${API_URL}/review`, requestBody)
      .then(() => {
        // Once the project is created navigate to Project List Page
        navigate("/review");
      })
      .catch((error) => console.log(error));
  };  

  return (
    <div className="CreateProjectPage">
      <h3>Add Product Review</h3>

      <form onSubmit={handleSubmit}> 
        <label>Product Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Product Image:</label>
        <textarea
          type="text"
          name="image"
          value={image_url}
          onChange={(e) => setImageUrl(e.target.value)}
        />

<label>Product Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateProjectPage;



















/*function AddProductReview() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [reviewer, setReviewer] = useState("");
  const [review, setReview] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  // Handler functions for the form inputs. You can leave these as they are.
  const handleName = (e) => setName(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handleReviewer = (e) => setReviewer(e.target.value);
  const handleReview = (e) => setReview(e.target.value);
  const handleImageUrl = (e) => setImageUrl(e.target.value);

const navigate = useNavigate ();

  // TASK:
  // 1. Create a function to handle the form submission and send the form data to the Beers API to create a new beer.
  // 2. Use axios to make a POST request to the Beers API.
  // 3. Once the beer is created, navigate the user to the page showing the list of all beers.
const handleSubmit = async(e) => {
e.preventDefault () 
try {
  let response = await axios.post(
    "https://json-server-review-backend.adaptable.app/coffees", 
    {
name,
description, 
price,
reviewer,
review,
image_url, 
  } ) 
  console.log (response)

  navigate ("/")

    } catch (error) {
      console.log (error)
    }
};


  // Structure and the content of the page showing the form for adding a new beer. You can leave this as it is.
  return (
    <>
      <div className="d-inline-flex flex-column w-100 p-4">
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            className="form-control mb-4"
            type="text"
            name="name"
            placeholder="Product Name"
            value={name}
            onChange={handleName}
          />

          <label className="form-label">Description</label>
          <textarea
            className="form-control mb-4"
            type="text"
            name="description"
            placeholder="Description"
            rows="3"
            value={description}
            onChange={handleDescription}
          ></textarea>

          <label>Price</label>
          <input
            className="form-control mb-4"
            type="text"
            name="Price"
            placeholder="Price"
            value={price}
            onChange={handlePrice}
          />

          <label>Reviewer</label>
          <input
            className="form-control mb-4"
            type="text"
            name="Name"
            placeholder="Reviewer"
            value={reviewer}
            onChange={handleReviewer}
          />

          <label>Review</label>
          <input
            className="form-control mb-4"
            type="text"
            name="brewersTips"
            placeholder="..."
            value={review}
            onChange={handleReview}
          />

          <label>Image URL</label>
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                %
              </span>
            </div>
            <input
              className="form-control mb-4"
              type="number"
              name="attenuationLevel"
              value={imageUrl}
              onChange={handleImageUrl}
              min={0}
              max={100}
            />
          </div>

          <button className="btn btn-primary btn-round">Add Product</button>
        </form>
      </div>
    </>
  );
}

export default AddProductReview; */