var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName("body")[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight,svg=d3.select("body").append("svg").attr({width:x,height:y}).style("background","#271d67");d3.select(window).on("resize",function(){x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight,svg.attr({width:x,height:y})});var projection=d3.geo.mercator().translate([x/2,y/2]).scale(750).center([30,40]),path=d3.geo.path().projection(projection);d3.json("d/world.json",function(t,e){if(t)return console.error(t);var n=topojson.feature(e,e.objects.worldsubunit);svg.selectAll(".country").data(n.features).enter().append("path").attr({d:path,fill:"#414081","class":function(t){return"country "+t.properties.NAME_LONG}}),d3.json("d/c_death.json",function(t,e){if(t)return console.error(t);console.log(),svg.selectAll(".originPin").data(e).enter().append("circle",".originPin").attr({r:function(t){return Math.sqrt(t.count)},fill:"#9093ff",opacity:function(t){return"NA"!=t.deathLat&&"NA"!=t.originLat?.2:0},transform:function(t){return"translate("+projection([t.originLng,t.originLat])+")"}}),travelPath=[];for(var n=0,r=e.length-1;r>n;n++)travelPath.push({type:"LineString",coordinates:[[e[n].originLng,e[n].originLat],[e[n].deathLng,e[n].deathLat]]});var i=svg.selectAll(".arc").data(travelPath);i.enter().append("path").attr({"class":"arc"}).style({fill:"none"}),i.attr({d:path}).style({stroke:"#5c64ed","stroke-width":"0.5px",opacity:"0.3"}),i.exit().remove(),svg.selectAll(".deathPin").data(e).enter().append("circle",".originPin").attr({r:function(t){return Math.sqrt(t.count)},fill:"#881722",stroke:"#FFF","stroke-width":"0.3",opacity:function(t){return"NA"!=t.deathLat&&"NA"!=t.originLat?.5:0},transform:function(t){return"translate("+projection([t.deathLng,t.deathLat])+")"}})})});