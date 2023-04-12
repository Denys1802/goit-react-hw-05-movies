import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewMovie } from 'services/fetchApi';

function Review() {
  const [reviewData, setreviewData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (reviewData === null) {
      getReviewMovie(id).then(data => setreviewData(data.data.results));
    }
    //getReviewMovie(id).then(data => console.log(data.data.results));
  }, [id, reviewData]);
  return (
    <>
      {reviewData &&
        reviewData.map(review => {
          return (
            <ul key={review.id}>
              <li>
                <h4>{review.author}</h4>
                <p>{review.content}</p>
              </li>
            </ul>
          );
        })}
    </>
  );
}

export default Review;
