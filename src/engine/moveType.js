const MoveType = Object.freeze({
    LATERAL: Symbol('LATERAL'),
    LATERAL_NONKILL: Symbol('LATERAL that cannot kill'),
    DIAGONAL: Symbol('DIAGONAL'),
    KNIGHT: Symbol('KNIGHT'),
    KILL: Symbol('kill')
});

export default MoveType;
