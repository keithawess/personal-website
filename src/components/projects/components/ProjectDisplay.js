import React from "react";

function ProjectDisplay({ img, title, description, link }) {
  return (
    <a className="text-plain text-black flex-half margin-5 border border-rad-5 shadow min-width-300 max-width-380" title="Click to open in new tab." target="_blank" href={link}>
      <div className="flex col align-items-center">
        <div className="text-center">
          <strong>{title}</strong>
        </div>
        <img className="max-height-200" alt={`${title} thumbnail`} src={img} />
        <div className="text-center text-small">{description}</div>
      </div>
    </a>
  );
}

export default ProjectDisplay;
