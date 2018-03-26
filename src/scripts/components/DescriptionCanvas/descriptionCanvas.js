require('styles/components/DescriptionCanvas/descriptionCanvas.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import {PerspectiveCamera, WebGLRenderer, Scene, Texture, MeshBasicMaterial, Particle} from 'three';
import Avatar from '../Avatar/avatar';

var model = require('./descriptionCanvas-model');

class DescriptionCanvas extends React.Component {

	componentDidMount() {
		this.container = ReactDOM.findDOMNode(this);
		this.particles= [];
		this.initCanvas();
		this.scrollListener = this.onScroll.bind(this);
		window.addEventListener('scroll', this.scrollListener, true);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.scrollListener, true);
	}

	onScroll() {
		this.refs.avatar.animateImage(window.scrollY);
	}

	initCanvas () {
		var domElement = ReactDOM.findDOMNode(this.refs.canvas);
		this.camera = new PerspectiveCamera(80, (this.container.clientWidth - 30) / this.container.clientHeight, 1, 4000 );
		this.camera.position.z = 1000;

		this.scene = new Scene();
		this.scene.add(this.camera);

		this.renderer = new WebGLRenderer( { antialias: true } );
		this.renderer.setSize( this.container.clientWidth - 30, this.container.clientHeight );
		domElement.appendChild( this.renderer.domElement );
		this.makeParticles();

		setInterval(this.update.bind(this), 1000/30);
		window.addEventListener('resize', function(){
			this.camera.aspect = (this.container.clientWidth - 30) / this.container.clientHeight;
			this.camera.updateProjectionMatrix();
			this.renderer.setSize( this.container.clientWidth - 30, this.container.clientHeight );
		}.bind(this), true);
	}

	update() {
	  this.updateParticles();
	  this.renderer.render( this.scene, this.camera );
	}

 	particleRender( context ) {

	  context.beginPath();
	  context.arc( 0, 0, 1, 0,  Math.PI * 2, true );
	  context.fill();
	}

	updateParticles () {
		var particle;
		for(var i=0; i<this.particles.length; i++) {

			particle = this.particles[i];
			particle.position.z +=  5;
			if(particle.position.z > 1000) particle.position.z-= 2000;

		}
	}

	makeParticles() {
		var particle, material;

	   	var texture = new Texture();
    	texture.needsUpdate = true;

		for ( var zpos= -1000; zpos < 1000; zpos+=10 ) {

			material = new MeshBasicMaterial( { color: 0xffffff, program: this.particleRender, opacity: 0.5 } );
    		particle = new Particle(material);

			particle.position.x = Math.random() * 1000 - 500;
			particle.position.y = Math.random() * 1000 - 500;
			particle.position.z = zpos;
			particle.scale.x = particle.scale.y = 4;

			this.scene.add(particle);
			this.particles.push(particle);
		}

	}

	render() {
		return (
			<div className="description-canvas">
				<div id="canvas-container" ref={'canvas'}></div>
				<div className="description-container">
					<Avatar ref={'avatar'}></Avatar>
					<p className="title">{model.title}</p>
					<p className="sub-title">{model.subtitle}</p>
					<p className="description">{model.description}</p>
				</div>
			</div>
		);
	}
}

DescriptionCanvas.defaultProps = {

};

export default DescriptionCanvas;
