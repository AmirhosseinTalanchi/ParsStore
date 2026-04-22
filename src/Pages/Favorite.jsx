import React from 'react'
import { Link } from 'react-router';

export default function Favorite() {
  return (
    <div>
      <div className='container mt-15 text-zinc-600'>
        <Link to="/">خانه</Link>
        <Link to="/Favorite"> » علاقه مندی ها</Link>
      </div>
    </div>
  )
}
