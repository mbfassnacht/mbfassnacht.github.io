require('styles/components/DescriptionCanvas/descriptionCanvas.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import * as THREE from 'three';
import Avatar from '../Avatar/avatar';

var model = require('./descriptionCanvas-model');

class DescriptionCanvas extends React.Component {

	componentDidMount() {
		this.container = ReactDOM.findDOMNode(this);
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
		this.mouseX = 0;
		this.mouseY = 0;
		this.windowHalfX = window.innerWidth / 2;
		this.windowHalfY = window.innerHeight / 2;
		this.init();
		this.animate();

	}

	init() {
		this.camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 2, 2000 );
		this.camera.position.z = 1000;
		this.scene = new THREE.Scene();
		this.scene.fog = new THREE.FogExp2( 0x000000, 0.001 );
		this.geometry = new THREE.Geometry();
		this.sprite = new THREE.TextureLoader().load( "../images/disc.png" );
		for ( var i = 0; i < 10000; i ++ ) {
			var vertex = new THREE.Vector3();
			vertex.x = 2000 * Math.random() - 1000;
			vertex.y = 2000 * Math.random() - 1000;
			vertex.z = 2000 * Math.random() - 1000;
			this.geometry.vertices.push( vertex );
		}
		this.material = new THREE.PointsMaterial( { size: 35, sizeAttenuation: false, map: this.sprite, alphaTest: 0.5, transparent: true } );
		this.material.color.setHSL( 1.0, 0.3, 0.7 );
		this.particles = new THREE.Points( this.geometry, this.material );
		this.scene.add( this.particles );
		//
		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setPixelRatio( window.devicePixelRatio );
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		this.container.appendChild( this.renderer.domElement );

		document.addEventListener( 'mousemove', this.onDocumentMouseMove.bind(this), false );
		document.addEventListener( 'touchstart', this.onDocumentTouchStart.bind(this), false );
		document.addEventListener( 'touchmove', this.onDocumentTouchMove.bind(this), false );
		window.addEventListener( 'resize', this.onWindowResize.bind(this), false );
	}
	onWindowResize() {
		this.windowHalfX = window.innerWidth / 2;
		this.windowHalfY = window.innerHeight / 2;
		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize( window.innerWidth, window.innerHeight );
	}

	onDocumentMouseMove( event ) {
		this.mouseX = event.clientX - this.windowHalfX;
		this.mouseY = event.clientY - this.windowHalfY;
	}

 	onDocumentTouchStart( event ) {
		if ( event.touches.length == 1 ) {
			event.preventDefault();
			this.mouseX = event.touches[ 0 ].pageX - this.windowHalfX;
			this.mouseY = event.touches[ 0 ].pageY - this.windowHalfY;
		}
	}

	onDocumentTouchMove( event ) {
		if ( event.touches.length == 1 ) {
			event.preventDefault();
			this.mouseX = event.touches[ 0 ].pageX - this.windowHalfX;
			this.mouseY = event.touches[ 0 ].pageY - this.windowHalfY;
		}
	}

	animate() {
		requestAnimationFrame( this.animate.bind(this) );
		this.renderCanvas();
	}

	renderCanvas() {
		var time = Date.now() * 0.00005;
		this.camera.position.x += ( this.mouseX - this.camera.position.x ) * 0.05;
		this.camera.position.y += ( - this.mouseY - this.camera.position.y ) * 0.05;
		this.camera.lookAt( this.scene.position );
		var h = ( 360 * ( 1.0 + time ) % 360 ) / 360;
		this.material.color.setHSL( h, 0.5, 0.5 );
		this.renderer.render( this.scene, this.camera );
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
