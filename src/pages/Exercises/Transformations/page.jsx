import "../../../styles/App.css";
import NavTop from "../../../components/NavTop/index.jsx";
import P5Wrapper from "../../../components/P5Wrapper/index.jsx";
import MathJax from "../../../components/MathJax.jsx";
// const P5Wrapper = dynamic(() => import("@/components/P5Wrapper"), {
//   ssr: false,
// })
// const MathJax = dynamic(() => import("@/components/MathJax"), {
//   ssr: false,
// })
import {
  identityMatrix, multiScale, multiVector,
  scaleMatrix, sumTranslate, translateMatrix,
  vector, xyzVector, transformMatrix,
  objectiveMatrix
} from "./formulas.js";

export let correct = false;
function checkIfMatrixEqual(transform, objective) {
  let check = true;
  transform.map((row, colI) => {
    row.map((i, rowI) => {
      console.log(i + ' - ' + objective[colI][rowI] )
      if(i  !== objective[colI][rowI])
        check = false;
    })
  })
  return check;
}

function updateMatrix(e) {
  e.preventDefault();
  if (e.target.value === '')
    return;
  let index = Number(e.target.id);
  const col = Math.floor(index / 4);
  const row = index - (col*4);
  transformMatrix[col][row] = Number(e.target.value);

  correct = checkIfMatrixEqual(transformMatrix, objectiveMatrix);
}

export default function Transformations() {
  return (
    <>
      <MathJax/>
      <NavTop/>

      <div className="exercise_content">
        <div className="exercise_desc">
          <h2>Transformações</h2>
          <p>
            Considerando que até o momento você tenha conseguido renderizar algum objeto estático
            na tela, deve ter surgido o interesse de como manipular ele. Provavelmente alterando
            diretamente os valores dos seus vértices a cada frame, mas essa forma gambiarrenta
            acaba sendo bem custosa para o computador, além de muito trabalhosa.
          </p>
          <p>
            Uma melhor forma de transformar seus objetos é pelo uso de matrizes.
            Caso precise, dê uma revisão no capítulo de Vetores.
          </p>

          <h3>Multiplicação Matriz-Vetor</h3>
          <p>
            Para a aplicação das nossas transformações simplesmente multiplicamos a matriz de
            transformação pelos vetores do objeto.
          </p>

          <h4>Matriz Identidade</h4>
          <p>
            Em OpenGL utilizamos matrizes de transformação 4x4, com uma das razões sendo a
            possibilidade de multiplicar pelos vetores (x, y, z, w) que contém uma coordenada homogênea.
            A matriz de transformação mais simples é a matriz identidade. Sendo uma matriz NxN
            com apenas 0s exceto nas diagonais, sua operação mantém o vértice inalterado.
            <br/>
          </p>

          <div className="math_formulas">
            {identityMatrix}
            <span> &#x22c5; </span>
            {vector}
            <span> = </span>
            {multiVector}
            <span> = </span>
            {vector}
          </div>

          <h4>Escalando</h4>
          <p>
            Quando escalamos um ponto(vetor) estamos aumentando o tamanho da seta que este vetor
            representa pelo tanto que queremos, mantendo sua direção a mesma.
            A matriz que computará nossa escala utiliza como base nossa matriz identidade,
            e pelas regras de multiplicação de matrizes,
            sabemos que os 1s da diagonal serão multiplicados diretamente pelo seu elemento
            correspondente no vetor. <br/>
            Representando nossas variáveis de escala
            por {"$(\\; \\color{BrickRed}{S_x},\\; \\color{LimeGreen}{S_y},\\; \\color{Cerulean}{S_z} \\; $)$\\;$"}
            podemos definir a matriz de escala da seguinte forma:
          </p>
          <div className="math_formulas">
            {scaleMatrix}
            <span> &#x22c5; </span>
            {xyzVector}
            <span> = </span>
            {multiScale}
          </div>

          <h4>Transladando</h4>
          <p>
            Transladar é o processo de adicionar outro vetor ao seu original para retornar um com uma
            posição diferente, assim movendo-o baseado no vetor de translação.
            Assim como na escala, representamos nosso vetor de translação
            por {"$(\\; \\color{BrickRed}{T_x},\\; \\color{LimeGreen}{T_y},\\; \\color{Cerulean}{T_z} \\;$)$\\;$"}
            e o definimos na matriz da seguinte forma:
          </p>
          <div className="math_formulas">
            {translateMatrix}
            <span> &#x22c5; </span>
            {xyzVector}
            <span> = </span>
            {sumTranslate}
          </div>
          <p>
            Isso funciona por causa que todos os valores T são multiplicados pela coluna w do vetor
            e adicionados ao vetor original, seguindo as regras da multiplicação de matrizes.
            Isso não seria possível com uma matrix 3 por 3. <br/>
            Com a matriz de translação podemos mover o objeto em qualquer direção (x, y, z).
          </p>

          {/*<h4>Rotação</h4>*/}
          {/*<p>*/}
          {/*  */}
          {/*</p>*/}

          <h4>Em prática</h4>
          <p>
            Explicado a teoria por trás destas transformações, agora você pode manipular
            diretamente a matriz identidade e visualizar em tempo real seu efeito ao lado.
          </p>

          <h5>Prática 1</h5>
          <p>
            Tente transformar o cubo vermelho até o local traçejado em verde utilizando a matriz de transformação abaixo.
          </p>

          <div className="exercise_matrix">
            {
              transformMatrix.map((row, index) => {
                const i = (index * 4);
                return (
                  <div key={index}>
                    <input type="number" id={i} defaultValue={row[0]} onChange={updateMatrix}/>
                    <input type="number" id={i + 1} defaultValue={row[1]} onChange={updateMatrix}/>
                    <input type="number" id={i + 2} defaultValue={row[2]} onChange={updateMatrix}/>
                    <input type="number" id={i + 3} defaultValue={row[3]} onChange={updateMatrix}/>
                    <br/>
                  </div>
                )
              })
            }
          </div>
        </div>

        <P5Wrapper />
      </div>
    </>
  )
}