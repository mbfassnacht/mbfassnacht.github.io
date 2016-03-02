var React = require('react');
var ReactDOM = require('react-dom');
var model = require('./descriptionCanvas-model');
var TweenMax = require('gsap');
var THREE = require('three');

var DescriptionCanvas = React.createClass({

	componentDidMount: function() {
		this.container = ReactDOM.findDOMNode(this);
		this.particles= [];
		this.initCanvas();
	},

	initCanvas: function () {
		var domElement = ReactDOM.findDOMNode(this.refs.canvas);

		this.camera = new THREE.PerspectiveCamera(80, (this.container.clientWidth - 30) / this.container.clientHeight, 1, 4000 );
		this.camera.position.z = 1000;

		this.scene = new THREE.Scene();
		this.scene.add(this.camera);

		this.renderer = new THREE.WebGLRenderer( { alpha: true } );
		this.renderer.setSize( this.container.clientWidth - 30, this.container.clientHeight );
		domElement.appendChild( this.renderer.domElement );
		this.makeParticles(); 

		setInterval(this.update, 1000/30); 
		window.addEventListener('resize', function(){
			this.camera.aspect = (this.container.clientWidth - 30) / this.container.clientHeight;
			this.camera.updateProjectionMatrix();
			this.renderer.setSize( this.container.clientWidth - 30, this.container.clientHeight );
		}.bind(this), true);
	},

	update: function() {
	  this.updateParticles();
	  this.renderer.render( this.scene, this.camera );
	},

 	particleRender: function( context ) {
	  
	  context.beginPath();
	  context.arc( 0, 0, 1, 0,  Math.PI * 2, true );
	  context.fill();
	},

	updateParticles: function () { 
	  for(var i=0; i<this.particles.length; i++) {

	    particle = this.particles[i]; 
	    particle.position.z +=  5;
	    if(particle.position.z > 1000) particle.position.z-= 2000; 

	  }
	},

	makeParticles: function() { 
	  
		var particle, material; 

		for ( var zpos= -1000; zpos < 1000; zpos+=20 ) {

			material = new THREE.ParticleBasicMaterial( { color: 0x525252, program: this.particleRender } );
			particle = new THREE.Particle(material);

			particle.position.x = Math.random() * 1000 - 500;
			particle.position.y = Math.random() * 1000 - 500;

			particle.position.z = zpos;

			particle.scale.x = particle.scale.y = 4;
			this.scene.add( particle );
			this.particles.push(particle); 
		}
	  
	},

	render: function() {
		return (
			<div className="description-canvas">
				<div id="canvas-container" ref={'canvas'}></div>
				<div id="description-container">
					<p className="description col-md-10 col-md-offset-1">{model.subtitle}</p>
					<p className="description col-md-10 col-md-offset-1">{model.description}</p>
				</div>
			</div>
		);
	}
});

module.exports = DescriptionCanvas;