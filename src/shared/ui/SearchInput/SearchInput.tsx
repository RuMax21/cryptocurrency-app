import type { SearchInputProps } from "./types";

export const SearchInput = ({className, placeholder='Search..', onSearch}: SearchInputProps) => (
    <input
      className={className}
      placeholder={placeholder}
      onChange={(e) => onSearch(e.target.value)}
    />
);
