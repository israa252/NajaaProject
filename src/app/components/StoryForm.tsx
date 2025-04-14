"use client";
import { useState } from "react";

export default function StoryForm() {
  const [story, setStory] = useState("");

  const handleSubmit = async () => {
    // إرسال البيانات إلى API (سيتم إضافته لاحقًا)
    console.log("تمت إضافة القصة:", story);
  };

  return (
    <div className="space-y-4">
      <textarea
        value={story}
        onChange={(e) => setStory(e.target.value)}
        className="w-full h-48 p-3 border rounded"
        placeholder="اكتب قصتك هنا..."
      />
      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        نشر القصة
      </button>
    </div>
  );
}
