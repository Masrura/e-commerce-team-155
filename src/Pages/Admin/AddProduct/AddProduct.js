import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
      fetch("https://e-commerce-site-9crn.onrender.com/products", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert('Product Added');
                    reset();
                }
            });
        reset();
        console.log(data);
    }

    //console.log(watch("example")); // watch input value by passing the name of it
    return (
        <>
        <div className='d-flex border w-50 p-5 shadow-lg bg-body rounded'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Add A Product</h1>
                {/* register your input into the hook by invoking the "register" function */}
                <input className='form-control custom-input' placeholder="Name" {...register("name")} /><br/>
                <input className='form-control custom-input' placeholder="Price" {...register("price")} /><br />
                <input className='form-control custom-input' placeholder="Description" {...register("description")} /><br />
                {/* include validation with required or other standard HTML validation rules */}
                <input className='form-control custom-input' placeholder="image-link" {...register("image", { required: true })} /><br />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <select {...register("category")}>
                    <option value="cloths">Cloths</option>
                    <option value="gadgets">Gadgets</option>
                    <option value="food">Food</option>
                </select>
                <button type="submit" className="btn btn-outline-success"><span className='me-2'>Confirm</span></button>

            </form>
            
        </div>
        <div class="row">
        <div class="col s12 m12 l12">
          <div id="bordered-table" class="card card card-default scrollspy">
            <div class="card-content">
              <h4 class="card-title">Bordered Table</h4>
              <p class="mb-2">Add <code class="  language-markup">class="bordered"</code> to the table tag for a
                bordered table</p>
              <div class="row">
                <div class="col s12">
                </div>
                <div class="col s12">
                  <table class="bordered">
                    <thead>
                      <tr>
                        <th data-field="id">Name</th>
                        <th data-field="name">Item Name</th>
                        <th data-field="price">Item Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Alvin</td>
                        <td>Eclair</td>
                        <td>$0.87</td>
                      </tr>
                      <tr>
                        <td>Alan</td>
                        <td>Jellybean</td>
                        <td>$3.76</td>
                      </tr>
                      <tr>
                        <td>Jonathan</td>
                        <td>Lollipop</td>
                        <td>$7.00</td>
                      </tr>
                      <tr>
                        <td>Shannon</td>
                        <td>KitKat</td>
                        <td>$9.99</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
};

export default AddProduct;