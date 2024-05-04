import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateForm = ({ craft }) => {
  const navigate = useNavigate();
  const {
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
    _id,
  } = craft;
  const handleUpdateCraft = (e) => {
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
    const updatedCraft = {
      photoUrl,
      item_name,
      sub_category,
      short_des,
      price,
      rating,
      customization_value,
      processing_time,
      stock_status,
    };
    fetch(`http://localhost:3000/craftUpdates/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Do you want to save the changes?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Save",
          denyButtonText: `Don't save`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (data.modifiedCount > 0) {
            if (result.isConfirmed) {
              navigate("/");
              Swal.fire("Saved!", "", "success");
            }
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
          }
        });
      });
  };
  console.log(photoUrl);
  return (
    <div>
      <div className="hero  min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              Update Your Craft {item_name}
            </h1>
            <p className="py-6">
              If you want to add any craft item, please add any item from Jute &
              woodenCrafts Craft category
            </p>
          </div>
          <div className="card xl:flex-row-reverse shrink-0 w-full  shadow-2xl bg-base-100 p-2">
            <figure className="rounded-lg p-2">
              <img
                src={
                  photoUrl
                    ? photoUrl
                    : "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                }
                alt="Shoes"
                className="rounded-lg pr-3"
              />
            </figure>
            <form
              onSubmit={handleUpdateCraft}
              className="card-body grid grid-cols-1 md:grid-cols-12 xl:grid-cols-12 justify-center items-center gap-10"
            >
              {/* add more form controll here */}
              <div className="form-control md:col-span-6 xl:col-span-4">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  defaultValue={photoUrl}
                  name="photo_url"
                  type="text"
                  placeholder="Please enter a photo url of your item"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control md:col-span-6 xl:col-span-4">
                <label className="label">
                  <span className="label-text">Item Name</span>
                </label>
                <input
                  name="item_name"
                  defaultValue={item_name}
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
                  defaultValue={sub_category}
                  name="sub_category"
                  type="text"
                  placeholder="Enter a sub category of your craft item"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control md:col-span-6 xl:col-span-4">
                <label className="label">
                  <span className="label-text">
                    Your Craft Items description
                  </span>
                </label>
                <input
                  defaultValue={short_des}
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
                  defaultValue={price}
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
                  defaultValue={rating}
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
                  defaultValue={customization_value}
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
                  defaultValue={processing_time}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control md:col-span-6 xl:col-span-4">
                <label className="label">
                  <span className="label-text">Stock Status</span>
                </label>
                <input
                  defaultValue={stock_status}
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
                  value={name}
                  name="name"
                  type="text"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control md:col-span-full xl:col-span-6 ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  value={email}
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6 col-span-full">
                <button className="btn btn-primary">Update This Craft</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

UpdateForm.propTypes = {
  craft: PropTypes.object,
};

export default UpdateForm;
