import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Input extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.props.onValueChange(e.target.value);
  }
  render(){
    const valor = this.props.valor;
    return(
      <fieldset>
        <input  value={valor} onChange={this.handleChange} placeholder ={this.props.variavel}/>{this.props.x}{this.props.sinal}</fieldset>
    )
  }
}
class Bhaskara extends React.Component{
  constructor(props) {
    super(props);
    this.handleAChange = this.handleAChange.bind(this);
    this.handleBChange = this.handleBChange.bind(this);
    this.handleCChange = this.handleCChange.bind(this);
    this.handleRChange = this.handleRChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {A: '', B: '', C: '', R: ''};
  }

  handleAChange(valorA) {
    this.setState({A: valorA});
  }
  handleBChange(valorB) {
    this.setState({B: valorB});
  }
  handleCChange(valorC) {
    this.setState({C: valorC});
  }
  handleRChange(valorR){
    this.setState({R: valorR})
  }
  handleSubmit(event){
    this.handleRChange(calcular(this.state.A,this.state.B,this.state.C));
    event.preventDefault();
  }
  render(){
    const A = this.state.A;
    const B = this.state.B;
    const C = this.state.C;
    return(
      <div>
		  <h1>CALCULADORA DE BHASKARA</h1>
		  <form onSubmit={this.handleSubmit}>
			  <Input valor={A} onValueChange={this.handleAChange} variavel={'a'} x={'x²'} sinal={'+'}/>
			  <Input valor={B} onValueChange={this.handleBChange} variavel={'b'} x={'x'} sinal={'+'}/>
			  <Input valor={C} onValueChange={this.handleCChange} variavel={'c'} x={''} sinal={''}/>
			  <input type="submit" value="Enviar" />
		  </form>
		  {this.state.R}
      </div>
    )
  }
}
function calcular(A, B, C){
  var resultado = document.getElementById('resultado');
  if(isNaN(A) || isNaN(B) || isNaN(C)){
    return 'Insira apenas valores numéricos';
  }
  var raizdelta = (B*B - 4*A*C);
  if(raizdelta<0){
    return 'A equação não possuí raízes reais'
  }
  raizdelta = Math.sqrt(raizdelta);
  var x1 = (-B + raizdelta)/(2.0*A);
  var x2 = (-B - raizdelta)/(2.0*A);
  return `x1: ${x1} x2: ${x2}`
}
ReactDOM.render(
  <Bhaskara/>,
  document.getElementById('root')
);