import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";

import Header from '../components/Header'
import Info from '../components/Info';
import { ADD_BLOG } from '../queries';

 const ErrorSchema = Yup.object().shape({
   read_duration: Yup.number().required('Required'),
   content: Yup.string().required("Required"),
 });

export default function BlogForm() {
  const [show, setShow] = useState<boolean>(false);
  const [isNewCategory, setIsNewCategory] = useState<boolean>(false);
  
  const [createBlog] = useMutation(ADD_BLOG);

  const formik = useFormik({
    initialValues: {
      read_duration: 10,
      category: '',
      content: '',
    },
    onSubmit: (values) => {
      createBlog({ variables: values });
    },
    validationSchema: ErrorSchema
  });
  
  return (
    <div>
      <Header />

      <div className="container mx-auto p-5">
        <h4 className="text-2xl font-bold m-0">Write new content</h4>
        <h5 className='m-0 text-lg'>Share new amazing blog</h5>

        <form onSubmit={formik.handleSubmit} className="mt-3">
          <label className="text-sm text-gray-700">
            <span className="font-bold">Read duration (mins)</span>
            <br />
            <input type="number" name="read_duration" onChange={formik.handleChange} value={formik.values.read_duration} className={`outline-none border p-1 bg-slate-50 shadow-inner ${formik.touched.content && formik.errors.content && 'border-red-500'}`} />
            {formik.touched.read_duration && formik.errors.read_duration && <div className="text-xs text-red-500">{formik.errors.read_duration}</div>}
            <p className="text-gray-500 text-xs font-['Manrope']">Let the readers know the possible much time they would spend reading your content</p>
          </label>
          <label className="text-sm text-gray-700 block mt-3">
            <span className="font-bold">Category</span>
            <br />
            <select name="category" onChange={formik.handleChange} value={formik.values.category} className='bg-slate-50 outline-none p-1 px-2 shadow-inner'>
              <option value="none">none</option>
              <option value="js" className="">Javascript</option>
              <option value="python">Python</option>
            </select> 
            <p className="text-gray-500 text-xs font-['Manrope']">Specify the category of your content</p>
          </label>
          <label className='flex items-center mt-3'>
            <input type="checkbox" className="outline-none border border-gray-500 mr-2" onChange={() => setIsNewCategory(!isNewCategory)} defaultChecked={isNewCategory} />
            <span className="text-xs text-gray-500">Add new category</span>
          </label>
          <label className="text-sm text-gray-700 block">
            <span className="font-bold">New category</span>
            <br />
            <div className="p-1 inline-block bg-slate-50 shadow-inner">
              <input type="text" name="category" onChange={formik.handleChange} value={formik.values.category} className='outline-none' disabled={!isNewCategory} />
              <i className={`fa-solid fa-circle-info ml-3 cursor-pointer relative ${isNewCategory ? 'text-gray-800' : 'text-gray-400'}`}></i>
            </div>
            <p className="text-gray-500 text-xs font-['Manrope']">Let the readers know the possible much time they would spend reading your content</p>
          </label>

          <div className='mt-5 flex items-center justify-between'>
            <h6 className="font-bold text-sm m-0 text-gray-800">Content</h6>
            {/* info to create a blog */}
            <p className="font-['Manrope'] text-sm m-0 text-gray-600">
              Use marked format to create your content
              <i className="fa-solid fa-circle-info ml-3 cursor-pointer relative" onClick={() => setShow(!show)}>
                {show && <Info />}
              </i>
            </p>
          </div>
          <textarea name="content" value={formik.values.content} onChange={formik.handleChange} className={`border border-gray-200 outline-none w-full h-[500px] p-2 ${formik.touched.content && formik.errors.content && 'border-red-500'}`}></textarea>
          {formik.touched.content && formik.errors.content && <div className="text-xs text-red-500">{formik.errors.content}</div>}
          <div className='flex justify-end mt-5'>
            <button>Cancel</button>
            <button type='submit' className="bg-green-600 hover:bg-green-500 p-3 rounded-full font-bold text-white px-8 ml-5">Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}
