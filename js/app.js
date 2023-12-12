coords = [[-72.9108330291845,-36.47772599595986],[-72.9777779953026,-36.60220500976823],[-72.9811089457661,-36.5891169775425],[-72.95476589739702, -36.52585785883978],[-72.93515594468252,-36.53643401808719]]

let l = coords.length;

var geositio1 = document.querySelector('geositio1')
var geositio2 = document.querySelector('geositio2')
var geositio3 = document.querySelector('geositio3')
var geositio4 = document.querySelector('geositio4')
var geositio5 = document.querySelector('geositio5')

geositios = [geositio1, geositio2, geositio3, geositio4, geositio5]

for (let i = 0; i < 1; i++) {
    
    var pop = L.popup({
        closeOnclick: true
    }).setContent('some text')
    
    var marker = L.marker(coords[i]).addTo(map).bindPopup(pop)
    
    var tooltip = L.tooltip ({
        permanent: true
    }).setContent(rent[i]);

    marker.bindTooltip(tooltip);
    
    geositios[i].addEventListener("mouseover", ()=> {
        map.flyTo(coords[i], 12);
    })


}
