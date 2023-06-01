import React, { useEffect, useRef } from 'react';
import Lost from './Lost'
import { Link } from 'react-router-dom';

function Man({ incorrectGuesses }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the rope
    const ropeStartX = 100;
    const ropeStartY = -20;
    const ropeEndX = 100;
    const ropeEndY = 20;
    context.beginPath();
    context.moveTo(ropeStartX, ropeStartY);
    context.lineTo(ropeEndX, ropeEndY);
    context.stroke();

    if (incorrectGuesses) {
      // Draw the head
      if (incorrectGuesses.length >= 1) {
        const headRadius = 20;
        const headX = 100;
        const headY = 40;
        context.beginPath();
        context.arc(headX, headY, headRadius, 0, 2 * Math.PI);
        context.stroke();
      }

      // Draw the body
      if (incorrectGuesses.length >= 2) {
        const bodyStartX = 100;
        const bodyStartY = 60;
        const bodyEndX = 100;
        const bodyEndY = 110;
        context.beginPath();
        context.moveTo(bodyStartX, bodyStartY);
        context.lineTo(bodyEndX, bodyEndY);
        context.stroke();
      }

      // Draw the left hand
      if (incorrectGuesses.length >= 3) {
        const leftHandStartX = 80;
        const leftHandStartY = 70;
        const leftHandEndX = 100;
        const leftHandEndY = 90;
        context.beginPath();
        context.moveTo(leftHandStartX, leftHandStartY);
        context.lineTo(leftHandEndX, leftHandEndY);
        context.stroke();
      }

      // Draw the right hand
      if (incorrectGuesses.length >= 4) {
        const rightHandStartX = 120;
        const rightHandStartY = 70;
        const rightHandEndX = 100;
        const rightHandEndY = 90;
        context.beginPath();
        context.moveTo(rightHandStartX, rightHandStartY);
        context.lineTo(rightHandEndX, rightHandEndY);
        context.stroke();
      }

      // Draw the left leg (reversed and elevated)
      if (incorrectGuesses.length >= 5) {
        const leftLegStartX = 90;
        const leftLegStartY = 150;
        const leftLegEndX = 100;
        const leftLegEndY = 110;
        context.beginPath();
        context.moveTo(leftLegStartX, leftLegStartY);
        context.lineTo(leftLegEndX, leftLegEndY);
        context.stroke();
      }

      // Draw the right leg (reversed and elevated)
      if (incorrectGuesses.length >= 6) {
        const rightLegStartX = 110;
        const rightLegStartY = 150;
        const rightLegEndX = 100;
        const rightLegEndY = 110;
        context.beginPath();
        context.moveTo(rightLegStartX, rightLegStartY);
        context.lineTo(rightLegEndX, rightLegEndY);
        context.stroke();

            // Player lost the game
            console.log("You lost, geek");
            window.location.href = "/lost"

           
          
      }
    }
  }, [incorrectGuesses]);

  return (
    <canvas ref={canvasRef} className="man" width={200} height={200} />
  );
}

export default Man;

