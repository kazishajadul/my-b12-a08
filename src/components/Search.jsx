import { useState } from "react";

export default function Search({ onSearch }) {
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
    };

    return (
        <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search apps..."
            className="w-full sm:w-64 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
    );
}


