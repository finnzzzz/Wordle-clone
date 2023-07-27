import React, { useEffect } from "react";

const Key = () => {
  const handleKeyboard = (e: any) => {
    console.log(e);
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return <div>Key</div>;
};

export default Key;
