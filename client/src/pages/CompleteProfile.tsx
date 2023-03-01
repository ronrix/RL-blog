import { useFormik } from 'formik';
import * as Yup from "yup";
import React, { useEffect } from 'react'
import { useMutation } from '@apollo/client';
import { COMPLETE_USER_PROFILE } from '../queries';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { closeModal } from '../state/slice/authModalSlice';
import { addUserState } from '../state/slice/userSlice';

 const ErrorSchema = Yup.object().shape({
   username: Yup.string().required('Required'),
   description: Yup.string().required('Required'),
 });
export default function CompleteProfile() {
  const [completeUserProfile] = useMutation(COMPLETE_USER_PROFILE);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // check if the user id is already set in the cookies
  // that means the user is already created, then we can proceed to complete the profile of the user
  useEffect(() => {
    const user = Cookies.get("c_user");
    if(!user) {
      navigate("/");
    }
  }, []);
  
  const formik = useFormik({
    initialValues: {
      username: "",
      description: "",
      links: {
        fb: "",
        twitter: "",
        linkedin: "",
      }
    },
    onSubmit: async (values) => {
      const { data, errors } = await completeUserProfile({ variables: values});
      dispatch(addUserState(data.completeProfile));
      dispatch(closeModal());
      // navigate to user dashboard
      window.location.href = "/u";
    },
    validationSchema: ErrorSchema
  })

  return (
    <div className="container mx-auto h-screen flex items-center p-5">
      <form onSubmit={formik.handleSubmit}>
        <h2>Complete your profile</h2>
        <p className="text-gray-500 text-sm font-[Manrope]">this will display into your profile page</p>

        <label>
          <h3 className="font-[600]">username</h3>
          <input type="text" name="username" onChange={formik.handleChange} value={formik.values.username} className="border w-full p-2 rounded shadow-inner" />
        </label>

        <label>
          <h3 className="font-[600]">description</h3>
          <textarea name="description" onChange={formik.handleChange} value={formik.values.description} className="border w-full p-2 rounded max-h-[200px] min-h-[100px] h-[100px] shadow-inner"></textarea>
        </label>

        <h3 className="font-[600] mt-5">social media links</h3>
        <label className="flex mt-2">
          <i className="fa-brands fa-square-facebook text-xl mr-3"></i>
          <input type="text" name="links.fb" onChange={formik.handleChange} value={formik.values.links.fb} className="border w-full rounded shadow-inner" />
        </label>
        <label className="flex mt-2">
          <i className="fa-brands fa-square-twitter text-xl mr-3"></i>
          <input type="text" name="links.twitter" onChange={formik.handleChange} value={formik.values.links.twitter} className="border w-full rounded shadow-inner" />
        </label>
        <label className="flex mt-2">
          <i className="fa-brands fa-linkedin-in text-xl mr-3"></i>
          <input type="text" name="links.linkedin" onChange={formik.handleChange} value={formik.values.links.linkedin} className="border w-full rounded shadow-inner" />
        </label>

        <input type="submit" value="save" className="bg-blue-600 text-white font-[600] px-4 p-2 rounded mt-10" />
      </form>
    </div>
  )
}