enyo.kind({
	name: "App",
	kind: "FittableRows",
	components: [
		{
			kind: "onyx.Toolbar",
			content: "Desodosero"
		},
		{
			kind: "Scroller",
			name: "main",
			classes: "centradinho",
			fit: true,
			components: [
				{
					kind: "Formulario",
					name: "formulario"
				}
			]
		},
		{
			kind: "onyx.Toolbar",
			components: [
				{
					kind: "onyx.Button",
					content: "Calcular",
					ontap: "calcularDesodorantes"
				},
				{
					kind: "onyx.Button",
					content: "Instalar",
					ontap: "instalar"
				}
				
			]
		}
	],
	calcularDesodorantes: function() {
		var quantos = this.$.formulario.calcularDesodorantesNecessarios();
		
		alert("Você vai precisar de " + quantos + " desodorantes!");
	},
	instalar: function() {
		var manifestUrl = window.location + '/manifest.webapp';
		var req = navigator.mozApps.installPackage(manifestUrl);
		req.onsuccess = function() {
			alert(this.result.origin);
		};
		req.onerror = function() {
			alert(this.error.name);
		};
	}
})