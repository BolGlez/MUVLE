AFRAME.registerComponent('info-panel', { // Se genera un nuevo componente para la interfaz
  init: function () { // Se le otorgan funciones al componente
    this.infoButton = this.el.children[0]; // El primer hijo del padre que contenga info-panel se designa como infoButton (botón de información)
    this.infoPanel = this.el.children[1]; // El segundo hijo del padre que contenga info-panel se designa como infoPanel (panel de información)
    this.onInfoButtonClick = this.onInfoButtonClick.bind(this);

    this.infoButton.addEventListener('click', this.onInfoButtonClick) // Detección de click 
  },

  onInfoButtonClick: function () {
    this.infoPanel.object3D.visible = !this.infoPanel.object3D.visible; // Invierte el estado, si está en false (invisible), al hacer click se vuelve true (visible)
  }
});