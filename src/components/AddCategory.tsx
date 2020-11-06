import React, { useState } from "react";

type Props = {
  setCategories: Function;
};
const AddCategory: React.FC<Props> = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() === "" && inputValue.length < 2) {
      console.log("form vacio");
      return;
    }
    setCategories((cats: string[]) => [inputValue.trim(), ...cats]);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-3/4 mt-4 mb-4 text-lg leading-tight text-gray-600 border rounded shadow appearance-none focus:outline-none focus:shadow-outline "
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
};
export default AddCategory;
