class Box {
    constructor(x, y, w, h) {
        this.body = Bodies.rectangle(x,y,w,h,{isStatic : true})
        this.w = w
        this.h = h
        World.add(world,this.body)
    }
    show() {
        imageMode(CENTER)
        push()
        fill("brown")
        rect(this.body.position.x,this.body.position.y, this.w, this.h)
        pop()
    }
}
