import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle
} from 'reactstrap';

  function RenderDish({dish}) {
    return (
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name}/>
        <CardBody>
          <CardTitle>
            {dish.name}
          </CardTitle>
          <CardText>
            {dish.description}
          </CardText>
        </CardBody>
      </Card>
    );
  }

  function RenderComments({comments}) {
    if (comments == null) {
      return (
        <div></div>
      );
    }

    const commentList = comments.map((comment) => {
      return (
        <li key={comment.id}>
          <p>{comment.comment}</p>
          <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(comment.date))}</p>
        </li>
      );
    });

    return (
      <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {commentList}
        </ul>
      </div>
    )
  }

  const DishDetail = (props) => {
    const dish = props.dish;
    if (dish == null) {
      return (
        <div></div>
      );
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
             <RenderDish dish={dish} />
           </div>

           <div className="col-12 col-md-5 m-1">
             <RenderComments comments={dish.comments} />
           </div>
        </div>
      </div>
    );
  }

export default DishDetail;
