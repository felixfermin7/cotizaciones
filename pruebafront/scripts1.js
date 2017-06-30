var app = angular.module('app', []);
app.controller('AlumnosController', function ($scope) {
	$scope.alumnos = [{ "nombre": "Jossy", "telefono": "99735142", "curso": "tercero" },
	{ "nombre": "Chemo", "telefono": "4343222", "curso": "Primero" },
	{ "nombre": "nasser", "telefono": "1123323", "curso": "Segundo" },
	{ "nombre": "felix", "telefono": "1324324543", "curso": "quinto" }

	];


	$scope.Save = function () {

		$scope.alumnos.push({
			nombre: $scope.nuevoAlumno.nombre,
			telefono: $scope.nuevoAlumno.telefono,
			curso: $scope.nuevoAlumno.curso
		});
		$scope.nuevoAlumno.nombre = '';
		$scope.nuevoAlumno.telefono = '';
		$scope.nuevoAlumno.curso = '';

	};


});

