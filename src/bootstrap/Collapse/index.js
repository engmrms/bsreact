import React from 'react';

export default function BSCollapse() {
  return (
    <div className="py-2">
      <button className="btn btn-primary" data-bs-target="#collapseTarget" data-bs-toggle="collapse">
        Toggle collapse
      </button>
      <div className="collapse" id="collapseTarget">
        This is the toggle-able content!
      </div>
    </div>
  );
}
