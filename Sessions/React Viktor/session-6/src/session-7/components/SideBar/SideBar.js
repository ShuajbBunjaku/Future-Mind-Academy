import { useState } from "react";

function SideBar() {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <>
      <div className="sidebarDiv">
        <button
          onClick={() => {
            setIsHidden(!isHidden);
          }}
        >
          Toggle
        </button>
        <div>{isHidden ? <div>Hello</div> : <></>}</div>
      </div>
    </>
  );
}

export default SideBar;
