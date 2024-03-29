import React from "react";
import useCatSprite from "../hooks/useCatSprite";
import CatSprite from "./CatSprite";
import Icon from "./Icon";

export default function PreviewArea() {
  const { onFlagClicked, replay } = useCatSprite();

  return (
    <div className="flex flex-col p-4">
      <div className="flex items-center">
      <img
        onClick={onFlagClicked}
        className="w-10 h-10 "
        draggable="false"
        src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNi42MyAxNy41Ij48ZGVmcz48c3R5bGU+LmNscy0xLC5jbHMtMntmaWxsOiM0Y2JmNTY7c3Ryb2tlOiM0NTk5M2Q7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uY2xzLTJ7c3Ryb2tlLXdpZHRoOjEuNXB4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+aWNvbi0tZ3JlZW4tZmxhZzwvdGl0bGU+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNLjc1LDJBNi40NCw2LjQ0LDAsMCwxLDguNDQsMmgwYTYuNDQsNi40NCwwLDAsMCw3LjY5LDBWMTIuNGE2LjQ0LDYuNDQsMCwwLDEtNy42OSwwaDBhNi40NCw2LjQ0LDAsMCwwLTcuNjksMCIvPjxsaW5lIGNsYXNzPSJjbHMtMiIgeDE9IjAuNzUiIHkxPSIxNi43NSIgeDI9IjAuNzUiIHkyPSIwLjc1Ii8+PC9zdmc+"
        title="Go"
      ></img>
      <button onClick={onFlagClicked}>
      <Icon name="undo" size={30} className="text-green mx-2" />
      </button>
      </div>
      <div className="flex-none h-full w-full overflow-y-auto p-2 mt-5">
        <CatSprite />
      </div>
    </div>
  );
}
