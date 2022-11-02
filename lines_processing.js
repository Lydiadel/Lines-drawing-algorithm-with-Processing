// Lydia Delgado Uriarte

function setup() {
    createCanvas(450, 450);
  }
  
  function draw() {
    background(220);
    noSmooth();
    strokeWeight(2);
    
    // Case 1 (1,2),  (100,20)
    draw_line(1,2,100,20);
     
    //Case 2 (10,200), (50,10)
    draw_line(10,200,50,10);
    
    // Case 3 (300,300), (10,10)
    draw_line(300,300,10,10);
    
    // Case 4 (200,300), (250,50)
    draw_line(200,300,250,50);
    
    // Case 5(350,350), (100, 300)
    draw_line(350,350,100,300);
    
  }
  
  function draw_line(x1, y1, x2, y2) {
      // Iterators, counters required by algorithm
      let x, y, dx, dy, dx1, dy1, px, py, xe, ye, i;
      // Calculate line deltas
      dx = x2 - x1;
      dy = y2 - y1;
      // Create a positive copy of deltas (makes iterating easier)
      dx1 = Math.abs(dx);
      dy1 = Math.abs(dy);
      // Calculate error intervals for both axis
      px = 2 * dy1 - dx1;
      py = 2 * dx1 - dy1;
      // The line is X-axis dominant
      if (dy1 <= dx1) {
          // Line is drawn left to right
          if (dx >= 0) {
              x = x1; y = y1; xe = x2;
          } else { // Line is drawn right to left (swap ends)
              x = x2; y = y2; xe = x1;
          }
          point(x, y); 

          for (i = 0; x < xe; i++) {
              x = x + 1;
              // Take in count octants
              if (px < 0) {
                  px = px + 2 * dy1;
              } else {
                  if ((dx < 0 && dy < 0) || (dx > 0 && dy > 0)) {
                      y = y + 1;
                  } else {
                      y = y - 1;
                  }
                  px = px + 2 * (dy1 - dx1);
              }
            
              point(x, y);
          }
      } else { // The line is Y-axis dominant
          // Line is drawn bottom to top
          if (dy >= 0) {
              x = x1; y = y1; ye = y2;
          } else { // Line is drawn top to bottom
              x = x2; y = y2; ye = y1;
          }
          point(x, y); 

          for (i = 0; y < ye; i++) {
              y = y + 1;
              // Take in count octant
              if (py <= 0) {
                  py = py + 2 * dx1;
              } else {
                  if ((dx < 0 && dy<0) || (dx > 0 && dy > 0)) {
                      x = x + 1;
                  } else {
                      x = x - 1;
                  }
                  py = py + 2 * (dx1 - dy1);
              }
              point(x, y);
          }
      }
  
  }
  
  