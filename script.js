function draw() {
  const box1 = document.getElementById("box1");
  const box2 = document.getElementById("box2")
  const box3 = document.getElementById("box3")
  const box4 = document.getElementById("box4")
  const box5 = document.getElementById("box5")
  const box6 = document.getElementById("box6")
  const box7 = document.getElementById("box7")
  const box8 = document.getElementById("box8")
  if (box1.getContext) {
    const ctx = box1.getContext("2d");

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    // RED

    ctx.fillStyle = "rgb(200 0 0 / 50%)";
    ctx.fillRect(10, 10, 100, 100)
    
    ctx.fillStyle = "rgb(200 0 0 / 50%)";
    ctx.fillRect(110, 110, 100, 100)
    
    ctx.fillStyle = "rgb(200 0 0 / 50%)";
    ctx.fillRect(210, 210, 100, 100)
    
    ctx.fillStyle = "rgb(200 0 0 / 50%)";
    ctx.fillRect(210, 10, 100, 100)
    
    ctx.fillStyle = "rgb(200 0 0 / 50%)";
    ctx.fillRect(10, 210, 100, 100)
    
    // BLUE
    
    ctx.fillStyle = "rgb(0 0 200 / 50%)";
    ctx.fillRect(60, 60, 100, 100);

    ctx.fillStyle = "rgb(0 0 200 / 50%)";
    ctx.fillRect(160, 160, 100, 100);

    ctx.fillStyle = "rgb(0 0 200 / 50%)";
    ctx.fillRect(160, 10, 100, 50);

    ctx.fillStyle = "rgb(0 0 200 / 50%)";
    ctx.fillRect(260, 60, 50, 100);

    ctx.fillStyle = "rgb(0 0 200 / 50%)";
    ctx.fillRect(10, 160, 50, 100);

    ctx.fillStyle = "rgb(0 0 200 / 50%)";
    ctx.fillRect(60, 260, 100, 50);

    ctx.fillStyle = "rgb(0 0 200 / 50%)";
    ctx.fillRect(260, 260, 50, 50);

    ctx.fillStyle = "rgb(0 0 200 / 50%)";
    ctx.fillRect(10, 10, 50, 50);

    function drawLine(ctx, x1, y1, x2, y2) {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      }

      //SINGLE LINE

      // BOX
      drawLine(ctx, 10, 10, 310, 10)
      drawLine(ctx, 310, 10, 310, 310)
      drawLine(ctx, 310, 310, 10, 310)
      drawLine(ctx, 10, 310, 10, 10)
      
      drawLine(ctx, 10, 10, 310, 310)
      drawLine(ctx, 310, 10, 10, 310)

      // Clear rectangle
      // ctx.clearRect(155, 155, 10, 10);

      // Top Side
      drawLine(ctx, 10, 310, 310, 10);
      drawLine(ctx, 10, 10, 310, 310);
      drawLine(ctx, 15, 15, 165, 155);
      drawLine(ctx, 20, 20, 170, 150);
      drawLine(ctx, 25, 25, 175, 145);
      drawLine(ctx, 30, 30, 180, 140);
      drawLine(ctx, 35, 35, 185, 135);
      drawLine(ctx, 40, 40, 190, 130);
      drawLine(ctx, 45, 45, 195, 125);
      drawLine(ctx, 50, 50, 200, 120);
      drawLine(ctx, 55, 55, 205, 115);
      drawLine(ctx, 60, 60, 210, 110);
      drawLine(ctx, 65, 65, 215, 105);
      drawLine(ctx, 70, 70, 220, 100);
      drawLine(ctx, 75, 75, 225, 95);
      drawLine(ctx, 80, 80, 230, 90);
      drawLine(ctx, 85, 85, 235, 85);
      drawLine(ctx, 90, 90, 240, 80);
      drawLine(ctx, 95, 95, 245, 75);
      drawLine(ctx, 100, 100, 250, 70);
      drawLine(ctx, 105, 105, 255, 65);
      drawLine(ctx, 110, 110, 260, 60);
      drawLine(ctx, 115, 115, 265, 55);
      drawLine(ctx, 120, 120, 270, 50);
      drawLine(ctx, 125, 125, 275, 45);
      drawLine(ctx, 130, 130, 280, 40);
      drawLine(ctx, 135, 135, 285, 35);
      drawLine(ctx, 140, 140, 290, 30);
      drawLine(ctx, 145, 145, 295, 25);
      drawLine(ctx, 150, 150, 300, 20);
      drawLine(ctx, 155, 155, 305, 15);

      // Right Side

      drawLine(ctx, 305, 15, 165, 165);
      drawLine(ctx, 300, 20, 170, 170);
      drawLine(ctx, 295, 25, 175, 175);
      drawLine(ctx, 290, 30, 180, 180);
      drawLine(ctx, 285, 35, 185, 185);
      drawLine(ctx, 280, 40, 190, 190);
      drawLine(ctx, 275, 45, 195, 195);
      drawLine(ctx, 270, 50, 200, 200);
      drawLine(ctx, 265, 55, 205, 205);
      drawLine(ctx, 260, 60, 210, 210);
      drawLine(ctx, 255, 65, 215, 215);
      drawLine(ctx, 250, 70, 220, 220);
      drawLine(ctx, 245, 75, 225, 225);
      drawLine(ctx, 240, 80, 230, 230);
      drawLine(ctx, 235, 85, 235, 235);
      drawLine(ctx, 230, 90, 240, 240);
      drawLine(ctx, 225, 95, 245, 245);
      drawLine(ctx, 220, 100, 250, 250);
      drawLine(ctx, 215, 105, 255, 255);
      drawLine(ctx, 210, 110, 260, 260);
      drawLine(ctx, 205, 115, 265, 265);
      drawLine(ctx, 200, 120, 270, 270);
      drawLine(ctx, 195, 125, 275, 275);
      drawLine(ctx, 190, 130, 280, 280);
      drawLine(ctx, 185, 135, 285, 285);
      drawLine(ctx, 180, 140, 290, 290);
      drawLine(ctx, 175, 145, 295, 295);
      drawLine(ctx, 170, 150, 300, 300);
      drawLine(ctx, 165, 155, 305, 305);
    
      // Bottom Side

      drawLine(ctx, 305, 305, 155, 165)
      drawLine(ctx, 300, 300, 150, 170)
      drawLine(ctx, 295, 295, 145, 175)
      drawLine(ctx, 290, 290, 140, 180);
      drawLine(ctx, 285, 285, 135, 185);
      drawLine(ctx, 280, 280, 130, 190);
      drawLine(ctx, 275, 275, 125, 195);
      drawLine(ctx, 270, 270, 120, 200);
      drawLine(ctx, 265, 265, 115, 205);
      drawLine(ctx, 260, 260, 110, 210);
      drawLine(ctx, 255, 255, 105, 215);
      drawLine(ctx, 250, 250, 100, 220);
      drawLine(ctx, 245, 245, 95, 225);
      drawLine(ctx, 240, 240, 90, 230);
      drawLine(ctx, 235, 235, 85, 235);
      drawLine(ctx, 230, 230, 80, 240);
      drawLine(ctx, 225, 225, 75, 245);
      drawLine(ctx, 220, 220, 70, 250);
      drawLine(ctx, 215, 215, 65, 255);
      drawLine(ctx, 210, 210, 60, 260);
      drawLine(ctx, 205, 205, 55, 265);
      drawLine(ctx, 200, 200, 50, 270);
      drawLine(ctx, 195, 195, 45, 275);
      drawLine(ctx, 190, 190, 40, 280);
      drawLine(ctx, 185, 185, 35, 285);
      drawLine(ctx, 180, 180, 30, 290);
      drawLine(ctx, 175, 175, 25, 295);
      drawLine(ctx, 170, 170, 20, 300);
      drawLine(ctx, 165, 165, 15, 305);
      
      // Left Side
      
      drawLine(ctx, 15, 305, 155, 155);
      drawLine(ctx, 20, 300, 150, 150);
      drawLine(ctx, 25, 295, 145, 145);
      drawLine(ctx, 30, 290, 140, 140);
      drawLine(ctx, 35, 285, 135, 135);
      drawLine(ctx, 40, 280, 130, 130);
      drawLine(ctx, 45, 275, 125, 125);
      drawLine(ctx, 50, 270, 120, 120);
      drawLine(ctx, 55, 265, 115, 115);
      drawLine(ctx, 60, 260, 110, 110);
      drawLine(ctx, 65, 255, 105, 105);
      drawLine(ctx, 70, 250, 100, 100);
      drawLine(ctx, 75, 245, 95, 95);
      drawLine(ctx, 80, 240, 90, 90);
      drawLine(ctx, 85, 235, 85, 85);
      drawLine(ctx, 90, 230, 80, 80);
      drawLine(ctx, 95, 225, 75, 75);
      drawLine(ctx, 100, 220, 70, 70);
      drawLine(ctx, 105, 215, 65, 65);
      drawLine(ctx, 110, 210, 60, 60);
      drawLine(ctx, 115, 205, 55, 55);
      drawLine(ctx, 120, 200, 50, 50);
      drawLine(ctx, 125, 195, 45, 45);
      drawLine(ctx, 130, 190, 40, 40);
      drawLine(ctx, 135, 185, 35, 35);
      drawLine(ctx, 140, 180, 30, 30);
      drawLine(ctx, 145, 175, 25, 25);
      drawLine(ctx, 150, 170, 20, 20);
      drawLine(ctx, 155, 165, 15, 15);
  }
  if (box2.getContext) {
    const ctx2 = box2.getContext("2d");
    const gradient = ctx2.createConicGradient(160, 160, 0);

    ctx2.strokeStyle = "black";
    ctx2.lineWidth = 5;

    
    ctx2.beginPath();
    gradient.addColorStop(0, "red");
    gradient.addColorStop(0.25, "orange");
    gradient.addColorStop(0.5, "yellow");
    gradient.addColorStop(0.75, "green");
    gradient.addColorStop(1, "blue");
    ctx2.strokeStyle = gradient; // Set the stroke style to the gradient
    ctx2.arc(160, 160, 150, 0, Math.PI * 2, true); // Outer circle
    ctx2.moveTo(270, 160);
    ctx2.arc(160, 160, 110, 0, Math.PI, false); // Mouth (clockwise)
    ctx2.moveTo(140, 145);
    ctx2.arc(135, 145, 5, 0, Math.PI * 2, true); // Left eye
    ctx2.moveTo(195, 145);
    ctx2.arc(190, 145, 5, 0, Math.PI * 2, true); // Right eye
    ctx2.stroke();

  }
  if (box3.getContext) {

    const ctx = box3.getContext("2d");
    const sideLength = 100;
    const height = sideLength * Math.sqrt(3) / 2; // Calculate the height of the equilateral triangle
    const y = height;
    const y2 = height * 2;
    const y3 = height * 3;
    const y4 = height * 4;

    // box 3

    for (let i = 0; i < 5; i++) {
      const x = i * 100; // Calculate the x-coordinate for each set of triangles

      // First Row
      // Outer Triangle for first row

      ctx.beginPath();
      ctx.moveTo(x, 0); 
      ctx.lineTo(x + 50, height); 
      ctx.lineTo(x + 100, 0);
      ctx.closePath();
      ctx.fillStyle = "black"; 
      ctx.fill(); 

      // Inner triangle for first row

      ctx.beginPath(); 
      ctx.moveTo(x + 50, 0);
      ctx.lineTo(x + 25, height/2);
      ctx.lineTo(x + 75, height/2);
      ctx.closePath();
      ctx.fillStyle = "teal";
      ctx.fill();

      // Second Row
          
      // Outer Triangle for second row
      ctx.beginPath();
      ctx.moveTo(x, y); 
      ctx.lineTo(x + 50, y + height); 
      ctx.lineTo(x + 100, y); 
      ctx.closePath(); 
      ctx.fillStyle = "teal"; 
      ctx.fill(); 

      // Inner Triangle for second row
      ctx.beginPath(); 
      ctx.moveTo(x + 50, y);
      ctx.lineTo(x + 25, y + height/2);
      ctx.lineTo(x + 75, y + height/2);
      ctx.closePath(); 
      ctx.fillStyle = "black"; 
      ctx.fill(); 

      // Third Row

      // Outer Triangle for third row
      ctx.beginPath();
      ctx.moveTo(x, y2); 
      ctx.lineTo(x + 50, y2 + height);
      ctx.lineTo(x + 100, y2); 
      ctx.closePath(); 
      ctx.fillStyle = "black"; 
      ctx.fill(); 

      // Inner Triangle for third row
      ctx.beginPath(); 
      ctx.moveTo(x + 50, y2);
      ctx.lineTo(x + 25, y2 + height / 2);
      ctx.lineTo(x + 75, y2 + height / 2);
      ctx.closePath(); 
      ctx.fillStyle = "teal"; 
      ctx.fill(); 

      // Fourth Row

      // Outer Triangle for fourth row
      ctx.beginPath();
      ctx.moveTo(x, y3); 
      ctx.lineTo(x + 50, y3 + height);
      ctx.lineTo(x + 100, y3); 
      ctx.closePath(); 
      ctx.fillStyle = "teal"; 
      ctx.fill(); 

      // Inner Triangle for fourth row
      ctx.beginPath(); 
      ctx.moveTo(x + 50, y3);
      ctx.lineTo(x + 25, y3 + height / 2);
      ctx.lineTo(x + 75, y3 + height / 2);
      ctx.closePath(); 
      ctx.fillStyle = "black"; 
      ctx.fill(); 

      // Fifth Row

      // Outer Triangle for fifth row
      ctx.beginPath();
      ctx.moveTo(x, y4); 
      ctx.lineTo(x + 50, y4 + height);
      ctx.lineTo(x + 100, y4); 
      ctx.closePath(); 
      ctx.fillStyle = "black"; 
      ctx.fill(); 

      // Inner Triangle for fifth row
      ctx.beginPath(); 
      ctx.moveTo(x + 50, y4);
      ctx.lineTo(x + 25, y4 + height / 2);
      ctx.lineTo(x + 75, y4 + height / 2);
      ctx.closePath(); 
      ctx.fillStyle = "teal"; 
      ctx.fill(); 

    }
  }  
  if (box4.getContext) {
    const ctx = box4.getContext("2d");
    for (let i = 0; i < 16; i++) {
      for (let j = 0; j < 16; j++) {
        ctx.fillStyle = `rgb(
          ${Math.floor(255 - 42.5 * i)}
          ${Math.floor(255 - 42.5 * j)}
          0)`;
          ctx.fillRect(j * 25, i * 25, 20, 20);
      }
    }
  }
  if (box5.getContext) {
    const ctx = box5.getContext("2d");
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 20; j++) {
        ctx.strokeStyle = `rgb(
          0
          ${Math.floor(255 - 42.5 * i)}
          ${Math.floor(255 - 42.5 * j)})`;
          ctx.beginPath();
          ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
          ctx.stroke();
        }
      }
    }
  if (box6.getContext) {
    const ctx = box6.getContext("2d")
    // draw background
    ctx.fillStyle = "coral";
    ctx.fillRect(0, 0, 150, 150);
    ctx.fillStyle = "darkseagreen";
    ctx.fillRect(150, 0, 300, 150);
    ctx.fillStyle = "steelblue";
    ctx.fillRect(0, 150, 150, 300);
    ctx.fillStyle = "lemonchiffon";
    ctx.fillRect(150, 150, 300, 300);
    ctx.fillStyle = "#FFF";
    
    // set transparency value
    ctx.globalAlpha = 0.2;
    
    // Draw semi transparent circles
    for (let i = 0; i < 17; i++) {
      ctx.beginPath();
      ctx.arc(150, 150, 10 + 10 * i, 0, Math.PI * 2, true);
      ctx.fill();
    }
  }
  if (box7.getContext) {
    const ctx = box7.getContext("2d");

    // Draw background
    ctx.fillStyle = "aqua";
    ctx.fillRect(0, 0, 320, 80);
    ctx.fillStyle = "darkgreen";
    ctx.fillRect(0, 80, 320, 80);
    ctx.fillStyle = "hotpink";
    ctx.fillRect(0, 160, 320, 80);
    ctx.fillStyle = "firebrick";
    ctx.fillRect(0, 240, 320, 80);

    // Draw semi transparent rectangles
    for (let i = 0; i < 13; i++) {
      ctx.fillStyle = `rgb(255 255 255 / ${(i + 1) / 15})`;
      for (let j = 0; j < 4; j++) {
        ctx.fillRect(15 + i * 24, 3 + j * 80, 40, 74);
      }
    }
  }
  if (box8.getContext) {
    const ctx = box8.getContext("2d");
    ctx.lineWidth = 10;
    ctx.lineJoin = "miter";

    // Create a linear gradient for the background
    const bgGradient = ctx.createLinearGradient(0, 0, box8.width, box8.height);
    bgGradient.addColorStop(0, "blue"); // Start color
    bgGradient.addColorStop(1, "red"); // End color

    // Fill the background with the gradient
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, box8.width, box8.height);

    // Create a gradient for the stroke
    const gradient = ctx.createLinearGradient(0, 0, box8.width, box8.height);
    gradient.addColorStop(0, "red");
    gradient.addColorStop(1, "blue"); 
    ctx.strokeStyle = gradient;

    for (let i = 0; i < 10; i++) {
      ctx.beginPath();
      ctx.moveTo(-5, 5 + i * 40);
      ctx.lineTo(40, 45 + i * 40);
      ctx.lineTo(80, 5 + i * 40);
      ctx.lineTo(120, 45 + i * 40);
      ctx.lineTo(160, 5 + i * 40);
      ctx.lineTo(200, 45 + i * 40);
      ctx.lineTo(240, 5 + i * 40);
      ctx.lineTo(280, 45 + i * 40);
      ctx.lineTo(325, 0 + i * 40);
      ctx.stroke();
    }
  }
}
draw();
