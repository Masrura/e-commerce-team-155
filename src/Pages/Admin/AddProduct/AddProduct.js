import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch("http://localhost:5000/products", {
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
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input placeholder="Name" {...register("name")} /><br/>
                <input placeholder="Price" {...register("price")} /><br />
                <input placeholder="Description" {...register("description")} /><br />
                {/* include validation with required or other standard HTML validation rules */}
                <input placeholder="image-link" {...register("image", { required: true })} /><br />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <select {...register("category")}>
                    <option value="cloths">Cloths</option>
                    <option value="gadgets">Gadgets</option>
                    <option value="food">Food</option>
                </select>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;