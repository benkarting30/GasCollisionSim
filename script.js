let walls, particles
const tileSize = 30
function setup(){
    createCanvas(windowWidth, windowHeight)
    walls = new Group()
    walls.h = tileSize
    walls.w = tileSize
    walls.tile = "x"
    walls.color = 'red'
    walls.collider = 's'

    particles = new Group()
    particles.radius = 5
    particles.collider = 'd'


    new Tiles([
            "xxxxxxxxxxxxxxx",
            "x.............x",
            "x.............x",
            "x.............x",
            "x.............x",
            "x.............x",
            "x.............x",
            "x.............x",
            "x.............x",
            "x.............x",
            "x.............x",
            "x.............x",
            "x.............x",
            "xxxxxxxxxxxxxxx"
        ],
    0,
    0,
    tileSize,
    tileSize
    )

    for (let i = 0; i < 100; i++){
        let particle = new particles.Sprite()
        particle.x = floor(random(30, 30*14))
        particle.y = floor(random(30, 30*13))
        particle.speed = random(0,5)
    }
}

function draw(){
    clear()
    background(255)
    walls.draw()
    particles.draw()
}