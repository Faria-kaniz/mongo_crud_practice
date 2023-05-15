import React from 'react';

const CoffeeCard = ({ coffee }) => {
    const { name, quantity, suppllier, taste, category, details, photo_url } =
        coffee;

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img src={photo_url} alt="coffee" />
            </figure>
            <div className="flex justify-between w-full pr-4">
                <div className='my-2'>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>{quantity}</p>
                    <p>{suppllier}</p>
                    <p>{taste}</p>
                    <p>{category}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-2 my-4">
                        <button className="btn">Add</button>
                        <button className="btn">Update</button>
                        <button className="btn">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;