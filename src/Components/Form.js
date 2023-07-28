import React, { useState, useEffect } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase";
import { useForm } from "react-hook-form";
import Loader from "./Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = ({ onSave }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const q = query(collection(db, "sectors"));
    const unsubscribe = onSnapshot(q, (querySnapShot) => {
      let todosArr = [];
      querySnapShot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr[0].sector);
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);

  const onSubmit = (data) => {
    const { name, sector, agree } = data;
    onSave({ name, sector, agree });
    toast("Data added successfully!")
    reset();
  };

  return (
    <div className="w-full px-3">
      {loading ? (
        <Loader/>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {errors.name && (
              <p className="text-red-500 mt-1">name is required</p>
            )}
          </div>
          <div className="mt-3">
            <label className="mt-3">Sectors</label>
            <select
              {...register("sector", { required: true })}
              className="block w-full ounded-md border-0 py-2.5 rounded-lg px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="">Select a sector</option>
              {todos.map((sectorOption) => (
                <option key={sectorOption} value={sectorOption}>
                  {sectorOption}
                </option>
              ))}
            </select>
            {errors.sector && (
              <p className="text-red-500">sector is required</p>
            )}
          </div>

          <div className="relative flex gap-x-3 mt-3  ">
            <div className="flex h-6 items-center">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                {...register("agree", { required: true })}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="text-sm leading-6">
              <label htmlFor="comments" className="font-medium text-gray-900">
                Agree to terms
              </label>
            </div>
          </div>
          {errors.agree && <p className="text-red-500">terms is required</p>}
          <button
            type="submit"
            className="rounded-md w-full mt-5 bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Submit{" "}
          </button>
        </form>
      )}
    </div>
  );
};

export default Form;
