import Swal from "sweetalert2";
const AddCoffee = () => {

    const handleAddCoffe = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const suppllier = form.suppllier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo_url = form.photo_url.value;

        const newCoffee = { name,quantity,suppllier,taste,category,details,photo_url }
        console.log(newCoffee);

        fetch("http://localhost:5000/coffee", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newCoffee),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: "Success!",
                        text: "User Added successfully",
                        icon: "success",
                        confirmButtonText: "Cool",
                    });
                }
            });
    }

    return (
        <div className="bg-[#ddd] p-24">
            <h1 className="text-3xl">Add a Coffee</h1>
            <form onSubmit={handleAddCoffe}>
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                placeholder="Coffee Name"
                                name="name"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                placeholder="Quntity"
                                name="quantity"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                placeholder="Supplier"
                                name="suppllier"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                placeholder="Taste"
                                name="taste"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                placeholder="Category"
                                name="category"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                placeholder="Details"
                                name="details"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                <div className="">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo url</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                placeholder="Photo url"
                                name="photo_url"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>

                <input
                    type="submit"
                    value="Add Coffee"
                    className="btn btn-block"
                />
            </form>
        </div>
    );
};

export default AddCoffee;