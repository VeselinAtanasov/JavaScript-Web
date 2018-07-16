import React from 'react';

const AllCatFood = (props) =>(
    <h1>Add Available Cat Food {props.match.params.foodId} and {props.match.params.category}</h1>
);

export default AllCatFood;