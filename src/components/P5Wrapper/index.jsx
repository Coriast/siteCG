import p5 from 'p5';
import "../../styles/App.css";
import {useEffect, useRef} from "react";
import {objectiveMatrix, transformMatrix} from "../../pages/Exercises/Transformations/formulas.js";
import {correct} from "../../pages/Exercises/Transformations/page.jsx";
import robotoMono from '../../assets/fonts/RobotoMono.ttf';

let canvasRef;
let size = 7;
let sizeProj = size + 0.5;
let proj = {
  left: -sizeProj,
  right: sizeProj,
  bottom: sizeProj,
  top: -sizeProj,
  near: 0,
  far: 10
}
let quad = [[0, 0, 0, 1], [1, 0, 0, 1], [1, 1, 0, 1], [0, 1, 0, 1]];
let quadColor = 'rgba(210, 43, 43, 0.9)';
let objectiveColor = 'rgba(34, 139, 34, 0.75)';

function transpose(arr) {
  let res = arr[0].map((_, colI) => arr.map(row => row[colI]));
  return res.flat();
}
function drawQuad(p) {
  p.fill(correct ? objectiveColor : quadColor);
  p.noStroke();
  p.applyMatrix(transpose(transformMatrix));
  p.beginShape();
  quad.map((v) => {
    p.vertex(v[0], v[1], v[2]);
  })
  p.endShape();
  p.resetMatrix();
}

function drawObjective(p) {
  p.noFill();
  p.stroke(objectiveColor);
  p.applyMatrix(transpose(objectiveMatrix)); //
  p.beginShape();
  quad.map((v) => {
    p.vertex(v[0], v[1], v[2]);
  })
  p.endShape(p.CLOSE);
  p.resetMatrix();
}

function drawCoords(p) {
  // Linhas e traços
  p.strokeWeight(0.05);
  p.stroke('red');
  p.beginShape(p.LINES);
  p.vertex(proj.left, 0);
  p.vertex(proj.right, 0);
  for (let i = -size; i <= size; i++) {
    if(i === 0)
      continue;
    p.vertex(i, 0);
    p.vertex(i, -0.1);
  }
  p.endShape();

  p.stroke('green');
  p.beginShape(p.LINES);
  p.vertex(0, proj.top);
  p.vertex(0, proj.bottom);
  for (let i = -size; i <= size; i++) {
    if(i === 0)
      continue;
    p.vertex(0, i);
    p.vertex(-0.1, i);
  }
  p.endShape();

  // Numeros
  p.push();
  p.rotateY(180);
  p.fill('black');
  p.text('0', 0.1, -0.5);
  for (let i = -size; i <= size; i++) {
    if (i !== 0)
      p.text(i, -i - 0.1, -0.5);
  }
  for (let i = -size; i <= size; i++) {
    if (i !== 0)
      p.text(i, 0.2, i - 0.2);
  }
  p.pop();
}
const canvas = (p) => {
  let font;
  p.preload = () => {
    font = p.loadFont(robotoMono);
  }

  p.setup = () => {
    p.createCanvas(canvasRef.current.offsetWidth, canvasRef.current.offsetHeight, p.WEBGL); //
    p.ortho(proj.left, proj.right, proj.bottom, proj.top, proj.near, proj.far);
    p.textFont(font);
    p.textSize(-0.3);
    p.textAlign(p.RIGHT, p.BOTTOM);
    p.angleMode(p.DEGREES);
  }

  p.draw = () => {
    p.camera(0, 0, 1);
    p.background(235);

    drawCoords(p);
    drawQuad(p);
    drawObjective(p);
  }

  p.windowResized = () => {
    const aspect = (canvasRef.current.offsetWidth < canvasRef.current.offsetHeight) ? canvasRef.current.offsetWidth : canvasRef.current.offsetHeight;
    p.resizeCanvas(aspect, aspect); //
  }
}
export default function P5Wrapper() {
  canvasRef = useRef(null);
  let render;

  useEffect(() => {

    if(typeof window !== 'undefined')
      render = new p5(canvas, canvasRef.current);

    return () => {
      render.remove();
    }
  }, []);
  return (
    <>
      <div className="exercise_canvas" ref={canvasRef}/>
    </>
  )
}