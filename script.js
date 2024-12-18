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

    world.gravity.y = 9.81

    new Tiles([
            "........................................",
            "........................................",
            "xx......................................",
            "..xx....................................",
            "....xx..................................",
            "......xxx...............................",
            ".........xx.............................",
            "...........xx...........................",
            ".............xx.........................",
            ".............x.xxx......................",
            "..............x...xx................x...",
            "..............x.....xx...........x..x...",
            "...............x......xxxxxxxxxxx...x...",
            "...............x....................x...",
            "................x..................xx...",
            ".................x...............xx.....",
            ".................x............xxx.......",
            "..................x.......xxxx..........",
            "..................x...xxxx..............",
            "...................xxx..................",
            "........................................",
            "........................................",
            "........................................",
            "........................................",
        ],
    0,
    0,
    tileSize,
    tileSize
    )

    for (let i = 0; i < 100; i++){
        let particle = new particles.Sprite()
        particle.x = 0
        particle.y = 0
    }
}

function draw(){
    clear()
    background(255)
    walls.draw()
    particles.draw()
}
