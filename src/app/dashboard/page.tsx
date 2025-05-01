'use client'

import { useEffect, useState } from 'react';

export default function StoriesPage() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/v1/story')
      .then(res => res.json())
      .then(data => setStories(data.data));
  }, []);

  const handleDelete = async (id: string) => {
    await fetch(`http://localhost:5000/api/v1/story/${id}`, {
      method: 'DELETE',
      headers: {
        'x-access-key': process.env.NEXT_PUBLIC_ACCESS_KEY!,
      },
    });
    setStories(stories.filter((story: any) => story._id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">القصص</h1>
      <ul>
        {stories.map((story: any) => (
          <li key={story._id} className="mb-4">
            <h2 className="font-semibold">{story.title}</h2>
            <p>{story.content}</p>
            <button
              onClick={() => handleDelete(story._id)}
              className="text-red-600"
            >
              حذف
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
