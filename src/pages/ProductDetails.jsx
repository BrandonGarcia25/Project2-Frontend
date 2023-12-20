import { useParams } from "react-router-dom"
import { useState, useEffect, useContext } from 'react'
import { CoffeeContext } from "../context/coffee.context"
import axios from "axios"
import { API_URL } from "../services/API_URL"

const ProductDetails = () => {

    const [thisCoffee, setThisCoffee] = useState(null)
    const [reviews, setReviews ] = useState([])

    const { productId } = useParams()

    const [newReview, setNewReview] = useState({
        coffeeId: Number(productId),
        review: "",
        name: "",
        date: new Date(Date.now()).toLocaleString(),
        isEditing: false
      });
    
      const [reviewToUpdate, setReviewToUpdate] = useState({
        coffeeId: Number(productId),
        review: "",
        name: "",
        date: new Date(Date.now()).toLocaleString(),
        isEditing: true
      })

    const { coffees, fetchCoffees } = useContext(CoffeeContext)

    const getReviews = () => {
        axios.get(`${API_URL}/reviews?coffeeId=${productId}`)
            .then((response) => {
                console.log("These reviews ==>", response.data)
                setReviews(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleChange = (e) => {
        setNewReview((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };

      const handleReviewChange = (e) => {
        setReviewToUpdate((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(API_URL + '/reviews', newReview)
            .then((response) => {
                console.log("New review", response.data)
                setNewReview({
                    coffeeId: Number(productId),
                    review: "",
                    name: "",
                    date: new Date(Date.now()).toLocaleString(),
                    isEditing: false
                })
                getReviews()
            })
            .catch((err) => {
                console.log(err)
            })

    }

    const handleReviewUpdate = (e, i) => {
        e.preventDefault()
        console.log("Updating Review")
        axios.put(API_URL + `/reviews/${i}`, {...reviewToUpdate, ['isEditing']: false})
        .then((response) => {
            console.log("Updated review ===>", response.data);
            setReviewToUpdate({
                coffeeId: Number(productId),
                review: "",
                name: "",
                date: new Date(Date.now()).toLocaleString(),
                isEditing: true
              });
            getReviews();
          })
          .catch((err) => {
            console.log("Review update error");
            console.log("This is the error", err);
          });
      }

    const setIsEditing = (id) => {
        let theseReviews = [...reviews]
        let thisIndex
        let thisReview = theseReviews.find((review, index) => {
            thisIndex = index
            return review.id == id
        })
        thisReview = {...thisReview, isEditing: true}
        theseReviews[thisIndex] = thisReview
        setReviews(theseReviews)
        setReviewToUpdate(thisReview)
      }

      const deleteReview = (id) => {

        axios.delete(API_URL + `/reviews/${id}`)
            .then((response) => {
                console.log("Deleted review ===>", response.data)
                getReviews()
            })
            .catch((err) => {
                console.log(err)
            })
      }

    useEffect(() => {

        if (!coffees.length) {
            fetchCoffees()
        } else {
            let foundCoffee = coffees.find((coffee) => coffee.id == productId)
            setThisCoffee(foundCoffee)
        }

        getReviews()

    }, [coffees])

  return (
    <div>
        {
            thisCoffee &&

            <div>
                <h1>{thisCoffee.name}</h1>
                <img
                    src={thisCoffee.image_url}
                    style={{ height: "6rem" }}
                    alt={"image of" + thisCoffee.name}
                />
                <p>{thisCoffee.price}</p>
                <p>{thisCoffee.region}</p>
                <p>{thisCoffee.description}</p>
            </div>
        }

        <hr />

        <div>

        <h3>Reviews</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Add Review
            <input
              name="review"
              onChange={handleChange}
              value={newReview.review}
              type="text"
              style={{ width: "20vw" }}
            />
          </label>
          <label>
            Name:
            <input
              name="name"
              onChange={handleChange}
              value={newReview.name}
              type="text"
              style={{ width: "20vw" }}
            />
          </label>
          <button type="sumit">Add Review</button>
        </form>

        {thisCoffee && reviews.length > 0 && (
          <>
            {reviews.map((review) => {
              return (
                <div>
                  <p>{review.review}</p>
                  <p>{review.name}</p>
                  <p>- {review.date} <span><button onClick={() => setIsEditing(review.id)}>Edit Review</button></span> <span><button onClick={() => deleteReview(review.id)}>Delete Review</button></span></p>
                  {review.isEditing && 
                            <form onSubmit={(e)=>handleReviewUpdate(e, review.id)}>
                            <label>
                              Edit Review
                              <input
                                name="review"
                                onChange={handleReviewChange}
                                value={reviewToUpdate.review}
                                type="text"
                                style={{ width: "20vw" }}
                              />
                            </label>
                            <button className="review-button">Submit</button>
                          </form>
                  }
                  <br />
                </div>
              );
            })}
          </>
        )}


            
        </div>

    </div>
  )
}

export default ProductDetails


// "id": 1,
// "name": "Signature Blend",
// "description": "A rich, full-bodied coffee with notes of dark chocolate and black cherry. Grown on the slopes of a mist-covered mountain in Central America.",
// "price": 12.99,
// "region": "Central America",
// "weight": 500,
// "flavor_profile": [
//   "Dark Chocolate",
//   "Black Cherry"
// ],
// "grind_option": [
//   "Whole Bean",
//   "Cafetiere",
//   "Filter",
//   "Espresso"
// ],
// "roast_level": 3,
// "image_url": "https://iili.io/H8Y78Qt.webp"