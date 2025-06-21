ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([-2513121.786023, 7859869.745777, 3872494.251459, 10110243.972230]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DEPARTAMENTOSDELPERU_1 = new ol.format.GeoJSON();
var features_DEPARTAMENTOSDELPERU_1 = format_DEPARTAMENTOSDELPERU_1.readFeatures(json_DEPARTAMENTOSDELPERU_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_DEPARTAMENTOSDELPERU_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEPARTAMENTOSDELPERU_1.addFeatures(features_DEPARTAMENTOSDELPERU_1);
var lyr_DEPARTAMENTOSDELPERU_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DEPARTAMENTOSDELPERU_1, 
                style: style_DEPARTAMENTOSDELPERU_1,
                popuplayertitle: 'DEPARTAMENTOS DEL PERU',
                interactive: true,
                title: '<img src="styles/legend/DEPARTAMENTOSDELPERU_1.png" /> DEPARTAMENTOS DEL PERU'
            });

lyr_OSMStandard_0.setVisible(true);lyr_DEPARTAMENTOSDELPERU_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_DEPARTAMENTOSDELPERU_1];
lyr_DEPARTAMENTOSDELPERU_1.set('fieldAliases', {'fid': 'fid', 'NOMBDEP': 'Nombre del Departamento:', 'COUNT': 'N° de distritos del Departamento:', 'FIRST_IDDP': 'UBIGEO del departamento:', 'HECTARES': 'Superficie en "Ha":', 'DEPARTAMENTO': 'DEPARTAMENTO', '1995': '1995', '2000': '2000', '2005': '2005', '2010': '2010', '2015': '2015', '2017': '2017', 'ENLACES': 'Informacion del departamento:', 'Fotos': 'Fotos turisticas del departamento:', 'Videos': 'Video promocional del departamento:', });
lyr_DEPARTAMENTOSDELPERU_1.set('fieldImages', {'fid': 'Hidden', 'NOMBDEP': 'TextEdit', 'COUNT': 'TextEdit', 'FIRST_IDDP': 'TextEdit', 'HECTARES': 'TextEdit', 'DEPARTAMENTO': 'Hidden', '1995': 'Hidden', '2000': 'Hidden', '2005': 'Hidden', '2010': 'Hidden', '2015': 'Hidden', '2017': 'Hidden', 'ENLACES': 'TextEdit', 'Fotos': 'ExternalResource', 'Videos': 'TextEdit', });
lyr_DEPARTAMENTOSDELPERU_1.set('fieldLabels', {'fid': 'no label', 'NOMBDEP': 'header label - always visible', 'COUNT': 'header label - always visible', 'FIRST_IDDP': 'header label - always visible', 'HECTARES': 'header label - always visible', 'DEPARTAMENTO': 'no label', '1995': 'no label', '2000': 'no label', '2005': 'no label', '2010': 'no label', '2015': 'no label', '2017': 'no label', 'ENLACES': 'header label - always visible', 'Fotos': 'header label - always visible', 'Videos': 'header label - always visible', });
lyr_DEPARTAMENTOSDELPERU_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});