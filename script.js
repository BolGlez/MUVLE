AFRAME.registerComponent('info-panel', { // Se genera un componente personalizado llamado info-panel que podrá añadirse como propiedad a una entidad
  init: function () { // Se le otorgan funciones al componente
    this.infoButton = this.el.children[0]; // El primer hijo del padre que contenga info-panel se designa como infoButton (botón de información)
    this.infoPanel = this.el.children[1]; // El segundo hijo del padre que contenga info-panel se designa como infoPanel (panel de información)
    this.onInfoButtonClick = this.onInfoButtonClick.bind(this); 

    this.infoButton.addEventListener('click', this.onInfoButtonClick) // Añadimos a infoButton la función onInfoButtonClick escrita debajo para que detecte los click.
  },

  onInfoButtonClick: function () { // Asignamos a la función de detección de click el nombre de onInfoButtonClick
    this.infoPanel.object3D.visible = !this.infoPanel.object3D.visible; // Invierte el estado, si está en visible, al hacer click se vuelve invisible (lo que correspone a !this) y viceversa.
  }
});

AFRAME.registerComponent('sound-button', { // Se genera un componente personalizado llamado sound-button que podrá añadirse como propiedad a una entidad
  init: function () { // Se le otorgan funciones al componente
    this.infoSound = this.el.children[0]; // El primer hijo del padre que contenga sound-button se designa como infoSound (archivo de sonido)
    this.onSoundButtonClick = this.onSoundButtonClick.bind(this);
    this.el.addEventListener('click', this.onSoundButtonClick) // Añadimos a infoSound la función onSoundButtonClick escrita debajo para que detecte los click.
  },

  onSoundButtonClick: function () {
    this.infoSound.components.sound.playSound(); // En este caso, al detectar el click se reproduce el archivo de sonido que contendrá infoSound
  }
})