"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// EXEMPLO
var Carro = function Carro(finalPlaca, cor) {
  _classCallCheck(this, Carro);

  this.finalPlaca = finalPlaca;
  this.cor = cor;
};

var Vw =
/*#__PURE__*/
function (_Carro) {
  _inherits(Vw, _Carro);

  function Vw(finalPlaca, cor, modelo, ano) {
    var _this;

    _classCallCheck(this, Vw);

    _this.modelo = modelo;
    _this.ano = ano;
    return _possibleConstructorReturn(_this);
  }

  return Vw;
}(Carro);

var car1 = new Vw(7, 'Vermelho', 'Vw Gol', 2020);
