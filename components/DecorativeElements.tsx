import React from 'react';

const DecorativeElements = () => {
  return (
    <div className="decorative-elements">
      {/* Top left elements */}
      <div className="absolute top-0 left-0">
        <div className="grid grid-cols-3 gap-1">
          <div className="w-12 h-12 bg-shreehari-orange rounded-sm" />
          <div className="w-12 h-12 bg-shreehari-lightblue rounded-sm" />
          <div className="w-12 h-12 bg-shreehari-purple rounded-sm" />
          <div className="w-12 h-12 bg-shreehari-teal rounded-sm" />
          <div className="w-12 h-12 bg-shreehari-pink rounded-sm" />
          <div className="w-12 h-12 bg-shreehari-mint rounded-sm" />
          <div className="w-12 h-12 rounded-full bg-shreehari-beige" />
          <div className="w-12 h-12 bg-shreehari-purple rounded-sm" />
          <div className="w-12 h-12 rounded-full bg-shreehari-orange" />
        </div>
      </div>

      {/* Top right elements */}
      <div className="absolute top-0 right-0">
        <div className="grid grid-cols-3 gap-1">
          <div className="w-12 h-12 bg-shreehari-mint rounded-sm" />
          <div className="w-12 h-12 bg-shreehari-purple rounded-sm" />
          <div className="w-12 h-12 bg-shreehari-teal rounded-sm" />
          <div className="w-12 h-12 bg-shreehari-orange rounded-sm" />
          <div className="w-12 h-12 bg-shreehari-lightblue rounded-sm" />
          <div className="w-12 h-12 rounded-full bg-shreehari-beige" />
          <div className="w-12 h-12 bg-shreehari-pink rounded-sm" />
          <div className="w-12 h-12 rounded-full bg-shreehari-orange" />
          <div className="w-12 h-12 bg-shreehari-purple rounded-sm" />
        </div>
      </div>
    </div>
  );
};

export default DecorativeElements;
