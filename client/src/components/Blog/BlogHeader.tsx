import { useLazyQuery } from '@apollo/client';
import moment from 'moment';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SAVE_BOOKMARK, UNSAVE_BOOKMARK } from '../../queries';
import { handleSaveToBookmark } from '../../utility/handleSaveToBookmark';
import Abbr from '../Abbr'

type Props = {
  avatar: string;
  name: string;
  date: string;
  duration: string;
  links: any;
  id: string;
}

export default function BlogHeader(props: Props) {
  const { avatar, name, date, duration, links, id } = props;
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const user = useSelector((state: any) => state.user.value);
  const [isSaveBookmark, setIsSaveBookmark] = useState<boolean>(() => user?.bookmarks?.includes(id));

  const [saveBookmark] = useLazyQuery(SAVE_BOOKMARK, { variables: { blogId: id }});
  const [unSaveBookmark] = useLazyQuery(UNSAVE_BOOKMARK, { variables: { blogId: id }});
  const dispatch = useDispatch();

  function copy(){
    setIsCopied(true);

    // this will turn back the text 'copied' to 'copy'. default
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);

    navigator.clipboard.writeText(window.location.href);
  }

  async function handleSaveBookmark() {
    const isAuth = await handleSaveToBookmark(dispatch, saveBookmark);
    // if not auth, just return
    if(!isAuth) {
      return;
    }
    setIsSaveBookmark(true);
  }

  async function handleUnSaveBookmark() {
    const isAuth = await handleSaveToBookmark(dispatch, unSaveBookmark);
    // if not auth, just return
    if(!isAuth) {
      return;
    }

    setIsSaveBookmark(false);
  }

  return (
    <div className="flex flex-col sm:flex-row md:items-center justify-between mb-10">
        <div className="flex items-center">
          {/* user avatar */}
          <div>
              <img className="rounded-full w-[80px] sm:w-[100px] my-0" src={avatar} alt="this is user's avatar" />
          </div>
          {/* usre info */}
          <div className="flex-1 ml-5">
              <h3 className="text-lg md:text-2xl font-bold capitalize">{name}</h3>
              <p className="text-md md:text-lg text-gray-700 font-[Manrope]">{moment(date).format("MMM Do")} . {duration} min read </p>
          </div>
        </div>
        {/* links */}
        <div className='flex items-center flex-wrap justify-between w-[80%] sm:w-[25%]'>
          {/* mobile view for save button */}
           <div className="border rounded-full px-5 py-1 flex items-center justify-center sm:hidden">
            <i className="fa-regular fa-bookmark text-lg sm:text-2xl text-gray-500 hover:text-black cursor-pointer"></i>
            <span className="pl-5">Save</span>
           </div>

           <a target={"_blank"} href={links.twitter}><i className="fa-brands fa-twitter text-lg sm:text-2xl text-gray-500 hover:text-black cursor-pointer"></i></a>
           <a target={"_blank"} href={links.fb}><i className="fa-brands fa-facebook text-lg sm:text-2xl text-gray-500 hover:text-black cursor-pointer"></i></a>
           <a target={"_blank"} href={links.linkedin}><i className="fa-brands fa-linkedin text-lg sm:text-2xl text-gray-500 hover:text-black cursor-pointer"></i></a>
           <div className='relative group'>
            <i onClick={copy} className="fa-solid fa-link text-gray-500 text-lg sm:text-2xl group-hover:text-black cursor-pointer"></i>
            <Abbr text={!isCopied ? 'Copy' : "Copied"} />
           </div>
           <div className='relative group'>
            {isSaveBookmark ?  (
              <i onClick={handleUnSaveBookmark} className={`fa-solid fa-bookmark text-lg sm:text-2xl text-gray-500 group-hover:text-gray-700 cursor-pointer hidden sm:block`}></i>
              ): (
              <i onClick={handleSaveBookmark} className={`fa-regular fa-bookmark text-lg sm:text-2xl text-gray-500 group-hover:text-gray-700 cursor-pointer hidden sm:block`}></i>
            )}
            <Abbr text={!saveBookmark ? 'Save' : "Saved"} />
           </div>
        </div>
    </div>
  )
}
