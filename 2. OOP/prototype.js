function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
};

// function dalam constructor

  Color.prototype.rgb = function(){
    const { r, g, b} = this;
    return `rgb(${r}, ${g}, ${b});`
  };


