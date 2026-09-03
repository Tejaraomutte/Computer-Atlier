import { Search as SearchIcon } from "lucide-react";

export default function Search({ value, onChange, placeholder = "Search..." }) {
  return (
    <label className="search-box">
      <SearchIcon size={16} />
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
    </label>
  );
}
