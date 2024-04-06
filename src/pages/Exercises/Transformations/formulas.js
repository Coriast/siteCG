
export let transformMatrix = [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
]

export let objectiveMatrix = [
  [1, 0, 0, 4],
  [0, 1, 0, 2],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
]

export const identityMatrix = `
\\begin{bmatrix}
\\; \\color{BrickRed}1 & \\color{BrickRed}0 & \\color{BrickRed}0 & \\color{BrickRed}0 \\; \\\\ 
\\; \\color{LimeGreen}0 & \\color{LimeGreen}1 & \\color{LimeGreen}0 & \\color{LimeGreen}0 \\; \\\\ 
\\; \\color{Cerulean}0 & \\color{Cerulean}0 & \\color{Cerulean}1 & \\color{Cerulean}0 \\; \\\\ 
\\; \\color{magenta}0 & \\color{magenta}0 & \\color{magenta}0 & \\color{magenta}1 \\;
\\end{bmatrix}
`;

export const vector = `
\\begin{bmatrix} \\; 1 \\; \\\\ \\; 2 \\; \\\\ \\; 3 \\; \\\\ \\; 4 \\; \\end{bmatrix}
`;

export const xyzVector = `
\\begin{pmatrix} \\; x \\; \\\\ \\; y \\; \\\\ \\; z \\; \\\\ \\; 1 \\; \\end{pmatrix}
`;

export const multiVector = `
\\begin{bmatrix} \\; \\color{BrickRed}1 \\cdot 1 \\; \\\\ 
\\; \\color{LimeGreen}1 \\cdot 2 \\; \\\\ 
\\; \\color{Cerulean}1 \\cdot 3 \\; \\\\
\\; \\color{magenta}1 \\cdot 4 \\; \\end{bmatrix}
`;

export const scaleMatrix = `
\\begin{bmatrix}
\\; \\color{BrickRed}{S_1} & \\color{BrickRed}0 & \\color{BrickRed}0 & \\color{BrickRed}0 \\; \\\\ 
\\; \\color{LimeGreen}0 & \\color{LimeGreen}{S_2} & \\color{LimeGreen}0 & \\color{LimeGreen}0 \\; \\\\ 
\\; \\color{Cerulean}0 & \\color{Cerulean}0 & \\color{Cerulean}{S_3} & \\color{Cerulean}0 \\; \\\\ 
\\; \\color{magenta}0 & \\color{magenta}0 & \\color{magenta}0 & \\color{magenta}1 \\; 
\\end{bmatrix}
`;

export const multiScale = `
\\begin{pmatrix}\\; \\color{BrickRed}{S_1} \\cdot x\\; \\\\\\; \\color{LimeGreen}{S_2} \\cdot y \\;\\\\\\; \\color{Cerulean}{S_3} \\cdot z\\; \\\\\\; 1 \\;\\end{pmatrix}
`;

export const translateMatrix = `
\\begin{bmatrix}
\\;\\color{BrickRed}1 & \\color{BrickRed}0 & \\color{BrickRed}0 & \\color{BrickRed}{T_1}\\; \\\\ 
\\;\\color{LimeGreen}0 & \\color{LimeGreen}1 & \\color{LimeGreen}0 & \\color{LimeGreen}{T_2}\\; \\\\
\\;\\color{Cerulean}0 & \\color{Cerulean}0 & \\color{Cerulean}1 & \\color{Cerulean}{T_3}\\; \\\\
\\;\\color{magenta}0 & \\color{magenta}0 & \\color{magenta}0 & \\color{magenta}1\\;
\\end{bmatrix}
`;

export const sumTranslate = `
\\begin{pmatrix}\\; \\color{BrickRed}{T_1} + x \\;\\\\\\; \\color{LimeGreen}{T_2} + y\\; \\\\\\; \\color{Cerulean}{T_3} + z \\;\\\\ \\;1 \\;\\end{pmatrix}
`;