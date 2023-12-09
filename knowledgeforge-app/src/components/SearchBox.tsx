import React, { ReactElement, useRef } from "react";

type Props = {
  onSearch: (query: string) => void;
};

export default (props: Props): ReactElement => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const searchHandler = () => {
    const query: string = inputRef.current ? inputRef.current.value : "";
    props.onSearch(query);
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button type="submit" onClick={searchHandler} className="bg-light_blue">
        Search
      </button>
    </div>
  );
};
