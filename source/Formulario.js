enyo.kind({
	name: "Formulario",
	components: [
		{
			kind: "onyx.RadioGroup", onActivate:"escolheuSexo", components: [
					{content: "Masculino", active: true},
					{content: "Feminino"}
			]
		},
		{
			tag: "br"
		},
		{kind: "onyx.Groupbox", components: [
					{kind: "onyx.GroupboxHeader", content: "Peso"},
					{kind: "onyx.InputDecorator", components: [
						{kind: "onyx.Input", name: "peso", style: "width: 100%", placeholder: "Seus kilos de verdade!"}
					]}
			]
		},
		{
			tag: "br"
		},
		{kind: "onyx.Groupbox", components: [
					{kind: "onyx.GroupboxHeader", content: "Altura"},
					{kind: "onyx.InputDecorator", components: [
						{kind: "onyx.Input", name: "altura", style: "width: 100%", placeholder: "Sua altura"}
					]}
			]
		},
		{
			tag: "br"
		},
		{kind: "onyx.Groupbox", components: [
					{kind: "onyx.GroupboxHeader", content: "Idade"},
					{kind: "onyx.InputDecorator", components: [
						{kind: "onyx.Input", name: "idade", style: "width: 100%", placeholder: "Não mintam na idade!"}
					]}
			]
		}
	],
	rendered: function() {
		this.inherited(arguments);
		this.sexo = "Masculino";
	},
	escolheuSexo: function(inSender, inEvent) {
		this.sexo = inEvent.originator.getContent();
	},
	calcularDesodorantesNecessarios: function() {
		var peso = this.$.peso.getValue();
		var idade = this.$.idade.getValue();
		var altura = this.$.altura.getValue();
		
		this.log(this.sexo);
		
		if (this.sexo === "Feminino") {
			var desodorantes = (altura * idade + 355) / (peso * 0.7)
		} else {
			var desodorantes = (altura * idade + 355) / (peso * 0.4) ;
		}
		
		return Math.floor(desodorantes);
	}
})