import React, { useState } from 'react'

export default function UpvoteBtn() {
    const [upVoteCount, setUpVoteCount] = useState(0);

    return (
        <button className='bg-blue-500 text-white p-2 mt-10' onClick={() => setUpVoteCount(upVoteCount + 1)}>
            Upvote
        </button>
    )
}
