import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import {UserAuth} from '../context/AuthContext'
import { db } from '../firebase'
import {arrayUnion, doc, updateDoc} from 'firebase/firestore'
import { async } from '@firebase/util'


const Movie = ({item}) => {
    const[like, setLike] = useState(false)
    const [saved, setSaved] = useState(false)
    const {user} = UserAuth();

    const movieID = doc(db, 'users', `${user?.email}`)

    const saveShow = async () => {
        if(user?.email){
            setLike(!like)
            setSaved(true)
            await updateDoc(movieID, {
                savedShows: arrayUnion({
                    id: item.id,
                    title: item.title,
                    img: item.backdrop_path
                })
            })
        }else{
            
            alert("You need to be logged in to set Liked Shows!!")
            
        }
    }

  return (
             <div className='w-[160px] sm:w-[200px] md:w-[280px] inline-block cursor-pointer relative p-2'>
                <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opactity-0 text-white hover:opacity-100 opacity-0 hover:opacity-100'>
                    <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center hover:opacity-100 opacity-0 '>{item?.title}</p>
                <p onClick={saveShow}>
                    {like ? <FaHeart className='absolute top-4 left-4 text-gray' /> : <FaRegHeart className='absolute top-4 left-4 text-gray' /> }
                </p>
                </div>

            </div>
  )
}

export default Movie