import { Navigate, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/Use Auth Context/UseAuthContext";

const Form = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const name = user?.displayName;
  const email = user?.email;

  const handleAddItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const photoUrl = form.photo_url.value;
    const item_name = form.item_name.value;
    const sub_category = form.sub_category.value;
    const short_des = form.short_des.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization_value = form.customization_value.value;
    const processing_time = form.processing_time.value;
    const stock_status = form.stock_status.value;
    const name = form.name.value;
    const email = form.email.value;
    const craftData = {
      photoUrl,
      item_name,
      sub_category,
      short_des,
      price,
      rating,
      customization_value,
      processing_time,
      stock_status,
      name,
      email,
    };
    console.log(craftData);
    fetch("http://localhost:3000/addCraftItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(craftData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.insertedId) {
          navigate("/myArtAndCraftList")
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">
            Enter Your Jute & Wooden Craft craft item
          </h1>
          <p className="py-6">
            If you want to add any craft item, please add any item from Jute &
            woodenCrafts Craft category
          </p>
        </div>
        <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
          <form
            onSubmit={handleAddItem}
            className="card-body grid grid-cols-1 md:grid-cols-12 xl:grid-cols-12 justify-center items-center gap-10"
          >
            {/* add more form controll here */}
            <div className="form-control md:col-span-6 xl:col-span-4">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                name="photo_url"
                type="text"
                placeholder="Please enter a photo url of your item"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control md:col-span-6 xl:col-span-4">
              <label className="label">
                <span className="label-text">Item Name</span>
              </label>
              <input
                name="item_name"
                type="text"
                placeholder="Enter your craft item name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:col-span-6 xl:col-span-4">
              <label className="label">
                <span className="label-text">Sub Category</span>
              </label>
              <input
                name="sub_category"
                type="text"
                placeholder="Enter a sub category of your craft item"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:col-span-6 xl:col-span-4">
              <label className="label">
                <span className="label-text">Your Craft Items description</span>
              </label>
              <input
                name="short_des"
                type="text"
                placeholder="Enter a short des of your crafting item"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:col-span-6 xl:col-span-4">
              <label className="label">
                <span className="label-text">Price of your item</span>
              </label>
              <input
                name="price"
                type="text"
                placeholder="Enter price for your item"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:col-span-6 xl:col-span-4">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                name="rating"
                type="number"
                placeholder="Enter a rating number under 5"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:col-span-6 xl:col-span-4">
              <label className="label">
                <span className="label-text">Is your Item Customizable?</span>
              </label>
              <input
                name="customization_value"
                type="text"
                placeholder=" yes or no"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:col-span-6 xl:col-span-4">
              <label className="label">
                <span className="label-text">Processing Time?</span>
              </label>
              <input
                name="processing_time"
                type="text"
                defaultValue="Could you kindly provide an estimate of the time required for crafting this item?"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:col-span-6 xl:col-span-4">
              <label className="label">
                <span className="label-text">Stock Status</span>
              </label>
              <input
                name="stock_status"
                type="text"
                placeholder="is it in stock or made to order"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control md:col-span-6 ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                value={name}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:col-span-full xl:col-span-6 ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                value={email}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6 col-span-full">
              <button className="btn btn-primary">Add This Item</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
