import React, { useEffect, useState } from 'react'

type Props = {
  msg: { name: String; value: String; };
}

export default function Toaster(props: Props) {
  const { msg } = props;
  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    if(msg.value) {
      setTimeout(() => {
        setShow(false);
      }, 2000);
    }
  }, [show]);

  return <div className={`${!show && 'hidden'} fixed top-0 left-1/2 -translate-x-1/2 p-3 shadow-lg ${msg.name === "ApolloError" ? 'bg-red-400 text-white' : 'bg-white text-black' }`}>{msg.value}</div>;
}
