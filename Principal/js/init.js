(function($){
  $(function(){

    $('.sidenav').sidenav();
    
    $(document).ready(function(){
      $('.datepicker').datepicker();
    });

    $(document).ready(function(){
      $('select').formSelect();
    });
    $(document).ready(function(){
      $('input.autocomplete').autocomplete({
        data: {
          "Aguascalientes": 'https://i.ibb.co/N2gQRZk/ags.jpg',
          "Baja California Norte": 'https://i.ibb.co/3YPgNv4/BCN.jpg',
          "Baja California Sur": 'https://i.ibb.co/y86xtBR/BCS.png',
          "Campeche":'https://i.ibb.co/k15GW4z/Campeche.jpg',
          "Chiapas": 'https://i.ibb.co/G2LCbVY/Chiapas.jpg',
          "Chihuahua": 'https://i.ibb.co/18S7rnB/Chihuahua.png',
          "Ciudad de México": 'https://i.ibb.co/K9VyjB5/CDMX.png',
          "Coahuila": 'https://i.ibb.co/VS0Wd7t/Coahuila.jpg',
          "Colima": 'https://i.ibb.co/pPkN3fJ/colima.jpg',
          "Durango": 'https://i.ibb.co/kXwpJ6V/durango.png',
          "Estado de México": 'https://i.ibb.co/TLFgxBM/EDOMEX.png',
          "Guanajuato": 'https://i.ibb.co/Kq5qfDm/Guanajuato.png',
          "Guerrero": 'https://i.ibb.co/Kwt81p8/guerrero.jpg',
          "Hidalgo": 'https://i.ibb.co/YLVmjR7/Hidalgo.png',
          "Jalisco": 'https://i.ibb.co/wJXy4Jv/Jalisco.png',
          "Michoacán": 'https://i.ibb.co/qrMt6PZ/Mich.jpg',
          "Morelos": 'https://i.ibb.co/XbmCvL1/Morelos.png',
          "Nayarit": 'https://i.ibb.co/RNjnFJQ/Nayarit.jpg',
          "Nuevo León": 'https://i.ibb.co/P4ZxFJS/NL.png',
          "Oaxaca": 'https://i.ibb.co/dPJnPB9/Oaxaca.png',
          "Puebla": 'https://i.ibb.co/yd80Gtd/Puebla.png',
          "Querétaro": 'https://i.ibb.co/MRjSJTZ/Queretaro.jpg',
          "Quintana Roo": 'https://i.ibb.co/4mFnJBq/QRO.jpg',
          "San Luis Potosí": 'https://i.ibb.co/XC5pt20/SLP.jpg',
          "Sinaloa": 'https://i.ibb.co/fQCxd5K/Sinaloa.png',
          "Sonora": 'https://i.ibb.co/t8nj5Fk/Sonora.png',
          "Tabasco": 'https://i.ibb.co/25ghFgS/Tabasco.png',
          "Tamaulipas": 'https://i.ibb.co/kBJxL0j/Tamaulipas.png',
          "Tlaxcala": 'https://i.ibb.co/hgLwqnN/Tlaxcala.jpg',
          "Veracruz": 'https://i.ibb.co/jhmD0mY/Veracruz.png',
          "Yucatán": 'https://i.ibb.co/nf3XKGg/Yucatan.png',
          "Zacatecas": 'https://i.ibb.co/gdds3q2/Zacatecas.png'
        },
        limit: 10,
      });
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space