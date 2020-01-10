

var circles=[];

function onKeyDown(event){
    if (keyData[event.key]){
    var maxPoint = new Point (view.size.width, view.size.height);
    var ranPoint = Point.random();
    var point = maxPoint * ranPoint;
    var newCircle = new Path.Circle(point, 10);
    newCircle.fillColor = keyData[event.key].color;
    keyData[event.key].sound.play();
    circles.push(newCircle);
    }
}
function onFrame(event){
    for(var i = 0; i < circles.length; i++){
        circles[i].fillColor.hue += 1;
        circles[i].scale(.98);
    }
}




 
var keyData = {

    q: {
    sound: new Howl({
      src: ['Assets/Sounds/bubbles.mp3']
    }),
    color: '#1abc9c'
    },
    w: {
    sound: new Howl({
      src: ['Assets/Sounds/clay.mp3']
    }),
    color: '#2ecc71'
    },
    e: {
    sound: new Howl({
      src: ['Assets/Sounds/confetti.mp3']
    }),
    color: '#3498db'
    },
    r: {
    sound: new Howl({
      src: ['Assets/Sounds/corona.mp3']
    }),
    color: '#9b59b6'
    },
    t: {
    sound: new Howl({
      src: ['Assets/Sounds/dotted-spiral.mp3']
    }),
    color: '#34495e'
    },
    y: {
    sound: new Howl({
      src: ['Assets/Sounds/flash-1.mp3']
    }),
    color: '#16a085'
    },
    u: {
    sound: new Howl({
      src: ['Assets/Sounds/flash-2.mp3']
    }),
    color: '#27ae60'
    },
    i: {
    sound: new Howl({
      src: ['Assets/Sounds/flash-3.mp3']
    }),
    color: '#2980b9'
    },
    o: {
    sound: new Howl({
    src: ['Assets/Sounds/glimmer.mp3']
    }),
    color: '#8e44ad'
    },
    p: {
    sound: new Howl({
      src: ['Assets/Sounds/moon.mp3']
    }),
    color: '#2c3e50'
    },
    a: {
    sound: new Howl({
      src: ['Assets/Sounds/pinwheel.mp3']
    }),
    color: '#f1c40f'
    },
    s: {
    sound: new Howl({
      src: ['Assets/Sounds/piston-1.mp3']
    }),
    color: '#e67e22'
    },
    d: {
    sound: new Howl({
      src: ['Assets/Sounds/piston-2.mp3']
    }),
    color: '#e74c3c'
    },
    f: {
    sound: new Howl({
      src: ['Assets/Sounds/prism-1.mp3']
    }),
    color: '#95a5a6'
    },
    g: {
    sound: new Howl({
      src: ['Assets/Sounds/prism-2.mp3']
    }),
    color: '#f39c12'
    },
    h: {
    sound: new Howl({
      src: ['Assets/Sounds/prism-3.mp3']
    }),
    color: '#d35400'
    },
    j: {
    sound: new Howl({
      src: ['Assets/Sounds/splits.mp3']
    }),
    color: '#1abc9c'
    },
    k: {
    sound: new Howl({
      src: ['Assets/Sounds/squiggle.mp3']
    }),
    color: '#2ecc71'
    },
    l: {
    sound: new Howl({
      src: ['Assets/Sounds/strike.mp3']
    }),
    color: '#3498db'
    },
    z: {
    sound: new Howl({
      src: ['Assets/Sounds/suspension.mp3']
    }),
    color: '#9b59b6'
    },
    x: {
    sound: new Howl({
      src: ['Assets/Sounds/timer.mp3']
    }),
    color: '#34495e'
    },
    c: {
    sound: new Howl({
      src: ['Assets/Sounds/ufo.mp3']
    }),
    color: '#16a085'
    },
    v: {
    sound: new Howl({
      src: ['Assets/Sounds/veil.mp3']
    }),
    color: '#27ae60'
    },
    b: {
    sound: new Howl({
      src: ['Assets/Sounds/wipe.mp3']
    }),
    color: '#2980b9'
    },
    n: {
    sound: new Howl({
    src: ['Assets/Sounds/zig-zag.mp3']
    }),
    color: '#8e44ad'
    },
    m: {
    sound: new Howl({
      src: ['Assets/Sounds/moon.mp3']
    }),
    color: '#2c3e50'
    }
    }
















// var animatedCircle = new Path.Circle(new Point (300,300), 100);
// animatedCircle.fillColor = "red";
 // animatedCircle.fillColor.hue += 1;
    // animatedCircle.scale(.98);