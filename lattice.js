// lattice.js — 3D построитель кристаллических решёток

var _latticeScene = null, _latticeCamera = null, _latticeRenderer = null, _latticeControls = null, _latticeAnimId = null, _latticeMeshes = [];

var LATTICE_DB = {
  'NaCl': {
    name: 'Хлорид натрия (NaCl)', type: 'Ионная', system: 'ГЦК',
    desc: 'Ионная решётка. Каждый Na⁺ окружён 6 Cl⁻, координационное число 6.',
    ions: [
      { el:'Na', charge:'+', color:0x4f46e5, radius:0.28, pos:'fcc' },
      { el:'Cl', charge:'-', color:0x10b981, radius:0.42, pos:'octa' }
    ]
  },
  'CsCl': {
    name: 'Хлорид цезия (CsCl)', type: 'Ионная', system: 'Примитивная кубическая',
    desc: 'Cs⁺ в центре куба, 8 Cl⁻ по вершинам. Координационное число 8.',
    ions: [
      { el:'Cs', charge:'+', color:0xf59e0b, radius:0.38, pos:[[0.5,0.5,0.5]] },
      { el:'Cl', charge:'-', color:0x10b981, radius:0.4, pos:'corners' }
    ]
  },
  'diamond': {
    name: 'Алмаз (C)', type: 'Атомная', system: 'Тетраэдрическая',
    desc: 'Каждый атом C связан с 4 другими ковалентными связями. Очень прочный.',
    ions: [ { el:'C', charge:'', color:0x334155, radius:0.22, pos:'diamond' } ]
  },
  'graphite': {
    name: 'Графит (C)', type: 'Атомная', system: 'Слоистая гексагональная',
    desc: 'Слои гексагональной сетки. Между слоями — слабые силы. Мягкий, проводит ток.',
    ions: [ { el:'C', charge:'', color:0x475569, radius:0.18, pos:'graphite' } ]
  },
  'Cu': {
    name: 'Медь (Cu)', type: 'Металлическая', system: 'ГЦК',
    desc: 'Атомы в узлах ГЦК, валентные электроны обобществлены. Ковкая, проводит ток.',
    ions: [ { el:'Cu', charge:'', color:0xea580c, radius:0.32, pos:'fcc' } ]
  },
  'Fe': {
    name: 'Железо (Fe)', type: 'Металлическая', system: 'ОЦК',
    desc: 'ОЦК: атомы в вершинах куба и один в центре. Прочное, магнитное.',
    ions: [ { el:'Fe', charge:'', color:0x71717a, radius:0.3, pos:'bcc' } ]
  },
  'CO2': {
    name: 'Углекислый газ (CO2)', type: 'Молекулярная', system: 'Молекулярная',
    desc: 'Молекулярная решётка. Слабые межмолекулярные связи, легко плавится.',
    ions: [ { el:'CO2', charge:'', color:0x64748b, radius:0.3, pos:'simple' } ]
  },
  'SiO2': {
    name: 'Оксид кремния (SiO2)', type: 'Атомная', system: 'Тетраэдрическая',
    desc: 'Атомная решётка. Каждый Si связан с 4 O. Кварц, песок.',
    ions: [
      { el:'Si', charge:'', color:0xd4a373, radius:0.3, pos:'silica-si' },
      { el:'O',  charge:'', color:0xef4444, radius:0.2, pos:'silica-o' }
    ]
  }
};

function posFCC(){
  var p = [];
  for(var x=0;x<=1;x++) for(var y=0;y<=1;y++) for(var z=0;z<=1;z++) p.push([x,y,z]);
  p.push([0.5,0.5,0],[0.5,0.5,1],[0.5,0,0.5],[0.5,1,0.5],[0,0.5,0.5],[1,0.5,0.5]);
  return p;
}
function posOcta(){
  return [[0.5,0,0],[0.5,1,0],[0.5,0,1],[0.5,1,1],[0,0.5,0],[1,0.5,0],[0,0.5,1],[1,0.5,1],[0,0,0.5],[1,0,0.5],[0,1,0.5],[1,1,0.5],[0.5,0.5,0.5]];
}
function posCorners(){
  var p = [];
  for(var x=0;x<=1;x++) for(var y=0;y<=1;y++) for(var z=0;z<=1;z++) p.push([x,y,z]);
  return p;
}
function posBCC(){
  var p = posCorners();
  p.push([0.5,0.5,0.5]);
  return p;
}
function posDiamond(){
  var p = posFCC();
  var off = [0.25,0.25,0.25];
  posFCC().forEach(function(q){ p.push([q[0]+off[0], q[1]+off[1], q[2]+off[2]]); });
  return p;
}
function posGraphite(){
  var p = [], a = 0.55;
  for(var i=0;i<3;i++) for(var j=0;j<3;j++){
    var x = i*a + (j%2)*(a/2);
    var y = j*a*0.866;
    p.push([x,y,0]);
    p.push([x+a/2, y+a*0.288, 0]);
  }
  for(var i2=0;i2<3;i2++) for(var j2=0;j2<3;j2++){
    var x2 = i2*a + (j2%2)*(a/2) + a/2;
    var y2 = j2*a*0.866;
    p.push([x2, y2, 0.8]);
  }
  return p;
}
function posSimple(){
  var p = [];
  for(var x=0;x<2;x++) for(var y=0;y<2;y++) for(var z=0;z<2;z++) p.push([x*1.5,y*1.5,z*1.5]);
  return p;
}
function posSilicaSi(){
  return [[0,0,0],[1,0.5,0.5],[0.5,1,0.5],[0.5,0.5,1]];
}
function posSilicaO(){
  var si = posSilicaSi(), o = [];
  si.forEach(function(s){
    o.push([s[0]+0.3, s[1]+0.3, s[2]+0.3]);
    o.push([s[0]-0.3, s[1]-0.3, s[2]+0.3]);
    o.push([s[0]+0.3, s[1]-0.3, s[2]-0.3]);
    o.push([s[0]-0.3, s[1]+0.3, s[2]-0.3]);
  });
  return o;
}

function getLatticePositions(name){
  switch(name){
    case 'fcc': return posFCC();
    case 'octa': return posOcta();
    case 'corners': return posCorners();
    case 'bcc': return posBCC();
    case 'diamond': return posDiamond();
    case 'graphite': return posGraphite();
    case 'simple': return posSimple();
    case 'silica-si': return posSilicaSi();
    case 'silica-o': return posSilicaO();
  }
  return [];
}

function findLattice(query){
  var q = query.trim().toLowerCase();
  if(LATTICE_DB[query]) return LATTICE_DB[query];
  for(var key in LATTICE_DB){
    if(key.toLowerCase() === q) return LATTICE_DB[key];
    if(LATTICE_DB[key].name.toLowerCase().indexOf(q) !== -1) return LATTICE_DB[key];
  }
  // попробуем сопоставить по элементам
  if(q.indexOf('nacl')!==-1 || q.indexOf('поварен')!==-1) return LATTICE_DB['NaCl'];
  if(q.indexOf('cscl')!==-1) return LATTICE_DB['CsCl'];
  if(q.indexOf('алмаз')!==-1 || q.indexOf('diamond')!==-1) return LATTICE_DB['diamond'];
  if(q.indexOf('графит')!==-1) return LATTICE_DB['graphite'];
  if(q.indexOf('медь')!==-1 || q === 'cu') return LATTICE_DB['Cu'];
  if(q.indexOf('желез')!==-1 || q === 'fe') return LATTICE_DB['Fe'];
  if(q.indexOf('кварц')!==-1 || q.indexOf('кремнез')!==-1 || q === 'sio2') return LATTICE_DB['SiO2'];
  if(q === 'co2' || q.indexOf('углекисл')!==-1) return LATTICE_DB['CO2'];
  return null;
}

function buildLattice(containerId, substance){
  var data = findLattice(substance);
  if(!data) return {error:'Не нашёл решётку для «'+substance+'». Доступно: NaCl, CsCl, алмаз, графит, Cu, Fe, SiO2, CO2'};

  var container = document.getElementById(containerId);
  if(!container) return {error:'Не найден контейнер '+containerId};

  // Очистка предыдущей сцены
  destroyLattice();
  container.innerHTML = '';

  var THREE = window.THREE;
  if(!THREE) return {error:'Не загружена библиотека Three.js. Подключи её в <head>.'};

  var w = container.clientWidth || 500;
  var h = container.clientHeight || 400;

  _latticeScene = new THREE.Scene();
  _latticeScene.background = new THREE.Color(0xf8fafc);

  _latticeCamera = new THREE.PerspectiveCamera(50, w/h, 0.1, 1000);
  _latticeCamera.position.set(3.5, 2.5, 4);

  _latticeRenderer = new THREE.WebGLRenderer({antialias:true});
  _latticeRenderer.setSize(w, h);
  _latticeRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(_latticeRenderer.domElement);

  _latticeControls = new THREE.OrbitControls(_latticeCamera, _latticeRenderer.domElement);
  _latticeControls.enableDamping = true;
  _latticeControls.dampingFactor = 0.08;
  _latticeControls.autoRotate = true;
  _latticeControls.autoRotateSpeed = 1.5;

  _latticeScene.add(new THREE.AmbientLight(0xffffff, 0.7));
  var d1 = new THREE.DirectionalLight(0xffffff, 1.1);
  d1.position.set(5,10,7);
  _latticeScene.add(d1);
  var d2 = new THREE.PointLight(0x06b6d4, 0.5);
  d2.position.set(-5,-3,-5);
  _latticeScene.add(d2);

  // Считаем общий центр
  var allPos = [];
  data.ions.forEach(function(ion){
    var positions = Array.isArray(ion.pos) ? ion.pos : getLatticePositions(ion.pos);
    allPos = allPos.concat(positions);
  });
  var cx=0, cy=0, cz=0;
  allPos.forEach(function(p){ cx+=p[0]; cy+=p[1]; cz+=p[2]; });
  cx/=allPos.length; cy/=allPos.length; cz/=allPos.length;

  // Добавляем сферы
  data.ions.forEach(function(ion){
    var positions = Array.isArray(ion.pos) ? ion.pos : getLatticePositions(ion.pos);
    positions.forEach(function(pos){
      var geo = new THREE.SphereGeometry(ion.radius, 32, 32);
      var mat = new THREE.MeshStandardMaterial({
        color: ion.color,
        roughness: 0.35,
        metalness: 0.15,
        emissive: ion.color,
        emissiveIntensity: 0.08
      });
      var sphere = new THREE.Mesh(geo, mat);
      sphere.position.set(pos[0]-cx, pos[1]-cy, pos[2]-cz);
      _latticeScene.add(sphere);
      _latticeMeshes.push(sphere);
    });
  });

  // Связи для не-ионных решёток
  if(data.type !== 'Ионная'){
    var allAtoms = [];
    data.ions.forEach(function(ion){
      var positions = Array.isArray(ion.pos) ? ion.pos : getLatticePositions(ion.pos);
      positions.forEach(function(p){ allAtoms.push([p[0]-cx, p[1]-cy, p[2]-cz]); });
    });
    var lineMat = new THREE.LineBasicMaterial({color:0x94a3b8, transparent:true, opacity:0.5});
    for(var a=0;a<allAtoms.length;a++){
      for(var b=a+1;b<allAtoms.length;b++){
        var dx=allAtoms[a][0]-allAtoms[b][0], dy=allAtoms[a][1]-allAtoms[b][1], dz=allAtoms[a][2]-allAtoms[b][2];
        var dist = Math.sqrt(dx*dx+dy*dy+dz*dz);
        if(dist < 1.1 && dist > 0.05){
          var g = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(allAtoms[a][0], allAtoms[a][1], allAtoms[a][2]),
            new THREE.Vector3(allAtoms[b][0], allAtoms[b][1], allAtoms[b][2])
          ]);
          var line = new THREE.Line(g, lineMat);
          _latticeScene.add(line);
          _latticeMeshes.push(line);
        }
      }
    }
  }

  // Рамка ячейки
  var boxSize = 2;
  var boxGeo = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
  var edges = new THREE.EdgesGeometry(boxGeo);
  var boxLine = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color:0x94a3b8, transparent:true, opacity:0.4}));
  boxLine.position.set(-cx+0.5, -cy+0.5, -cz+0.5);
  _latticeScene.add(boxLine);
  _latticeMeshes.push(boxLine);

  function animate(){
    _latticeAnimId = requestAnimationFrame(animate);
    if(_latticeControls) _latticeControls.update();
    if(_latticeRenderer && _latticeScene && _latticeCamera) _latticeRenderer.render(_latticeScene, _latticeCamera);
  }
  animate();

  return {success:true, data:data};
}

function destroyLattice(){
  if(_latticeAnimId){ cancelAnimationFrame(_latticeAnimId); _latticeAnimId = null; }
  _latticeMeshes.forEach(function(m){
    if(m.geometry) m.geometry.dispose();
    if(m.material) m.material.dispose();
  });
  _latticeMeshes = [];
  if(_latticeRenderer){ _latticeRenderer.dispose(); _latticeRenderer = null; }
  _latticeScene = null; _latticeCamera = null; _latticeControls = null;
}
