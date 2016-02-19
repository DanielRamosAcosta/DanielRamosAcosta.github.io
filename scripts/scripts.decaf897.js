"use strict";angular.module("danielramosacostaApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","mgcrea.ngStrap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/career",{templateUrl:"views/career.html",controller:"CareerCtrl",controllerAs:"career"}).when("/practicas",{templateUrl:"views/practicas.html",controller:"PracticasCtrl",controllerAs:"practicas"}).otherwise({redirectTo:"/"})}]),angular.module("danielramosacostaApp").controller("MainCtrl",["$scope",function(a){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.edad=(new Date).getFullYear()-1995,console.log(a.edad)}]),angular.module("danielramosacostaApp").controller("CareerCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("danielramosacostaApp").controller("PracticasCtrl",["$scope",function(a){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.anios=[{nombre:"Segundo",asignaturas:[{nombre:"Algoritmos y estructuras de Datos Avanzados",practicas:[{nombre:"Práctica 1. Implementación de estructuras de datos",url:"https://github.com/DanielRamosAcosta/aeda/tree/master/Pr%C3%A1cticas/1"},{nombre:"Práctica 2. Implementación de tipos de datos numéricos",url:"https://github.com/DanielRamosAcosta/aeda/tree/master/Pr%C3%A1cticas/2"},{nombre:"Práctica 3. Implementación de plantillas, jerarquías y excepciones",url:"https://github.com/DanielRamosAcosta/aeda/tree/master/Pr%C3%A1cticas/3"},{nombre:"Práctica 4. Implementación de Tabla Hash",url:"https://github.com/DanielRamosAcosta/aeda/tree/master/Pr%C3%A1cticas/4"},{nombre:"Práctica 5. Ordenación",url:"https://github.com/DanielRamosAcosta/aeda/tree/master/Pr%C3%A1cticas/5"},{nombre:"Práctica 6. Árbol Binario de Búsqueda",url:"https://github.com/DanielRamosAcosta/aeda/tree/master/Pr%C3%A1cticas/6"},{nombre:"Práctica 7. AVL",url:"https://github.com/DanielRamosAcosta/aeda/tree/master/Pr%C3%A1cticas/7"}]},{nombre:"Sistemas Operativos",practicas:[{nombre:"Server Info",url:"https://github.com/DanielRamosAcosta/server-info"}]},{nombre:"Redes y Sistemas Distribuidos",practicas:[{nombre:"Implementar servidor FTP",url:"https://github.com/DanielRamosAcosta/simple-ftp"}]}]},{nombre:"Tercero",asignaturas:[{nombre:"Inteligencia Artificial",practicas:[{nombre:"Estrategias de búsqueda. Harry Potter y los Monstruos del Laberinto",url:"https://github.com/Rafaherrero/ia"}]},{nombre:"Lenguajes y Paradigmas de Programación",practicas:[{nombre:"Práctica 1. Sistema de control de versiones Git [GitHub, Bitbucket]. Entorno de desarrollo Cloud9",url:"https://github.com/DanielRamosAcosta/prct01"},{nombre:"Práctica 2. Compilación vs. Interpretación y ramificación con Git",url:"https://github.com/DanielRamosAcosta/LPP_29"},{nombre:"Práctica 3. Reorganización de ramas en Git",url:"https://github.com/DanielRamosAcosta/prct03"},{nombre:"Práctica 4. Primeros Pasos con Ruby",url:"https://github.com/DanielRamosAcosta/prct04"},{nombre:"Práctica 5. Pruebas Unitarias",url:"https://github.com/DanielRamosAcosta/prct05"},{nombre:"Práctica 6. Desarrollo Dirigido por Pruebas",url:"https://bitbucket.org/rafaherrero/lpp_29_6"},{nombre:"Práctica 7. Programación Orientada a Objetos",url:"https://bitbucket.org/DanielRamosAcosta/prct07"},{nombre:"Práctica 8. POO: Herencia",url:"https://bitbucket.org/DanielRamosAcosta/prtc08"},{nombre:"Práctica 10. POO: Módulos",url:"https://github.com/DanielRamosAcosta/prct09"},{nombre:"Práctica 10. Programación Funcional. Funciones de orden superior",url:"https://github.com/DanielRamosAcosta/prct10"},{nombre:"Práctica 11. Lenguajes de Dominio Específico (DSL)",url:"https://github.com/DanielRamosAcosta/prct11"}]},{nombre:"Sistemas de Interacción Persona Computador",practicas:[{nombre:"Práctica 1. Desarrollo de Landing Page",url:"https://github.com/DanielRamosAcosta/sipc-prct01"},{nombre:"Práctica 2. Bootstrap-AngularJS",url:"https://github.com/DanielRamosAcosta/sipc-prct02"},{nombre:"Práctica 3. NodeJS Firebase",url:"https://github.com/DanielRamosAcosta/sipc-prct03"},{nombre:"Proyecto DANCE",url:"https://github.com/DanielRamosAcosta/sipc-proyecto"}]}]}]}]),angular.module("danielramosacostaApp").run(["$templateCache",function(a){a.put("views/career.html",'<div class="row"> <div class="col-md-12"> <h1>TODO: Aquí faltan cosas</h1> </div> </div> <div class="row"> <div class="col-md-12"> <img src="http://placehold.it/350x150"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos cupiditate pariatur vitae nesciunt voluptatibus? Vel, quisquam quaerat ad. Soluta enim nam, harum at nesciunt aspernatur veniam animi voluptatum, similique quas.</p> </div> </div> <div class="row"> <div class="col-md-12"> <img src="http://placehold.it/350x150"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ad quasi magnam est cumque, eligendi sit laboriosam perferendis eius vel quam eum cum aliquid alias vero minus qui doloribus! Maxime!</p> </div> </div> <div class="row"> <div class="col-md-12"> <img src="http://placehold.it/350x150"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio error illum quod excepturi reprehenderit, dolorum dicta odit soluta suscipit accusantium aliquam dolor dolorem quam eius, officiis culpa praesentium deserunt officia?</p> </div> </div>'),a.put("views/main.html",'<div> <div class="row main-row"> <div class="col-sm-4"> <img src="images/me.64e38e08.jpg" class="img-responsive"> </div> <div class="col-sm-6"> <h1 class="title">Daniel Ramos <small>alu0100843095@ull.edu.es</small></h1> <hr> <h4>Estudiante de <b>Ingeniería Informática</b></h4> <p>Tengo {{edad}} años, y actualmente soy estudiante 3º del grado de Ingeniería Informática en la ESIT de la Universidad de La Laguna.</p> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam veniam sint ipsum exercitationem, culpa mollitia natus molestias, reiciendis. Deleniti nam nemo magnam, voluptatibus ipsam mollitia excepturi. Nemo mollitia quos assumenda.</p> </div> </div> <div class="row main-row"> <div class="col-sm-6"> <h1><span class="glyphicon glyphicon-education" aria-hidden="true"></span> Conocimientos</h1> <hr> <div class="row estrechame" style="padding: 15px"> <h3>Lenguajes</h3> <div class="col-xs-4 centrado"> <h4>C/C++</h4> <img src="images/cpplogo.996c13ec.png" alt="" class="img-responsive"> </div> <div class="col-xs-4 centrado"> <h4>Ruby</h4> <img src="images/ruby.51d2f30d.png" alt="" class="img-responsive"> </div> <div class="col-xs-4 centrado"> <h4>Javascript</h4> <img src="images/javascript.4e43daa6.svg" alt="" class="img-responsive" style="height:"> </div> </div> <div class="row estrechame"> <h3>Metodologías</h3> <div class="col-sm-12"> <p>DCU es maravilloso</p> </div> </div> </div> <div class="col-sm-6"> <h1><span class="glyphicon glyphicon-briefcase" aria-hidden="true"></span> Experiencia</h1> <hr> <ul class="ul-dates"> <li> <div class="dates"> <span>Presente</span> <span>2013</span> </div> <div class="content"> <h4>Humano Profesional</h4> <p><em>Mi casa</em>, Tenerife, España</p> </div> </li> <li> <div class="dates"> <span>2013</span> <span>2009</span> </div> <div class="content"> <h4>std::nullptr</h4> <p><em>what()</em>, null pointer exception</p> </div> </li> <li> <div class="dates"> <span>2008</span> <span>2007</span> </div> <div class="content"> <h4>error 500</h4> <p><em>error</em>, java.lang.nullpointerexception </p> </div> </li> </ul> </div> </div> <div class="row main-row"> <div class="col-md-12"> <h1><img src="images/github.1848dc09.svg" alt="" style="height: 24px; margin-bottom: 6px"> Proyectos destacables</h1> <hr> </div> </div> <div class="row"> <div class="col-sm-6 col-md-3"> <div class="thumbnail"> <div class="caption"> <h4>Estructuras de Datos</h4> <hr> <p>Un repositorio para mantener todas las estructuras de datos que hemos visto, desde vectores y pilas hasta árboles binarios y tablas hash.</p> <p><a href="https://github.com/DanielRamosAcosta/abstract-data-types" class="btn btn-default" role="button">Ver en Github</a></p> </div> </div> </div> <div class="col-sm-6 col-md-3"> <div class="thumbnail"> <div class="caption"> <h4>Algoritmos de ordenación</h4> <hr> <p>Aquí están distintos algoritmos de ordenación implementados sobre la clase vector de la librería estándar.</p> <p><a href="https://github.com/DanielRamosAcosta/sorting-algorithms" class="btn btn-default" role="button">Ver en Github</a></p> </div> </div> </div> <div class="col-sm-6 col-md-3"> <div class="thumbnail"> <div class="caption"> <h4>Algoritmos de búsqueda</h4> <hr> <p>Implementaciones de diversos algoritmos de búsqueda como DFS y BFS, y otros heurísticos como A*.</p> <p><a href="https://github.com/DanielRamosAcosta/pathfinder-algorithms" class="btn btn-default" role="button">Ver en Github</a></p> </div> </div> </div> <div class="col-sm-6 col-md-3"> <div class="thumbnail"> <div class="caption"> <h4>Proyecto DANCE</h4> <hr> <p>Una proyecto en grupo con <a href="https://github.com/Rafaherrero">Rafael Herrero</a> y <a href="https://github.com/AiramNavas">Airam Navas</a>. Es un reproductor web de música destinado a usar como librería la música que tengas en NAS o servidor personal implementado en Ruby on Rails.</p> <p><a href="https://github.com/DanielRamosAcosta/pathfinder-algorithms" class="btn btn-default" role="button">Ver en Github</a></p> </div> </div> </div> </div> </div>'),a.put("views/practicas.html",'<div class="row"> <div class="col-md-12"> <h1>Prácticas en la ULL</h1> </div> <div class="row"> <div class="col-md-12"> <ul class="anios"> <li ng-repeat="anio in anios"> <h2>{{anio.nombre}} <hr> <ul class="asignaturas"> <li ng-repeat="asignatura in anio.asignaturas"> <h3>{{asignatura.nombre}}</h3> <ul> <li ng-repeat="practica in asignatura.practicas"> <a href="{{practica.url}}">{{practica.nombre}}</a> </li> </ul> </li> </ul> </h2></li> </ul> </div> </div> </div>')}]);