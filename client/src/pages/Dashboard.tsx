import { gql } from '@apollo/client';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Header from '../components/Header';
import SuggestionsCard from '../components/Suggestions/SuggestionsCard';

export default function Dashboard() {
  const userData = useSelector((state: any) => state.user?.value);

  useEffect(() => {}, [userData]);
  return (
    <div>
      <Header />

      <div className="container mx-auto p-5">
        <div>
          <h4 className="sticky top-0 bg-white py-2 font-bold text-lg">Your contents</h4>
          {Array(10).fill(0).map((val, key) => {
            return (<div key={key} className="border border-t-0 border-r-0 border-l-0">
              <SuggestionsCard />
            </div>)
          })}
        </div>
      </div>
    </div>
  );
}
