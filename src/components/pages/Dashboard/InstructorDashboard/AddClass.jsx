import React from 'react';
import { useForm } from 'react-hook-form';

const AddClass = () => {



    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
    return (
        <div className=''>
            <div className="card mx-auto lg:w-96  shadow-lg bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Name</span>
                                </label>
                                <input {...register("classname", { required: true })} required type="text" placeholder="Class Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Image</span>
                                </label>
                                <input {...register("classImage", { required: true })} required type="text" placeholder="Class Image" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Name</span>
                                </label>
                                <input className='input input-bordered'
                                    type="text"
                                    placeholder="Instructor Name"
                                    {...register("InstructorName")}
                                />


                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Email</span>
                                </label>
                                <input className='input input-bordered'
                                    type="email"
                                    placeholder="Instructor Email"
                                    {...register("InstructorEmail")}
                                />


                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Seats</span>
                                </label>
                                <input {...register("seats")} type="number" placeholder='seats' className="input input-bordered w-full max-w-xs" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input {...register("price")} type="number" placeholder='Price' className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="button-primary">Add Class</button>
                            </div>

                        </form>




                    </div>
        </div>
    );
};

export default AddClass;