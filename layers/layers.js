ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([22.345358, -23.559061, 39.023483, -13.885748]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_NationalProvincialboundaries_1 = new ol.format.GeoJSON();
var features_NationalProvincialboundaries_1 = format_NationalProvincialboundaries_1.readFeatures(json_NationalProvincialboundaries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_NationalProvincialboundaries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NationalProvincialboundaries_1.addFeatures(features_NationalProvincialboundaries_1);
var lyr_NationalProvincialboundaries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NationalProvincialboundaries_1, 
                style: style_NationalProvincialboundaries_1,
                popuplayertitle: 'National Provincial boundaries',
                interactive: false,
                title: '<img src="styles/legend/NationalProvincialboundaries_1.png" /> National Provincial boundaries'
            });
var format_GCFDistricts_2 = new ol.format.GeoJSON();
var features_GCFDistricts_2 = format_GCFDistricts_2.readFeatures(json_GCFDistricts_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GCFDistricts_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GCFDistricts_2.addFeatures(features_GCFDistricts_2);
var lyr_GCFDistricts_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GCFDistricts_2, 
                style: style_GCFDistricts_2,
                popuplayertitle: 'GCF Districts',
                interactive: false,
                title: '<img src="styles/legend/GCFDistricts_2.png" /> GCF Districts'
            });
var format_IrrigationSchemeSites_3 = new ol.format.GeoJSON();
var features_IrrigationSchemeSites_3 = format_IrrigationSchemeSites_3.readFeatures(json_IrrigationSchemeSites_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IrrigationSchemeSites_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IrrigationSchemeSites_3.addFeatures(features_IrrigationSchemeSites_3);
var lyr_IrrigationSchemeSites_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IrrigationSchemeSites_3, 
                style: style_IrrigationSchemeSites_3,
                popuplayertitle: 'Irrigation Scheme Sites',
                interactive: true,
    title: 'Irrigation Scheme Sites<br />\
    <img src="styles/legend/IrrigationSchemeSites_3_0.png" /> Completed<br />\
    <img src="styles/legend/IrrigationSchemeSites_3_1.png" /> Not started<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_NationalProvincialboundaries_1.setVisible(true);lyr_GCFDistricts_2.setVisible(true);lyr_IrrigationSchemeSites_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_NationalProvincialboundaries_1,lyr_GCFDistricts_2,lyr_IrrigationSchemeSites_3];
lyr_NationalProvincialboundaries_1.set('fieldAliases', {'ID': 'ID', 'PROVINCE_N': 'PROVINCE_N', 'AREA': 'AREA', 'POPULATION': 'POPULATION', 'POPU_M': 'POPU_M', 'POPU_F': 'POPU_F', 'PERIMETER': 'PERIMETER', });
lyr_GCFDistricts_2.set('fieldAliases', {'fid': 'fid', 'NAME1_': 'NAME1_', 'NAME2_': 'NAME2_', 'area': 'area', });
lyr_IrrigationSchemeSites_3.set('fieldAliases', {'fid': 'fid', 'Scheme': 'Scheme', 'Province': 'Province', 'District': 'District', 'Ward': 'Ward', 'Water_Sour': 'Water Source', 'Status': 'Status', 'Total_ha_': 'Total Area (Ha)', 'html_exp': 'Photos', 'scheme-sta': 'Civil works status', 'System': 'Irrigation system', 'Power Sour': 'Source of power', 'Bneficiari': 'Number of beneficiary households', 'report': 'Irrigation scheme report', });
lyr_NationalProvincialboundaries_1.set('fieldImages', {'ID': 'Hidden', 'PROVINCE_N': 'Hidden', 'AREA': 'Hidden', 'POPULATION': 'Hidden', 'POPU_M': 'TextEdit', 'POPU_F': 'TextEdit', 'PERIMETER': 'Hidden', });
lyr_GCFDistricts_2.set('fieldImages', {'fid': 'Hidden', 'NAME1_': 'Hidden', 'NAME2_': 'Hidden', 'area': 'TextEdit', });
lyr_IrrigationSchemeSites_3.set('fieldImages', {'fid': 'Hidden', 'Scheme': 'TextEdit', 'Province': 'TextEdit', 'District': 'TextEdit', 'Ward': 'Hidden', 'Water_Sour': 'TextEdit', 'Status': 'Hidden', 'Total_ha_': 'TextEdit', 'html_exp': 'ExternalResource', 'scheme-sta': 'TextEdit', 'System': 'TextEdit', 'Power Sour': 'TextEdit', 'Bneficiari': 'TextEdit', 'report': 'TextEdit', });
lyr_NationalProvincialboundaries_1.set('fieldLabels', {'POPU_M': 'hidden field', 'POPU_F': 'hidden field', });
lyr_GCFDistricts_2.set('fieldLabels', {'area': 'hidden field', });
lyr_IrrigationSchemeSites_3.set('fieldLabels', {'Scheme': 'header label - visible with data', 'Province': 'header label - visible with data', 'District': 'header label - visible with data', 'Water_Sour': 'header label - visible with data', 'Total_ha_': 'header label - visible with data', 'html_exp': 'header label - visible with data', 'scheme-sta': 'header label - visible with data', 'System': 'header label - visible with data', 'Power Sour': 'header label - visible with data', 'Bneficiari': 'header label - always visible', 'report': 'header label - visible with data', });
lyr_IrrigationSchemeSites_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});