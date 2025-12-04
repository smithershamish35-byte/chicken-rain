player.onChat("chicken", function () {
    mobs.spawn(CHICKEN, pos(0, 10, 0))
    for (let index = 0; index < 100; index++) {
        mobs.spawn(CHICKEN, pos(0, 10, 0))
    }
})
